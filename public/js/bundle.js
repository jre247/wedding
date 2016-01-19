(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _underscore = require('underscore');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var API = (function () {
  function API() {
    _classCallCheck(this, API);
  }

  _createClass(API, [{
    key: 'onFail',
    value: function onFail(jqXhr) {
      onsole.log('onGetThingsToDoDataFail');
      toastr.error(jqXhr.responseJSON.message);
    }
  }], [{
    key: 'getAllUsers',
    value: function getAllUsers(history) {
      var _this = this;

      var promise = $.Deferred();

      $.ajax({
        type: 'GET',
        url: '/api/users'
      }).done(function (data) {
        promise.resolve(data);
      }).fail(function (jqXhr) {
        promise.reject(_this.onFail(jqXhr.responseJSON.message));
      });

      return promise.promise();
    }
  }, {
    key: 'getUser',
    value: function getUser(userId, history) {
      var _this2 = this;

      var promise = $.Deferred();

      $.ajax({
        type: 'GET',
        url: '/api/users/' + userId
      }).done(function (data) {
        promise.resolve(data);
      }).fail(function (jqXhr) {
        promise.reject(_this2.onFail(jqXhr.responseJSON.message));
      });

      return promise.promise();
    }
    //
    // static getLoggedInUser(history) {
    //   var promise = $.Deferred();

    //   $.ajax({
    //       type: 'GET',
    //       url: '/api/getLoggedInUser'
    //     })
    //       .done((data) => {
    //         promise.resolve(data);
    //       })
    //       .fail((jqXhr) => {
    //         promise.reject(this.onFail(jqXhr.responseJSON.message));
    //       });
    //
    //   return promise.promise();
    // }

  }, {
    key: 'saveUser',
    value: function saveUser(userViewmodel) {
      var _this3 = this;

      var promise = $.Deferred();

      $.ajax({
        type: 'POST',
        url: '/api/users/' + userViewmodel.id,
        data: { userViewmodel: userViewmodel }
      }).done(function (data) {
        promise.resolve(data);
      }).fail(function (jqXhr) {
        promise.reject(_this3.onFail(jqXhr.responseJSON.message));
      });

      return promise.promise();
    }
  }, {
    key: 'saveAppSetting',
    value: function saveAppSetting(appSetting) {
      var _this4 = this;

      var promise = $.Deferred();

      $.ajax({
        type: 'POST',
        url: '/api/app-settings/' + appSetting.id,
        data: { appSetting: appSetting }
      }).done(function (data) {
        promise.resolve(data);
      }).fail(function (jqXhr) {
        promise.reject(_this4.onFail(jqXhr.responseJSON.message));
      });

      return promise.promise();
    }
  }, {
    key: 'savePage',
    value: function savePage(pageViewmodel) {
      var _this5 = this;

      var promise = $.Deferred();

      $.ajax({
        type: 'POST',
        url: '/api/pages/' + pageViewmodel.id,
        data: { page: pageViewmodel }
      }).done(function (data) {
        promise.resolve(data);
      }).fail(function (jqXhr) {
        promise.reject(_this5.onFail(jqXhr.responseJSON.message));
      });

      return promise.promise();
    }
  }, {
    key: 'deletePage',
    value: function deletePage(pageId) {
      var _this6 = this;

      var promise = $.Deferred();

      $.ajax({
        type: 'POST',
        url: '/api/pages/' + pageId + '/delete',
        data: { pageId: pageId }
      }).done(function (data) {
        promise.resolve(data);
      }).fail(function (jqXhr) {
        promise.reject(_this6.onFail(jqXhr.responseJSON.message));
      });

      return promise.promise();
    }
  }, {
    key: 'saveSortingForPages',
    value: function saveSortingForPages(pages) {
      var _this7 = this;

      var promise = $.Deferred();

      $.ajax({
        type: 'POST',
        url: '/api/pages/sorting/update',
        data: { pages: pages }
      }).done(function (data) {
        promise.resolve(data);
      }).fail(function (jqXhr) {
        promise.reject(_this7.onFail(jqXhr.responseJSON.message));
      });

      return promise.promise();
    }
  }, {
    key: 'saveContentListForPage',
    value: function saveContentListForPage(contentList, pageId) {
      var _this8 = this;

      var promise = $.Deferred();

      $.ajax({
        type: 'POST',
        url: '/api/pages/' + pageId + '/content-list',
        data: { contents: contentList }
      }).done(function (data) {
        promise.resolve(data);
      }).fail(function (jqXhr) {
        promise.reject(_this8.onFail(jqXhr.responseJSON.message));
      });

      return promise.promise();
    }
  }, {
    key: 'getContentListForPage',
    value: function getContentListForPage(pageId, isEdit) {
      var _this9 = this;

      var promise = $.Deferred();
      var baseUrl = '/api/pages/';
      if (isEdit) {
        baseUrl = baseUrl + 'edit/';
      }

      $.ajax({
        url: baseUrl + pageId + '/content-list'
      }).done(function (data) {
        promise.resolve(data);
      }).fail(function (jqXhr) {
        promise.reject(_this9.onFail(jqXhr.responseJSON.message));
      });

      return promise.promise();
    }
  }]);

  return API;
})();

exports.default = API;

},{"underscore":"underscore"}],2:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppSettingActions = (function () {
  function AppSettingActions() {
    _classCallCheck(this, AppSettingActions);

    this.generateActions('updateAjaxAnimation', 'getAppSettingsSuccess');
  }

  _createClass(AppSettingActions, [{
    key: 'getAppSettings',
    value: function getAppSettings() {
      var _this = this;

      $.ajax({
        url: '/api/app-settings'
      }).done(function (data) {
        _this.actions.getAppSettingsSuccess(data);
      }).fail(function (jqXhr) {
        _this.actions.getAppSettingsFail(jqXhr);
      });
    }
  }]);

  return AppSettingActions;
})();

exports.default = _alt2.default.createActions(AppSettingActions);

},{"../alt":8,"underscore":"underscore"}],3:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AuthActions = (function () {
  function AuthActions() {
    _classCallCheck(this, AuthActions);

    this.generateActions('getUserAuthenticationDataSuccess');
  }

  _createClass(AuthActions, [{
    key: 'getUserAuthenticationData',
    value: function getUserAuthenticationData() {
      var _this = this;

      $.ajax({
        url: '/api/getLoggedInUser'
      }).done(function (data) {
        _this.actions.getUserAuthenticationDataSuccess(data);
      }).fail(function (jqXhr) {
        _this.actions.getUserAuthenticationDataFail(jqXhr);
      });
    }
  }]);

  return AuthActions;
})();

exports.default = _alt2.default.createActions(AuthActions);

},{"../alt":8,"underscore":"underscore"}],4:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FooterActions = (function () {
  function FooterActions() {
    //this.generateActions(
    //'getTopCharactersSuccess',
    //'getTopCharactersFail'
    //);

    _classCallCheck(this, FooterActions);
  }

  _createClass(FooterActions, [{
    key: 'getTopCharacters',
    value: function getTopCharacters() {
      // $.ajax({ url: '/api/characters/top' })
      //   .done((data) => {
      //     this.actions.getTopCharactersSuccess(data)
      //   })
      //   .fail((jqXhr) => {
      //     this.actions.getTopCharactersFail(jqXhr)
      //   });
    }
  }]);

  return FooterActions;
})();

exports.default = _alt2.default.createActions(FooterActions);

},{"../alt":8}],5:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LookupActions = (function () {
  function LookupActions() {
    _classCallCheck(this, LookupActions);

    this.generateActions('updateAjaxAnimation', 'getAllLookupsSuccess');
  }

  _createClass(LookupActions, [{
    key: 'getLookups',
    value: function getLookups() {
      var _this = this;

      $.ajax({
        url: '/api/lookups'
      }).done(function (data) {
        _this.actions.getAllLookupsSuccess(data);
      }).fail(function (jqXhr) {
        _this.actions.getAllLookupsFail(jqXhr);
      });
    }
  }]);

  return LookupActions;
})();

exports.default = _alt2.default.createActions(LookupActions);

},{"../alt":8,"underscore":"underscore"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbarActions = function NavbarActions() {
  _classCallCheck(this, NavbarActions);

  this.generateActions('updateOnlineUsers', 'updateAjaxAnimation');
};

exports.default = _alt2.default.createActions(NavbarActions);

},{"../alt":8,"underscore":"underscore"}],7:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PageActions = (function () {
  function PageActions() {
    _classCallCheck(this, PageActions);

    this.generateActions('updateAjaxAnimation', 'getAllPagesSuccess');
  }

  _createClass(PageActions, [{
    key: 'getAllPages',
    value: function getAllPages() {
      var _this = this;

      $.ajax({
        url: '/api/pages'
      }).done(function (data) {
        _this.actions.getAllPagesSuccess(data);
      }).fail(function (jqXhr) {
        _this.actions.getAllPagesFail(jqXhr);
      });
    }
  }]);

  return PageActions;
})();

exports.default = _alt2.default.createActions(PageActions);

},{"../alt":8,"underscore":"underscore"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _alt2.default();

},{"alt":"alt"}],9:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _underscore = require('underscore');

var _AppSettingStore = require('../../stores/AppSettingStore');

var _AppSettingStore2 = _interopRequireDefault(_AppSettingStore);

var _AppSettingActions = require('../../actions/AppSettingActions');

var _AppSettingActions2 = _interopRequireDefault(_AppSettingActions);

var _API = require('../../API');

var _API2 = _interopRequireDefault(_API);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var self;

var AppSetting = (function (_React$Component) {
  _inherits(AppSetting, _React$Component);

  function AppSetting(props) {
    _classCallCheck(this, AppSetting);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AppSetting).call(this, props));

    _this.state = { appSetting: {} };
    _this.appSettingState = _AppSettingStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    self = _this;
    return _this;
  }

  _createClass(AppSetting, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _AppSettingStore2.default.listen(this.onChange);
      this.getAppSetting();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _AppSettingStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      self.setState(state);
    }
  }, {
    key: 'getAppSetting',
    value: function getAppSetting() {
      var appSettings = this.appSettingState.appSettings;
      if (appSettings) {
        var appSetting = _underscore._.findWhere(appSettings, { id: parseInt(this.props.params.id) });
        if (appSetting) {
          self.setState({ appSetting: appSetting });
        }
      }
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
    }
  }, {
    key: 'submit',
    value: function submit(event) {
      _API2.default.saveAppSetting(this.state.appSetting).then(function () {
        self.props.history.pushState(null, '/admin/app-settings');
      });
    }
  }, {
    key: 'onNameChange',
    value: function onNameChange(event) {
      this.state.appSetting.name = event.target.value;
      this.setState({ appSetting: this.state.appSetting });
    }
  }, {
    key: 'onValueChange',
    value: function onValueChange(event) {
      this.state.appSetting.value = event.target.value;
      this.setState({ appSetting: this.state.appSetting });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'Content-panel' },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              null,
              'Name'
            ),
            _react2.default.createElement('input', { type: 'text', className: 'form-control', name: 'name', value: this.state.appSetting.name,
              onChange: this.onNameChange.bind(this) })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              null,
              'Value'
            ),
            _react2.default.createElement('input', { type: 'text', className: 'form-control', name: 'admin', value: this.state.appSetting.value,
              onChange: this.onValueChange.bind(this) })
          ),
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'btn btn-primary btn-lg', onClick: this.submit.bind(this) },
            'Save'
          )
        )
      );
    }
  }]);

  return AppSetting;
})(_react2.default.Component);

exports.default = AppSetting;

},{"../../API":1,"../../actions/AppSettingActions":2,"../../stores/AppSettingStore":91,"react":"react","underscore":"underscore"}],10:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _underscore = require('underscore');

var _AppSettingStore = require('../../stores/AppSettingStore');

var _AppSettingStore2 = _interopRequireDefault(_AppSettingStore);

var _AppSettingActions = require('../../actions/AppSettingActions');

var _AppSettingActions2 = _interopRequireDefault(_AppSettingActions);

var _history = require('history');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var self;

var AppSettings = (function (_React$Component) {
  _inherits(AppSettings, _React$Component);

  function AppSettings(props) {
    _classCallCheck(this, AppSettings);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AppSettings).call(this, props));

    _this.state = _AppSettingStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    self = _this;
    return _this;
  }

  _createClass(AppSettings, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _AppSettingStore2.default.listen(this.onChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _AppSettingStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      self.setState(state);
    }
  }, {
    key: 'selectAppSetting',
    value: function selectAppSetting(setting, event) {
      self.props.history.pushState(null, '/admin/app-settings/' + setting.id + '/edit');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.state.appSettings.length == 0) {
        return _react2.default.createElement('span', null);
      } else {
        var nodes = this.state.appSettings.map(function (setting, index) {
          return _react2.default.createElement(
            'tr',
            { key: index, onClick: _this2.selectAppSetting.bind(_this2, setting) },
            _react2.default.createElement(
              'td',
              null,
              setting.name
            ),
            _react2.default.createElement(
              'td',
              null,
              setting.value
            )
          );
        });

        return _react2.default.createElement(
          'div',
          { className: 'Content-panel' },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'div',
              { className: 'table-responsive' },
              _react2.default.createElement(
                'table',
                { className: 'table app-settings' },
                _react2.default.createElement(
                  'thead',
                  null,
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'th',
                      null,
                      'Name'
                    ),
                    _react2.default.createElement(
                      'th',
                      null,
                      'Value'
                    )
                  )
                ),
                _react2.default.createElement(
                  'tbody',
                  { className: 'table-body' },
                  nodes
                )
              )
            )
          )
        );
      }
    }
  }]);

  return AppSettings;
})(_react2.default.Component);

exports.default = AppSettings;

},{"../../actions/AppSettingActions":2,"../../stores/AppSettingStore":91,"history":113,"react":"react","underscore":"underscore"}],11:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _underscore = require('underscore');

var _AuthHelper = require('../../helpers/AuthHelper');

var _AuthHelper2 = _interopRequireDefault(_AuthHelper);

var _PageStore = require('../../stores/PageStore');

var _PageStore2 = _interopRequireDefault(_PageStore);

var _PageActions = require('../../actions/PageActions');

var _PageActions2 = _interopRequireDefault(_PageActions);

var _LookupStore = require('../../stores/LookupStore');

var _LookupStore2 = _interopRequireDefault(_LookupStore);

var _API = require('../../API');

var _API2 = _interopRequireDefault(_API);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var self;

var PageAdministration = (function (_React$Component) {
  _inherits(PageAdministration, _React$Component);

  function PageAdministration(props) {
    _classCallCheck(this, PageAdministration);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PageAdministration).call(this, props));

    _this.state = { page: {} };
    _this.pageState = _PageStore2.default.getState();
    _this.lookupState = _LookupStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    self = _this;
    return _this;
  }

  _createClass(PageAdministration, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _PageStore2.default.listen(this.onChange);
      _LookupStore2.default.listen(this.onChange);

      var isEdit = this.props.isEdit;

      if (isEdit) this.getPage();else this.createPage();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _PageStore2.default.unlisten(this.onChange);
      _LookupStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      self.setState(state);
    }
  }, {
    key: 'createPage',
    value: function createPage() {
      var sortOrder = this.pageState.pages.length;
      var newPage = { id: 0, name: '', url: '', template_id: 1, sort_order: sortOrder };
      self.setState({ page: newPage });
    }
  }, {
    key: 'deletePage',
    value: function deletePage() {
      _API2.default.deletePage(self.state.page.id).then(function () {
        self.props.history.pushState(null, '/admin/pages');
      });
    }
  }, {
    key: 'getPage',
    value: function getPage() {
      var pages = this.pageState.pages;
      if (pages) {
        var page = _underscore._.findWhere(pages, { id: parseInt(this.props.params.id) });
        if (page) {
          self.setState({ page: page });
        }
      }
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
    }
  }, {
    key: 'submit',
    value: function submit(event) {
      _API2.default.savePage(this.state.page).then(function () {
        self.props.history.pushState(null, '/admin/pages');
      });
    }
  }, {
    key: 'onNameChange',
    value: function onNameChange(event) {
      this.state.page.name = event.target.value;
      this.setState({ page: this.state.page });
    }
  }, {
    key: 'onUrlChange',
    value: function onUrlChange(event) {
      this.state.page.url = event.target.value;
      this.setState({ page: this.state.page });
    }
  }, {
    key: 'onTemplateChange',
    value: function onTemplateChange(event) {
      this.state.page.template_id = event.target.value;
      this.setState({ page: this.state.page });
    }
  }, {
    key: 'render',
    value: function render() {
      var templates = this.lookupState.lookups.templates.map(function (template, index) {
        return _react2.default.createElement(
          'option',
          { key: index, value: template.id },
          template.name
        );
      });

      return _react2.default.createElement(
        'div',
        { className: 'Content-panel' },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              null,
              'Name'
            ),
            _react2.default.createElement('input', { type: 'text', className: 'form-control', name: 'email', value: this.state.page.name, onChange: this.onNameChange.bind(this) })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              null,
              'Url'
            ),
            _react2.default.createElement('input', { type: 'text', className: 'form-control', name: 'admin', value: this.state.page.url, onChange: this.onUrlChange.bind(this) })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              null,
              'Templates'
            ),
            _react2.default.createElement(
              'select',
              { className: 'form-control', onChange: this.onTemplateChange.bind(this),
                value: this.state.page.template_id },
              templates
            )
          ),
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'btn btn-primary btn-lg', onClick: this.submit.bind(this) },
            'Save'
          ),
          _react2.default.createElement(
            'button',
            { type: 'button', className: self.state.page.id > 0 ? 'btn btn-danger btn-lg delete-page-btn' : 'hidden',
              onClick: this.deletePage.bind(this) },
            'Delete'
          )
        )
      );
    }
  }]);

  return PageAdministration;
})(_react2.default.Component);

exports.default = PageAdministration;

},{"../../API":1,"../../actions/PageActions":7,"../../helpers/AuthHelper":87,"../../stores/LookupStore":94,"../../stores/PageStore":96,"react":"react","underscore":"underscore"}],12:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _underscore = require('underscore');

var _AuthHelper = require('../../helpers/AuthHelper');

var _AuthHelper2 = _interopRequireDefault(_AuthHelper);

var _PageAdministration = require('./PageAdministration');

var _PageAdministration2 = _interopRequireDefault(_PageAdministration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var self;

var PageAdministrationCreate = (function (_React$Component) {
  _inherits(PageAdministrationCreate, _React$Component);

  function PageAdministrationCreate(props) {
    _classCallCheck(this, PageAdministrationCreate);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(PageAdministrationCreate).call(this, props));
  }

  _createClass(PageAdministrationCreate, [{
    key: 'render',
    value: function render() {
      var propsData = _underscore._.extend({ isEdit: false }, this.props);

      return _react2.default.createElement(_PageAdministration2.default, propsData);
    }
  }]);

  return PageAdministrationCreate;
})(_react2.default.Component);

exports.default = PageAdministrationCreate;

},{"../../helpers/AuthHelper":87,"./PageAdministration":11,"react":"react","underscore":"underscore"}],13:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _underscore = require('underscore');

var _AuthHelper = require('../../helpers/AuthHelper');

var _AuthHelper2 = _interopRequireDefault(_AuthHelper);

var _PageAdministration = require('./PageAdministration');

var _PageAdministration2 = _interopRequireDefault(_PageAdministration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var self;

var PageAdministrationEdit = (function (_React$Component) {
  _inherits(PageAdministrationEdit, _React$Component);

  function PageAdministrationEdit(props) {
    _classCallCheck(this, PageAdministrationEdit);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(PageAdministrationEdit).call(this, props));
  }

  _createClass(PageAdministrationEdit, [{
    key: 'render',
    value: function render() {
      var propsData = _underscore._.extend({ isEdit: true }, this.props);

      return _react2.default.createElement(_PageAdministration2.default, propsData);
    }
  }]);

  return PageAdministrationEdit;
})(_react2.default.Component);

exports.default = PageAdministrationEdit;

},{"../../helpers/AuthHelper":87,"./PageAdministration":11,"react":"react","underscore":"underscore"}],14:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _underscore = require('underscore');

var _AuthHelper = require('../../helpers/AuthHelper');

var _AuthHelper2 = _interopRequireDefault(_AuthHelper);

var _PageStore = require('../../stores/PageStore');

var _PageStore2 = _interopRequireDefault(_PageStore);

var _PageActions = require('../../actions/PageActions');

var _PageActions2 = _interopRequireDefault(_PageActions);

var _history = require('history');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _API = require('../../API');

var _API2 = _interopRequireDefault(_API);

var _PagesAdministrationPositionButtons = require('./PagesAdministrationPositionButtons');

var _PagesAdministrationPositionButtons2 = _interopRequireDefault(_PagesAdministrationPositionButtons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var self;

var PagesAdministration = (function (_React$Component) {
  _inherits(PagesAdministration, _React$Component);

  function PagesAdministration(props) {
    _classCallCheck(this, PagesAdministration);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PagesAdministration).call(this, props));

    _this.state = _PageStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    self = _this;
    return _this;
  }

  _createClass(PagesAdministration, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _PageStore2.default.listen(this.onChange);
      _PageActions2.default.getAllPages();

      this.setupSortableTable();
    }
  }, {
    key: 'setupSortableTable',
    value: function setupSortableTable() {
      // ReactDOM.findDOMNode(this) is the <ul>
      // element created in our render method
      $(_reactDom2.default.findDOMNode(this)).sortable({
        items: 'tbody tr',
        update: this.handleSortableUpdate
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _PageStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      self.setState(state);
    }
  }, {
    key: 'handleSortableUpdate',
    value: function handleSortableUpdate() {
      // update the list items through this new array.
      var newItems = _underscore._.clone(self.state.pages, true);
      var $node = $(_reactDom2.default.findDOMNode(this));

      // toArray will return a sorted array of item ids:
      var ids = $node.sortable('toArray', { attribute: 'data-id' });

      ids.forEach(function (id, index) {
        var pageId = parseInt(id);

        var item = _underscore._.findWhere(newItems, { id: pageId });
        item.sort_order = index;
      });

      // We'll cancel the sortable change and let React reorder the DOM instead:
      $node.sortable('cancel');

      newItems = _underscore._.sortBy(newItems, 'sort_order');

      self.setState({ pages: newItems });

      _API2.default.saveSortingForPages(self.state.pages);
    }
  }, {
    key: 'selectPage',
    value: function selectPage(page, event) {
      self.props.history.pushState(null, '/admin/pages/' + page.id + '/edit');
    }
  }, {
    key: 'create',
    value: function create() {
      self.props.history.pushState(null, '/admin/pages/create');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.state.pages.length == 0) {
        return _react2.default.createElement('span', null);
      } else {
        var nodes = this.state.pages.map(function (page, index) {
          return _react2.default.createElement(
            'tr',
            { key: index, 'data-id': page.id, onClick: _this2.selectPage.bind(_this2, page) },
            _react2.default.createElement(
              'td',
              null,
              page.name
            ),
            _react2.default.createElement(
              'td',
              null,
              page.template_name
            ),
            _react2.default.createElement(
              'td',
              null,
              page.url
            )
          );
        });

        var positionButtonsProps = _underscore._.extend({ pages: self.state.pages, handleSortableUpdate: this.handleSortableUpdate }, this.props);

        return _react2.default.createElement(
          'div',
          { className: 'Content-panel' },
          _react2.default.createElement(
            'div',
            { className: 'pages-administration-buttons' },
            _react2.default.createElement(
              'button',
              { type: 'button', className: 'btn btn-primary btn-lg',
                onClick: this.create.bind(this) },
              'Create'
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'div',
              { className: 'table-responsive' },
              _react2.default.createElement(
                'table',
                { className: 'table pages-administration' },
                _react2.default.createElement(
                  'thead',
                  null,
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'th',
                      null,
                      'Name'
                    ),
                    _react2.default.createElement(
                      'th',
                      null,
                      'Template'
                    ),
                    _react2.default.createElement(
                      'th',
                      null,
                      'Url'
                    )
                  )
                ),
                _react2.default.createElement(
                  'tbody',
                  { className: 'table-body' },
                  nodes
                )
              )
            )
          )
        );
      }
    }
  }]);

  return PagesAdministration;
})(_react2.default.Component);

exports.default = PagesAdministration;

},{"../../API":1,"../../actions/PageActions":7,"../../helpers/AuthHelper":87,"../../stores/PageStore":96,"./PagesAdministrationPositionButtons":15,"history":113,"react":"react","react-dom":"react-dom","underscore":"underscore"}],15:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _underscore = require('underscore');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _API = require('../../API');

var _API2 = _interopRequireDefault(_API);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var self;

var PagesAdministration = (function (_React$Component) {
  _inherits(PagesAdministration, _React$Component);

  function PagesAdministration(props) {
    _classCallCheck(this, PagesAdministration);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PagesAdministration).call(this, props));

    self = _this;
    self.state = { arePagesSortable: false };
    return _this;
  }

  _createClass(PagesAdministration, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'enablePageSorting',
    value: function enablePageSorting() {
      debugger;
      self.setState({ arePagesSortable: true });

      // ReactDOM.findDOMNode(this) is the <ul>
      // element created in our render method
      $(_reactDom2.default.findDOMNode(this)).sortable({
        items: 'tbody tr',
        update: this.props.handleSortableUpdate
      });
    }
  }, {
    key: 'disablePageSorting',
    value: function disablePageSorting() {
      debugger;
      self.setState({ arePagesSortable: false });
      $(_reactDom2.default.findDOMNode(this)).sortable('disable');
    }
  }, {
    key: 'savePageSorting',
    value: function savePageSorting() {
      debugger;
      _API2.default.SaveSortingForPages(this.props.pages).then(function () {});

      this.disablePageSorting();
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.arePagesSortable) {
        return _react2.default.createElement(
          'div',
          { className: 'pages-administration-position-buttons' },
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'btn btn-warning btn-lg pull-right',
              onClick: this.savePageSorting.bind(this) },
            'Save Positions'
          )
        );
      } else {
        return _react2.default.createElement(
          'div',
          { className: 'pages-administration-position-buttons' },
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'btn btn-warning btn-lg pull-right',
              onClick: this.enablePageSorting.bind(this) },
            'Change Positions'
          )
        );
      }
    }
  }]);

  return PagesAdministration;
})(_react2.default.Component);

