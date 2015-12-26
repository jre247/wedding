import React from 'react';
import {Link} from 'react-router';
import ThingsToDoStore from '../../stores/ThingsToDoStore';
import ThingsToDoActions from '../../actions/ThingsToDoActions';
import ListTemplate from '../Templates/ListTemplate/ListTemplate';
import {_} from 'underscore';

class ThingsToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = ThingsToDoStore.getState();
    this.onChange = this.onChange.bind(this);
  }
  onChange(state) {
    this.setState(state);
  }
  componentDidMount() {
    ThingsToDoStore.listen(this.onChange);
    ThingsToDoActions.getThingsToDoData();
  }
  componentWillUnmount() {
    ThingsToDoStore.unlisten(this.onChange);
  }
  render() {
    var propsData = {isEdit: false, contentList: this.state.contentList, editLink: '/things-to-do/edit'};
    return (
      <ListTemplate {...propsData} />
    );
  }
}

export default ThingsToDo;
