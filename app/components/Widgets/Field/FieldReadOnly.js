import {_} from 'underscore';
import React from 'react';
import LongDescription from '../../Widgets/LongDescription/LongDescription';
import ImageWidget from '../../Widgets/Image/ImageWidget';
import Title from '../../Widgets/Title/Title';
import Url from '../../Widgets/Url/Url';
import ShortDescription from '../../Widgets/ShortDescription/ShortDescription';
import FieldHelper from '../../Widgets/Field/FieldHelper';
import Iframe from '../../Widgets/Iframe/Iframe';
import ImageUpload from '../../Widgets/Image/ImageUpload';

class FieldReadOnly extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    var contentItem = this.props.contentItem;
    var propsData = _.extend({value: contentItem.value}, this.props);

    if(FieldHelper.isDescription(contentItem)){
      return (
        <div className="Content-item-container">
          <LongDescription {...propsData} />
        </div>
      );
    }
    else if(FieldHelper.isShortDescription(contentItem)){
      return (
        <div className="Content-item-container">
          <ShortDescription {...propsData} />
        </div>
      );
    }
    else if(FieldHelper.isImage(contentItem)){
      return (
        <div className="Content-item-container">
          <ImageWidget {...propsData} />
        </div>
      );
    }
    else if(FieldHelper.isTitle(contentItem)){
      return (
        <div className="Content-item-container">
          <Title {...propsData} />
        </div>
      );
    }
    else if(FieldHelper.isUrl(contentItem)){
      return (
        <div className="Content-item-container">
          <Url {...propsData} />
        </div>
      );
    }
    else if(FieldHelper.isIframe(contentItem)){
      return (
        <div className="Content-item-container">
          <Iframe {...propsData} />
        </div>
      );
    }
    else if(FieldHelper.isImageUpload(contentItem)){
      return (
        <div className="Content-item-container">
          <ImageUpload {...propsData} />
        </div>
      );
    }
    else{
      throw "There is no Field that matches the content item.";
    }



  }
}

export default FieldReadOnly;