exports.default = PagesAdministration;

},{"../../API":1,"react":"react","react-dom":"react-dom","underscore":"underscore"}],16:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AppSettingStore = require('../stores/AppSettingStore');

var _AppSettingStore2 = _interopRequireDefault(_AppSettingStore);

var _AppSettingActions = require('../actions/AppSettingActions');

var _AppSettingActions2 = _interopRequireDefault(_AppSettingActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppBackdrop = (function (_React$Component) {
  _inherits(AppBackdrop, _React$Component);

  function AppBackdrop(props) {
    _classCallCheck(this, AppBackdrop);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AppBackdrop).call(this, props));

    _this.state = _AppSettingStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(AppBackdrop, [{
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _AppSettingStore2.default.listen(this.onChange);
      _AppSettingActions2.default.getAppSettings();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _AppSettingStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'render',
    value: function render() {
      var backgroundImageUrl = this.state.appSettingsDictionary["AppBackgroundImage"];

      var divStyle = {
        backgroundImage: 'url(' + backgroundImageUrl + ')'
      };

      return _react2.default.createElement(
        'div',
        { className: 'Backdrop' },
        _react2.default.createElement('div', { className: 'fixed-container', style: divStyle })
      );
    }
  }]);

  return AppBackdrop;
})(_react2.default.Component);

exports.default = AppBackdrop;

},{"../actions/AppSettingActions":2,"../stores/AppSettingStore":91,"react":"react"}],17:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = (function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login(props) {
    _classCallCheck(this, Login);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Login).call(this, props));
  }

  _createClass(Login, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'col-sm-6 col-sm-offset-2 role-manager' },
          _react2.default.createElement(
            'h1',
            null,
            _react2.default.createElement('span', { className: 'fa fa-sign-in' }),
            ' Login'
          ),
          _react2.default.createElement(
            'form',
            { action: '/login', method: 'post' },
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                null,
                'Email'
              ),
              _react2.default.createElement('input', { type: 'text', className: 'form-control', name: 'email' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                null,
                'Password'
              ),
              _react2.default.createElement('input', { type: 'password', className: 'form-control', name: 'password' })
            ),
            _react2.default.createElement(
              'button',
              { type: 'submit', className: 'btn btn-warning btn-lg' },
              'Login'
            )
          ),
          _react2.default.createElement('hr', null),
          _react2.default.createElement(
            'p',
            null,
            'Need an account?',
            _react2.default.createElement(
              'a',
              { href: '/signup' },
              ' Signup'
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            'Or go',
            _react2.default.createElement(
              'a',
              { href: '/' },
              ' home'
            ),
            '.'
          )
        )
      );
    }
  }]);

  return Login;
})(_react2.default.Component);

exports.default = Login;

},{"react":"react","react-router":"react-router","underscore":"underscore"}],18:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _underscore = require('underscore');

var _API = require('../../API');

var _API2 = _interopRequireDefault(_API);

var _AuthHelper = require('../../helpers/AuthHelper');

var _AuthHelper2 = _interopRequireDefault(_AuthHelper);

var _history = require('history');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var self;

var RoleManager = (function (_React$Component) {
  _inherits(RoleManager, _React$Component);

  function RoleManager(props) {
    _classCallCheck(this, RoleManager);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RoleManager).call(this, props));

    _this.state = { roles: [], users: [] };
    self = _this;
    return _this;
  }

  _createClass(RoleManager, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var self = this;
      _API2.default.getAllUsers().then(function (users) {
        self.setState({ users: users });
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'selectUser',
    value: function selectUser(user, event) {
      self.props.history.pushState(null, '/auth/role-manager/users/' + user.id);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.state.users.length == 0) {
        return _react2.default.createElement('span', null);
      } else {
        var nodes = this.state.users.map(function (user, index) {
          return _react2.default.createElement(
            'tr',
            { key: index, onClick: _this2.selectUser.bind(_this2, user) },
            _react2.default.createElement(
              'td',
              null,
              user.first_name
            ),
            _react2.default.createElement(
              'td',
              null,
              user.last_name
            ),
            _react2.default.createElement(
              'td',
              null,
              user.email
            )
          );
        });

        return _react2.default.createElement(
          'div',
          { className: 'Content-panel' },
          _react2.default.createElement(
            'div',
            { className: 'table-responsive' },
            _react2.default.createElement(
              'table',
              { className: 'table role-manager' },
              _react2.default.createElement(
                'thead',
                null,
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'th',
                    null,
                    'Firstname'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Lastname'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Email'
                  )
                )
              ),
              _react2.default.createElement(
                'tbody',
                { className: 'auth-table-body' },
                nodes
              )
            )
          )
        );
      }
    }
  }]);

  return RoleManager;
})(_react2.default.Component);

exports.default = RoleManager;

},{"../../API":1,"../../helpers/AuthHelper":87,"history":113,"react":"react","underscore":"underscore"}],19:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _underscore = require('underscore');

var _API = require('../../API');

var _API2 = _interopRequireDefault(_API);

var _AuthHelper = require('../../helpers/AuthHelper');

var _AuthHelper2 = _interopRequireDefault(_AuthHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var self;

var RoleManagerUser = (function (_React$Component) {
  _inherits(RoleManagerUser, _React$Component);

  function RoleManagerUser(props) {
    _classCallCheck(this, RoleManagerUser);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RoleManagerUser).call(this, props));

    _this.state = { user: {}, isPublisher: false, isAdmin: false };
    return _this;
  }

  _createClass(RoleManagerUser, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      self = this;
      _API2.default.getUser(this.props.params.id).then(function (viewmodel) {
        var isAdmin = _AuthHelper2.default.isUserAdmin(viewmodel.userRoles);
        var isPublisher = _AuthHelper2.default.isUserPublisher(viewmodel.userRoles);

        self.setState({ user: viewmodel.user, isAdmin: isAdmin, isPublisher: isPublisher });
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
    }
  }, {
    key: 'submit',
    value: function submit(event) {
      var userRoles = [];
      if (this.state.isAdmin) {
        userRoles.push(2); //TODO: get admin role id from helper
      }
      if (this.state.isPublisher) {
        userRoles.push(1); //TODO: get publisher role id from helper
      }

      var userViewmodel = { user: this.state.user, userRoles: userRoles };

      _API2.default.saveUser(userViewmodel).then(function () {
        self.props.history.pushState(null, '/auth/role-manager');
      });
    }
  }, {
    key: 'onEmailChange',
    value: function onEmailChange(event) {
      this.state.user.email = event.target.value;
      this.setState({ user: this.state.user });
    }
  }, {
    key: 'onAdminRoleChange',
    value: function onAdminRoleChange(event) {
      this.state.isAdmin = event.target.checked;
      this.setState({ isAdmin: this.state.isAdmin });
    }
  }, {
    key: 'onPublisherRoleChange',
    value: function onPublisherRoleChange(event) {
      this.state.isPublisher = event.target.checked;
      this.setState({ isPublisher: this.state.isPublisher });
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.state.user) {
        return _react2.default.createElement('span', null);
      } else {
        return _react2.default.createElement(
          'div',
          { className: 'Content-panel' },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                null,
                'Email'
              ),
              _react2.default.createElement('input', { type: 'text', className: 'form-control', name: 'email', value: this.state.user.email, onChange: this.onEmailChange.bind(this) })
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                null,
                'Admin'
              ),
              _react2.default.createElement('input', { className: 'form-control', name: 'admin', type: 'checkbox', value: this.state.isAdmin, checked: this.state.isAdmin, onChange: this.onAdminRoleChange.bind(this) })
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                null,
                'Publisher'
              ),
              _react2.default.createElement('input', { className: 'form-control', name: 'publisher', type: 'checkbox', value: this.state.isPublisher, checked: this.state.isPublisher, onChange: this.onPublisherRoleChange.bind(this) })
            ),
            _react2.default.createElement(
              'button',
              { type: 'button', className: 'btn btn-warning btn-lg', onClick: this.submit.bind(this) },
              'Save'
            )
          )
        );
      }
    }
  }]);

  return RoleManagerUser;
})(_react2.default.Component);

exports.default = RoleManagerUser;

},{"../../API":1,"../../helpers/AuthHelper":87,"react":"react","underscore":"underscore"}],20:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Signup = (function (_React$Component) {
  _inherits(Signup, _React$Component);

  function Signup(props) {
    _classCallCheck(this, Signup);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Signup).call(this, props));
  }

  _createClass(Signup, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'col-sm-6 col-sm-offset-2 role-manager' },
          _react2.default.createElement(
            'h1',
            null,
            _react2.default.createElement('span', { className: 'fa fa-sign-in' }),
            ' Signup'
          ),
          _react2.default.createElement(
            'form',
            { action: '/signup', method: 'post' },
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                null,
                'First Name'
              ),
              _react2.default.createElement('input', { type: 'text', className: 'form-control', name: 'firstName' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                null,
                'Last Name'
              ),
              _react2.default.createElement('input', { type: 'text', className: 'form-control', name: 'lastName' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                null,
                'Email'
              ),
              _react2.default.createElement('input', { type: 'text', className: 'form-control', name: 'email' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                null,
                'Password'
              ),
              _react2.default.createElement('input', { type: 'password', className: 'form-control', name: 'password' })
            ),
            _react2.default.createElement(
              'button',
              { type: 'submit', className: 'btn btn-warning btn-lg' },
              'Signup'
            )
          ),
          _react2.default.createElement('hr', null),
          _react2.default.createElement(
            'p',
            null,
            'Already have an account?',
            _react2.default.createElement(
              'a',
              { href: '/login' },
              'Login'
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            'Or go',
            _react2.default.createElement(
              'a',
              { href: '/' },
              ' home'
            ),
            '.'
          )
        )
      );
    }
  }]);

  return Signup;
})(_react2.default.Component);

exports.default = Signup;

},{"react":"react","react-router":"react-router","underscore":"underscore"}],21:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _AuthStore = require('../stores/AuthStore');

var _AuthStore2 = _interopRequireDefault(_AuthStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AuthHeader = (function (_React$Component) {
  _inherits(AuthHeader, _React$Component);

  function AuthHeader(props) {
    _classCallCheck(this, AuthHeader);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AuthHeader).call(this, props));

    _this.state = _AuthStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(AuthHeader, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _AuthStore2.default.listen(this.onChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _AuthStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.isAdmin) {
        return _react2.default.createElement(
          'nav',
          { className: 'navbar navbar-default auth-nav-container' },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'div',
              { id: 'navbar', className: 'navbar-collapse collapse' },
              _react2.default.createElement(
                'ul',
                { className: 'nav navbar-nav' },
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { className: 'auth-link', to: '/auth/role-manager' },
                    'Role Manager'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { className: 'auth-link', to: '/admin/pages' },
                    'Pages Administration'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { className: 'auth-link', to: '/admin/app-settings' },
                    'App Settings'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'pull-right' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { className: 'auth-link', to: '/logout' },
                    'Logout'
                  )
                )
              )
            )
          )
        );
      } else {
        return _react2.default.createElement('span', null);
      }
    }
  }]);

  return AuthHeader;
})(_react2.default.Component);

exports.default = AuthHeader;

},{"../stores/AuthStore":92,"react":"react","react-router":"react-router"}],22:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _AuthStore = require('../stores/AuthStore');

var _AuthStore2 = _interopRequireDefault(_AuthStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditLink = (function (_React$Component) {
  _inherits(EditLink, _React$Component);

  function EditLink(props) {
    _classCallCheck(this, EditLink);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(EditLink).call(this, props));

    _this.authState = _AuthStore2.default.getState();
    return _this;
  }

  _createClass(EditLink, [{
    key: 'render',
    value: function render() {
      if (!this.authState.isPublisher) {
        return _react2.default.createElement('span', null);
      } else {
        return _react2.default.createElement(
          'div',
          { className: !this.props.isEdit ? "Edit-Content-Button" : "hidden" },
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/' + this.props.editLink },
            _react2.default.createElement(
              'button',
              { className: 'btn btn-default' },
              'Edit'
            )
          )
        );
      }
    }
  }]);

  return EditLink;
})(_react2.default.Component);

exports.default = EditLink;

},{"../stores/AuthStore":92,"react":"react","react-router":"react-router"}],23:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _EditLink = require('./EditLink');

var _EditLink2 = _interopRequireDefault(_EditLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EmptyContent = (function (_React$Component) {
  _inherits(EmptyContent, _React$Component);

  function EmptyContent(props) {
    _classCallCheck(this, EmptyContent);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(EmptyContent).call(this, props));
  }

  _createClass(EmptyContent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_EditLink2.default, this.props),
        _react2.default.createElement(
          'div',
          { className: 'Empty-Page-Content' },
          _react2.default.createElement(
            'span',
            null,
            'There is no content yet.'
          )
        )
      );
    }
  }]);

  return EmptyContent;
})(_react2.default.Component);

exports.default = EmptyContent;

},{"./EditLink":22,"react":"react","react-router":"react-router"}],24:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _FooterStore = require('../stores/FooterStore');

var _FooterStore2 = _interopRequireDefault(_FooterStore);

var _FooterActions = require('../actions/FooterActions');

var _FooterActions2 = _interopRequireDefault(_FooterActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = (function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer(props) {
    _classCallCheck(this, Footer);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Footer).call(this, props));

    _this.state = _FooterStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(Footer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _FooterStore2.default.listen(this.onChange);
      //  FooterActions.getTopCharacters();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _FooterStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'footer',
        null,
        _react2.default.createElement('div', { className: 'container' })
      );
    }
  }]);

  return Footer;
})(_react2.default.Component);

exports.default = Footer;

},{"../actions/FooterActions":4,"../stores/FooterStore":93,"react":"react","react-router":"react-router"}],25:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Navigation = require('./Navigation');

var _Navigation2 = _interopRequireDefault(_Navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = (function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).call(this, props));
    //this.state = NavbarStore.getState();
    //this.onChange = this.onChange.bind(this);
  }

  _createClass(Header, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      //  NavbarStore.listen(this.onChange);
      //  NavbarActions.getCharacterCount();

    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      //NavbarStore.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      //  this.setState(state);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'Header' },
        _react2.default.createElement(
          'div',
          { className: 'Header-container' },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_Navigation2.default, { className: 'Header-nav', history: this.props.history })
          ),
          _react2.default.createElement(
            'div',
            { className: 'Header-brand' },
            _react2.default.createElement(
              'span',
              { className: 'Header-brandTxt' },
              'JASON & JENNA'
            )
          ),
          _react2.default.createElement(
            'h2',
            null,
            'November 5th, 2016'
          )
        )
      );
    }
  }]);

  return Header;
})(_react2.default.Component);

exports.default = Header;

},{"./Navigation":27,"react":"react","react-router":"react-router"}],26:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NavbarStore = require('../stores/NavbarStore');

var _NavbarStore2 = _interopRequireDefault(_NavbarStore);

var _NavbarActions = require('../actions/NavbarActions');

var _NavbarActions2 = _interopRequireDefault(_NavbarActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = (function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Home).call(this, props));

    _this.state = _NavbarStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  //this method will only get called when the first page route is loaded. Subsequent page route changes will
  //fire componentWillReceiveProps

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _NavbarStore2.default.listen(this.onChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _NavbarStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'Home-content' },
        _react2.default.createElement(
          'h3',
          null,
          'Middletown, CT'
        )
      );
    }
  }]);

  return Home;
})(_react2.default.Component);

exports.default = Home;

},{"../actions/NavbarActions":6,"../stores/NavbarStore":95,"react":"react"}],27:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _PageStore = require('../stores/PageStore');

var _PageStore2 = _interopRequireDefault(_PageStore);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = (function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar(props) {
    _classCallCheck(this, Navbar);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Navbar).call(this, props));

    _this.state = _PageStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(Navbar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _PageStore2.default.listen(this.onChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _PageStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {}
  }, {
    key: 'render',
    value: function render() {
      if (_underscore._.isEmpty(this.state.pages)) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'Navigation', role: 'navigation' },
            _react2.default.createElement(
              _reactRouter.Link,
              { className: 'Navigation-link', to: '/' },
              'Home'
            )
          )
        );
      } else {
        var nodes = this.state.pages.map(function (page, index) {
          return _react2.default.createElement(
            _reactRouter.Link,
            { key: index, className: 'Navigation-link', to: '/' + page.url },
            page.name
          );
        });

        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'Navigation', role: 'navigation' },
            _react2.default.createElement(
              _reactRouter.Link,
              { className: 'Navigation-link', to: '/' },
              'Home'
            ),
            nodes
          )
        );
      }
    }
  }]);

  return Navbar;
})(_react2.default.Component);

exports.default = Navbar;

},{"../stores/PageStore":96,"react":"react","react-router":"react-router","underscore":"underscore"}],28:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TemplateRenderer = require('../Templates/TemplateRenderer');

var _TemplateRenderer2 = _interopRequireDefault(_TemplateRenderer);

var _underscore = require('underscore');

var _API = require('../../API');

var _API2 = _interopRequireDefault(_API);

var _PageStore = require('../../stores/PageStore');

var _PageStore2 = _interopRequireDefault(_PageStore);

var _PageActions = require('../../actions/PageActions');

var _PageActions2 = _interopRequireDefault(_PageActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var self;

var PageEdit = (function (_React$Component) {
  _inherits(PageEdit, _React$Component);

  function PageEdit(props) {
    _classCallCheck(this, PageEdit);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PageEdit).call(this, props));

    _this.pageId;
    _this.isEdit = true;
    _this.state = { page: {} };
    _this.pageState = _PageStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    self = _this;
    return _this;
  }

  _createClass(PageEdit, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _PageStore2.default.listen(this.onChange);
      this.getPage(this.props);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _PageStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
      this.getPage(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this.getPage(newProps);
    }
  }, {
    key: 'getPage',
    value: function getPage(propsData) {
      var pageUrl = propsData.params.name;

      var pages = this.state.pages || this.pageState.pages;
      if (pages) {
        var page = _underscore._.findWhere(pages, { url: pageUrl });
        if (page) {
          self.setState({ page: page, pages: pages });
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      if (!_underscore._.isEmpty(this.state.pages) && !_underscore._.isEmpty(this.state.page)) {
        var propsData = _underscore._.extend({ isEdit: this.isEdit, editLink: this.state.page.url + '/edit',
          pageId: this.state.page.id, templateId: this.state.page.template_id,
          readOnlyPageLink: this.state.page.url }, this.props);

        return _react2.default.createElement(_TemplateRenderer2.default, propsData);
      } else {
        return _react2.default.createElement('span', null);
      }
    }
  }]);

  return PageEdit;
})(_react2.default.Component);

exports.default = PageEdit;

},{"../../API":1,"../../actions/PageActions":7,"../../stores/PageStore":96,"../Templates/TemplateRenderer":40,"react":"react","underscore":"underscore"}],29:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TemplateRenderer = require('../Templates/TemplateRenderer');

var _TemplateRenderer2 = _interopRequireDefault(_TemplateRenderer);

var _underscore = require('underscore');

var _API = require('../../API');

var _API2 = _interopRequireDefault(_API);

var _PageStore = require('../../stores/PageStore');

var _PageStore2 = _interopRequireDefault(_PageStore);

var _PageActions = require('../../actions/PageActions');

var _PageActions2 = _interopRequireDefault(_PageActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var self;

var PageReadOnly = (function (_React$Component) {
  _inherits(PageReadOnly, _React$Component);

  function PageReadOnly(props) {
    _classCallCheck(this, PageReadOnly);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PageReadOnly).call(this, props));

    _this.pageId;
    _this.isEdit = false;
    _this.state = { page: {} };
    _this.pageState = _PageStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    self = _this;
    return _this;
  }

  _createClass(PageReadOnly, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _PageStore2.default.listen(this.onChange);
      this.getPage(this.props);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _PageStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
      this.getPage(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this.getPage(newProps);
    }
  }, {
    key: 'getPage',
    value: function getPage(propsData) {
      var pageUrl = propsData.params.name;

      var pages = this.state.pages || this.pageState.pages;
      if (pages) {
        var page = _underscore._.findWhere(pages, { url: pageUrl });
        if (page) {
          self.setState({ page: page, pages: pages });
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      if (!_underscore._.isEmpty(this.state.pages) && !_underscore._.isEmpty(this.state.page)) {
        var propsData = _underscore._.extend({ isEdit: this.isEdit, editLink: this.state.page.url + '/edit',
          pageId: this.state.page.id, templateId: this.state.page.template_id }, this.props);

        return _react2.default.createElement(_TemplateRenderer2.default, propsData);
      } else {
        return _react2.default.createElement('span', null);
      }
    }
  }]);

  return PageReadOnly;
})(_react2.default.Component);

exports.default = PageReadOnly;

},{"../../API":1,"../../actions/PageActions":7,"../../stores/PageStore":96,"../Templates/TemplateRenderer":40,"react":"react","underscore":"underscore"}],30:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _underscore = require('underscore');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var self;

var Sortable = (function (_React$Component) {
  _inherits(Sortable, _React$Component);

  function Sortable(props) {
    _classCallCheck(this, Sortable);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Sortable).call(this, props));

    self = _this;
    return _this;
  }

  _createClass(Sortable, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      self.setupSortableTable();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'setupSortableTable',
    value: function setupSortableTable() {
      // ReactDOM.findDOMNode(this) is the <ul>
      // element created in our render method
      $(_reactDom2.default.findDOMNode(this)).sortable({
        items: self.props.sortableItemElement,
        update: self.handleSortableUpdate
      });
    }
  }, {
    key: 'handleSortableUpdate',
    value: function handleSortableUpdate() {
      // update the list items through this new array.
      var newItems = _underscore._.clone(self.props.itemList, true);
      var $node = $(_reactDom2.default.findDOMNode(this));

      // toArray will return a sorted array of item ids:
      var ids = $node.sortable('toArray', { attribute: 'data-id' });

      ids.forEach(function (id, index) {
        var item = _underscore._.findWhere(newItems, { id: parseInt(id) });
        item[self.props.itemPropertyToSortBy] = index;
      });

      // We'll cancel the sortable change and let React reorder the DOM instead:
      $node.sortable('cancel');

      newItems = _underscore._.sortBy(newItems, self.props.itemPropertyToSortBy);

      self.props.setStateForItemList(newItems);
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return Sortable;
})(_react2.default.Component);

exports.default = Sortable;

},{"react":"react","react-dom":"react-dom","underscore":"underscore"}],31:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _BasicTemplateEdit = require('./BasicTemplateEdit');

var _BasicTemplateEdit2 = _interopRequireDefault(_BasicTemplateEdit);

var _BasicTemplateReadOnly = require('./BasicTemplateReadOnly');

var _BasicTemplateReadOnly2 = _interopRequireDefault(_BasicTemplateReadOnly);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BasicTemplate = (function (_React$Component) {
  _inherits(BasicTemplate, _React$Component);

  function BasicTemplate(props) {
    _classCallCheck(this, BasicTemplate);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(BasicTemplate).call(this, props));
  }

  _createClass(BasicTemplate, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      if (this.props.isEdit) {
        return _react2.default.createElement(_BasicTemplateEdit2.default, this.props);
      } else {
        return _react2.default.createElement(_BasicTemplateReadOnly2.default, this.props);
      }
    }
  }]);

  return BasicTemplate;
})(_react2.default.Component);

exports.default = BasicTemplate;

},{"./BasicTemplateEdit":32,"./BasicTemplateReadOnly":33,"react":"react","react-router":"react-router"}],32:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Field = require('../../Widgets/Field/Field');

var _Field2 = _interopRequireDefault(_Field);

var _EmptyContent = require('../../EmptyContent');

var _EmptyContent2 = _interopRequireDefault(_EmptyContent);

var _underscore = require('underscore');

var _WidgetSelectList = require('../../Widgets/WidgetSelectList');

var _WidgetSelectList2 = _interopRequireDefault(_WidgetSelectList);

var _TemplateHelper = require('../TemplateHelper');

var _TemplateHelper2 = _interopRequireDefault(_TemplateHelper);

var _API = require('../../../API');

var _API2 = _interopRequireDefault(_API);

var _Sortable = require('../../Sortable');

