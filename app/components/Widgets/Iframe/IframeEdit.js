import React from 'react';
import {Link} from 'react-router';
import ContentSettings from '../Components/ContentSettings/ContentSettings';

class IframeEdit extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className="content-container">
        <div className="form-group Content-item">
          <input className='form-control' placeholder="Iframe Src"
            value={this.props.value} onChange={this.props.onChange}>
          </input>
        </div>

        <ContentSettings {...this.props} />

        <div className="Widget-Remove-Button-Container">
          <div onClick={this.props.onRemove}>
            <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
          </div>
        </div>
      </div>
    );
  }
}

export default IframeEdit;
