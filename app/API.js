import {_} from 'underscore';

class API {
  constructor() {

  }

  static getAllUsers(history) {
    var promise = $.Deferred();

    $.ajax({
        type: 'GET',
        url: '/api/users'
      })
        .done((data) => {
          promise.resolve(data);
        })
        .fail((jqXhr) => {
          promise.reject(this.onFail(jqXhr.responseJSON.message));
        });

    return promise.promise();
  }

  static getUser(userId, history) {
    var promise = $.Deferred();

    $.ajax({
        type: 'GET',
        url: '/api/users/' + userId
      })
        .done((data) => {
          promise.resolve(data);
        })
        .fail((jqXhr) => {
          promise.reject(this.onFail(jqXhr.responseJSON.message));
        });

    return promise.promise();
  }

  static saveUser(userViewmodel) {
    var promise = $.Deferred();

    $.ajax({
        type: 'POST',
        url: '/api/users/' + userViewmodel.id,
        data: {userViewmodel: userViewmodel}
      })
        .done((data) => {
          promise.resolve(data);
        })
        .fail((jqXhr) => {
          promise.reject(this.onFail(jqXhr.responseJSON.message));
        });

    return promise.promise();
  }

  static saveAppSetting(appSetting) {
    var promise = $.Deferred();

    $.ajax({
        type: 'POST',
        url: '/api/app-settings/' + appSetting.id,
        data: {appSetting: appSetting}
      })
        .done((data) => {
          promise.resolve(data);
        })
        .fail((jqXhr) => {
          promise.reject(this.onFail(jqXhr.responseJSON.message));
        });

    return promise.promise();
  }

  static saveMeal(meal) {
    var promise = $.Deferred();

    $.ajax({
        type: 'POST',
        url: '/api/meals/' + meal.id,
        data: {meal: meal}
      })
        .done((data) => {
          promise.resolve(data);
        })
        .fail((jqXhr) => {
          promise.reject(this.onFail(jqXhr.responseJSON.message));
        });

    return promise.promise();
  }

  static savePage(pageViewmodel) {
    var promise = $.Deferred();

    $.ajax({
        type: 'POST',
        url: '/api/pages/' + pageViewmodel.id,
        data: {page: pageViewmodel}
      })
        .done((data) => {
          promise.resolve(data);
        })
        .fail((jqXhr) => {
          promise.reject(this.onFail(jqXhr.responseJSON.message));
        });

    return promise.promise();
  }

  static deletePage(pageId) {
    var promise = $.Deferred();

    $.ajax({
        type: 'POST',
        url: '/api/pages/' + pageId + '/delete',
        data: {pageId: pageId}
      })
        .done((data) => {
          promise.resolve(data);
        })
        .fail((jqXhr) => {
          promise.reject(this.onFail(jqXhr.responseJSON.message));
        });

    return promise.promise();
  }

  static saveSortingForPages(pages){
    var promise = $.Deferred();

    $.ajax({
        type: 'POST',
        url: '/api/pages/sorting/update',
        data: {pages: pages}
      })
        .done((data) => {
          promise.resolve(data);
        })
        .fail((jqXhr) => {
          promise.reject(this.onFail(jqXhr.responseJSON.message));
        });

    return promise.promise();
  }

  static saveContentListForPage(contentList, pageId) {
    var promise = $.Deferred();

    $.ajax({
        type: 'POST',
        url: '/api/pages/' + pageId + '/content-list',
        data: {contents: contentList}
      })
        .done((data) => {
          promise.resolve(data);
        })
        .fail((jqXhr) => {
          promise.reject(this.onFail(jqXhr.responseJSON.message));
        });

    return promise.promise();
  }

  static getContentListForPage(pageId, isEdit) {
    var promise = $.Deferred();
    var baseUrl = '/api/pages/';
    if(isEdit){
      baseUrl = baseUrl + 'edit/';
    }

    $.ajax({
      url: baseUrl + pageId + '/content-list'
    })
      .done((data) => {
        promise.resolve(data);
      })
      .fail((jqXhr) => {
        promise.reject(this.onFail(jqXhr.responseJSON.message));
      });

    return promise.promise();
  }

  static saveSortingForMeals(meals){
    var promise = $.Deferred();

    $.ajax({
        type: 'POST',
        url: '/api/meals/sorting/update',
        data: {meals: meals}
      })
        .done((data) => {
          promise.resolve(data);
        })
        .fail((jqXhr) => {
          promise.reject(this.onFail(jqXhr.responseJSON.message));
        });

    return promise.promise();
  }

  onFail(jqXhr) {
    onsole.log('onGetThingsToDoDataFail');
    toastr.error(jqXhr.responseJSON.message);
  }
}

export default API;