var _Sortable2 = _interopRequireDefault(_Sortable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var self;

var BasicTemplateEdit = (function (_React$Component) {
  _inherits(BasicTemplateEdit, _React$Component);

  function BasicTemplateEdit(props) {
    _classCallCheck(this, BasicTemplateEdit);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BasicTemplateEdit).call(this, props));

    _this.templateId = 1;
    _this.state = { contentList: [] };
    _this.maxContentId;
    self = _this;
    return _this;
  }

  _createClass(BasicTemplateEdit, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getContentListForPage(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.getContentListForPage(nextProps);
    }
  }, {
    key: 'setStateForContentList',
    value: function setStateForContentList(newContentList) {
      self.setState({ contentList: newContentList });
    }
  }, {
    key: 'getContentListForPage',
    value: function getContentListForPage(propsData) {
      _API2.default.getContentListForPage(propsData.pageId, propsData.isEdit).then(function (viewmodel) {
        self.setState({ contentList: viewmodel.contentList });
        var contentItemWithMaxId = _underscore._.max(viewmodel.contentList, function (contentItem) {
          return contentItem.id;
        });
        self.maxContentId = contentItemWithMaxId.id;
      });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
    }
  }, {
    key: 'submit',
    value: function submit(event) {
      _API2.default.saveContentListForPage(self.state.contentList, self.props.pageId).then(function () {
        self.props.history.pushState(null, '/' + self.props.readOnlyPageLink);
      });
    }
  }, {
    key: 'onAddWidgetToContentList',
    value: function onAddWidgetToContentList(factoryInstance) {
      self.maxContentId++;
      factoryInstance.id = self.maxContentId;

      self.state.contentList.push(factoryInstance);
      _TemplateHelper2.default.setNewSortOrderForAllListItems(self.state.contentList);
      self.setStateForContentList(self.state.contentList);
    }
  }, {
    key: 'updateContent',
    value: function updateContent(index, event) {
      self.state.contentList[index].value = event.target.value;
      self.setStateForContentList(self.state.contentList);
    }
  }, {
    key: 'removeContent',
    value: function removeContent(index, event) {
      self.state.contentList.splice(index, 1);
      self.setStateForContentList(self.state.contentList);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var widgetListPropsData = { onAddWidgetToContentList: this.onAddWidgetToContentList.bind(this),
        templateId: this.templateId, row_number: 1, column_number: 1 };

      if (_underscore._.isEmpty(self.state.contentList)) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_WidgetSelectList2.default, widgetListPropsData),
          _react2.default.createElement(_EmptyContent2.default, this.props)
        );
      } else {
        var nodes = self.state.contentList.map(function (contentItem, index) {
          var propsData = { contentItem: contentItem,
            onChange: _this2.updateContent.bind(_this2, index),
            onRemove: _this2.removeContent.bind(_this2, index) };

          var fieldsPropData = _underscore._.extend(propsData, self.props);

          return _react2.default.createElement(
            'div',
            { key: contentItem.sort_order, className: 'ContentItem', 'data-id': contentItem.id },
            _react2.default.createElement(_Field2.default, fieldsPropData)
          );
        });

        var sortableProps = _underscore._.extend({ sortableItemElement: '.ContentItem', itemList: self.state.contentList,
          itemPropertyToSortBy: 'sort_order', setStateForItemList: self.setStateForContentList.bind(this) }, this.props);

        return _react2.default.createElement(
          'div',
          { className: 'Content-panel basic-template-edit' },
          _react2.default.createElement(
            'div',
            { className: 'Content-container Content-centered-container' },
            _react2.default.createElement(_WidgetSelectList2.default, widgetListPropsData),
            _react2.default.createElement(
              _Sortable2.default,
              sortableProps,
              _react2.default.createElement(
                'div',
                null,
                nodes
              )
            ),
            _react2.default.createElement(
              'div',
              { className: this.state.contentList.length > 0 ? 'form-group' : 'form-group hidden' },
              _react2.default.createElement(
                'button',
                { type: 'submit', onClick: this.submit, className: 'btn btn-primary' },
                'Save'
              )
            )
          )
        );
      }
    }
  }]);

  return BasicTemplateEdit;
})(_react2.default.Component);

exports.default = BasicTemplateEdit;

},{"../../../API":1,"../../EmptyContent":23,"../../Sortable":30,"../../Widgets/Field/Field":44,"../../Widgets/WidgetSelectList":85,"../TemplateHelper":39,"react":"react","react-router":"react-router","underscore":"underscore"}],33:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Field = require('../../Widgets/Field/Field');

var _Field2 = _interopRequireDefault(_Field);

var _EmptyContent = require('../../EmptyContent');

var _EmptyContent2 = _interopRequireDefault(_EmptyContent);

var _underscore = require('underscore');

var _EditLink = require('../../EditLink');

var _EditLink2 = _interopRequireDefault(_EditLink);

var _API = require('../../../API');

var _API2 = _interopRequireDefault(_API);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var self;

var BasicTemplateReadOnly = (function (_React$Component) {
  _inherits(BasicTemplateReadOnly, _React$Component);

  function BasicTemplateReadOnly(props) {
    _classCallCheck(this, BasicTemplateReadOnly);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BasicTemplateReadOnly).call(this, props));

    _this.templateId = 1;
    _this.state = { contentList: [] };
    self = _this;
    return _this;
  }

  _createClass(BasicTemplateReadOnly, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _API2.default.getContentListForPage(this.props.pageId, this.props.isEdit).then(function (viewmodel) {
        self.setStateForContentList(viewmodel.contentList);
      });
    }

    //need to get page in this method since componentDidMount does not get called when
    //changing routes to another page

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      _API2.default.getContentListForPage(nextProps.pageId, nextProps.isEdit).then(function (viewmodel) {
        self.setStateForContentList(viewmodel.contentList);
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'setStateForContentList',
    value: function setStateForContentList(newContentList) {
      self.setState({ contentList: newContentList });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (_underscore._.isEmpty(this.state.contentList)) {
        var emptyContentProps = { editLink: this.props.editLink };
        return _react2.default.createElement(_EmptyContent2.default, emptyContentProps);
      } else {
        var nodes = this.state.contentList.map(function (contentItem, index) {
          var propsData = _underscore._.extend({ contentItem: contentItem, isEdit: _this2.props.isEdit }, _this2.props);

          return _react2.default.createElement(
            'div',
            { key: contentItem.sort_order },
            _react2.default.createElement(_Field2.default, propsData)
          );
        });

        return _react2.default.createElement(
          'div',
          { className: 'Content-panel' },
          _react2.default.createElement(
            'div',
            { className: 'Content-container Content-centered-container' },
            _react2.default.createElement(_EditLink2.default, this.props),
            nodes
          )
        );
      }
    }
  }]);

  return BasicTemplateReadOnly;
})(_react2.default.Component);

exports.default = BasicTemplateReadOnly;

},{"../../../API":1,"../../EditLink":22,"../../EmptyContent":23,"../../Widgets/Field/Field":44,"react":"react","react-router":"react-router","underscore":"underscore"}],34:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _EmptyContent = require('../../EmptyContent');

var _EmptyContent2 = _interopRequireDefault(_EmptyContent);

var _ListGridGroup = require('../../Widgets/ListGridItem/ListGridGroup');

var _ListGridGroup2 = _interopRequireDefault(_ListGridGroup);

var _ListGridGroupFactory = require('../../Widgets/ListGridItem/ListGridGroupFactory');

var _ListGridGroupFactory2 = _interopRequireDefault(_ListGridGroupFactory);

var _FieldHelper = require('../../Widgets/Field/FieldHelper');

var _FieldHelper2 = _interopRequireDefault(_FieldHelper);

var _TemplateHelper = require('../TemplateHelper');

var _TemplateHelper2 = _interopRequireDefault(_TemplateHelper);

var _underscore = require('underscore');

var _TitleFactory = require('../../Widgets/Title/TitleFactory');

var _TitleFactory2 = _interopRequireDefault(_TitleFactory);

var _API = require('../../../API');

var _API2 = _interopRequireDefault(_API);

var _EditLink = require('../../EditLink');

var _EditLink2 = _interopRequireDefault(_EditLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var self;

var ListGridTemplate = (function (_React$Component) {
  _inherits(ListGridTemplate, _React$Component);

  function ListGridTemplate(props) {
    _classCallCheck(this, ListGridTemplate);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ListGridTemplate).call(this, props));

    _this.state = { contentGroupList: [], contentList: [] };
    _this.templateId = 4;
    self = _this;
    return _this;
  }

  _createClass(ListGridTemplate, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _API2.default.getContentListForPage(this.props.pageId, this.props.isEdit).then(function (viewmodel) {
        self.setState({ contentList: viewmodel.contentList });
        self.buildContentGroupList();
        self.setStateForContentGroupList();
      });
    }

    //need to get page in this method since componentDidMount does not get called when
    //changing routes to another page

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      _API2.default.getContentListForPage(nextProps.pageId, nextProps.isEdit).then(function (viewmodel) {
        self.setState({ contentList: viewmodel.contentList });
        self.buildContentGroupList();
        self.setStateForContentGroupList();
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'setStateForContentList',
    value: function setStateForContentList(newContentList) {
      this.setState({ contentList: newContentList });
    }
  }, {
    key: 'setStateForContentGroupList',
    value: function setStateForContentGroupList() {
      var newContentList = this.buildContentList();

      this.setState({ contentGroupList: this.state.contentGroupList });
      this.setStateForContentList(newContentList);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
    }
  }, {
    key: 'submit',
    value: function submit(event) {
      _API2.default.saveContentListForPage(this.state.contentList, this.props.pageId).then(function () {
        self.props.history.pushState(null, '/' + self.props.readOnlyPageLink);
      });
    }
  }, {
    key: 'buildContentGroupList',
    value: function buildContentGroupList() {
      var contentGroupIndex;

      _underscore._.each(this.state.contentList, function (contentItem, index) {
        if (_FieldHelper2.default.isParentListItem(contentItem)) {
          var factory = new _ListGridGroupFactory2.default(contentItem);
          var contentGroup = factory.create();
          self.state.contentGroupList.push(contentGroup);

          // want to initialize group index to be 0 for the first parent list item, and then increment
          // for subsequent parent list items
          if (typeof contentGroupIndex === 'number') {
            contentGroupIndex++;
          } else {
            contentGroupIndex = 0;
          }
        } else {
          var contentGroup = self.state.contentGroupList[contentGroupIndex];
          self.buildRowsAndColumnsForGroup(contentGroup, contentItem);
          contentGroup.rows[contentItem.row_number].columns[contentItem.column_number].contentList.push(contentItem);
        }
      });
    }
  }, {
    key: 'buildRowsAndColumnsForGroup',
    value: function buildRowsAndColumnsForGroup(contentGroup, contentItem) {
      var row = contentGroup.rows[contentItem.row_number];
      if (!row) {
        var newRow = { columns: [] };
        contentGroup.rows.push(newRow);
      }

      var column = contentGroup.rows[contentItem.row_number].columns[contentItem.column_number];
      if (!column) {
        var newColumn = { contentList: [] };
        contentGroup.rows[contentItem.row_number].columns.push(newColumn);
      }
    }
  }, {
    key: 'addParentListItem',
    value: function addParentListItem() {
      var sortOrder = this.state.contentList.length + 1;
      var parentIndex = null;
      var row_number = 1,
          column_number = 1;
      var factory = new _TitleFactory2.default(sortOrder, 'List Parent Item', 'List Parent Item', this.templateId, parentIndex, row_number, column_number);
      var widget = factory.create();

      var listGridGroupFactory = new _ListGridGroupFactory2.default(widget);
      var contentGroup = listGridGroupFactory.create();
      this.state.contentGroupList.push(contentGroup);

      this.setStateForContentGroupList();
    }
  }, {
    key: 'buildContentList',
    value: function buildContentList() {
      var newContentList = [];

      _underscore._.each(this.state.contentGroupList, function (group, index) {
        var parentListItem = group.parentListItem;
        newContentList.push(parentListItem);

        _underscore._.each(group.rows, function (row, index) {
          _underscore._.each(row.columns, function (column, index) {
            _underscore._.each(column.contentList, function (childContentItem, index) {
              newContentList.push(childContentItem);
            });
          });
        });
      });

      return newContentList;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (_underscore._.isEmpty(this.state.contentGroupList)) {
        var emptyContentProps = _underscore._.extend({ editLink: this.props.editLink }, this.props);

        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: !this.props.isEdit ? "hidden" : "" },
            _react2.default.createElement(
              'button',
              { className: 'btn btn-primary', onClick: this.addParentListItem.bind(this) },
              'Add Group'
            )
          ),
          _react2.default.createElement(_EmptyContent2.default, emptyContentProps)
        );
      } else {
        var nodes = this.state.contentGroupList.map(function (contentGroupItem, index) {
          var propsData = {
            contentGroupList: _this2.state.contentGroupList,
            contentGroupItem: contentGroupItem, isEdit: _this2.props.isEdit,
            setStateForContentGroupList: _this2.setStateForContentGroupList.bind(_this2, index),
            templateId: _this2.templateId,
            contentGroupIndex: index,
            contentList: _this2.state.contentList,
            setStateForContentList: _this2.setStateForContentList.bind(_this2)
          };
          var listItemProps = _underscore._.extend(propsData, _this2.props);

          return _react2.default.createElement(
            'div',
            { key: index },
            _react2.default.createElement(_ListGridGroup2.default, listItemProps)
          );
        });

        return _react2.default.createElement(
          'form',
          { onSubmit: this.handleSubmit.bind(this) },
          _react2.default.createElement(
            'div',
            { className: 'List-page' },
            _react2.default.createElement(
              'div',
              { className: 'row List-container' },
              _react2.default.createElement(
                'div',
                { className: 'Content-panel List-Grid-Template' },
                _react2.default.createElement(_EditLink2.default, this.props),
                _react2.default.createElement(
                  'div',
                  { className: !this.props.isEdit ? "hidden" : "" },
                  _react2.default.createElement(
                    'button',
                    { className: 'btn btn-primary', onClick: this.addParentListItem.bind(this) },
                    'Add Group'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: !this.props.isEdit ? 'List-Page-Read-Only' : 'List-page' },
                  nodes
                ),
                _react2.default.createElement(
                  'div',
                  { className: this.state.contentList.length > 0 && this.props.isEdit ? 'form-group' : 'form-group hidden' },
                  _react2.default.createElement(
                    'button',
                    { type: 'submit', onClick: this.submit.bind(this), className: 'btn btn-primary' },
                    'Save'
                  )
                )
              )
            )
          )
        );
      }
    }
  }]);

  return ListGridTemplate;
})(_react2.default.Component);

exports.default = ListGridTemplate;

},{"../../../API":1,"../../EditLink":22,"../../EmptyContent":23,"../../Widgets/Field/FieldHelper":46,"../../Widgets/ListGridItem/ListGridGroup":57,"../../Widgets/ListGridItem/ListGridGroupFactory":59,"../../Widgets/Title/TitleFactory":78,"../TemplateHelper":39,"react":"react","react-router":"react-router","underscore":"underscore"}],35:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _EmptyContent = require('../../EmptyContent');

var _EmptyContent2 = _interopRequireDefault(_EmptyContent);

var _SubListItem = require('../../Widgets/ListItem/SubListItem');

var _SubListItem2 = _interopRequireDefault(_SubListItem);

var _ParentListItem = require('../../Widgets/ListItem/ParentListItem');

var _ParentListItem2 = _interopRequireDefault(_ParentListItem);

var _FieldHelper = require('../../Widgets/Field/FieldHelper');

var _FieldHelper2 = _interopRequireDefault(_FieldHelper);

var _TemplateHelper = require('../TemplateHelper');

var _TemplateHelper2 = _interopRequireDefault(_TemplateHelper);

var _underscore = require('underscore');

var _TitleFactory = require('../../Widgets/Title/TitleFactory');

var _TitleFactory2 = _interopRequireDefault(_TitleFactory);

var _EditLink = require('../../EditLink');

var _EditLink2 = _interopRequireDefault(_EditLink);

var _API = require('../../../API');

var _API2 = _interopRequireDefault(_API);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var self;

var ListTemplate = (function (_React$Component) {
  _inherits(ListTemplate, _React$Component);

  function ListTemplate(props) {
    _classCallCheck(this, ListTemplate);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ListTemplate).call(this, props));

    _this.templateId = 3;
    _this.state = { contentList: [] };
    _this.isContentListRetrieved = false;
    self = _this;
    return _this;
  }

  _createClass(ListTemplate, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _API2.default.getContentListForPage(this.props.pageId, this.props.isEdit).then(function (viewmodel) {
        self.setStateForContentList(viewmodel.contentList);
      });
    }

    //need to get page in this method since componentDidMount does not get called when
    //changing routes to another page

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      _API2.default.getContentListForPage(nextProps.pageId, nextProps.isEdit).then(function (viewmodel) {
        self.setStateForContentList(viewmodel.contentList);
      });
    }
  }, {
    key: 'setStateForContentList',
    value: function setStateForContentList(newContentList) {
      self.setState({ contentList: newContentList });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
    }
  }, {
    key: 'submit',
    value: function submit(event) {
      _API2.default.saveContentListForPage(self.state.contentList, self.props.pageId).then(function () {
        self.props.history.pushState(null, '/' + self.props.readOnlyPageLink);
      });
    }
  }, {
    key: 'updateContent',
    value: function updateContent(index, event) {
      this.state.contentList[index].value = event.target.value;
      this.setStateForContentList(this.state.contentList);
    }
  }, {
    key: 'removeContent',
    value: function removeContent(index, event) {
      this.state.contentList.splice(index, 1);
      _TemplateHelper2.default.setNewSortOrderForAllListItems(this.state.contentList);
      this.setStateForContentList(this.state.contentList);
    }
  }, {
    key: 'addParentListItem',
    value: function addParentListItem() {
      var sortOrder = this.state.contentList.length + 1;
      var factory = new _TitleFactory2.default(sortOrder, 'List Parent Item', 'List Parent Item', this.templateId, null, 1, 1);
      var widget = factory.create();

      this.state.contentList.push(widget);
      this.setStateForContentList(this.state.contentList);
    }
  }, {
    key: 'removeContentAndItsSubListItems',
    value: function removeContentAndItsSubListItems(index, event) {
      var parentIndex = index + 1;

      var itemsToRemove = _underscore._.filter(this.state.contentList, function (item) {
        return item.parent_index === parentIndex || item.sort_order === parentIndex;
      });

      var itemsToKeep = _underscore._.filter(this.state.contentList, function (item) {
        return item.parent_index != parentIndex && item.sort_order != parentIndex;
      });

      this.setNewSortOrderForChildrenForParent(itemsToKeep, itemsToRemove);

      this.state.contentList = itemsToKeep;
      this.setState({ thingsToDo: this.state.contentList });

      //want to always maintain at miniumum one list item on the page
      if (this.state.contentList.length == 0) {
        this.addParentListItem();
      }
    }
  }, {
    key: 'setNewSortOrderForChildrenForParent',
    value: function setNewSortOrderForChildrenForParent(itemsToKeep, itemsToRemove) {
      var lastItemIndexToRemove = itemsToRemove[itemsToRemove.length - 1].sort_order;

      for (var i = 0; i < itemsToKeep.length; i++) {
        var item = itemsToKeep[i];

        //update parent index for only sub list items past the index of the last content item removed
        if (item.sort_order > lastItemIndexToRemove) {
          if (_FieldHelper2.default.isSubListItem(item)) {
            item.parent_index -= itemsToRemove.length;
          }
        }

        item.sort_order = i + 1;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (_underscore._.isEmpty(this.state.contentList)) {
        var emptyContentProps = _underscore._.extend({ editLink: this.props.editLink }, this.props);
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: !this.props.isEdit ? "hidden" : "" },
            _react2.default.createElement(
              'button',
              { className: 'btn btn-primary', onClick: this.addParentListItem.bind(this) },
              'Add'
            )
          ),
          _react2.default.createElement(_EmptyContent2.default, emptyContentProps)
        );
      } else {
        var subListItemIndex = 0;
        var nodes = this.state.contentList.map(function (contentItem, index) {
          var propsData = {
            contentItem: contentItem, isEdit: _this2.props.isEdit,
            contentList: _this2.state.contentList,
            setStateForContentList: _this2.setStateForContentList.bind(_this2),
            onRemove: _this2.removeContent.bind(_this2, index),
            onChange: _this2.updateContent.bind(_this2, index),
            templateId: _this2.templateId,
            index: index
          };
          var listItemProps = _underscore._.extend(propsData, _this2.props);

          //override onRemove function for list item if lit item is parent list item
          if (_FieldHelper2.default.isSubListItem(contentItem)) {
            subListItemIndex++;
            listItemProps.subListItemIndex = subListItemIndex;
            return _react2.default.createElement(
              'div',
              { key: index },
              _react2.default.createElement(_SubListItem2.default, listItemProps)
            );
          } else {
            listItemProps.onRemove = _this2.removeContentAndItsSubListItems.bind(_this2, index);
            subListItemIndex = 0;
            return _react2.default.createElement(
              'div',
              { key: index },
              _react2.default.createElement(_ParentListItem2.default, listItemProps)
            );
          }
        });

        return _react2.default.createElement(
          'form',
          { onSubmit: this.handleSubmit.bind(this) },
          _react2.default.createElement(
            'div',
            { className: 'List-page' },
            _react2.default.createElement(
              'div',
              { className: 'row List-container' },
              _react2.default.createElement(
                'div',
                { className: 'Content-panel List-Grid-Template List-template' },
                _react2.default.createElement(_EditLink2.default, this.props),
                _react2.default.createElement(
                  'div',
                  { className: !this.props.isEdit ? "hidden" : "" },
                  _react2.default.createElement(
                    'button',
                    { className: 'btn btn-primary', onClick: this.addParentListItem.bind(this) },
                    'Add Group'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: !this.props.isEdit ? 'List-Page-Read-Only' : 'List-page' },
                  nodes
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: this.state.contentList.length > 0 && this.props.isEdit ? 'form-group' : 'form-group hidden' },
              _react2.default.createElement(
                'button',
                { type: 'submit', onClick: this.submit.bind(this), className: 'btn btn-primary' },
                'Save'
              )
            )
          )
        );
      }
    }
  }]);

  return ListTemplate;
})(_react2.default.Component);

exports.default = ListTemplate;

},{"../../../API":1,"../../EditLink":22,"../../EmptyContent":23,"../../Widgets/Field/FieldHelper":46,"../../Widgets/ListItem/ParentListItem":64,"../../Widgets/ListItem/SubListItem":67,"../../Widgets/Title/TitleFactory":78,"../TemplateHelper":39,"react":"react","react-router":"react-router","underscore":"underscore"}],36:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _PhotoAlbumTemplateEdit = require('./PhotoAlbumTemplateEdit');

var _PhotoAlbumTemplateEdit2 = _interopRequireDefault(_PhotoAlbumTemplateEdit);

var _PhotoAlbumTemplateReadOnly = require('./PhotoAlbumTemplateReadOnly');

var _PhotoAlbumTemplateReadOnly2 = _interopRequireDefault(_PhotoAlbumTemplateReadOnly);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PhotoAlbumTemplate = (function (_React$Component) {
  _inherits(PhotoAlbumTemplate, _React$Component);

  function PhotoAlbumTemplate(props) {
    _classCallCheck(this, PhotoAlbumTemplate);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(PhotoAlbumTemplate).call(this, props));
  }

  _createClass(PhotoAlbumTemplate, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      if (this.props.isEdit) {
        return _react2.default.createElement(_PhotoAlbumTemplateEdit2.default, this.props);
      } else {
        return _react2.default.createElement(_PhotoAlbumTemplateReadOnly2.default, this.props);
      }
    }
  }]);

  return PhotoAlbumTemplate;
})(_react2.default.Component);

exports.default = PhotoAlbumTemplate;

},{"./PhotoAlbumTemplateEdit":37,"./PhotoAlbumTemplateReadOnly":38,"react":"react","react-router":"react-router"}],37:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _API = require('../../../API');

var _API2 = _interopRequireDefault(_API);

var _reactRouter = require('react-router');

var _Field = require('../../Widgets/Field/Field');

var _Field2 = _interopRequireDefault(_Field);

var _FieldHelper = require('../../Widgets/Field/FieldHelper');

var _FieldHelper2 = _interopRequireDefault(_FieldHelper);

var _EmptyContent = require('../../EmptyContent');

var _EmptyContent2 = _interopRequireDefault(_EmptyContent);

var _underscore = require('underscore');

var _ImageWidget = require('../../Widgets/Image/ImageWidget');

var _ImageWidget2 = _interopRequireDefault(_ImageWidget);

var _ImageFactory = require('../../Widgets/Image/ImageFactory');

var _ImageFactory2 = _interopRequireDefault(_ImageFactory);

var _Sortable = require('../../Sortable');

var _Sortable2 = _interopRequireDefault(_Sortable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var self;

var PhotoAlbumTemplateEdit = (function (_React$Component) {
  _inherits(PhotoAlbumTemplateEdit, _React$Component);

  function PhotoAlbumTemplateEdit(props) {
    _classCallCheck(this, PhotoAlbumTemplateEdit);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PhotoAlbumTemplateEdit).call(this, props));

    _this.templateId = 2;
    _this.state = { contentList: [] };
    _this.maxContentId;
    self = _this;
    return _this;
  }

  _createClass(PhotoAlbumTemplateEdit, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getContentListForPage(this.props);
    }

    //need to get page in this method since componentDidMount does not get called when
    //changing routes to another page

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.getContentListForPage(nextProps);
    }
  }, {
    key: 'getContentListForPage',
    value: function getContentListForPage(propsData) {
      _API2.default.getContentListForPage(propsData.pageId, propsData.isEdit).then(function (viewmodel) {
        self.setState({ contentList: viewmodel.contentList });
        var contentItemWithMaxId = _underscore._.max(viewmodel.contentList, function (contentItem) {
          return contentItem.id;
        });
        self.maxContentId = contentItemWithMaxId.id;
      });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
    }
  }, {
    key: 'submit',
    value: function submit(event) {
      _API2.default.saveContentListForPage(self.state.contentList, self.props.pageId).then(function () {
        self.props.history.pushState(null, '/' + self.props.readOnlyPageLink);
      });
    }
  }, {
    key: 'createImage',
    value: function createImage(event) {
      var sortOrder = this.state.contentList.length + 1;

      var imageFactory = new _ImageFactory2.default(sortOrder, 'Our Story Image', 'Our Story Image');
      var image = imageFactory.create();
      self.maxContentId++;
      image.id = self.maxContentId;
      image.sort_order = self.state.contentList.length;

      this.state.contentList.push(image);
      self.setState({ contentList: this.state.contentList });
    }
  }, {
    key: 'updateContent',
    value: function updateContent(index, event) {
      this.state.contentList[index].value = event.target.value;
      self.setState({ contentList: this.state.contentList });
    }
  }, {
    key: 'removeContent',
    value: function removeContent(index, event) {
      this.state.contentList.splice(index, 1);
      self.setState({ contentList: this.state.contentList });
    }
  }, {
    key: 'setStateForContentList',
    value: function setStateForContentList(newContentList) {
      self.setState({ contentList: newContentList });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var nodes = this.state.contentList.map(function (contentItem, index) {
        var propsData = { contentItem: contentItem, isEdit: true, imageSize: 'small',
          onChange: _this2.updateContent.bind(_this2, index),
          onRemove: _this2.removeContent.bind(_this2, index) };

        if (_FieldHelper2.default.isImage(contentItem)) {
          return _react2.default.createElement(
            'div',
            { key: contentItem.sort_order, 'data-id': contentItem.id, className: 'Photo' },
            _react2.default.createElement(_Field2.default, propsData)
          );
        } else {
          throw 'content type should be image.';
        }
      });

      var sortableProps = _underscore._.extend({ sortableItemElement: '.Photo', itemList: self.state.contentList,
        itemPropertyToSortBy: 'sort_order', setStateForItemList: self.setStateForContentList.bind(this) }, this.props);

      return _react2.default.createElement(
        'div',
        { className: 'Content-panel Photo-album-template' },
        _react2.default.createElement(
          'div',
          { className: 'Content-container' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-sm-3' },
              _react2.default.createElement(
                'div',
                { className: 'form-group' },
                _react2.default.createElement(
                  'button',
                  { className: 'btn btn-primary', onClick: this.createImage.bind(this) },
                  'Create Image'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'Photo-album-container-edit' },
            _react2.default.createElement(
              _Sortable2.default,
              sortableProps,
              _react2.default.createElement(
                'div',
                null,
                nodes
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: this.state.contentList.length > 0 ? 'form-group' : 'form-group hidden' },
            _react2.default.createElement(
              'button',
              { type: 'submit', onClick: this.submit, className: 'btn btn-primary' },
              'Save'
            )
          )
        )
      );
    }
  }]);

  return PhotoAlbumTemplateEdit;
})(_react2.default.Component);

