import React from 'react';
import {Link} from 'react-router';
import EmptyContent from '../../EmptyContent';
import SubListItem from '../../Widgets/ListItem/SubListItem';
import ParentListItem from '../../Widgets/ListItem/ParentListItem';
import Field from '../../Widgets/Field/Field';
import FieldHelper from '../../Widgets/Field/FieldHelper';
import {_} from 'underscore';

class ListTemplate extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  updateContent(index, event) {
    this.props.contentList[index].value = event.target.value;
    this.props.setStateForContentList();
  }
  removeContent(index, event){
    this.props.contentList.splice(index, 1);
    this.props.setStateForContentList();
  }

  addSublistItem(index, event){
    var sortOrder = this.props.contentList.length + 1;

    var description =
    {
        name: 'Things To Do Child List Item',
        description: 'Things To Do Child List Item',
        value: '',
        content_type_id: 2,
        parent_index: this.findParentIndex(sortOrder),
        sort_order: sortOrder,
        template_id: 4
    };
    this.props.contentList.splice(index + 1, 0, description);

    sortOrder += 1;
    var link =
    {
        name: 'Things To Do Child List Item',
        description: 'Things To Do Child List Item',
        value: '',
        content_type_id: 5,
        parent_index: this.findParentIndex(sortOrder),
        sort_order: sortOrder,
        template_id: 4
    };
    this.props.contentList.splice(index + 2, 0, link);

    this.props.setStateForContentList();
  }

  removeContentAndItsSubListItems(index, event){
    var parentIndex = index + 1;

    var itemsToRemove = _.filter(this.props.contentList, function(item){
      return item.parent_index === parentIndex || item.sort_order === parentIndex;
    });

    var itemsToKeep = _.filter(this.props.contentList, function(item){
      return item.parent_index != parentIndex && item.sort_order != parentIndex;
    });

    this.saveNewSortOrderForAllItems(itemsToKeep, itemsToRemove);

    //this.props.contentList = [];
    this.props.contentList = itemsToKeep;
    this.setState({thingsToDo: this.props.contentList});

    //want to always maintain at miniumum one list item on the page
    if(this.props.contentList.length == 0){
      this.props.addParentListItem();
    }
  }

  saveNewSortOrderForAllItems(itemsToKeep, itemsToRemove){
    var lastItemIndexToRemove = itemsToRemove[itemsToRemove.length - 1].sort_order;

    for(var i = 0; i < itemsToKeep.length; i++){
      var item = itemsToKeep[i];

      //update parent index for only sub list items past the index of the last content item removed
      if(item.sort_order > lastItemIndexToRemove){
        if(FieldHelper.isSubListItem(item)){
          item.parent_index -= itemsToRemove.length;
        }
      }

      item.sort_order = i + 1;
    }
  }

  findParentIndex(currentIndex){
    var parentIndex = 1;

    for(var index = currentIndex - 2; index > 0; index--){
      var listItem = this.props.contentList[index];
      if(!listItem.parent_index){
        parentIndex = listItem.sort_order;
        break;
      }
    }

    return parentIndex;
  }

  render() {
    if(_.isEmpty(this.props.contentList)){
      var emptyContentProps = {editLink: this.props.editLink};
      return (
        <EmptyContent {...emptyContentProps} />
      );
    }
    else {
      let nodes = this.props.contentList.map((contentItem, index) => {
        var listItemProps = {
          contentItem: contentItem, isEdit: this.props.isEdit, isListItem: true,
          onRemove: this.removeContent.bind(this, index),
          onChange: this.updateContent.bind(this, index)
        };

        //override onRemove function for list item if lit item is parent list item
        if(!FieldHelper.isSubListItem(contentItem)){
          listItemProps.onRemove = this.removeContentAndItsSubListItems.bind(this, index);
        }

        return (
          <div key={contentItem.sort_order}>
            <Field {...listItemProps} />
          </div>
        )
      });

      return (
        <div>
          <div className='Content-panel'>
            <div className="Edit-Content-Button">
              <Link className="Navigation-link" to={this.props.editLink}>Edit</Link>
            </div>
            <div className='row List-page'>
              {nodes}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default ListTemplate;