var pg = require('pg');
var _ = require('underscore-node');
var Promise = require("node-promise").Promise;
var connectionConfig = require('../config/connection-config');
var connectionString = process.env.DATABASE_URL || connectionConfig.getConnectionString();

exports.save = function(pageId, userId, contents){
  try{
    var results = [];
    var promise = new Promise();

    pg.connect(connectionString, function(err, client, done) {
        if(err) {
          processError(done, err);
        }

        client.query('UPDATE content set is_active = false where page_id = $1', [pageId]);

        client.query(buildBulkInsertStatement(pageId, userId, contents));

        var query = client.query("select c.* from content c join page p on c.page_id = p.id where p.is_active = true And c.is_active = true And c.page_id = $1 order by c.sort_order", [pageId]);
        // Stream results back one row at a time
        query.on('row', function(row) {
            results.push(row);
        });

        query.on('end', function() {
          var contentList = processQueryEnd(done, results);
          console.log('query on end');
          promise.resolve(contentList);
        });
    });
  }
  catch(ex){
    console.log('Exception running query with psql: ' + ex);
  }

  return promise;
}

var buildBulkInsertStatement = function(pageId, userId, rows) {
    var params = []
    var chunks = []
    _.each(rows, function(row){
        var valueClause = [];
        params.push(row.name);
        valueClause.push('$' + params.length);
        params.push(row.value);
        valueClause.push('$' + params.length);
        params.push(pageId);
        valueClause.push('$' + params.length);
        params.push(row.content_type_id);
        valueClause.push('$' + params.length);
        params.push(userId);
        valueClause.push('$' + params.length);
        params.push(row.sort_order);
        valueClause.push('$' + params.length);
        params.push(row.parent_index == "" ? null : row.parent_index);
        valueClause.push('$' + params.length);
        params.push(new Date());
        valueClause.push('$' + params.length);
        params.push(true);
        valueClause.push('$' + params.length);
        params.push(row.row_number == "" ? null : row.row_number);
        valueClause.push('$' + params.length);
        params.push(row.column_number == "" ? null : row.column_number);
        valueClause.push('$' + params.length);
        params.push(row.unique_identifier);
        valueClause.push('$' + params.length);
        chunks.push('(' + valueClause.join(', ') + ')');
    });
    return {
        text: 'INSERT INTO content(name, value, page_id, content_type_id, user_id, sort_order, parent_index, date_created, is_active, row_number, column_number, unique_identifier) VALUES ' +
            chunks.join(', '),
        values: params
    }
}

exports.get = function(pageId){
  var results = [];
  var promise = new Promise();

  try{
    pg.connect(connectionString, function(err, client, done) {
        if(err) {
          processError(done, err);
        }

        pageId = parseInt(pageId);
        var query = client.query("select c.* from content c join page p on c.page_id = p.id where p.is_active = true And c.is_active = true And c.page_id = $1 order by c.sort_order", [pageId]);
        // Stream results back one row at a time
        query.on('row', function(row) {
            results.push(row);
        });

        query.on('end', function() {
          var contentList = processQueryEnd(done, results);
          console.log('query on end');
          promise.resolve(contentList);
        });
    });
  }
  catch(ex){
    console.log('Exception running query with psql: ' + ex);
  }

  return promise;
}

var processQueryEnd = function(done, results){
  done();

  return results;
}

var processError = function(done, err){
  done();
  console.log(err);
  throw err;
}