exports.default = PhotoAlbumTemplateEdit;

},{"../../../API":1,"../../EmptyContent":23,"../../Sortable":30,"../../Widgets/Field/Field":44,"../../Widgets/Field/FieldHelper":46,"../../Widgets/Image/ImageFactory":53,"../../Widgets/Image/ImageWidget":54,"react":"react","react-router":"react-router","underscore":"underscore"}],38:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _API = require('../../../API');

var _API2 = _interopRequireDefault(_API);

var _reactRouter = require('react-router');

var _Field = require('../../Widgets/Field/Field');

var _Field2 = _interopRequireDefault(_Field);

var _FieldHelper = require('../../Widgets/Field/FieldHelper');

var _FieldHelper2 = _interopRequireDefault(_FieldHelper);

var _EmptyContent = require('../../EmptyContent');

var _EmptyContent2 = _interopRequireDefault(_EmptyContent);

var _underscore = require('underscore');

var _LongDescription = require('../../Widgets/LongDescription/LongDescription');

var _LongDescription2 = _interopRequireDefault(_LongDescription);

var _ImageWidget = require('../../Widgets/Image/ImageWidget');

var _ImageWidget2 = _interopRequireDefault(_ImageWidget);

var _Title = require('../../Widgets/Title/Title');

var _Title2 = _interopRequireDefault(_Title);

var _ShortDescription = require('../../Widgets/ShortDescription/ShortDescription');

var _ShortDescription2 = _interopRequireDefault(_ShortDescription);

var _Carousel = require('../../Widgets/Carousel/Carousel');

var _Carousel2 = _interopRequireDefault(_Carousel);

var _EditLink = require('../../EditLink');

var _EditLink2 = _interopRequireDefault(_EditLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var self;

var PhotoAlbumTemplateReadOnly = (function (_React$Component) {
  _inherits(PhotoAlbumTemplateReadOnly, _React$Component);

  function PhotoAlbumTemplateReadOnly(props) {
    _classCallCheck(this, PhotoAlbumTemplateReadOnly);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PhotoAlbumTemplateReadOnly).call(this, props));

    _this.templateId = 2;
    _this.state = { contentList: [], selectedPhoto: 1 };
    self = _this;
    return _this;
  }

  _createClass(PhotoAlbumTemplateReadOnly, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _API2.default.getContentListForPage(this.props.pageId, this.props.isEdit).then(function (viewmodel) {
        self.setStateForContentList(viewmodel.contentList);
      });
    }

    //need to get page in this method since componentDidMount does not get called when
    //changing routes to another page

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      _API2.default.getContentListForPage(nextProps.pageId, nextProps.isEdit).then(function (viewmodel) {
        self.setStateForContentList(viewmodel.contentList);
      });
    }
  }, {
    key: 'setStateForContentList',
    value: function setStateForContentList(newContentList) {
      self.setState({ contentList: newContentList });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'closeModal',
    value: function closeModal() {
      //this.setState({ isModalOpen: false });
      $('#largeCarouselModal').modal('hide');
    }
  }, {
    key: 'openModal',
    value: function openModal(index) {
      //  this.setState({isModalOpen: true});
      //  this.setState({isModalOpen: true});
      //this.props.selectedPhoto = index || 1;
      $('#largeCarouselModal').modal('show');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var propsData = _underscore._.extend({ selectedPhoto: this.state.selectedPhoto, contentList: this.state.contentList,
        imageSize: 'small' }, this.props);

      var nodes = this.state.contentList.map(function (contentItem, index) {
        var fieldPropsData = _underscore._.extend({ contentItem: contentItem }, propsData);
        return _react2.default.createElement(
          'div',
          { key: contentItem.sort_order, className: 'Photo', onClick: _this2.openModal.bind(_this2, index) },
          _react2.default.createElement(_Field2.default, fieldPropsData)
        );
      });

      if (_underscore._.isEmpty(this.state.contentList)) {
        return _react2.default.createElement(_EmptyContent2.default, propsData);
      } else {
        return _react2.default.createElement(
          'div',
          { className: 'Content-panel' },
          _react2.default.createElement(_EditLink2.default, this.props),
          _react2.default.createElement(
            'div',
            { className: 'Photo-album-container-read-only' },
            nodes
          ),
          _react2.default.createElement(
            'div',
            { id: 'largeCarouselModal', className: 'modal fade', role: 'dialog' },
            _react2.default.createElement(
              'div',
              { className: 'modal-dialog' },
              _react2.default.createElement(
                'div',
                { className: 'modal-content' },
                _react2.default.createElement(
                  'div',
                  { className: 'modal-header' },
                  _react2.default.createElement(
                    'button',
                    { type: 'button', className: 'close', 'data-dismiss': 'modal' },
                    '×'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'modal-body' },
                  _react2.default.createElement(_Carousel2.default, propsData)
                )
              )
            )
          )
        );
      }
    }
  }]);

  return PhotoAlbumTemplateReadOnly;
})(_react2.default.Component);

exports.default = PhotoAlbumTemplateReadOnly;

},{"../../../API":1,"../../EditLink":22,"../../EmptyContent":23,"../../Widgets/Carousel/Carousel":41,"../../Widgets/Field/Field":44,"../../Widgets/Field/FieldHelper":46,"../../Widgets/Image/ImageWidget":54,"../../Widgets/LongDescription/LongDescription":68,"../../Widgets/ShortDescription/ShortDescription":72,"../../Widgets/Title/Title":76,"react":"react","react-router":"react-router","underscore":"underscore"}],39:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _underscore = require('underscore');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TemplateHelper = (function () {
  function TemplateHelper() {
    _classCallCheck(this, TemplateHelper);
  }

  _createClass(TemplateHelper, null, [{
    key: 'setNewSortOrderForAllListItems',
    value: function setNewSortOrderForAllListItems(contentList) {
      for (var i = 0; i < contentList.length; i++) {
        var item = contentList[i];
        item.sort_order = i + 1;
      }
    }
  }, {
    key: 'setSortOrderAndRowAndColumnForContentGroups',
    value: function setSortOrderAndRowAndColumnForContentGroups(groups) {
      var sortOrder = 0;

      for (var groupIndex = 0; groupIndex < groups.length; groupIndex++) {
        var group = groups[groupIndex];
        var parentListItem = group.parentListItem;
        parentListItem.sort_order = sortOrder;
        sortOrder++;

        for (var rowIndex = 0; rowIndex < group.rows.length; rowIndex++) {
          var row = group.rows[rowIndex];

          for (var columnIndex = 0; columnIndex < row.columns.length; columnIndex++) {
            var column = row.columns[columnIndex];

            for (var contentIndex = 0; contentIndex < column.contentList.length; contentIndex++) {
              var contentItem = column.contentList[contentIndex];
              contentItem.row_number = rowIndex;
              contentItem.column_number = columnIndex;
              contentItem.sort_order = sortOrder;

              sortOrder++;
            }
          }
        }
      }
    }
  }]);

  return TemplateHelper;
})();

exports.default = TemplateHelper;

},{"underscore":"underscore"}],40:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _BasicTemplate = require('./BasicTemplate/BasicTemplate');

var _BasicTemplate2 = _interopRequireDefault(_BasicTemplate);

var _ListTemplate = require('./ListTemplate/ListTemplate');

var _ListTemplate2 = _interopRequireDefault(_ListTemplate);

var _ListGridTemplate = require('./ListGridTemplate/ListGridTemplate');

var _ListGridTemplate2 = _interopRequireDefault(_ListGridTemplate);

var _PhotoAlbumTemplate = require('./PhotoAlbumTemplate/PhotoAlbumTemplate');

var _PhotoAlbumTemplate2 = _interopRequireDefault(_PhotoAlbumTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TemplateRenderer = (function (_React$Component) {
  _inherits(TemplateRenderer, _React$Component);

  function TemplateRenderer(props) {
    _classCallCheck(this, TemplateRenderer);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TemplateRenderer).call(this, props));
  }

  _createClass(TemplateRenderer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      if (this.props.templateId === 1) {
        return _react2.default.createElement(_BasicTemplate2.default, this.props);
      } else if (this.props.templateId === 2) {
        return _react2.default.createElement(_PhotoAlbumTemplate2.default, this.props);
      } else if (this.props.templateId === 3) {
        return _react2.default.createElement(_ListTemplate2.default, this.props);
      } else if (this.props.templateId === 4) {
        return _react2.default.createElement(_ListGridTemplate2.default, this.props);
      } else {
        throw "There is no Template that matches for templateId.";
      }
    }
  }]);

  return TemplateRenderer;
})(_react2.default.Component);

exports.default = TemplateRenderer;

},{"./BasicTemplate/BasicTemplate":31,"./ListGridTemplate/ListGridTemplate":34,"./ListTemplate/ListTemplate":35,"./PhotoAlbumTemplate/PhotoAlbumTemplate":36,"react":"react","react-router":"react-router"}],41:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _CarouselIndicators = require('./CarouselIndicators');

var _CarouselIndicators2 = _interopRequireDefault(_CarouselIndicators);

var _CarouselContent = require('./CarouselContent');

var _CarouselContent2 = _interopRequireDefault(_CarouselContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Carousel = (function (_React$Component) {
  _inherits(Carousel, _React$Component);

  function Carousel(props) {
    _classCallCheck(this, Carousel);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Carousel).call(this, props));
  }

  _createClass(Carousel, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'largeCarousel', className: 'carousel slide', 'data-ride': 'carousel' },
        _react2.default.createElement(_CarouselIndicators2.default, this.props),
        _react2.default.createElement(_CarouselContent2.default, this.props),
        _react2.default.createElement(
          'a',
          { className: 'left carousel-control', href: '#largeCarousel', role: 'button', 'data-slide': 'prev' },
          _react2.default.createElement('span', { className: 'glyphicon glyphicon-chevron-left', 'aria-hidden': 'true' }),
          _react2.default.createElement(
            'span',
            { className: 'sr-only' },
            'Previous'
          )
        ),
        _react2.default.createElement(
          'a',
          { className: 'right carousel-control', href: '#largeCarousel', role: 'button', 'data-slide': 'next' },
          _react2.default.createElement('span', { className: 'glyphicon glyphicon-chevron-right', 'aria-hidden': 'true' }),
          _react2.default.createElement(
            'span',
            { className: 'sr-only' },
            'Next'
          )
        )
      );
    }
  }]);

  return Carousel;
})(_react2.default.Component);

exports.default = Carousel;

},{"./CarouselContent":42,"./CarouselIndicators":43,"react":"react","react-router":"react-router"}],42:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _PropsHelper = require('../../../helpers/PropsHelper');

var _PropsHelper2 = _interopRequireDefault(_PropsHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CarouselContent = (function (_React$Component) {
  _inherits(CarouselContent, _React$Component);

  function CarouselContent(props) {
    _classCallCheck(this, CarouselContent);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(CarouselContent).call(this, props));
  }

  _createClass(CarouselContent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var propsArray = _PropsHelper2.default.convertPropsToArray(this.props.contentList);

      var images = propsArray.map(function (image, index) {
        return _react2.default.createElement(
          'div',
          { key: image.sort_order, className: index == _this2.props.selectedPhoto ? 'item active' : 'item' },
          _react2.default.createElement('img', { key: index, src: image.value })
        );
      });

      return _react2.default.createElement(
        'div',
        { className: 'carousel-inner', role: 'listbox' },
        images
      );
    }
  }]);

  return CarouselContent;
})(_react2.default.Component);

exports.default = CarouselContent;

},{"../../../helpers/PropsHelper":88,"react":"react","react-router":"react-router"}],43:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _PropsHelper = require('../../../helpers/PropsHelper');

var _PropsHelper2 = _interopRequireDefault(_PropsHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CarouselIndicators = (function (_React$Component) {
  _inherits(CarouselIndicators, _React$Component);

  function CarouselIndicators(props) {
    _classCallCheck(this, CarouselIndicators);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(CarouselIndicators).call(this, props));
  }

  _createClass(CarouselIndicators, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var propsArray = _PropsHelper2.default.convertPropsToArray(this.props.contentList);

      var indicators = propsArray.map(function (indicator, index) {
        return _react2.default.createElement('li', { key: index, 'data-target': '#largeCarousel', className: index == _this2.props.selectedPhoto ? 'active' : '', 'data-slide-to': index });
      });

      return _react2.default.createElement(
        'ol',
        { className: 'carousel-indicators' },
        indicators
      );
    }
  }]);

  return CarouselIndicators;
})(_react2.default.Component);

exports.default = CarouselIndicators;

},{"../../../helpers/PropsHelper":88,"react":"react","react-router":"react-router"}],44:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _underscore = require('underscore');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FieldEdit = require('./FieldEdit');

var _FieldEdit2 = _interopRequireDefault(_FieldEdit);

var _FieldReadOnly = require('./FieldReadOnly');

var _FieldReadOnly2 = _interopRequireDefault(_FieldReadOnly);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Field = (function (_React$Component) {
  _inherits(Field, _React$Component);

  function Field(props) {
    _classCallCheck(this, Field);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Field).call(this, props));
  }

  _createClass(Field, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      if (this.props.isEdit) {
        return _react2.default.createElement(_FieldEdit2.default, this.props);
      } else {
        return _react2.default.createElement(_FieldReadOnly2.default, this.props);
      }
    }
  }]);

  return Field;
})(_react2.default.Component);

exports.default = Field;

},{"./FieldEdit":45,"./FieldReadOnly":47,"react":"react","underscore":"underscore"}],45:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _underscore = require('underscore');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FieldHelper = require('../../Widgets/Field/FieldHelper');

var _FieldHelper2 = _interopRequireDefault(_FieldHelper);

var _ImageWidget = require('../../Widgets/Image/ImageWidget');

var _ImageWidget2 = _interopRequireDefault(_ImageWidget);

var _Title = require('../../Widgets/Title/Title');

var _Title2 = _interopRequireDefault(_Title);

var _Url = require('../../Widgets/Url/Url');

var _Url2 = _interopRequireDefault(_Url);

var _ShortDescription = require('../../Widgets/ShortDescription/ShortDescription');

var _ShortDescription2 = _interopRequireDefault(_ShortDescription);

var _LongDescription = require('../../Widgets/LongDescription/LongDescription');

var _LongDescription2 = _interopRequireDefault(_LongDescription);

var _Iframe = require('../../Widgets/Iframe/Iframe');

var _Iframe2 = _interopRequireDefault(_Iframe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FieldEdit = (function (_React$Component) {
  _inherits(FieldEdit, _React$Component);

  function FieldEdit(props) {
    _classCallCheck(this, FieldEdit);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(FieldEdit).call(this, props));
  }

  _createClass(FieldEdit, [{
    key: 'render',
    value: function render() {
      var contentItem = this.props.contentItem;
      var propsData = _underscore._.extend({ value: contentItem.value }, this.props);

      if (_FieldHelper2.default.isDescription(contentItem)) {
        return _react2.default.createElement(
          'div',
          { key: contentItem.sort_order, className: 'form-group' },
          _react2.default.createElement(_LongDescription2.default, propsData)
        );
      } else if (_FieldHelper2.default.isShortDescription(contentItem)) {
        return _react2.default.createElement(
          'div',
          { key: contentItem.sort_order, className: 'form-group' },
          _react2.default.createElement(_ShortDescription2.default, propsData)
        );
      } else if (_FieldHelper2.default.isImage(contentItem)) {
        return _react2.default.createElement(
          'div',
          { key: contentItem.sort_order, className: 'form-group' },
          _react2.default.createElement(_ImageWidget2.default, propsData)
        );
      } else if (_FieldHelper2.default.isTitle(contentItem)) {
        return _react2.default.createElement(
          'div',
          { key: contentItem.sort_order, className: 'form-group' },
          _react2.default.createElement(_Title2.default, propsData)
        );
      } else if (_FieldHelper2.default.isUrl(contentItem)) {
        return _react2.default.createElement(
          'div',
          { key: contentItem.sort_order, className: 'form-group' },
          _react2.default.createElement(_Url2.default, propsData)
        );
      } else if (_FieldHelper2.default.isIframe(contentItem)) {
        return _react2.default.createElement(
          'div',
          { key: contentItem.sort_order, className: 'form-group' },
          _react2.default.createElement(_Iframe2.default, propsData)
        );
      } else {
        throw "There is no Field that matches the content item.";
      }
    }
  }]);

  return FieldEdit;
})(_react2.default.Component);

exports.default = FieldEdit;

},{"../../Widgets/Field/FieldHelper":46,"../../Widgets/Iframe/Iframe":48,"../../Widgets/Image/ImageWidget":54,"../../Widgets/LongDescription/LongDescription":68,"../../Widgets/ShortDescription/ShortDescription":72,"../../Widgets/Title/Title":76,"../../Widgets/Url/Url":80,"react":"react","underscore":"underscore"}],46:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _underscore = require("underscore");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FieldHelper = (function () {
  function FieldHelper() {
    _classCallCheck(this, FieldHelper);
  }

  _createClass(FieldHelper, null, [{
    key: "isShortDescription",
    value: function isShortDescription(node) {
      return node.content_type_id == 4;
    }
  }, {
    key: "isDescription",
    value: function isDescription(node) {
      return node.content_type_id == 2;
    }
  }, {
    key: "isImage",
    value: function isImage(node) {
      return node.content_type_id == 1;
    }
  }, {
    key: "isTitle",
    value: function isTitle(node) {
      return node.content_type_id == 3;
    }
    //a node is a sub list item if it has its parent index property >= 0
    //however, javascript is silly and thinks "undefined >= 0" is a true statement

  }, {
    key: "isSubListItem",
    value: function isSubListItem(node) {
      return typeof node.parent_index == "number";
    }
  }, {
    key: "isParentListItem",
    value: function isParentListItem(node) {
      return typeof node.parent_index !== "number";
    }
  }, {
    key: "isUrl",
    value: function isUrl(node) {
      return node.content_type_id == 5;
    }
  }, {
    key: "isIframe",
    value: function isIframe(node) {
      return node.content_type_id == 6;
    }
  }]);

  return FieldHelper;
})();

exports.default = FieldHelper;

},{"underscore":"underscore"}],47:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _underscore = require('underscore');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LongDescription = require('../../Widgets/LongDescription/LongDescription');

var _LongDescription2 = _interopRequireDefault(_LongDescription);

var _ImageWidget = require('../../Widgets/Image/ImageWidget');

var _ImageWidget2 = _interopRequireDefault(_ImageWidget);

var _Title = require('../../Widgets/Title/Title');

var _Title2 = _interopRequireDefault(_Title);

var _Url = require('../../Widgets/Url/Url');

var _Url2 = _interopRequireDefault(_Url);

var _ShortDescription = require('../../Widgets/ShortDescription/ShortDescription');

var _ShortDescription2 = _interopRequireDefault(_ShortDescription);

var _FieldHelper = require('../../Widgets/Field/FieldHelper');

var _FieldHelper2 = _interopRequireDefault(_FieldHelper);

var _Iframe = require('../../Widgets/Iframe/Iframe');

var _Iframe2 = _interopRequireDefault(_Iframe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FieldReadOnly = (function (_React$Component) {
  _inherits(FieldReadOnly, _React$Component);

  function FieldReadOnly(props) {
    _classCallCheck(this, FieldReadOnly);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(FieldReadOnly).call(this, props));
  }

  _createClass(FieldReadOnly, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      var contentItem = this.props.contentItem;
      var propsData = _underscore._.extend({ value: contentItem.value }, this.props);

      if (_FieldHelper2.default.isDescription(contentItem)) {
        return _react2.default.createElement(
          'div',
          { className: 'Content-item-container', key: contentItem.sort_order },
          _react2.default.createElement(_LongDescription2.default, propsData)
        );
      } else if (_FieldHelper2.default.isShortDescription(contentItem)) {
        return _react2.default.createElement(
          'div',
          { className: 'Content-item-container', key: contentItem.sort_order },
          _react2.default.createElement(_ShortDescription2.default, propsData)
        );
      } else if (_FieldHelper2.default.isImage(contentItem)) {
        return _react2.default.createElement(
          'div',
          { className: 'Content-item-container', key: contentItem.sort_order },
          _react2.default.createElement(_ImageWidget2.default, propsData)
        );
      } else if (_FieldHelper2.default.isTitle(contentItem)) {
        return _react2.default.createElement(
          'div',
          { className: 'Content-item-container', key: contentItem.sort_order },
          _react2.default.createElement(_Title2.default, propsData)
        );
      } else if (_FieldHelper2.default.isUrl(contentItem)) {
        return _react2.default.createElement(
          'div',
          { className: 'Content-item-container', key: contentItem.sort_order },
          _react2.default.createElement(_Url2.default, propsData)
        );
      } else if (_FieldHelper2.default.isIframe(contentItem)) {
        return _react2.default.createElement(
          'div',
          { className: 'Content-item-container', key: contentItem.sort_order },
          _react2.default.createElement(_Iframe2.default, propsData)
        );
      } else {
        throw "There is no Field that matches the content item.";
      }
    }
  }]);

  return FieldReadOnly;
})(_react2.default.Component);

exports.default = FieldReadOnly;

},{"../../Widgets/Field/FieldHelper":46,"../../Widgets/Iframe/Iframe":48,"../../Widgets/Image/ImageWidget":54,"../../Widgets/LongDescription/LongDescription":68,"../../Widgets/ShortDescription/ShortDescription":72,"../../Widgets/Title/Title":76,"../../Widgets/Url/Url":80,"react":"react","underscore":"underscore"}],48:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _IframeEdit = require('./IframeEdit');

var _IframeEdit2 = _interopRequireDefault(_IframeEdit);

var _IframeReadOnly = require('./IframeReadOnly');

var _IframeReadOnly2 = _interopRequireDefault(_IframeReadOnly);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Iframe = (function (_React$Component) {
  _inherits(Iframe, _React$Component);

  function Iframe(props) {
    _classCallCheck(this, Iframe);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Iframe).call(this, props));
  }

  _createClass(Iframe, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      if (this.props.isEdit) {
        return _react2.default.createElement(_IframeEdit2.default, this.props);
      } else {
        return _react2.default.createElement(_IframeReadOnly2.default, this.props);
      }
    }
  }]);

  return Iframe;
})(_react2.default.Component);

exports.default = Iframe;

},{"./IframeEdit":49,"./IframeReadOnly":51,"react":"react","react-router":"react-router"}],49:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IframeEdit = (function (_React$Component) {
  _inherits(IframeEdit, _React$Component);

  function IframeEdit(props) {
    _classCallCheck(this, IframeEdit);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(IframeEdit).call(this, props));
  }

  _createClass(IframeEdit, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'form-group Content-item' },
          _react2.default.createElement('input', { className: 'form-control', placeholder: 'Iframe Src',
            value: this.props.value, onChange: this.props.onChange })
        ),
        _react2.default.createElement(
          'div',
          { className: 'Widget-Remove-Button-Container' },
          _react2.default.createElement(
            'div',
            { onClick: this.props.onRemove },
            _react2.default.createElement('span', { className: 'glyphicon glyphicon-remove', 'aria-hidden': 'true' })
          )
        )
      );
    }
  }]);

  return IframeEdit;
})(_react2.default.Component);

exports.default = IframeEdit;

},{"react":"react","react-router":"react-router"}],50:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IframeFactory = (function () {
  function IframeFactory(sortOrder, name, description, templateId, parentIndex, row_number, column_number) {
    _classCallCheck(this, IframeFactory);

    this.sortOrder = sortOrder;
    this.name = name;
    this.description = description;
    this.templateId = templateId;
    this.parentIndex = parentIndex;
    this.row_number = row_number;
    this.column_number = column_number || 1;
  }

  _createClass(IframeFactory, [{
    key: 'create',
    value: function create() {

      var content = {
        name: this.name,
        description: this.description,
        value: '',
        content_type_id: 6,
        sort_order: this.sortOrder,
        template_id: this.templateId,
        parent_index: this.parentIndex,
        row_number: this.row_number,
        column_number: this.column_number
      };

      return content;
    }
  }]);

  return IframeFactory;
})();

