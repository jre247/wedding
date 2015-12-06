import alt from '../alt';
import VenueActions from '../actions/VenueActions';

class VenueStore {
  constructor() {
    this.bindActions(VenueActions);
    this.venue = {};
    this.ajaxAnimationClass = '';
  }

  onGetVenueDataSuccess(data) {
    console.log('onGetVenueDataSuccess');
    var contentItems = data;
    var venue = {
      name: contentItems[0],
      image: contentItems[1],
      description: contentItems[2],
      ceremonyTime: contentItems[3],
    }
    console.log('contentItems.length: ' + contentItems.length);
    console.log('contentItems[0]: ' + contentItems[0]);
    this.venue = venue;
  }

  onGetVenueDataFail(jqXhr) {
    onsole.log('onGetVenueDataFail');
    toastr.error(jqXhr.responseJSON.message);
  }

  onUpdateAjaxAnimation(className) {
    this.ajaxAnimationClass = className; //fadein or fadeout
  }
}

export default alt.createStore(VenueStore);