import React from 'react';
import API from '../../../API';
import {Link} from 'react-router';
import Field from '../../Widgets/Field/Field';
import FieldHelper from '../../Widgets/Field/FieldHelper';
import EmptyContent from '../../EmptyContent';
import {_} from 'underscore';
import LongDescription from '../../Widgets/LongDescription/LongDescription';
import ImageWidget from '../../Widgets/Image/ImageWidget';
import Title from '../../Widgets/Title/Title';
import ShortDescription from '../../Widgets/ShortDescription/ShortDescription';
import Carousel from '../../Widgets/Components/Carousel/Carousel';
import EditLink from '../../EditLink';
import Modal from '../../Widgets/Components/Modal';
import WidgetService from '../../Widgets/WidgetService';
import classNames from 'classnames';
var self;

class PhotoAlbumTemplateReadOnly extends React.Component {
  constructor(props) {
    super(props);
    this.templateId = 2;
    this.state = {contentList: [], selectedPhoto: 1, showModal: false, isPageLoading: false};
    self = this;
  }
  componentDidMount() {
    this.getContentListForPage(this.props);
  }

  componentWillReceiveProps(nextProps){
    this.getContentListForPage(nextProps);
  }

  componentWillUnmount() {

  }
  setStateForContentList(newContentList){
    self.setState({contentList: newContentList})
  }

  getContentListForPage(propsData){
    this.setState({isPageLoading: true});

    WidgetService.getContentListForPage(propsData.pageId, propsData.isEdit).then(function(viewmodel){
      self.setState({isPageLoading: false, contentList: viewmodel.contentList || []});
    });
  }

  closeModal() {
    this.setState({selectedPhoto: 1, showModal: false});
  }

  openModal(index) {
    this.setState({selectedPhoto: index, showModal: true});
  }

  render() {
    var propsData = _.extend({
        selectedPhoto: this.state.selectedPhoto,
        contentList: this.state.contentList,
        imageSize: 'small',
        showIndicators: false
      }, this.props);

    let nodes = this.state.contentList.map((contentItem, index) => {
      var settings = contentItem.settings;
      var fieldPropsData = _.extend({
        contentItem: contentItem,
        settings: _.clone(settings)
      }, propsData);

      return (
        <div key={index} className="Photo" onClick={this.openModal.bind(this, index)}>
          <Field {...fieldPropsData} />
        </div>
      );
    });

    if(_.isEmpty(this.state.contentList) && !this.state.isPageLoading){
      return (
        <EmptyContent {...propsData} />
      );
    }
    else {
      var modalProps = {modalElement: '#largeCarouselModal', showModal: this.state.showModal};

      var nodesClassName = classNames({
        'hidden': this.state.isPageLoading,
        'Photo-album-container-read-only': true,
      });

      var spinnerClass = classNames({
        'hidden': !this.state.isPageLoading,
        'page-image-loader': true
      });

      return (
        <div className='Content-panel'>
          <EditLink {...this.props} />

          <div className={spinnerClass}>
            <img src="/css/images/ajax-loader.gif"  />
          </div>
          
          <div className={nodesClassName}>
            {nodes}
          </div>

          <Modal {...modalProps}>
            <div id="largeCarouselModal">
              <div className="modal-content-area">
                <div className="modal-content-transparent">
                  <div className="modal-header">
                    <button type="button" className="close" onClick={this.closeModal.bind(this)}>&times;</button>
                  </div>
                  <div className="body">
                    <Carousel {...propsData} />
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </div>

      );
    }


  }
}

export default PhotoAlbumTemplateReadOnly;