exports.default = IframeFactory;

},{"react":"react"}],51:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IframeReadOnly = (function (_React$Component) {
  _inherits(IframeReadOnly, _React$Component);

  function IframeReadOnly(props) {
    _classCallCheck(this, IframeReadOnly);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(IframeReadOnly).call(this, props));
  }

  _createClass(IframeReadOnly, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'Content-iframe-container' },
        _react2.default.createElement('iframe', { src: this.props.value, className: 'Content-iframe' })
      );
    }
  }]);

  return IframeReadOnly;
})(_react2.default.Component);

exports.default = IframeReadOnly;

},{"react":"react","react-router":"react-router"}],52:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Image = (function (_React$Component) {
  _inherits(Image, _React$Component);

  function Image(props) {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Image).call(this, props));
  }

  _createClass(Image, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      if (this.props.imageSize == 'small') {
        return _react2.default.createElement('img', { className: 'Content-small-image', src: this.props.value, alt: 'Image' });
      } else if (this.props.imageSize == 'medium') {
        return _react2.default.createElement('img', { className: 'Content-medium-image', src: this.props.value, alt: 'Image' });
      } else {
        return _react2.default.createElement('img', { className: 'Content-extra-large-image-percentage', src: this.props.value, alt: 'Image' });
      }
    }
  }]);

  return Image;
})(_react2.default.Component);

exports.default = Image;

},{"react":"react"}],53:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ImageFactory = (function () {
  function ImageFactory(sortOrder, name, description, templateId, parentIndex, row_number, column_number) {
    _classCallCheck(this, ImageFactory);

    this.sortOrder = sortOrder;
    this.name = name;
    this.description = description;
    this.templateId = templateId;
    this.parentIndex = parentIndex;
    this.row_number = row_number || 1;
    this.column_number = column_number || 1;
  }

  _createClass(ImageFactory, [{
    key: 'create',
    value: function create() {

      var content = {
        name: this.name,
        description: this.description,
        value: '',
        content_type_id: 1,
        sort_order: this.sortOrder,
        template_id: this.templateId,
        parent_index: this.parentIndex,
        row_number: this.row_number,
        column_number: this.column_number
      };

      return content;
    }
  }]);

  return ImageFactory;
})();

exports.default = ImageFactory;

},{"react":"react"}],54:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _ImageWidgetEdit = require('./ImageWidgetEdit');

var _ImageWidgetEdit2 = _interopRequireDefault(_ImageWidgetEdit);

var _ImageWidgetReadOnly = require('./ImageWidgetReadOnly');

var _ImageWidgetReadOnly2 = _interopRequireDefault(_ImageWidgetReadOnly);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageWidget = (function (_React$Component) {
  _inherits(ImageWidget, _React$Component);

  function ImageWidget(props) {
    _classCallCheck(this, ImageWidget);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ImageWidget).call(this, props));
  }

  _createClass(ImageWidget, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      if (this.props.isEdit) {
        return _react2.default.createElement(_ImageWidgetEdit2.default, this.props);
      } else {
        return _react2.default.createElement(_ImageWidgetReadOnly2.default, this.props);
      }
    }
  }]);

  return ImageWidget;
})(_react2.default.Component);

exports.default = ImageWidget;

},{"./ImageWidgetEdit":55,"./ImageWidgetReadOnly":56,"react":"react","react-router":"react-router"}],55:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Image = require('./Image');

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageWidgetEdit = (function (_React$Component) {
  _inherits(ImageWidgetEdit, _React$Component);

  function ImageWidgetEdit(props) {
    _classCallCheck(this, ImageWidgetEdit);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ImageWidgetEdit).call(this, props));

    if (!_this.props.value) {
      _this.state = { isImageEditable: true };
    } else {
      _this.state = { isImageEditable: false };
    }

    return _this;
  }

  _createClass(ImageWidgetEdit, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'editImage',
    value: function editImage() {
      this.setState({ isImageEditable: true });
    }
  }, {
    key: 'saveImage',
    value: function saveImage() {
      this.setState({ isImageEditable: false });
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.isImageEditable) {
        return _react2.default.createElement(
          'div',
          { className: 'Content-image-container' },
          _react2.default.createElement(
            'div',
            { className: 'Content-image-input-container' },
            _react2.default.createElement('input', { ref: 'url', className: 'form-control', name: 'url', placeholder: 'Url', value: this.props.value,
              onChange: this.props.onChange, autoFocus: true })
          ),
          _react2.default.createElement(
            'div',
            { className: 'Content-Image-Edit-Button edit-content-button', onClick: this.saveImage.bind(this) },
            _react2.default.createElement('span', { className: 'glyphicon glyphicon-ok' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'Widget-Remove-Button-Container', onClick: this.props.onRemove },
            _react2.default.createElement('span', { className: 'glyphicon glyphicon-remove', 'aria-hidden': 'true' })
          )
        );
      } else {
        return _react2.default.createElement(
          'div',
          { className: 'Content-image-container' },
          _react2.default.createElement(_Image2.default, this.props),
          _react2.default.createElement(
            'div',
            { className: 'Content-Image-Edit-Button edit-content-button', onClick: this.editImage.bind(this) },
            _react2.default.createElement('span', { className: 'glyphicon glyphicon-pencil' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'Widget-Remove-Button-Container', onClick: this.props.onRemove },
            _react2.default.createElement('span', { className: 'glyphicon glyphicon-remove', 'aria-hidden': 'true' })
          )
        );
      }
    }
  }]);

  return ImageWidgetEdit;
})(_react2.default.Component);

exports.default = ImageWidgetEdit;

},{"./Image":52,"react":"react","react-router":"react-router"}],56:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Image = require('./Image');

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageWidgetReadOnly = (function (_React$Component) {
  _inherits(ImageWidgetReadOnly, _React$Component);

  function ImageWidgetReadOnly(props) {
    _classCallCheck(this, ImageWidgetReadOnly);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ImageWidgetReadOnly).call(this, props));
  }

  _createClass(ImageWidgetReadOnly, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'Content-image-container' },
        _react2.default.createElement(_Image2.default, this.props)
      );
    }
  }]);

  return ImageWidgetReadOnly;
})(_react2.default.Component);

exports.default = ImageWidgetReadOnly;

},{"./Image":52,"react":"react","react-router":"react-router"}],57:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _underscore = require('underscore');

var _Field = require('../../Widgets/Field/Field');

var _Field2 = _interopRequireDefault(_Field);

var _FieldHelper = require('../../Widgets/Field/FieldHelper');

var _FieldHelper2 = _interopRequireDefault(_FieldHelper);

var _TemplateHelper = require('../../Templates/TemplateHelper');

var _TemplateHelper2 = _interopRequireDefault(_TemplateHelper);

var _WidgetSelectList = require('../../Widgets/WidgetSelectList');

var _WidgetSelectList2 = _interopRequireDefault(_WidgetSelectList);

var _ParentListGridItem = require('../../Widgets/ListGridItem/ParentListGridItem');

var _ParentListGridItem2 = _interopRequireDefault(_ParentListGridItem);

var _ListGridGroupRow = require('../../Widgets/ListGridItem/ListGridGroupRow');

var _ListGridGroupRow2 = _interopRequireDefault(_ListGridGroupRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListGridGroup = (function (_React$Component) {
  _inherits(ListGridGroup, _React$Component);

  function ListGridGroup(props) {
    _classCallCheck(this, ListGridGroup);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ListGridGroup).call(this, props));

    _this.templateId = _this.props.templateId;
    return _this;
  }

  _createClass(ListGridGroup, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'updateContent',
    value: function updateContent(event) {
      this.props.contentGroupItem.parentListItem.value = event.target.value;
      this.props.setStateForContentGroupList();
    }
  }, {
    key: 'removeContent',
    value: function removeContent(event) {
      this.props.contentGroupList.splice(this.props.contentGroupIndex, 1);

      _TemplateHelper2.default.setNewSortOrderForAllListItems(this.props.contentList);
      this.props.setStateForContentList();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var parentListItem = this.props.contentGroupItem.parentListItem;
      var propsData = {
        contentItem: parentListItem,
        onRemove: this.removeContent.bind(this),
        onChange: this.updateContent.bind(this),
        row_number: 1,
        column_number: 1
      };
      var parentListGridItemProps = _underscore._.extend(propsData, this.props);

      var nodes = this.props.contentGroupItem.rows.map(function (row, index) {
        var propsData = {
          row: row,
          row_number: index
        };
        var rowProps = _underscore._.extend(propsData, _this2.props);

        return _react2.default.createElement(
          'div',
          { key: index, className: !_this2.props.isEdit ? 'Read-Only' : '' },
          _react2.default.createElement(_ListGridGroupRow2.default, rowProps)
        );
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'List-template' },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_ParentListGridItem2.default, parentListGridItemProps)
          ),
          _react2.default.createElement(
            'div',
            { className: 'Sub-List-Items' },
            nodes
          )
        )
      );
    }
  }]);

  return ListGridGroup;
})(_react2.default.Component);

exports.default = ListGridGroup;

},{"../../Templates/TemplateHelper":39,"../../Widgets/Field/Field":44,"../../Widgets/Field/FieldHelper":46,"../../Widgets/ListGridItem/ListGridGroupRow":60,"../../Widgets/ListGridItem/ParentListGridItem":61,"../../Widgets/WidgetSelectList":85,"react":"react","react-router":"react-router","underscore":"underscore"}],58:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _underscore = require('underscore');

var _Field = require('../../Widgets/Field/Field');

var _Field2 = _interopRequireDefault(_Field);

var _FieldHelper = require('../../Widgets/Field/FieldHelper');

var _FieldHelper2 = _interopRequireDefault(_FieldHelper);

var _TemplateHelper = require('../../Templates/TemplateHelper');

var _TemplateHelper2 = _interopRequireDefault(_TemplateHelper);

var _WidgetSelectList = require('../../Widgets/WidgetSelectList');

var _WidgetSelectList2 = _interopRequireDefault(_WidgetSelectList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListGridGroupColumn = (function (_React$Component) {
  _inherits(ListGridGroupColumn, _React$Component);

  function ListGridGroupColumn(props) {
    _classCallCheck(this, ListGridGroupColumn);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ListGridGroupColumn).call(this, props));

    _this.templateId = _this.props.templateId;
    return _this;
  }

  _createClass(ListGridGroupColumn, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'updateContent',
    value: function updateContent(index, event) {
      this.props.column.contentList[index].value = event.target.value;
      this.props.setStateForContentGroupList();
    }
  }, {
    key: 'removeContent',
    value: function removeContent(index, event) {
      this.props.column.contentList.splice(index, 1);
      _TemplateHelper2.default.setSortOrderAndRowAndColumnForContentGroups(this.props.contentGroupList);
      this.props.setStateForContentGroupList();
    }
  }, {
    key: 'onAddWidgetToContentList',
    value: function onAddWidgetToContentList(factoryInstance) {
      var column = this.props.column;
      var contentListLength = column.contentList.length;
      this.props.column.contentList.splice(contentListLength + 1, 0, factoryInstance);

      _TemplateHelper2.default.setSortOrderAndRowAndColumnForContentGroups(this.props.contentGroupList);
      this.props.setStateForContentGroupList();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var widgetListPropsData = { onAddWidgetToContentList: this.onAddWidgetToContentList.bind(this),
        parentIndex: this.props.contentGroupIndex, templateId: this.templateId, row_number: this.props.row_number,
        column_number: this.props.column_number };

      var nodes = this.props.column.contentList.map(function (contentItem, index) {
        var propsData = {
          value: contentItem.value,
          contentItem: contentItem,
          onRemove: _this2.removeContent.bind(_this2, index),
          onChange: _this2.updateContent.bind(_this2, index),
          imageSize: 'small'
        };
        var fieldPropsData = _underscore._.extend(propsData, _this2.props);

        return _react2.default.createElement(
          'div',
          { key: index, className: 'List-Grid-Group-Column-Content-Item' },
          _react2.default.createElement(_Field2.default, fieldPropsData)
        );
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: !this.props.isEdit ? "hidden" : "" },
            _react2.default.createElement(_WidgetSelectList2.default, widgetListPropsData)
          ),
          _react2.default.createElement(
            'div',
            { className: 'row list-grid-column-content-container' },
            nodes
          )
        )
      );
    }
  }]);

  return ListGridGroupColumn;
})(_react2.default.Component);

exports.default = ListGridGroupColumn;

},{"../../Templates/TemplateHelper":39,"../../Widgets/Field/Field":44,"../../Widgets/Field/FieldHelper":46,"../../Widgets/WidgetSelectList":85,"react":"react","react-router":"react-router","underscore":"underscore"}],59:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _underscore = require('underscore');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ListGridGroupFactory = (function () {
  function ListGridGroupFactory(parentListItem) {
    _classCallCheck(this, ListGridGroupFactory);

    this.parentListItem = parentListItem;
  }

  _createClass(ListGridGroupFactory, [{
    key: 'create',
    value: function create() {
      var newGroup = {
        rows: [],
        parentListItem: this.parentListItem
      };

      return newGroup;
    }
  }]);

  return ListGridGroupFactory;
})();

exports.default = ListGridGroupFactory;

},{"underscore":"underscore"}],60:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _underscore = require('underscore');

var _Field = require('../../Widgets/Field/Field');

var _Field2 = _interopRequireDefault(_Field);

var _FieldHelper = require('../../Widgets/Field/FieldHelper');

var _FieldHelper2 = _interopRequireDefault(_FieldHelper);

var _TemplateHelper = require('../../Templates/TemplateHelper');

var _TemplateHelper2 = _interopRequireDefault(_TemplateHelper);

var _WidgetSelectList = require('../../Widgets/WidgetSelectList');

var _WidgetSelectList2 = _interopRequireDefault(_WidgetSelectList);

var _ListGridGroupColumn = require('../../Widgets/ListGridItem/ListGridGroupColumn');

var _ListGridGroupColumn2 = _interopRequireDefault(_ListGridGroupColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListGridGroupRow = (function (_React$Component) {
  _inherits(ListGridGroupRow, _React$Component);

  function ListGridGroupRow(props) {
    _classCallCheck(this, ListGridGroupRow);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ListGridGroupRow).call(this, props));

    _this.templateId = _this.props.templateId;
    return _this;
  }

  _createClass(ListGridGroupRow, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var propsData = {
        contentItem: this.props.contentGroupItem.parentListItem
      };

      var nodes = this.props.row.columns.map(function (column, index) {
        var propsData = {
          column: column,
          column_number: index
        };
        var columnProps = _underscore._.extend(propsData, _this2.props);

        if (_this2.props.isEdit) {
          return _react2.default.createElement(
            'div',
            { key: index, className: index === 0 ? 'List-Grid-Group-Column-Small-Edit' : 'List-Grid-Group-Column-Edit' },
            _react2.default.createElement(_ListGridGroupColumn2.default, columnProps)
          );
        } else {
          return _react2.default.createElement(
            'div',
            { key: index, className: index === 0 ? 'List-Grid-Group-Column-Small' : 'List-Grid-Group-Column' },
            _react2.default.createElement(_ListGridGroupColumn2.default, columnProps)
          );
        }
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: this.props.isEdit ? "List-Grid-Row-Edit" : "List-Grid-Row" },
            nodes
          )
        )
      );
    }
  }]);

  return ListGridGroupRow;
})(_react2.default.Component);

exports.default = ListGridGroupRow;

},{"../../Templates/TemplateHelper":39,"../../Widgets/Field/Field":44,"../../Widgets/Field/FieldHelper":46,"../../Widgets/ListGridItem/ListGridGroupColumn":58,"../../Widgets/WidgetSelectList":85,"react":"react","react-router":"react-router","underscore":"underscore"}],61:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _ParentListGridItemEdit = require('./ParentListGridItemEdit');

var _ParentListGridItemEdit2 = _interopRequireDefault(_ParentListGridItemEdit);

var _ParentListGridItemReadOnly = require('./ParentListGridItemReadOnly');

var _ParentListGridItemReadOnly2 = _interopRequireDefault(_ParentListGridItemReadOnly);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParentListGridItem = (function (_React$Component) {
  _inherits(ParentListGridItem, _React$Component);

  function ParentListGridItem(props) {
    _classCallCheck(this, ParentListGridItem);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ParentListGridItem).call(this, props));
  }

  _createClass(ParentListGridItem, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      if (this.props.isEdit) {
        return _react2.default.createElement(_ParentListGridItemEdit2.default, this.props);
      } else {
        return _react2.default.createElement(_ParentListGridItemReadOnly2.default, this.props);
      }
    }
  }]);

  return ParentListGridItem;
})(_react2.default.Component);

exports.default = ParentListGridItem;

},{"./ParentListGridItemEdit":62,"./ParentListGridItemReadOnly":63,"react":"react","react-router":"react-router"}],62:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _underscore = require('underscore');

var _Field = require('../../Widgets/Field/Field');

var _Field2 = _interopRequireDefault(_Field);

var _FieldHelper = require('../../Widgets/Field/FieldHelper');

var _FieldHelper2 = _interopRequireDefault(_FieldHelper);

var _WidgetSelectList = require('../../Widgets/WidgetSelectList');

var _WidgetSelectList2 = _interopRequireDefault(_WidgetSelectList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParentListGridItemEdit = (function (_React$Component) {
  _inherits(ParentListGridItemEdit, _React$Component);

  function ParentListGridItemEdit(props) {
    _classCallCheck(this, ParentListGridItemEdit);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ParentListGridItemEdit).call(this, props));

    _this.templateId = _this.props.templateId;
    return _this;
  }

  _createClass(ParentListGridItemEdit, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'onAddRow',
    value: function onAddRow() {
      var contentGroupItem = this.props.contentGroupItem;
      var newRow = { columns: [] };
      var column = { contentList: [] };
      var column2 = { contentList: [] };
      newRow.columns.push(column);
      newRow.columns.push(column2);
      contentGroupItem.rows.push(newRow);

      this.props.setStateForContentGroupList();
    }
  }, {
    key: 'render',
    value: function render() {
      var propsData = _underscore._.extend({ value: this.props.contentGroupItem.parentListItem.value }, this.props);

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { key: this.props.contentItem.sort_order, className: this.props.contentGroupItem.parentListItem.sort_order > 1 ? 'List-item-group Row-separator' : 'List-item-group' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-sm-6 col-md-offset-2' },
              _react2.default.createElement(
                'div',
                { className: 'form-group' },
                _react2.default.createElement(_Field2.default, propsData)
              )
            ),
            _react2.default.createElement(
              'div',
              { className: !this.props.isEdit ? "hidden" : "col-sm-2" },
              _react2.default.createElement(
                'button',
                { className: 'btn btn-primary', onClick: this.onAddRow.bind(this) },
                'Add Row'
              )
            )
          )
        )
      );
    }
  }]);

  return ParentListGridItemEdit;
})(_react2.default.Component);

exports.default = ParentListGridItemEdit;

},{"../../Widgets/Field/Field":44,"../../Widgets/Field/FieldHelper":46,"../../Widgets/WidgetSelectList":85,"react":"react","react-router":"react-router","underscore":"underscore"}],63:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _underscore = require('underscore');

var _Field = require('../../Widgets/Field/Field');

var _Field2 = _interopRequireDefault(_Field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParentListGridItemReadOnly = (function (_React$Component) {
  _inherits(ParentListGridItemReadOnly, _React$Component);

  function ParentListGridItemReadOnly(props) {
    _classCallCheck(this, ParentListGridItemReadOnly);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ParentListGridItemReadOnly).call(this, props));
  }

  _createClass(ParentListGridItemReadOnly, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      var propsData = _underscore._.extend({ value: this.props.contentItem.value }, this.props);

      return _react2.default.createElement(
        'div',
        { key: this.props.contentItem.sort_order, className: this.props.contentGroupItem.parentListItem.sort_order > 1 ? 'List-item-group Row-separator' : 'List-item-group' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'div',
              { className: 'form-group Parent-list-item-readonly' },
              _react2.default.createElement(_Field2.default, propsData)
            )
          )
        )
      );
    }
  }]);

  return ParentListGridItemReadOnly;
})(_react2.default.Component);

exports.default = ParentListGridItemReadOnly;

},{"../../Widgets/Field/Field":44,"react":"react","react-router":"react-router","underscore":"underscore"}],64:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _ParentListItemEdit = require('./ParentListItemEdit');

var _ParentListItemEdit2 = _interopRequireDefault(_ParentListItemEdit);

var _ParentListItemReadOnly = require('./ParentListItemReadOnly');

var _ParentListItemReadOnly2 = _interopRequireDefault(_ParentListItemReadOnly);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParentListItem = (function (_React$Component) {
  _inherits(ParentListItem, _React$Component);

  function ParentListItem(props) {
    _classCallCheck(this, ParentListItem);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ParentListItem).call(this, props));
  }

  _createClass(ParentListItem, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      if (this.props.isEdit) {
        return _react2.default.createElement(_ParentListItemEdit2.default, this.props);
      } else {
        return _react2.default.createElement(_ParentListItemReadOnly2.default, this.props);
      }
    }
  }]);

  return ParentListItem;
})(_react2.default.Component);

exports.default = ParentListItem;

},{"./ParentListItemEdit":65,"./ParentListItemReadOnly":66,"react":"react","react-router":"react-router"}],65:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _underscore = require('underscore');

var _Field = require('../../Widgets/Field/Field');

var _Field2 = _interopRequireDefault(_Field);

var _FieldHelper = require('../../Widgets/Field/FieldHelper');

var _FieldHelper2 = _interopRequireDefault(_FieldHelper);

var _TemplateHelper = require('../../Templates/TemplateHelper');

var _TemplateHelper2 = _interopRequireDefault(_TemplateHelper);

var _WidgetSelectList = require('../../Widgets/WidgetSelectList');

var _WidgetSelectList2 = _interopRequireDefault(_WidgetSelectList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParentListItemEdit = (function (_React$Component) {
  _inherits(ParentListItemEdit, _React$Component);

  function ParentListItemEdit(props) {
    _classCallCheck(this, ParentListItemEdit);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ParentListItemEdit).call(this, props));

    _this.templateId = _this.props.templateId;
    return _this;
  }

  _createClass(ParentListItemEdit, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'onAddWidgetToContentList',
    value: function onAddWidgetToContentList(factoryInstance) {
      this.props.contentList.splice(this.getIndexForNewChild(this.props.index), 0, factoryInstance);
      _TemplateHelper2.default.setNewSortOrderForAllListItems(this.props.contentList);
      this.props.setStateForContentList(this.props.contentList);
    }
  }, {
    key: 'getIndexForNewChild',
    value: function getIndexForNewChild(parentIndex) {
      var lastChildIndexForParent = this.findLastChildIndexForParent(parentIndex);
      return lastChildIndexForParent + 1;
    }
  }, {
    key: 'findLastChildIndexForParent',
    value: function findLastChildIndexForParent(parentIndex) {
      var lastChildIndex = parentIndex;
      for (var i = parentIndex + 1; i < this.props.contentList.length; i++) {
        var listItemCompare = this.props.contentList[i];
        if (_FieldHelper2.default.isParentListItem(listItemCompare)) {
          break;
        }
        if (listItemCompare.parent_index === parentIndex) {
          lastChildIndex = i;
        }
      };

      return lastChildIndex;
    }
  }, {
    key: 'render',
    value: function render() {
      var propsData = _underscore._.extend({ value: this.props.contentItem.value }, this.props);
      var column_number = 1;
      var row_number = this.props.index;
      var widgetListPropsData = { onAddWidgetToContentList: this.onAddWidgetToContentList.bind(this),
        parentIndex: this.props.index, templateId: this.templateId, row_number: row_number, column_number: column_number };

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { key: this.props.contentItem.sort_order, className: this.props.contentItem.sort_order > 1 ? 'List-item-group Row-separator' : 'List-item-group' },
          _react2.default.createElement(
            'div',
            { className: 'Sub-list-item-widget-select-area' },
            _react2.default.createElement(_WidgetSelectList2.default, widgetListPropsData)
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-sm-6 col-md-offset-2' },
              _react2.default.createElement(
                'div',
                { className: 'form-group' },
                _react2.default.createElement(_Field2.default, propsData)
              )
            )
          )
        )
      );
    }
  }]);

  return ParentListItemEdit;
})(_react2.default.Component);

exports.default = ParentListItemEdit;

},{"../../Templates/TemplateHelper":39,"../../Widgets/Field/Field":44,"../../Widgets/Field/FieldHelper":46,"../../Widgets/WidgetSelectList":85,"react":"react","react-router":"react-router","underscore":"underscore"}],66:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _underscore = require('underscore');

var _Field = require('../../Widgets/Field/Field');

var _Field2 = _interopRequireDefault(_Field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParentListItemReadOnly = (function (_React$Component) {
  _inherits(ParentListItemReadOnly, _React$Component);

  function ParentListItemReadOnly(props) {
    _classCallCheck(this, ParentListItemReadOnly);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ParentListItemReadOnly).call(this, props));
  }

  _createClass(ParentListItemReadOnly, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      var propsData = _underscore._.extend({ value: this.props.contentItem.value }, this.props);

      return _react2.default.createElement(
        'div',
        { key: this.props.contentItem.sort_order, className: this.props.contentItem.sort_order > 1 ? 'List-item-group Row-separator' : 'List-item-group' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'div',
              { className: 'form-group Parent-list-item-readonly' },
              _react2.default.createElement(_Field2.default, propsData)
            )
          )
        )
      );
    }
  }]);

  return ParentListItemReadOnly;
})(_react2.default.Component);

exports.default = ParentListItemReadOnly;

},{"../../Widgets/Field/Field":44,"react":"react","react-router":"react-router","underscore":"underscore"}],67:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _underscore = require('underscore');

var _Field = require('../../Widgets/Field/Field');

