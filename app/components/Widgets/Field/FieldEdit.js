import {_} from 'underscore';
import React from 'react';
import FieldHelper from '../../Widgets/Field/FieldHelper';
import ImageWidget from '../../Widgets/Image/ImageWidget';
import Title from '../../Widgets/Title/Title';
import ShortDescription from '../../Widgets/ShortDescription/ShortDescription';
import LongDescription from '../../Widgets/LongDescription/LongDescription';

class FieldEdit extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var contentItem = this.props.contentItem;
    var propsData = _.extend({value: contentItem.value}, this.props);

    if(FieldHelper.isDescription(contentItem)){
      return (
        <div key={contentItem.sort_order} className="form-group">
          <LongDescription {...propsData} />
        </div>
      );
    }
    else if(FieldHelper.isShortDescription(contentItem)){
      return (
        <div key={contentItem.sort_order} className="form-group">
          <ShortDescription {...propsData} />
        </div>
      );
    }
    else if(FieldHelper.isImage(contentItem)){
      return (
        <div key={contentItem.sort_order} className="form-group">
          <ImageWidget {...propsData} />
        </div>
      );
    }
    else if(FieldHelper.isTitle(contentItem)){
      return (
        <div key={contentItem.sort_order} className="form-group">
          <Title {...propsData} />
        </div>
      );
    }
  }
}

export default FieldEdit;