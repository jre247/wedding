import {_} from 'underscore';
import React from 'react';
import FieldHelper from '../../Widgets/Field/FieldHelper';
import ImageWidget from '../../Widgets/Image/ImageWidget';
import Title from '../../Widgets/Title/Title';
import ShortDescription from '../../Widgets/ShortDescription/ShortDescription';
import LongDescription from '../../Widgets/LongDescription/LongDescription';
import SubListItem from '../../Widgets/ListItem/SubListItem';
import ParentListItem from '../../Widgets/ListItem/ParentListItem';

class FieldEdit extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var contentItem = this.props.contentItem;
    var propsData = _.extend({value: contentItem.value}, this.props);

    //todo: think about why there's code that declare another props data object to pass into list item sub or parent
    if(this.props.isListItem){
      var listItemProps = _.extend({listItem: this.props.contentItem, isEdit: this.props.isEdit}, this.props);
      if(FieldHelper.isSubListItem(contentItem)){
        return (
          <div>
            <SubListItem {...listItemProps} />
          </div>
        );
      }
      else {
        return (
          <div>
            <ParentListItem {...listItemProps} />
          </div>
        );
      }
    }

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