var _Field2 = _interopRequireDefault(_Field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubListItem = (function (_React$Component) {
  _inherits(SubListItem, _React$Component);

  function SubListItem(props) {
    _classCallCheck(this, SubListItem);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SubListItem).call(this, props));
  }

  _createClass(SubListItem, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'isSublistGroupBorder',
    value: function isSublistGroupBorder() {
      return this.props.subListItemIndex % 2 === 0 && this.props.subListItemIndex > 0;
    }
  }, {
    key: 'render',
    value: function render() {
      var propsData = _underscore._.extend({ value: this.props.contentItem.value }, this.props);
      return _react2.default.createElement(
        'div',
        { key: this.props.contentItem.sort_order },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: this.props.isEdit ? 'col-sm-8 col-md-offset-3' : 'col-sm-8 col-md-offset-2' },
            _react2.default.createElement(
              'div',
              { className: 'form-group Sub-list-item' },
              _react2.default.createElement(
                'div',
                { className: this.isSublistGroupBorder() ? 'Sub-list-item-group-border' : '' },
                _react2.default.createElement(_Field2.default, propsData)
              )
            )
          )
        )
      );
    }
  }]);

  return SubListItem;
})(_react2.default.Component);

exports.default = SubListItem;

},{"../../Widgets/Field/Field":44,"react":"react","react-router":"react-router","underscore":"underscore"}],68:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _LongDescriptionEdit = require('./LongDescriptionEdit');

var _LongDescriptionEdit2 = _interopRequireDefault(_LongDescriptionEdit);

var _LongDescriptionReadOnly = require('./LongDescriptionReadOnly');

var _LongDescriptionReadOnly2 = _interopRequireDefault(_LongDescriptionReadOnly);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LongDescription = (function (_React$Component) {
  _inherits(LongDescription, _React$Component);

  function LongDescription(props) {
    _classCallCheck(this, LongDescription);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(LongDescription).call(this, props));
  }

  _createClass(LongDescription, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      if (this.props.isEdit) {
        return _react2.default.createElement(_LongDescriptionEdit2.default, this.props);
      } else {
        return _react2.default.createElement(_LongDescriptionReadOnly2.default, this.props);
      }
    }
  }]);

  return LongDescription;
})(_react2.default.Component);

exports.default = LongDescription;

},{"./LongDescriptionEdit":69,"./LongDescriptionReadOnly":71,"react":"react","react-router":"react-router"}],69:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LongDescriptionEdit = (function (_React$Component) {
  _inherits(LongDescriptionEdit, _React$Component);

  function LongDescriptionEdit(props) {
    _classCallCheck(this, LongDescriptionEdit);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(LongDescriptionEdit).call(this, props));
  }

  _createClass(LongDescriptionEdit, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'Content-long-description-container' },
          _react2.default.createElement(
            'div',
            { className: 'Content-long-description Content-item' },
            _react2.default.createElement('textarea', { className: 'form-control Widget-input', placeholder: 'Long Description',
              value: this.props.value, onChange: this.props.onChange })
          ),
          _react2.default.createElement(
            'div',
            { className: 'Widget-Remove-Button-Container' },
            _react2.default.createElement(
              'div',
              { onClick: this.props.onRemove },
              _react2.default.createElement('span', { className: 'glyphicon glyphicon-remove', 'aria-hidden': 'true' })
            )
          )
        )
      );
    }
  }]);

  return LongDescriptionEdit;
})(_react2.default.Component);

exports.default = LongDescriptionEdit;

},{"react":"react","react-router":"react-router"}],70:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LongDescriptionFactory = (function () {
  function LongDescriptionFactory(sortOrder, name, description, templateId, parentIndex, row_number, column_number) {
    _classCallCheck(this, LongDescriptionFactory);

    this.sortOrder = sortOrder;
    this.name = name;
    this.description = description;
    this.templateId = templateId;
    this.parentIndex = parentIndex;
    this.row_number = row_number;
    this.column_number = column_number;
  }

  _createClass(LongDescriptionFactory, [{
    key: 'create',
    value: function create() {

      var content = {
        name: this.name,
        description: this.description,
        value: '',
        content_type_id: 2,
        sort_order: this.sortOrder,
        template_id: this.templateId,
        parent_index: this.parentIndex,
        row_number: this.row_number,
        column_number: this.column_number
      };

      return content;
    }
  }]);

  return LongDescriptionFactory;
})();

exports.default = LongDescriptionFactory;

},{"react":"react"}],71:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LongDescriptionReadOnly = (function (_React$Component) {
  _inherits(LongDescriptionReadOnly, _React$Component);

  function LongDescriptionReadOnly(props) {
    _classCallCheck(this, LongDescriptionReadOnly);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(LongDescriptionReadOnly).call(this, props));
  }

  _createClass(LongDescriptionReadOnly, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'Content-long-description-container' },
        _react2.default.createElement(
          'div',
          { className: 'Content-long-description' },
          this.props.value
        )
      );
    }
  }]);

  return LongDescriptionReadOnly;
})(_react2.default.Component);

exports.default = LongDescriptionReadOnly;

},{"react":"react","react-router":"react-router"}],72:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _ShortDescriptionEdit = require('./ShortDescriptionEdit');

var _ShortDescriptionEdit2 = _interopRequireDefault(_ShortDescriptionEdit);

var _ShortDescriptionReadOnly = require('./ShortDescriptionReadOnly');

var _ShortDescriptionReadOnly2 = _interopRequireDefault(_ShortDescriptionReadOnly);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShortDescription = (function (_React$Component) {
  _inherits(ShortDescription, _React$Component);

  function ShortDescription(props) {
    _classCallCheck(this, ShortDescription);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ShortDescription).call(this, props));
  }

  _createClass(ShortDescription, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      if (this.props.isEdit) {
        return _react2.default.createElement(_ShortDescriptionEdit2.default, this.props);
      } else {
        return _react2.default.createElement(_ShortDescriptionReadOnly2.default, this.props);
      }
    }
  }]);

  return ShortDescription;
})(_react2.default.Component);

exports.default = ShortDescription;

},{"./ShortDescriptionEdit":73,"./ShortDescriptionReadOnly":75,"react":"react","react-router":"react-router"}],73:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShortDescriptionEdit = (function (_React$Component) {
  _inherits(ShortDescriptionEdit, _React$Component);

  function ShortDescriptionEdit(props) {
    _classCallCheck(this, ShortDescriptionEdit);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ShortDescriptionEdit).call(this, props));
  }

  _createClass(ShortDescriptionEdit, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'Content-short-description-container' },
          _react2.default.createElement(
            'div',
            { className: 'Content-short-description Content-item' },
            _react2.default.createElement('input', { className: 'form-control Widget-input', placeholder: 'Short description',
              value: this.props.value, onChange: this.props.onChange })
          ),
          _react2.default.createElement(
            'div',
            { className: 'Widget-Remove-Button-Container' },
            _react2.default.createElement(
              'div',
              { onClick: this.props.onRemove },
              _react2.default.createElement('span', { className: 'glyphicon glyphicon-remove', 'aria-hidden': 'true' })
            )
          )
        )
      );
    }
  }]);

  return ShortDescriptionEdit;
})(_react2.default.Component);

exports.default = ShortDescriptionEdit;

},{"react":"react","react-router":"react-router"}],74:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ShortDescriptionFactory = (function () {
  function ShortDescriptionFactory(sortOrder, name, description, templateId, parentIndex, row_number, column_number) {
    _classCallCheck(this, ShortDescriptionFactory);

    this.sortOrder = sortOrder;
    this.name = name;
    this.description = description;
    this.templateId = templateId;
    this.parentIndex = parentIndex;
    this.row_number = row_number;
    this.column_number = column_number;
  }

  _createClass(ShortDescriptionFactory, [{
    key: 'create',
    value: function create() {

      var content = {
        name: this.name,
        description: this.description,
        value: '',
        content_type_id: 4,
        sort_order: this.sortOrder,
        template_id: this.templateId,
        parent_index: this.parentIndex,
        row_number: this.row_number,
        column_number: this.column_number
      };

      return content;
    }
  }]);

  return ShortDescriptionFactory;
})();

exports.default = ShortDescriptionFactory;

},{"react":"react"}],75:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShortDescriptionReadOnly = (function (_React$Component) {
  _inherits(ShortDescriptionReadOnly, _React$Component);

  function ShortDescriptionReadOnly(props) {
    _classCallCheck(this, ShortDescriptionReadOnly);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ShortDescriptionReadOnly).call(this, props));
  }

  _createClass(ShortDescriptionReadOnly, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'Content-short-description-container' },
        _react2.default.createElement(
          'div',
          { className: 'Content-short-description' },
          this.props.value
        )
      );
    }
  }]);

  return ShortDescriptionReadOnly;
})(_react2.default.Component);

exports.default = ShortDescriptionReadOnly;

},{"react":"react","react-router":"react-router"}],76:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _TitleEdit = require('./TitleEdit');

var _TitleEdit2 = _interopRequireDefault(_TitleEdit);

var _TitleReadOnly = require('./TitleReadOnly');

var _TitleReadOnly2 = _interopRequireDefault(_TitleReadOnly);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Title = (function (_React$Component) {
  _inherits(Title, _React$Component);

  function Title(props) {
    _classCallCheck(this, Title);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Title).call(this, props));
  }

  _createClass(Title, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      if (this.props.isEdit) {
        return _react2.default.createElement(_TitleEdit2.default, this.props);
      } else {
        return _react2.default.createElement(_TitleReadOnly2.default, this.props);
      }
    }
  }]);

  return Title;
})(_react2.default.Component);

exports.default = Title;

},{"./TitleEdit":77,"./TitleReadOnly":79,"react":"react","react-router":"react-router"}],77:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TitleEdit = (function (_React$Component) {
  _inherits(TitleEdit, _React$Component);

  function TitleEdit(props) {
    _classCallCheck(this, TitleEdit);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TitleEdit).call(this, props));
  }

  _createClass(TitleEdit, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'Content-item-container' },
        _react2.default.createElement(
          'div',
          { className: 'Content-title Content-item' },
          _react2.default.createElement('input', { className: 'form-control Widget-input', placeholder: 'Title', value: this.props.value,
            onChange: this.props.onChange })
        ),
        _react2.default.createElement(
          'div',
          { className: 'Widget-Remove-Button-Container' },
          _react2.default.createElement(
            'div',
            { onClick: this.props.onRemove },
            _react2.default.createElement('span', { className: 'glyphicon glyphicon-remove', 'aria-hidden': 'true' })
          )
        )
      );
    }
  }]);

  return TitleEdit;
})(_react2.default.Component);

exports.default = TitleEdit;

},{"react":"react","react-router":"react-router"}],78:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TitleFactory = (function () {
  function TitleFactory(sortOrder, name, description, templateId, parentIndex, row_number, column_number) {
    _classCallCheck(this, TitleFactory);

    this.sortOrder = sortOrder;
    this.name = name;
    this.description = description;
    this.templateId = templateId;
    this.parentIndex = parentIndex;
    this.row_number = row_number;
    this.column_number = column_number;
  }

  _createClass(TitleFactory, [{
    key: 'create',
    value: function create() {

      var content = {
        name: this.name,
        description: this.description,
        value: '',
        content_type_id: 3,
        sort_order: this.sortOrder,
        template_id: this.templateId,
        parent_index: this.parentIndex,
        row_number: this.row_number,
        column_number: this.column_number
      };

      return content;
    }
  }]);

  return TitleFactory;
})();

exports.default = TitleFactory;

},{"react":"react"}],79:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TitleReadOnly = (function (_React$Component) {
  _inherits(TitleReadOnly, _React$Component);

  function TitleReadOnly(props) {
    _classCallCheck(this, TitleReadOnly);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TitleReadOnly).call(this, props));
  }

  _createClass(TitleReadOnly, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'Content-title-container' },
        _react2.default.createElement(
          'div',
          { className: 'Content-title' },
          this.props.value
        )
      );
    }
  }]);

  return TitleReadOnly;
})(_react2.default.Component);

exports.default = TitleReadOnly;

},{"react":"react","react-router":"react-router"}],80:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _UrlEdit = require('./UrlEdit');

var _UrlEdit2 = _interopRequireDefault(_UrlEdit);

var _UrlReadOnly = require('./UrlReadOnly');

var _UrlReadOnly2 = _interopRequireDefault(_UrlReadOnly);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Url = (function (_React$Component) {
  _inherits(Url, _React$Component);

  function Url(props) {
    _classCallCheck(this, Url);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Url).call(this, props));
  }

  _createClass(Url, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      if (this.props.isEdit) {
        return _react2.default.createElement(_UrlEdit2.default, this.props);
      } else {
        return _react2.default.createElement(_UrlReadOnly2.default, this.props);
      }
    }
  }]);

  return Url;
})(_react2.default.Component);

exports.default = Url;

},{"./UrlEdit":81,"./UrlReadOnly":83,"react":"react","react-router":"react-router"}],81:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UrlEdit = (function (_React$Component) {
  _inherits(UrlEdit, _React$Component);

  function UrlEdit(props) {
    _classCallCheck(this, UrlEdit);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(UrlEdit).call(this, props));
  }

  _createClass(UrlEdit, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'url-widget' },
        _react2.default.createElement(
          'div',
          { className: 'form-group Content-item' },
          _react2.default.createElement('input', { className: 'form-control', type: 'text', placeholder: 'Link', value: this.props.value,
            onChange: this.props.onChange, autoFocus: true })
        ),
        _react2.default.createElement(
          'div',
          { className: 'Widget-Remove-Button-Container' },
          _react2.default.createElement(
            'div',
            { onClick: this.props.onRemove },
            _react2.default.createElement('span', { className: 'glyphicon glyphicon-remove', 'aria-hidden': 'true' })
          )
        )
      );
    }
  }]);

  return UrlEdit;
})(_react2.default.Component);

exports.default = UrlEdit;

},{"react":"react","react-router":"react-router"}],82:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UrlFactory = (function () {
  function UrlFactory(sortOrder, name, description, templateId, parentIndex, row_number, column_number) {
    _classCallCheck(this, UrlFactory);

    this.sortOrder = sortOrder;
    this.name = name;
    this.description = description;
    this.templateId = templateId;
    this.parentIndex = parentIndex;
    this.row_number = row_number;
    this.column_number = column_number;
  }

  _createClass(UrlFactory, [{
    key: 'create',
    value: function create() {

      var content = {
        name: this.name,
        description: this.description,
        value: '',
        content_type_id: 5,
        sort_order: this.sortOrder,
        template_id: this.templateId,
        parent_index: this.parentIndex,
        row_number: this.row_number,
        column_number: this.column_number
      };

      return content;
    }
  }]);

  return UrlFactory;
})();

exports.default = UrlFactory;

},{"react":"react"}],83:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UrlReadOnly = (function (_React$Component) {
  _inherits(UrlReadOnly, _React$Component);

  function UrlReadOnly(props) {
    _classCallCheck(this, UrlReadOnly);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(UrlReadOnly).call(this, props));
  }

  _createClass(UrlReadOnly, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'a',
        { ref: 'link', name: 'link', href: this.props.value },
        this.props.value
      );
    }
  }]);

  return UrlReadOnly;
})(_react2.default.Component);

exports.default = UrlReadOnly;

},{"react":"react","react-router":"react-router"}],84:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _underscore = require('underscore');

var _FieldHelper = require('./Field/FieldHelper');

var _FieldHelper2 = _interopRequireDefault(_FieldHelper);

var _LongDescriptionFactory = require('./LongDescription/LongDescriptionFactory');

var _LongDescriptionFactory2 = _interopRequireDefault(_LongDescriptionFactory);

var _IframeFactory = require('./Iframe/IframeFactory');

var _IframeFactory2 = _interopRequireDefault(_IframeFactory);

var _ImageFactory = require('./Image/ImageFactory');

var _ImageFactory2 = _interopRequireDefault(_ImageFactory);

var _TitleFactory = require('./Title/TitleFactory');

var _TitleFactory2 = _interopRequireDefault(_TitleFactory);

var _ShortDescriptionFactory = require('./ShortDescription/ShortDescriptionFactory');

var _ShortDescriptionFactory2 = _interopRequireDefault(_ShortDescriptionFactory);

var _UrlFactory = require('./Url/UrlFactory');

var _UrlFactory2 = _interopRequireDefault(_UrlFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WidgetFactory = (function () {
  function WidgetFactory(widgetName, sortOrder, name, description, templateId, parentIndex, row_number, column_number) {
    _classCallCheck(this, WidgetFactory);

    this.widgetName = widgetName;
    this.sortOrder = sortOrder;
    this.name = name;
    this.description = description;
    this.templateId = templateId;
    this.parentIndex = parentIndex;
    this.row_number = row_number;
    this.column_number = column_number;
  }

  _createClass(WidgetFactory, [{
    key: 'create',
    value: function create() {
      if (this.widgetName === 'longDescription') {
        var factory = new _LongDescriptionFactory2.default(this.sortOrder, this.name, this.description, this.templateId, this.parentIndex, this.row_number, this.column_number);
        var factoryInstance = factory.create();

        return factoryInstance;
      } else if (this.widgetName === 'shortDescription') {
        var factory = new _ShortDescriptionFactory2.default(this.sortOrder, this.name, this.description, this.templateId, this.parentIndex, this.row_number, this.column_number);
        var factoryInstance = factory.create();

        return factoryInstance;
      } else if (this.widgetName === 'image') {
        var factory = new _ImageFactory2.default(this.sortOrder, this.name, this.description, this.templateId, this.parentIndex, this.row_number, this.column_number);
        var factoryInstance = factory.create();

        return factoryInstance;
      } else if (this.widgetName === 'title') {
        var factory = new _TitleFactory2.default(this.sortOrder, this.name, this.description, this.templateId, this.parentIndex, this.row_number, this.column_number);
        var factoryInstance = factory.create();

        return factoryInstance;
      } else if (this.widgetName === 'link') {
        var factory = new _UrlFactory2.default(this.sortOrder, this.name, this.description, this.templateId, this.parentIndex, this.row_number, this.column_number);
        var factoryInstance = factory.create();

        return factoryInstance;
      } else if (this.widgetName === 'iframe') {
        var factory = new _IframeFactory2.default(this.sortOrder, this.name, this.description, this.templateId, this.parentIndex, this.row_number, this.column_number);
        var factoryInstance = factory.create();

        return factoryInstance;
      } else {
        throw "There is no Widget that matches the this.widgetName.";
      }
    }
  }]);

  return WidgetFactory;
})();

exports.default = WidgetFactory;

},{"./Field/FieldHelper":46,"./Iframe/IframeFactory":50,"./Image/ImageFactory":53,"./LongDescription/LongDescriptionFactory":70,"./ShortDescription/ShortDescriptionFactory":74,"./Title/TitleFactory":78,"./Url/UrlFactory":82,"underscore":"underscore"}],85:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _WidgetFactory = require('./WidgetFactory');

var _WidgetFactory2 = _interopRequireDefault(_WidgetFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WidgetSelectList = (function (_React$Component) {
  _inherits(WidgetSelectList, _React$Component);

  function WidgetSelectList(props) {
    _classCallCheck(this, WidgetSelectList);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(WidgetSelectList).call(this, props));

    _this.state = { selectedWidget: 'longDescription' };
    return _this;
  }

  _createClass(WidgetSelectList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'onWidgetListChange',
    value: function onWidgetListChange(event) {
      this.setState({ selectedWidget: event.target.value });
    }
  }, {
    key: 'onAddWidget',
    value: function onAddWidget(event) {
      var selectedWidget = this.state.selectedWidget;
      var parentIndex = this.props.parentIndex;
      var factory = new _WidgetFactory2.default(selectedWidget, null, '', '', this.props.templateId, parentIndex, this.props.row_number, this.props.column_number);
      var factoryInstance = factory.create();

      this.props.onAddWidgetToContentList(factoryInstance);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'Widget-Select-Input' },
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'button',
              { className: 'btn btn-primary', onClick: this.onAddWidget.bind(this) },
              'Add Widget'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'Widget-Select-Input' },
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'div',
              { onChange: this.onWidgetListChange.bind(this) },
              _react2.default.createElement(
                'select',
                { className: 'form-control' },
                _react2.default.createElement(
                  'option',
                  { value: 'longDescription' },
                  'Long Description'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'shortDescription' },
                  'Short Description'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'title' },
                  'Title'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'iframe' },
                  'Iframe'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'image' },
                  'Image'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'link' },
                  'link'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return WidgetSelectList;
})(_react2.default.Component);

exports.default = WidgetSelectList;

},{"./WidgetFactory":84,"react":"react","react-router":"react-router"}],86:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _AuthStore = require('../stores/AuthStore');

var _AuthStore2 = _interopRequireDefault(_AuthStore);

var _AuthActions = require('../actions/AuthActions');

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _PageStore = require('../stores/PageStore');

var _PageStore2 = _interopRequireDefault(_PageStore);

var _PageActions = require('../actions/PageActions');

var _PageActions2 = _interopRequireDefault(_PageActions);

var _LookupStore = require('../stores/LookupStore');

var _LookupStore2 = _interopRequireDefault(_LookupStore);

var _LookupActions = require('../actions/LookupActions');

var _LookupActions2 = _interopRequireDefault(_LookupActions);

var _AuthHeader = require('./AuthHeader');

var _AuthHeader2 = _interopRequireDefault(_AuthHeader);

var _AppBackdrop = require('./AppBackdrop');

var _AppBackdrop2 = _interopRequireDefault(_AppBackdrop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = (function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

    _this.state = _AuthStore2.default.getState();
    _this.pageState = _PageStore2.default.getState();
    _this.lookupState = _LookupStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _AuthStore2.default.listen(this.onChange);
      _PageStore2.default.listen(this.onChange);
      _LookupStore2.default.listen(this.onChange);
      _AuthActions2.default.getUserAuthenticationData();
      _PageActions2.default.getAllPages();
      _LookupActions2.default.getLookups();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _AuthStore2.default.unlisten(this.onChange);
      _PageStore2.default.unlisten(this.onChange);
      _LookupStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_AuthHeader2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'App-container' },
          _react2.default.createElement(_Header2.default, null),
          this.props.children,
          _react2.default.createElement(_Footer2.default, null),
          _react2.default.createElement(_AppBackdrop2.default, null)
        )
      );
    }
  }]);

  return App;
})(_react2.default.Component);

exports.default = App;

},{"../actions/AuthActions":3,"../actions/LookupActions":5,"../actions/PageActions":7,"../stores/AuthStore":92,"../stores/LookupStore":94,"../stores/PageStore":96,"./AppBackdrop":16,"./AuthHeader":21,"./Footer":24,"./Header":25,"react":"react"}],87:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _underscore = require('underscore');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AuthHelper = (function () {
  function AuthHelper() {
    _classCallCheck(this, AuthHelper);
  }

  _createClass(AuthHelper, null, [{
    key: 'isUserPublisher',
    value: function isUserPublisher(userRoles) {
      var publisherRoles = [1, 2];

      var publisherRolesForUser = _underscore._.intersection(userRoles, publisherRoles);
      if (publisherRolesForUser.length > 0) {
        return true;
      }

      return false;
    }
  }, {
    key: 'isUserAdmin',
    value: function isUserAdmin(userRoles) {
      var adminRoles = [2];

      var adminRolesForUser = _underscore._.intersection(userRoles, adminRoles);
      if (adminRolesForUser.length > 0) {
        return true;
      }

      return false;
    }
  }]);

  return AuthHelper;
})();

exports.default = AuthHelper;

},{"underscore":"underscore"}],88:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _underscore = require('underscore');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PropsHelper = (function () {
  function PropsHelper() {
    _classCallCheck(this, PropsHelper);
  }

  _createClass(PropsHelper, null, [{
    key: 'convertPropsToArray',
    value: function convertPropsToArray(props) {
      var propsArray = [];

      _underscore._.each(props, function (prop) {
        propsArray.push(prop);
      });

      return propsArray;
    }
  }]);

  return PropsHelper;
})();

exports.default = PropsHelper;

},{"underscore":"underscore"}],89:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _createBrowserHistory = require('history/lib/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _createBrowserHistory2.default)();

_reactDom2.default.render(_react2.default.createElement(
  _reactRouter2.default,
  { history: history },
  _routes2.default
), document.getElementById('app'));

},{"./routes":90,"history/lib/createBrowserHistory":103,"react":"react","react-dom":"react-dom","react-router":"react-router"}],90:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _app = require('./components/app');

var _app2 = _interopRequireDefault(_app);

var _Home = require('./components/Home');

var _Home2 = _interopRequireDefault(_Home);

var _PageReadOnly = require('./components/Page/PageReadOnly');

var _PageReadOnly2 = _interopRequireDefault(_PageReadOnly);

var _PageEdit = require('./components/Page/PageEdit');

var _PageEdit2 = _interopRequireDefault(_PageEdit);

var _Signup = require('./components/Auth/Signup');

var _Signup2 = _interopRequireDefault(_Signup);

var _Login = require('./components/Auth/Login');

var _Login2 = _interopRequireDefault(_Login);

var _RoleManager = require('./components/Auth/RoleManager');

var _RoleManager2 = _interopRequireDefault(_RoleManager);

var _RoleManagerUser = require('./components/Auth/RoleManagerUser');

var _RoleManagerUser2 = _interopRequireDefault(_RoleManagerUser);

var _PagesAdministration = require('./components/Admin/PagesAdministration');

var _PagesAdministration2 = _interopRequireDefault(_PagesAdministration);

var _PageAdministrationEdit = require('./components/Admin/PageAdministrationEdit');

var _PageAdministrationEdit2 = _interopRequireDefault(_PageAdministrationEdit);

var _PageAdministrationCreate = require('./components/Admin/PageAdministrationCreate');

var _PageAdministrationCreate2 = _interopRequireDefault(_PageAdministrationCreate);

var _AppSettings = require('./components/Admin/AppSettings');

var _AppSettings2 = _interopRequireDefault(_AppSettings);

var _AppSetting = require('./components/Admin/AppSetting');

