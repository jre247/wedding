import React from 'react';
import {Link} from 'react-router';
import ContentSettings from '../Components/ContentSettings/ContentSettings';
import ContentSettingsReadOnly from '../Components/ContentSettings/ContentSettingsReadOnly';
import Image from './Image';
import {_} from 'underscore';
//var awsBucket = 'jenna-and-jason-wedding';

class ImageUploadEdit extends React.Component {
  constructor(props) {
      super(props);
      this.state = {isImageEditable: false, percentComplete: 0, contentList: []};
  }

  componentDidMount() {
    if(!this.props.value){
      this.setState({isImageEditable: true, contentList: this.props.contentList});
    }
  }

  componentWillUnmount() {

  }


  uploadFile(){
    var file = $("#image-file")[0].files[0];
    if(file == null){
        alert("No file selected.");
    }
    else{
        this.getSignedRequest(file);
    }
  }

  getSignedRequest(file){
    var self = this;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/sign_s3?file_name="+file.name+"&file_type="+file.type);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                var response = JSON.parse(xhr.responseText);
                self.executeUploadFile(file, response.signed_request, response.url);
            }
            else{
                alert("Could not get signed URL.");
            }
        }
    };
    xhr.send();
  }

  executeUploadFile(file, signed_request, url){
    var self = this;
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", signed_request);
    xhr.setRequestHeader('x-amz-acl', 'public-read');
    xhr.onload = function() {
        if (xhr.status === 200) {
          //$("#preview").src = url;
          //$("#avatar_url").value = url;
          self.updateContent(url);
        }
    };
    xhr.onerror = function() {
        alert("Could not upload file.");
    };
    xhr.send(file);
  }

  updateContent(url) {
    //var url = 'https://s3.amazonaws.com/' + awsBucket + '/' + filename;
    this.state.contentList[this.props.contentIndex].value = url;
    this.props.setStateForContentList(this.state.contentList);
  }

  getPolicyJson(){
    var policy = {
      "expiration": "2020-12-01T12:00:00.000Z",
      "conditions": [{
          "bucket": awsBucket
        },
        ["starts-with", "$key", ""], {
          "acl": 'public-read'
        },
        ["starts-with", "$Content-Type", ""],
        ["content-length-range", 0, 524288000]
      ]
    };

    return policy;
  }

  uploadFile2(){
    // Get our File object
    var file = $('#file')[0].files[0];

    AWS.config = new AWS.Config();

    // Upload the File
    var bucket = new AWS.S3({
        params: {
          Bucket: awsBucket
        }
      });

    var params = {
      Key: file.name,
      ContentType: file.type,
      Body: file
    };

    var self = this;
    bucket.upload(params, function (err, data) {
      debugger;
      self.updateContent(file.name);
      self.setState({isImageEditable: false});
    });
  }

  uploadProgress(evt) {
    if (evt.lengthComputable) {
      var percentComplete = Math.round(evt.loaded * 100 / evt.total);
      this.setState({percentComplete: percentComplete});
    //  document.getElementById('progressNumber').innerHTML = percentComplete.toString() + '%';
    } else {
      //document.getElementById('progressNumber').innerHTML = 'unable to compute';
    }
  }

  uploadComplete(evt) {
    /* This event is raised when the server send back a response */
    alert("Done - " + evt.target.responseText);
  }

  uploadFailed(evt) {
    alert("There was an error attempting to upload the file." + evt);
  }

  uploadCanceled(evt) {
    alert("The upload has been canceled by the user or the browser dropped the connection.");
  }

  editImage(){
      this.setState({isImageEditable: true});
  }
  saveImage(){
      this.setState({isImageEditable: false});
  }

  render() {
      if(this.state.isImageEditable){
        return (
          <div className="Content-image-container">
            <div className="image-upload-container">
              <div className="row">
                <div className="col-md-2">
                  <label for="file">Select a File to Upload</label>
                </div>
                <div className="col-md-4">
                  <input type="file" name="file" id="image-file" />
                </div>
                <div className="col-md-2">
                  <input id="fileUpload" type="button" value="Upload" onClick={this.uploadFile.bind(this)} />
                </div>
                <div className="col-md-2">
                  <div id="progressNumber">{this.state.percentComplete}</div>%
                </div>
              </div>
            </div>

            <div className="Content-Image-Edit-Button edit-content-button" onClick={this.saveImage.bind(this)}>
              <span className="glyphicon glyphicon-ok" />
            </div>

            <ContentSettings {...this.props} />

            <div className="Widget-Remove-Button-Container" onClick={this.props.onRemove}>
              <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
            </div>
          </div>
        )
      }
      else{
        var propsData = _.extend({isContentEditable: true}, this.props);
        return (
          <div className="Content-image-container">
            <ContentSettingsReadOnly {...propsData}>
              <Image {...this.props} />
            </ContentSettingsReadOnly>

            <div className="Content-Image-Edit-Button edit-content-button" onClick={this.editImage.bind(this)}>
              <span className="glyphicon glyphicon-pencil" />
            </div>

            <ContentSettings {...this.props} />

            <div className="Widget-Remove-Button-Container" onClick={this.props.onRemove}>
              <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
            </div>
          </div>
        );
      }
    }
  }

  export default ImageUploadEdit;