var _AppSetting2 = _interopRequireDefault(_AppSetting);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { component: _app2.default },
  _react2.default.createElement(_reactRouter.Route, { path: '/', component: _Home2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/:name/edit', component: _PageEdit2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/:name', component: _PageReadOnly2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/auth/signup', component: _Signup2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/auth/login', component: _Login2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/auth/role-manager', component: _RoleManager2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/auth/role-manager/users/:id', component: _RoleManagerUser2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/admin/pages', component: _PagesAdministration2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/admin/pages/:id/edit', component: _PageAdministrationEdit2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/admin/pages/create', component: _PageAdministrationCreate2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/admin/app-settings', component: _AppSettings2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/admin/app-settings/:id/edit', component: _AppSetting2.default })
);

},{"./components/Admin/AppSetting":9,"./components/Admin/AppSettings":10,"./components/Admin/PageAdministrationCreate":12,"./components/Admin/PageAdministrationEdit":13,"./components/Admin/PagesAdministration":14,"./components/Auth/Login":17,"./components/Auth/RoleManager":18,"./components/Auth/RoleManagerUser":19,"./components/Auth/Signup":20,"./components/Home":26,"./components/Page/PageEdit":28,"./components/Page/PageReadOnly":29,"./components/app":86,"react":"react","react-router":"react-router"}],91:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _AppSettingActions = require('../actions/AppSettingActions');

var _AppSettingActions2 = _interopRequireDefault(_AppSettingActions);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppSettingStore = (function () {
  function AppSettingStore() {
    _classCallCheck(this, AppSettingStore);

    this.bindActions(_AppSettingActions2.default);
    this.appSettings = [];
    this.appSettingsDictionary = {};
    this.ajaxAnimationClass = '';
  }

  _createClass(AppSettingStore, [{
    key: 'getAppSettingsSuccess',
    value: function getAppSettingsSuccess(appSettings) {
      var appSettingsDictionary = {};

      _underscore._.each(appSettings, function (setting) {
        appSettingsDictionary[setting.name] = setting.value;
      });

      this.appSettings = appSettings;
      this.appSettingsDictionary = appSettingsDictionary;
    }
  }, {
    key: 'getAppSettingsFail',
    value: function getAppSettingsFail(jqXhr) {
      onsole.log('getAppSettingsFail');
      toastr.error(jqXhr.responseJSON.message);
    }
  }, {
    key: 'onUpdateAjaxAnimation',
    value: function onUpdateAjaxAnimation(className) {
      this.ajaxAnimationClass = className; //fadein or fadeout
    }
  }]);

  return AppSettingStore;
})();

exports.default = _alt2.default.createStore(AppSettingStore);

},{"../actions/AppSettingActions":2,"../alt":8,"underscore":"underscore"}],92:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _AuthActions = require('../actions/AuthActions');

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _underscore = require('underscore');

var _AuthHelper = require('../helpers/AuthHelper');

var _AuthHelper2 = _interopRequireDefault(_AuthHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AuthStore = (function () {
  function AuthStore() {
    _classCallCheck(this, AuthStore);

    this.bindActions(_AuthActions2.default);
    this.auth = { isAuthenticated: false, userRoles: [], allRoles: [] };
    this.isPublisher = false;
    this.isAdmin = false;
    this.allRoles = [];
    this.ajaxAnimationClass = '';
  }

  _createClass(AuthStore, [{
    key: 'getUserAuthenticationDataSuccess',
    value: function getUserAuthenticationDataSuccess(authData) {
      this.auth = authData;
      this.allRoles = authData.allRoles;

      this.isPublisher = _AuthHelper2.default.isUserPublisher(this.auth.userRoles);
      this.isAdmin = _AuthHelper2.default.isUserAdmin(this.auth.userRoles);
    }
  }, {
    key: 'getUserAuthenticationDataFail',
    value: function getUserAuthenticationDataFail(jqXhr) {
      onsole.log('getUserAuthenticationDataFail');
      toastr.error(jqXhr.responseJSON.message);
    }
  }]);

  return AuthStore;
})();

exports.default = _alt2.default.createStore(AuthStore);

},{"../actions/AuthActions":3,"../alt":8,"../helpers/AuthHelper":87,"underscore":"underscore"}],93:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _FooterActions = require('../actions/FooterActions');

var _FooterActions2 = _interopRequireDefault(_FooterActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FooterStore = function FooterStore() {
  _classCallCheck(this, FooterStore);

  this.bindActions(_FooterActions2.default);
  this.characters = [];
}

// onGetTopCharactersSuccess(data) {
//   this.characters = data.slice(0, 5);
// }
//
// onGetTopCharactersFail(jqXhr) {
//   // Handle multiple response formats, fallback to HTTP status code number.
//   toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
// }
;

exports.default = _alt2.default.createStore(FooterStore);

},{"../actions/FooterActions":4,"../alt":8}],94:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _LookupActions = require('../actions/LookupActions');

var _LookupActions2 = _interopRequireDefault(_LookupActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LookupStore = (function () {
  function LookupStore() {
    _classCallCheck(this, LookupStore);

    this.bindActions(_LookupActions2.default);
    this.lookups = [];
    this.ajaxAnimationClass = '';
  }

  _createClass(LookupStore, [{
    key: 'getAllLookupsSuccess',
    value: function getAllLookupsSuccess(viewmodel) {
      this.lookups = viewmodel;
    }
  }, {
    key: 'getAllLookupsFail',
    value: function getAllLookupsFail(jqXhr) {
      onsole.log('getAllLookupsFail');
      toastr.error(jqXhr.responseJSON.message);
    }
  }, {
    key: 'onUpdateAjaxAnimation',
    value: function onUpdateAjaxAnimation(className) {
      this.ajaxAnimationClass = className; //fadein or fadeout
    }
  }]);

  return LookupStore;
})();

exports.default = _alt2.default.createStore(LookupStore);

},{"../actions/LookupActions":5,"../alt":8}],95:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _NavbarActions = require('../actions/NavbarActions');

var _NavbarActions2 = _interopRequireDefault(_NavbarActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbarStore = (function () {
  function NavbarStore() {
    _classCallCheck(this, NavbarStore);

    this.bindActions(_NavbarActions2.default);
    this.onlineUsers = 0;
    this.pages = [];
    this.ajaxAnimationClass = '';
  }

  _createClass(NavbarStore, [{
    key: 'getAllPagesSuccess',
    value: function getAllPagesSuccess(viewmodel) {
      this.pages = viewmodel.pages;
    }
  }, {
    key: 'getAllPagesFail',
    value: function getAllPagesFail(jqXhr) {
      onsole.log('onGetAllPagesFail');
      toastr.error(jqXhr.responseJSON.message);
    }
  }, {
    key: 'onUpdateOnlineUsers',
    value: function onUpdateOnlineUsers(data) {
      this.onlineUsers = data.onlineUsers;
    }
  }, {
    key: 'onUpdateAjaxAnimation',
    value: function onUpdateAjaxAnimation(className) {
      this.ajaxAnimationClass = className; //fadein or fadeout
    }
  }]);

  return NavbarStore;
})();

exports.default = _alt2.default.createStore(NavbarStore);

},{"../actions/NavbarActions":6,"../alt":8}],96:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _PageActions = require('../actions/PageActions');

var _PageActions2 = _interopRequireDefault(_PageActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PageStore = (function () {
  function PageStore() {
    _classCallCheck(this, PageStore);

    this.bindActions(_PageActions2.default);
    this.pages = [];
    this.ajaxAnimationClass = '';
  }

  _createClass(PageStore, [{
    key: 'getAllPagesSuccess',
    value: function getAllPagesSuccess(viewmodel) {
      this.pages = viewmodel.pages;
    }
  }, {
    key: 'getAllPagesFail',
    value: function getAllPagesFail(jqXhr) {
      onsole.log('onGetAllPagesFail');
      toastr.error(jqXhr.responseJSON.message);
    }
  }, {
    key: 'onUpdateAjaxAnimation',
    value: function onUpdateAjaxAnimation(className) {
      this.ajaxAnimationClass = className; //fadein or fadeout
    }
  }]);

  return PageStore;
})();

exports.default = _alt2.default.createStore(PageStore);

},{"../actions/PageActions":7,"../alt":8}],97:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],98:[function(require,module,exports){
/**
 * Indicates that navigation was caused by a call to history.push.
 */
'use strict';

exports.__esModule = true;
var PUSH = 'PUSH';

exports.PUSH = PUSH;
/**
 * Indicates that navigation was caused by a call to history.replace.
 */
var REPLACE = 'REPLACE';

exports.REPLACE = REPLACE;
/**
 * Indicates that navigation was caused by some other action such
 * as using a browser's back/forward buttons and/or manually manipulating
 * the URL in a browser's location bar. This is the default.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
 * for more information.
 */
var POP = 'POP';

exports.POP = POP;
exports['default'] = {
  PUSH: PUSH,
  REPLACE: REPLACE,
  POP: POP
};
},{}],99:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.loopAsync = loopAsync;

function loopAsync(turns, work, callback) {
  var currentTurn = 0;
  var isDone = false;

  function done() {
    isDone = true;
    callback.apply(this, arguments);
  }

  function next() {
    if (isDone) return;

    if (currentTurn < turns) {
      work.call(this, currentTurn++, next, done);
    } else {
      done.apply(this, arguments);
    }
  }

  next();
}
},{}],100:[function(require,module,exports){
(function (process){
/*eslint-disable no-empty */
'use strict';

exports.__esModule = true;
exports.saveState = saveState;
exports.readState = readState;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var KeyPrefix = '@@History/';
var QuotaExceededError = 'QuotaExceededError';
var SecurityError = 'SecurityError';

function createKey(key) {
  return KeyPrefix + key;
}

function saveState(key, state) {
  try {
    window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;

      return;
    }

    if (error.name === QuotaExceededError && window.sessionStorage.length === 0) {
      // Safari "private mode" throws QuotaExceededError.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;

      return;
    }

    throw error;
  }
}

function readState(key) {
  var json = undefined;
  try {
    json = window.sessionStorage.getItem(createKey(key));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;

      return null;
    }
  }

  if (json) {
    try {
      return JSON.parse(json);
    } catch (error) {
      // Ignore invalid JSON.
    }
  }

  return null;
}
}).call(this,require('_process'))
},{"_process":97,"warning":127}],101:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
exports.getHashPath = getHashPath;
exports.replaceHashPath = replaceHashPath;
exports.getWindowPath = getWindowPath;
exports.go = go;
exports.getUserConfirmation = getUserConfirmation;
exports.supportsHistory = supportsHistory;
exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

function addEventListener(node, event, listener) {
  if (node.addEventListener) {
    node.addEventListener(event, listener, false);
  } else {
    node.attachEvent('on' + event, listener);
  }
}

function removeEventListener(node, event, listener) {
  if (node.removeEventListener) {
    node.removeEventListener(event, listener, false);
  } else {
    node.detachEvent('on' + event, listener);
  }
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  return window.location.href.split('#')[1] || '';
}

function replaceHashPath(path) {
  window.location.replace(window.location.pathname + window.location.search + '#' + path);
}

function getWindowPath() {
  return window.location.pathname + window.location.search + window.location.hash;
}

function go(n) {
  if (n) window.history.go(n);
}

function getUserConfirmation(message, callback) {
  callback(window.confirm(message));
}

/**
 * Returns true if the HTML5 history API is supported. Taken from modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
 */

function supportsHistory() {
  var ua = navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }
  return window.history && 'pushState' in window.history;
}

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  var ua = navigator.userAgent;
  return ua.indexOf('Firefox') === -1;
}
},{}],102:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
exports.canUseDOM = canUseDOM;
},{}],103:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _Actions = require('./Actions');

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _DOMStateStorage = require('./DOMStateStorage');

var _createDOMHistory = require('./createDOMHistory');

var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

/**
 * Creates and returns a history object that uses HTML5's history API
 * (pushState, replaceState, and the popstate event) to manage history.
 * This is the recommended method of managing history in browsers because
 * it provides the cleanest URLs.
 *
 * Note: In browsers that do not support the HTML5 history API full
 * page reloads will be used to preserve URLs.
 */
function createBrowserHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;

  var forceRefresh = options.forceRefresh;

  var isSupported = _DOMUtils.supportsHistory();
  var useRefresh = !isSupported || forceRefresh;

  function getCurrentLocation(historyState) {
    historyState = historyState || window.history.state || {};

    var path = _DOMUtils.getWindowPath();
    var _historyState = historyState;
    var key = _historyState.key;

    var state = undefined;
    if (key) {
      state = _DOMStateStorage.readState(key);
    } else {
      state = null;
      key = history.createKey();

      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null, path);
    }

    return history.createLocation(path, state, undefined, key);
  }

  function startPopStateListener(_ref) {
    var transitionTo = _ref.transitionTo;

    function popStateListener(event) {
      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

      transitionTo(getCurrentLocation(event.state));
    }

    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

    return function () {
      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
    };
  }

  function finishTransition(location) {
    var basename = location.basename;
    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;
    var state = location.state;
    var action = location.action;
    var key = location.key;

    if (action === _Actions.POP) return; // Nothing to do.

    _DOMStateStorage.saveState(key, state);

    var path = (basename || '') + pathname + search + hash;
    var historyState = {
      key: key
    };

    if (action === _Actions.PUSH) {
      if (useRefresh) {
        window.location.href = path;
        return false; // Prevent location update.
      } else {
          window.history.pushState(historyState, null, path);
        }
    } else {
      // REPLACE
      if (useRefresh) {
        window.location.replace(path);
        return false; // Prevent location update.
      } else {
          window.history.replaceState(historyState, null, path);
        }
    }
  }

  var history = _createDOMHistory2['default'](_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    finishTransition: finishTransition,
    saveState: _DOMStateStorage.saveState
  }));

  var listenerCount = 0,
      stopPopStateListener = undefined;

  function listenBefore(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listenBefore(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  function listen(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listen(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    history.registerTransitionHook(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    history.unregisterTransitionHook(hook);

    if (--listenerCount === 0) stopPopStateListener();
  }

  return _extends({}, history, {
    listenBefore: listenBefore,
    listen: listen,
    registerTransitionHook: registerTransitionHook,
    unregisterTransitionHook: unregisterTransitionHook
  });
}

exports['default'] = createBrowserHistory;
module.exports = exports['default'];
}).call(this,require('_process'))
},{"./Actions":98,"./DOMStateStorage":100,"./DOMUtils":101,"./ExecutionEnvironment":102,"./createDOMHistory":104,"_process":97,"invariant":122}],104:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _createHistory = require('./createHistory');

var _createHistory2 = _interopRequireDefault(_createHistory);

function createDOMHistory(options) {
  var history = _createHistory2['default'](_extends({
    getUserConfirmation: _DOMUtils.getUserConfirmation
  }, options, {
    go: _DOMUtils.go
  }));

  function listen(listener) {
    !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;

    return history.listen(listener);
  }

  return _extends({}, history, {
    listen: listen
  });
}

exports['default'] = createDOMHistory;
module.exports = exports['default'];
}).call(this,require('_process'))
},{"./DOMUtils":101,"./ExecutionEnvironment":102,"./createHistory":106,"_process":97,"invariant":122}],105:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _Actions = require('./Actions');

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _DOMStateStorage = require('./DOMStateStorage');

var _createDOMHistory = require('./createDOMHistory');

var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

function isAbsolutePath(path) {
  return typeof path === 'string' && path.charAt(0) === '/';
}

function ensureSlash() {
  var path = _DOMUtils.getHashPath();

  if (isAbsolutePath(path)) return true;

  _DOMUtils.replaceHashPath('/' + path);

  return false;
}

function addQueryStringValueToPath(path, key, value) {
  return path + (path.indexOf('?') === -1 ? '?' : '&') + (key + '=' + value);
}

function stripQueryStringValueFromPath(path, key) {
  return path.replace(new RegExp('[?&]?' + key + '=[a-zA-Z0-9]+'), '');
}

function getQueryStringValueFromPath(path, key) {
  var match = path.match(new RegExp('\\?.*?\\b' + key + '=(.+?)\\b'));
  return match && match[1];
}

var DefaultQueryKey = '_k';

function createHashHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Hash history needs a DOM') : _invariant2['default'](false) : undefined;

  var queryKey = options.queryKey;

  if (queryKey === undefined || !!queryKey) queryKey = typeof queryKey === 'string' ? queryKey : DefaultQueryKey;

  function getCurrentLocation() {
    var path = _DOMUtils.getHashPath();

    var key = undefined,
        state = undefined;
    if (queryKey) {
      key = getQueryStringValueFromPath(path, queryKey);
      path = stripQueryStringValueFromPath(path, queryKey);

      if (key) {
        state = _DOMStateStorage.readState(key);
      } else {
        state = null;
        key = history.createKey();
        _DOMUtils.replaceHashPath(addQueryStringValueToPath(path, queryKey, key));
      }
    } else {
      key = state = null;
    }

    return history.createLocation(path, state, undefined, key);
  }

  function startHashChangeListener(_ref) {
    var transitionTo = _ref.transitionTo;

    function hashChangeListener() {
      if (!ensureSlash()) return; // Always make sure hashes are preceeded with a /.

      transitionTo(getCurrentLocation());
    }

    ensureSlash();
    _DOMUtils.addEventListener(window, 'hashchange', hashChangeListener);

    return function () {
      _DOMUtils.removeEventListener(window, 'hashchange', hashChangeListener);
    };
  }

  function finishTransition(location) {
    var basename = location.basename;
    var pathname = location.pathname;
    var search = location.search;
    var state = location.state;
    var action = location.action;
    var key = location.key;

    if (action === _Actions.POP) return; // Nothing to do.

    var path = (basename || '') + pathname + search;

    if (queryKey) {
      path = addQueryStringValueToPath(path, queryKey, key);
      _DOMStateStorage.saveState(key, state);
    } else {
      // Drop key and state.
      location.key = location.state = null;
    }

    var currentHash = _DOMUtils.getHashPath();

    if (action === _Actions.PUSH) {
      if (currentHash !== path) {
        window.location.hash = path;
      } else {
        process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'You cannot PUSH the same path using hash history') : undefined;
      }
    } else if (currentHash !== path) {
      // REPLACE
      _DOMUtils.replaceHashPath(path);
    }
  }

  var history = _createDOMHistory2['default'](_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    finishTransition: finishTransition,
    saveState: _DOMStateStorage.saveState
  }));

  var listenerCount = 0,
      stopHashChangeListener = undefined;

  function listenBefore(listener) {
    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

    var unlisten = history.listenBefore(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopHashChangeListener();
    };
  }

  function listen(listener) {
    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

    var unlisten = history.listen(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopHashChangeListener();
    };
  }

  function pushState(state, path) {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

    history.pushState(state, path);
  }

  function replaceState(state, path) {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

    history.replaceState(state, path);
  }

  var goIsSupportedWithoutReload = _DOMUtils.supportsGoWithoutReloadUsingHash();

  function go(n) {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](goIsSupportedWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : undefined;

    history.go(n);
  }

  function createHref(path) {
    return '#' + history.createHref(path);
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

    history.registerTransitionHook(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    history.unregisterTransitionHook(hook);

    if (--listenerCount === 0) stopHashChangeListener();
  }

  return _extends({}, history, {
    listenBefore: listenBefore,
    listen: listen,
    pushState: pushState,
    replaceState: replaceState,
    go: go,
    createHref: createHref,
    registerTransitionHook: registerTransitionHook,
    unregisterTransitionHook: unregisterTransitionHook
  });
}

exports['default'] = createHashHistory;
module.exports = exports['default'];
}).call(this,require('_process'))
},{"./Actions":98,"./DOMStateStorage":100,"./DOMUtils":101,"./ExecutionEnvironment":102,"./createDOMHistory":104,"_process":97,"invariant":122,"warning":127}],106:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _AsyncUtils = require('./AsyncUtils');

var _Actions = require('./Actions');

var _createLocation2 = require('./createLocation');

var _createLocation3 = _interopRequireDefault(_createLocation2);

var _runTransitionHook = require('./runTransitionHook');

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _deprecate = require('./deprecate');

var _deprecate2 = _interopRequireDefault(_deprecate);

function createRandomKey(length) {
  return Math.random().toString(36).substr(2, length);
}

function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search &&
  //a.action === b.action && // Different action !== location change.
  a.key === b.key && _deepEqual2['default'](a.state, b.state);
}

var DefaultKeyLength = 6;

function createHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var getCurrentLocation = options.getCurrentLocation;
  var finishTransition = options.finishTransition;
  var saveState = options.saveState;
  var go = options.go;
  var keyLength = options.keyLength;
  var getUserConfirmation = options.getUserConfirmation;

  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

  var transitionHooks = [];

  function listenBefore(hook) {
    transitionHooks.push(hook);

    return function () {
      transitionHooks = transitionHooks.filter(function (item) {
        return item !== hook;
      });
    };
  }

  var allKeys = [];
  var changeListeners = [];
  var location = undefined;

  function getCurrent() {
    if (pendingLocation && pendingLocation.action === _Actions.POP) {
      return allKeys.indexOf(pendingLocation.key);
    } else if (location) {
      return allKeys.indexOf(location.key);
    } else {
      return -1;
    }
  }

  function updateLocation(newLocation) {
    var current = getCurrent();

    location = newLocation;

    if (location.action === _Actions.PUSH) {
      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
    } else if (location.action === _Actions.REPLACE) {
      allKeys[current] = location.key;
    }

    changeListeners.forEach(function (listener) {
      listener(location);
    });
  }

  function listen(listener) {
    changeListeners.push(listener);

    if (location) {
      listener(location);
    } else {
      var _location = getCurrentLocation();
      allKeys = [_location.key];
      updateLocation(_location);
    }

    return function () {
      changeListeners = changeListeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function confirmTransitionTo(location, callback) {
    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
        if (result != null) {
          done(result);
        } else {
          next();
        }
      });
    }, function (message) {
      if (getUserConfirmation && typeof message === 'string') {
        getUserConfirmation(message, function (ok) {
          callback(ok !== false);
        });
      } else {
        callback(message !== false);
      }
    });
  }

  var pendingLocation = undefined;

  function transitionTo(nextLocation) {
    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

    pendingLocation = nextLocation;

    confirmTransitionTo(nextLocation, function (ok) {
      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

      if (ok) {
        // treat PUSH to current path like REPLACE to be consistent with browsers
        if (nextLocation.action === _Actions.PUSH) {
          var _getCurrentLocation = getCurrentLocation();

          var pathname = _getCurrentLocation.pathname;
          var search = _getCurrentLocation.search;

          var currentPath = pathname + search;
          var path = nextLocation.pathname + nextLocation.search;

          if (currentPath === path) nextLocation.action = _Actions.REPLACE;
        }

        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
      } else if (location && nextLocation.action === _Actions.POP) {
        var prevIndex = allKeys.indexOf(location.key);
        var nextIndex = allKeys.indexOf(nextLocation.key);

        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
      }
    });
  }

  function pushState(state, path) {
    transitionTo(createLocation(path, state, _Actions.PUSH, createKey()));
  }

  function push(path) {
    pushState(null, path);
  }

  function replaceState(state, path) {
    transitionTo(createLocation(path, state, _Actions.REPLACE, createKey()));
  }

  function replace(path) {
    replaceState(null, path);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function createKey() {
    return createRandomKey(keyLength);
  }

  function createPath(path) {
    if (path == null || typeof path === 'string') return path;

    var pathname = path.pathname;
    var search = path.search;
    var hash = path.hash;

    var result = pathname;

    if (search) result += search;

    if (hash) result += hash;

    return result;
  }

  function createHref(path) {
    return createPath(path);
  }

  function createLocation(path, state, action) {
    var key = arguments.length <= 3 || arguments[3] === undefined ? createKey() : arguments[3];

    return _createLocation3['default'](path, state, action, key);
  }

  // deprecated
  function setState(state) {
    if (location) {
      updateLocationState(location, state);
      updateLocation(location);
    } else {
      updateLocationState(getCurrentLocation(), state);
    }
  }

  function updateLocationState(location, state) {
    location.state = _extends({}, location.state, state);
    saveState(location.key, location.state);
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    transitionHooks = transitionHooks.filter(function (item) {
      return item !== hook;
    });
  }

  return {
    listenBefore: listenBefore,
    listen: listen,
    transitionTo: transitionTo,
    pushState: pushState,
    replaceState: replaceState,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    createKey: createKey,
    createPath: createPath,
    createHref: createHref,
    createLocation: createLocation,

    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead')
  };
}

exports['default'] = createHistory;
module.exports = exports['default'];
},{"./Actions":98,"./AsyncUtils":99,"./createLocation":107,"./deprecate":109,"./runTransitionHook":115,"deep-equal":119}],107:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Actions = require('./Actions');

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

function createLocation() {
  var path = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
  var state = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
  var action = arguments.length <= 2 || arguments[2] === undefined ? _Actions.POP : arguments[2];
  var key = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

  if (typeof path === 'string') path = _parsePath2['default'](path);

  var pathname = path.pathname || '/';
  var search = path.search || '';
  var hash = path.hash || '';

  return {
    pathname: pathname,
    search: search,
    hash: hash,
    state: state,
    action: action,
    key: key
  };
}

exports['default'] = createLocation;
module.exports = exports['default'];
},{"./Actions":98,"./parsePath":114}],108:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _Actions = require('./Actions');

var _createHistory = require('./createHistory');

var _createHistory2 = _interopRequireDefault(_createHistory);

function createStateStorage(entries) {
  return entries.filter(function (entry) {
    return entry.state;
  }).reduce(function (memo, entry) {
    memo[entry.key] = entry.state;
    return memo;
  }, {});
}

function createMemoryHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  if (Array.isArray(options)) {
    options = { entries: options };
  } else if (typeof options === 'string') {
    options = { entries: [options] };
  }

  var history = _createHistory2['default'](_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    finishTransition: finishTransition,
    saveState: saveState,
    go: go
  }));

  var _options = options;
  var entries = _options.entries;
  var current = _options.current;

  if (typeof entries === 'string') {
    entries = [entries];
  } else if (!Array.isArray(entries)) {
    entries = ['/'];
  }

  entries = entries.map(function (entry) {
    var key = history.createKey();

    if (typeof entry === 'string') return { pathname: entry, key: key };

    if (typeof entry === 'object' && entry) return _extends({}, entry, { key: key });

    !false ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Unable to create history entry from %s', entry) : _invariant2['default'](false) : undefined;
  });

  if (current == null) {
    current = entries.length - 1;
  } else {
    !(current >= 0 && current < entries.length) ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Current index must be >= 0 and < %s, was %s', entries.length, current) : _invariant2['default'](false) : undefined;
  }

  var storage = createStateStorage(entries);

  function saveState(key, state) {
    storage[key] = state;
  }

  function readState(key) {
    return storage[key];
  }

  function getCurrentLocation() {
    var entry = entries[current];
    var key = entry.key;
    var basename = entry.basename;
    var pathname = entry.pathname;
    var search = entry.search;

    var path = (basename || '') + pathname + (search || '');

    var state = undefined;
    if (key) {
      state = readState(key);
    } else {
      state = null;
      key = history.createKey();
      entry.key = key;
    }

    return history.createLocation(path, state, undefined, key);
  }

  function canGo(n) {
    var index = current + n;
    return index >= 0 && index < entries.length;
  }

  function go(n) {
    if (n) {
      !canGo(n) ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Cannot go(%s) there is not enough history', n) : _invariant2['default'](false) : undefined;

      current += n;

      var currentLocation = getCurrentLocation();

      // change action to POP
      history.transitionTo(_extends({}, currentLocation, { action: _Actions.POP }));
    }
  }

  function finishTransition(location) {
    switch (location.action) {
      case _Actions.PUSH:
        current += 1;

        // if we are not on the top of stack
        // remove rest and push new
        if (current < entries.length) entries.splice(current);

        entries.push(location);
        saveState(location.key, location.state);
        break;
      case _Actions.REPLACE:
        entries[current] = location;
        saveState(location.key, location.state);
        break;
    }
  }

  return history;
}

exports['default'] = createMemoryHistory;
module.exports = exports['default'];
}).call(this,require('_process'))
},{"./Actions":98,"./createHistory":106,"_process":97,"invariant":122}],109:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function deprecate(fn, message) {
  return function () {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] ' + message) : undefined;
    return fn.apply(this, arguments);
  };
}

exports['default'] = deprecate;
module.exports = exports['default'];
}).call(this,require('_process'))
},{"_process":97,"warning":127}],110:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _deprecate = require('./deprecate');

var _deprecate2 = _interopRequireDefault(_deprecate);

var _useBeforeUnload = require('./useBeforeUnload');

var _useBeforeUnload2 = _interopRequireDefault(_useBeforeUnload);

exports['default'] = _deprecate2['default'](_useBeforeUnload2['default'], 'enableBeforeUnload is deprecated, use useBeforeUnload instead');
module.exports = exports['default'];
},{"./deprecate":109,"./useBeforeUnload":117}],111:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _deprecate = require('./deprecate');

var _deprecate2 = _interopRequireDefault(_deprecate);

var _useQueries = require('./useQueries');

var _useQueries2 = _interopRequireDefault(_useQueries);

exports['default'] = _deprecate2['default'](_useQueries2['default'], 'enableQueries is deprecated, use useQueries instead');
module.exports = exports['default'];
},{"./deprecate":109,"./useQueries":118}],112:[function(require,module,exports){
"use strict";

exports.__esModule = true;
function extractPath(string) {
  var match = string.match(/^https?:\/\/[^\/]*/);

  if (match == null) return string;

  return string.substring(match[0].length);
}

exports["default"] = extractPath;
module.exports = exports["default"];
},{}],113:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _createBrowserHistory = require('./createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

exports.createHistory = _createBrowserHistory2['default'];

var _createHashHistory2 = require('./createHashHistory');

var _createHashHistory3 = _interopRequireDefault(_createHashHistory2);

exports.createHashHistory = _createHashHistory3['default'];

var _createMemoryHistory2 = require('./createMemoryHistory');

var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);

exports.createMemoryHistory = _createMemoryHistory3['default'];

var _createLocation2 = require('./createLocation');

var _createLocation3 = _interopRequireDefault(_createLocation2);

exports.createLocation = _createLocation3['default'];

var _useBasename2 = require('./useBasename');

var _useBasename3 = _interopRequireDefault(_useBasename2);

exports.useBasename = _useBasename3['default'];

var _useBeforeUnload2 = require('./useBeforeUnload');

var _useBeforeUnload3 = _interopRequireDefault(_useBeforeUnload2);

exports.useBeforeUnload = _useBeforeUnload3['default'];

var _useQueries2 = require('./useQueries');

var _useQueries3 = _interopRequireDefault(_useQueries2);

exports.useQueries = _useQueries3['default'];

var _Actions2 = require('./Actions');

var _Actions3 = _interopRequireDefault(_Actions2);

exports.Actions = _Actions3['default'];

// deprecated

var _enableBeforeUnload2 = require('./enableBeforeUnload');

var _enableBeforeUnload3 = _interopRequireDefault(_enableBeforeUnload2);

exports.enableBeforeUnload = _enableBeforeUnload3['default'];

var _enableQueries2 = require('./enableQueries');

var _enableQueries3 = _interopRequireDefault(_enableQueries2);

exports.enableQueries = _enableQueries3['default'];
},{"./Actions":98,"./createBrowserHistory":103,"./createHashHistory":105,"./createLocation":107,"./createMemoryHistory":108,"./enableBeforeUnload":110,"./enableQueries":111,"./useBasename":116,"./useBeforeUnload":117,"./useQueries":118}],114:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _extractPath = require('./extractPath');

var _extractPath2 = _interopRequireDefault(_extractPath);

function parsePath(path) {
  var pathname = _extractPath2['default'](path);
  var search = '';
  var hash = '';

  process.env.NODE_ENV !== 'production' ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substring(hashIndex);
    pathname = pathname.substring(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substring(searchIndex);
    pathname = pathname.substring(0, searchIndex);
  }

  if (pathname === '') pathname = '/';

  return {
    pathname: pathname,
    search: search,
    hash: hash
  };
}

exports['default'] = parsePath;
module.exports = exports['default'];
}).call(this,require('_process'))
},{"./extractPath":112,"_process":97,"warning":127}],115:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function runTransitionHook(hook, location, callback) {
  var result = hook(location, callback);

  if (hook.length < 2) {
    // Assume the hook runs synchronously and automatically
    // call the callback with the return value.
    callback(result);
  } else {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
  }
}

exports['default'] = runTransitionHook;
module.exports = exports['default'];
}).call(this,require('_process'))
},{"_process":97,"warning":127}],116:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _runTransitionHook = require('./runTransitionHook');

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _extractPath = require('./extractPath');

var _extractPath2 = _interopRequireDefault(_extractPath);

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

function useBasename(createHistory) {
  return function () {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var basename = options.basename;

    var historyOptions = _objectWithoutProperties(options, ['basename']);

    var history = createHistory(historyOptions);

    // Automatically use the value of <base href> in HTML
    // documents as basename if it's not explicitly given.
    if (basename == null && _ExecutionEnvironment.canUseDOM) {
      var base = document.getElementsByTagName('base')[0];

      if (base) basename = _extractPath2['default'](base.href);
    }

    function addBasename(location) {
      if (basename && location.basename == null) {
        if (location.pathname.indexOf(basename) === 0) {
          location.pathname = location.pathname.substring(basename.length);
          location.basename = basename;

          if (location.pathname === '') location.pathname = '/';
        } else {
          location.basename = '';
        }
      }

      return location;
    }

    function prependBasename(path) {
      if (!basename) return path;

      if (typeof path === 'string') path = _parsePath2['default'](path);

      var pname = path.pathname;
      var normalizedBasename = basename.slice(-1) === '/' ? basename : basename + '/';
      var normalizedPathname = pname.charAt(0) === '/' ? pname.slice(1) : pname;
      var pathname = normalizedBasename + normalizedPathname;

      return _extends({}, path, {
        pathname: pathname
      });
    }

    // Override all read methods with basename-aware versions.
    function listenBefore(hook) {
      return history.listenBefore(function (location, callback) {
        _runTransitionHook2['default'](hook, addBasename(location), callback);
      });
    }

    function listen(listener) {
      return history.listen(function (location) {
        listener(addBasename(location));
      });
    }

    // Override all write methods with basename-aware versions.
    function pushState(state, path) {
      history.pushState(state, prependBasename(path));
    }

    function push(path) {
      pushState(null, path);
    }

    function replaceState(state, path) {
      history.replaceState(state, prependBasename(path));
    }

    function replace(path) {
      replaceState(null, path);
    }

    function createPath(path) {
      return history.createPath(prependBasename(path));
    }

    function createHref(path) {
      return history.createHref(prependBasename(path));
    }

    function createLocation() {
      return addBasename(history.createLocation.apply(history, arguments));
    }

    return _extends({}, history, {
      listenBefore: listenBefore,
      listen: listen,
      pushState: pushState,
      push: push,
      replaceState: replaceState,
      replace: replace,
      createPath: createPath,
      createHref: createHref,
      createLocation: createLocation
    });
  };
}

exports['default'] = useBasename;
module.exports = exports['default'];
},{"./ExecutionEnvironment":102,"./extractPath":112,"./parsePath":114,"./runTransitionHook":115}],117:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _deprecate = require('./deprecate');

var _deprecate2 = _interopRequireDefault(_deprecate);

function startBeforeUnloadListener(getBeforeUnloadPromptMessage) {
  function listener(event) {
    var message = getBeforeUnloadPromptMessage();

    if (typeof message === 'string') {
      (event || window.event).returnValue = message;
      return message;
    }
  }

  _DOMUtils.addEventListener(window, 'beforeunload', listener);

  return function () {
    _DOMUtils.removeEventListener(window, 'beforeunload', listener);
  };
}

/**
 * Returns a new createHistory function that can be used to create
 * history objects that know how to use the beforeunload event in web
 * browsers to cancel navigation.
 */
function useBeforeUnload(createHistory) {
  return function (options) {
    var history = createHistory(options);

    var stopBeforeUnloadListener = undefined;
    var beforeUnloadHooks = [];

    function getBeforeUnloadPromptMessage() {
      var message = undefined;

      for (var i = 0, len = beforeUnloadHooks.length; message == null && i < len; ++i) {
        message = beforeUnloadHooks[i].call();
      }return message;
    }

    function listenBeforeUnload(hook) {
      beforeUnloadHooks.push(hook);

      if (beforeUnloadHooks.length === 1) {
        if (_ExecutionEnvironment.canUseDOM) {
          stopBeforeUnloadListener = startBeforeUnloadListener(getBeforeUnloadPromptMessage);
        } else {
          process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'listenBeforeUnload only works in DOM environments') : undefined;
        }
      }

      return function () {
        beforeUnloadHooks = beforeUnloadHooks.filter(function (item) {
          return item !== hook;
        });

        if (beforeUnloadHooks.length === 0 && stopBeforeUnloadListener) {
          stopBeforeUnloadListener();
          stopBeforeUnloadListener = null;
        }
      };
    }

    // deprecated
    function registerBeforeUnloadHook(hook) {
      if (_ExecutionEnvironment.canUseDOM && beforeUnloadHooks.indexOf(hook) === -1) {
        beforeUnloadHooks.push(hook);

        if (beforeUnloadHooks.length === 1) stopBeforeUnloadListener = startBeforeUnloadListener(getBeforeUnloadPromptMessage);
      }
    }

    // deprecated
    function unregisterBeforeUnloadHook(hook) {
      if (beforeUnloadHooks.length > 0) {
        beforeUnloadHooks = beforeUnloadHooks.filter(function (item) {
          return item !== hook;
        });

        if (beforeUnloadHooks.length === 0) stopBeforeUnloadListener();
      }
    }

    return _extends({}, history, {
      listenBeforeUnload: listenBeforeUnload,

      registerBeforeUnloadHook: _deprecate2['default'](registerBeforeUnloadHook, 'registerBeforeUnloadHook is deprecated; use listenBeforeUnload instead'),
      unregisterBeforeUnloadHook: _deprecate2['default'](unregisterBeforeUnloadHook, 'unregisterBeforeUnloadHook is deprecated; use the callback returned from listenBeforeUnload instead')
    });
  };
}

exports['default'] = useBeforeUnload;
module.exports = exports['default'];
}).call(this,require('_process'))
},{"./DOMUtils":101,"./ExecutionEnvironment":102,"./deprecate":109,"_process":97,"warning":127}],118:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

var _runTransitionHook = require('./runTransitionHook');

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

function defaultStringifyQuery(query) {
  return _qs2['default'].stringify(query, { arrayFormat: 'brackets' }).replace(/%20/g, '+');
}

function defaultParseQueryString(queryString) {
  return _qs2['default'].parse(queryString.replace(/\+/g, '%20'));
}

/**
 * Returns a new createHistory function that may be used to create
 * history objects that know how to handle URL queries.
 */
function useQueries(createHistory) {
  return function () {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var stringifyQuery = options.stringifyQuery;
    var parseQueryString = options.parseQueryString;

    var historyOptions = _objectWithoutProperties(options, ['stringifyQuery', 'parseQueryString']);

    var history = createHistory(historyOptions);

    if (typeof stringifyQuery !== 'function') stringifyQuery = defaultStringifyQuery;

    if (typeof parseQueryString !== 'function') parseQueryString = defaultParseQueryString;

    function addQuery(location) {
      if (location.query == null) location.query = parseQueryString(location.search.substring(1));

      return location;
    }

    function appendQuery(path, query) {
      var queryString = undefined;
      if (!query || (queryString = stringifyQuery(query)) === '') return path;

      if (typeof path === 'string') path = _parsePath2['default'](path);

      var search = path.search + (path.search ? '&' : '?') + queryString;

      return _extends({}, path, {
        search: search
      });
    }

    // Override all read methods with query-aware versions.
    function listenBefore(hook) {
      return history.listenBefore(function (location, callback) {
        _runTransitionHook2['default'](hook, addQuery(location), callback);
      });
    }

    function listen(listener) {
      return history.listen(function (location) {
        listener(addQuery(location));
      });
    }

    // Override all write methods with query-aware versions.
    function pushState(state, path, query) {
      return history.pushState(state, appendQuery(path, query));
    }

    function replaceState(state, path, query) {
      return history.replaceState(state, appendQuery(path, query));
    }

    function createPath(path, query) {
      return history.createPath(appendQuery(path, query));
    }

    function createHref(path, query) {
      return history.createHref(appendQuery(path, query));
    }

    function createLocation() {
      return addQuery(history.createLocation.apply(history, arguments));
    }

    return _extends({}, history, {
      listenBefore: listenBefore,
      listen: listen,
      pushState: pushState,
      replaceState: replaceState,
      createPath: createPath,
      createHref: createHref,
      createLocation: createLocation
    });
  };
}

exports['default'] = useQueries;
module.exports = exports['default'];
},{"./parsePath":114,"./runTransitionHook":115,"qs":123}],119:[function(require,module,exports){
var pSlice = Array.prototype.slice;
var objectKeys = require('./lib/keys.js');
var isArguments = require('./lib/is_arguments.js');

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}

},{"./lib/is_arguments.js":120,"./lib/keys.js":121}],120:[function(require,module,exports){
var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};

},{}],121:[function(require,module,exports){
exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}

},{}],122:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

}).call(this,require('_process'))
},{"_process":97}],123:[function(require,module,exports){
// Load modules

var Stringify = require('./stringify');
var Parse = require('./parse');


// Declare internals

var internals = {};


module.exports = {
    stringify: Stringify,
    parse: Parse
};

},{"./parse":124,"./stringify":125}],124:[function(require,module,exports){
// Load modules

var Utils = require('./utils');


// Declare internals

var internals = {
    delimiter: '&',
    depth: 5,
    arrayLimit: 20,
    parameterLimit: 1000,
    strictNullHandling: false,
    plainObjects: false,
    allowPrototypes: false
};


internals.parseValues = function (str, options) {

    var obj = {};
    var parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);

    for (var i = 0, il = parts.length; i < il; ++i) {
        var part = parts[i];
        var pos = part.indexOf(']=') === -1 ? part.indexOf('=') : part.indexOf(']=') + 1;

        if (pos === -1) {
            obj[Utils.decode(part)] = '';

            if (options.strictNullHandling) {
                obj[Utils.decode(part)] = null;
            }
        }
        else {
            var key = Utils.decode(part.slice(0, pos));
            var val = Utils.decode(part.slice(pos + 1));

            if (!Object.prototype.hasOwnProperty.call(obj, key)) {
                obj[key] = val;
            }
            else {
                obj[key] = [].concat(obj[key]).concat(val);
            }
        }
    }

    return obj;
};


internals.parseObject = function (chain, val, options) {

    if (!chain.length) {
        return val;
    }

    var root = chain.shift();

    var obj;
    if (root === '[]') {
        obj = [];
        obj = obj.concat(internals.parseObject(chain, val, options));
    }
    else {
        obj = options.plainObjects ? Object.create(null) : {};
        var cleanRoot = root[0] === '[' && root[root.length - 1] === ']' ? root.slice(1, root.length - 1) : root;
        var index = parseInt(cleanRoot, 10);
        var indexString = '' + index;
        if (!isNaN(index) &&
            root !== cleanRoot &&
            indexString === cleanRoot &&
            index >= 0 &&
            (options.parseArrays &&
             index <= options.arrayLimit)) {

            obj = [];
            obj[index] = internals.parseObject(chain, val, options);
        }
        else {
            obj[cleanRoot] = internals.parseObject(chain, val, options);
        }
    }

    return obj;
};


internals.parseKeys = function (key, val, options) {

    if (!key) {
        return;
    }

    // Transform dot notation to bracket notation

    if (options.allowDots) {
        key = key.replace(/\.([^\.\[]+)/g, '[$1]');
    }

    // The regex chunks

    var parent = /^([^\[\]]*)/;
    var child = /(\[[^\[\]]*\])/g;

    // Get the parent

    var segment = parent.exec(key);

    // Stash the parent if it exists

    var keys = [];
    if (segment[1]) {
        // If we aren't using plain objects, optionally prefix keys
        // that would overwrite object prototype properties
        if (!options.plainObjects &&
            Object.prototype.hasOwnProperty(segment[1])) {

            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(segment[1]);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {

        ++i;
        if (!options.plainObjects &&
            Object.prototype.hasOwnProperty(segment[1].replace(/\[|\]/g, ''))) {

            if (!options.allowPrototypes) {
                continue;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return internals.parseObject(keys, val, options);
};


module.exports = function (str, options) {

    options = options || {};
    options.delimiter = typeof options.delimiter === 'string' || Utils.isRegExp(options.delimiter) ? options.delimiter : internals.delimiter;
    options.depth = typeof options.depth === 'number' ? options.depth : internals.depth;
    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : internals.arrayLimit;
    options.parseArrays = options.parseArrays !== false;
    options.allowDots = options.allowDots !== false;
    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : internals.plainObjects;
    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : internals.allowPrototypes;
    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : internals.parameterLimit;
    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : internals.strictNullHandling;

    if (str === '' ||
        str === null ||
        typeof str === 'undefined') {

        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? internals.parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0, il = keys.length; i < il; ++i) {
        var key = keys[i];
        var newObj = internals.parseKeys(key, tempObj[key], options);
        obj = Utils.merge(obj, newObj, options);
    }

    return Utils.compact(obj);
};

},{"./utils":126}],125:[function(require,module,exports){
// Load modules

var Utils = require('./utils');


// Declare internals

var internals = {
    delimiter: '&',
    arrayPrefixGenerators: {
        brackets: function (prefix, key) {

            return prefix + '[]';
        },
        indices: function (prefix, key) {

            return prefix + '[' + key + ']';
        },
        repeat: function (prefix, key) {

            return prefix;
        }
    },
    strictNullHandling: false
};


internals.stringify = function (obj, prefix, generateArrayPrefix, strictNullHandling, filter) {

    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    }
    else if (Utils.isBuffer(obj)) {
        obj = obj.toString();
    }
    else if (obj instanceof Date) {
        obj = obj.toISOString();
    }
    else if (obj === null) {
        if (strictNullHandling) {
            return Utils.encode(prefix);
        }

        obj = '';
    }

    if (typeof obj === 'string' ||
        typeof obj === 'number' ||
        typeof obj === 'boolean') {

        return [Utils.encode(prefix) + '=' + Utils.encode(obj)];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys = Array.isArray(filter) ? filter : Object.keys(obj);
    for (var i = 0, il = objKeys.length; i < il; ++i) {
        var key = objKeys[i];

        if (Array.isArray(obj)) {
            values = values.concat(internals.stringify(obj[key], generateArrayPrefix(prefix, key), generateArrayPrefix, strictNullHandling, filter));
        }
        else {
            values = values.concat(internals.stringify(obj[key], prefix + '[' + key + ']', generateArrayPrefix, strictNullHandling, filter));
        }
    }

    return values;
};


module.exports = function (obj, options) {

    options = options || {};
    var delimiter = typeof options.delimiter === 'undefined' ? internals.delimiter : options.delimiter;
    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : internals.strictNullHandling;
    var objKeys;
    var filter;
    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    }
    else if (Array.isArray(options.filter)) {
        objKeys = filter = options.filter;
    }

    var keys = [];

    if (typeof obj !== 'object' ||
        obj === null) {

        return '';
    }

    var arrayFormat;
    if (options.arrayFormat in internals.arrayPrefixGenerators) {
        arrayFormat = options.arrayFormat;
    }
    else if ('indices' in options) {
        arrayFormat = options.indices ? 'indices' : 'repeat';
    }
    else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = internals.arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }
    for (var i = 0, il = objKeys.length; i < il; ++i) {
        var key = objKeys[i];
        keys = keys.concat(internals.stringify(obj[key], key, generateArrayPrefix, strictNullHandling, filter));
    }

    return keys.join(delimiter);
};

},{"./utils":126}],126:[function(require,module,exports){
// Load modules


// Declare internals

var internals = {};
internals.hexTable = new Array(256);
for (var h = 0; h < 256; ++h) {
    internals.hexTable[h] = '%' + ((h < 16 ? '0' : '') + h.toString(16)).toUpperCase();
}


exports.arrayToObject = function (source, options) {

    var obj = options.plainObjects ? Object.create(null) : {};
    for (var i = 0, il = source.length; i < il; ++i) {
        if (typeof source[i] !== 'undefined') {

            obj[i] = source[i];
        }
    }

    return obj;
};


exports.merge = function (target, source, options) {

    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (Array.isArray(target)) {
            target.push(source);
        }
        else if (typeof target === 'object') {
            target[source] = true;
        }
        else {
            target = [target, source];
        }

        return target;
    }

    if (typeof target !== 'object') {
        target = [target].concat(source);
        return target;
    }

    if (Array.isArray(target) &&
        !Array.isArray(source)) {

        target = exports.arrayToObject(target, options);
    }

    var keys = Object.keys(source);
    for (var k = 0, kl = keys.length; k < kl; ++k) {
        var key = keys[k];
        var value = source[key];

        if (!Object.prototype.hasOwnProperty.call(target, key)) {
            target[key] = value;
        }
        else {
            target[key] = exports.merge(target[key], value, options);
        }
    }

    return target;
};


exports.decode = function (str) {

    try {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    } catch (e) {
        return str;
    }
};

exports.encode = function (str) {

    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    if (typeof str !== 'string') {
        str = '' + str;
    }

    var out = '';
    for (var i = 0, il = str.length; i < il; ++i) {
        var c = str.charCodeAt(i);

        if (c === 0x2D || // -
            c === 0x2E || // .
            c === 0x5F || // _
            c === 0x7E || // ~
            (c >= 0x30 && c <= 0x39) || // 0-9
            (c >= 0x41 && c <= 0x5A) || // a-z
            (c >= 0x61 && c <= 0x7A)) { // A-Z

            out += str[i];
            continue;
        }

        if (c < 0x80) {
            out += internals.hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out += internals.hexTable[0xC0 | (c >> 6)] + internals.hexTable[0x80 | (c & 0x3F)];
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out += internals.hexTable[0xE0 | (c >> 12)] + internals.hexTable[0x80 | ((c >> 6) & 0x3F)] + internals.hexTable[0x80 | (c & 0x3F)];
            continue;
        }

        ++i;
        c = 0x10000 + (((c & 0x3FF) << 10) | (str.charCodeAt(i) & 0x3FF));
        out += internals.hexTable[0xF0 | (c >> 18)] + internals.hexTable[0x80 | ((c >> 12) & 0x3F)] + internals.hexTable[0x80 | ((c >> 6) & 0x3F)] + internals.hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

exports.compact = function (obj, refs) {

    if (typeof obj !== 'object' ||
        obj === null) {

        return obj;
    }

    refs = refs || [];
    var lookup = refs.indexOf(obj);
    if (lookup !== -1) {
        return refs[lookup];
    }

    refs.push(obj);

    if (Array.isArray(obj)) {
        var compacted = [];

        for (var i = 0, il = obj.length; i < il; ++i) {
            if (typeof obj[i] !== 'undefined') {
                compacted.push(obj[i]);
            }
        }

        return compacted;
    }

    var keys = Object.keys(obj);
    for (i = 0, il = keys.length; i < il; ++i) {
        var key = keys[i];
        obj[key] = exports.compact(obj[key], refs);
    }

    return obj;
};


exports.isRegExp = function (obj) {

    return Object.prototype.toString.call(obj) === '[object RegExp]';
};


exports.isBuffer = function (obj) {

    if (obj === null ||
        typeof obj === 'undefined') {

        return false;
    }

    return !!(obj.constructor &&
              obj.constructor.isBuffer &&
              obj.constructor.isBuffer(obj));
};

},{}],127:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

}).call(this,require('_process'))
},{"_process":97}]},{},[89]);
