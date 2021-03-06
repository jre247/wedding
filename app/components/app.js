import React from 'react';
import Footer from './Footer';
import Header from './Header';
import AuthStore from '../stores/AuthStore';
import AuthActions from '../actions/AuthActions';
import PageStore from '../stores/PageStore';
import PageActions from '../actions/PageActions';
import LookupStore from '../stores/LookupStore';
import LookupActions from '../actions/LookupActions';
import AuthHeader from './AuthHeader';
import AppBackdrop from './AppBackdrop';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = AuthStore.getState();
    this.pageState = PageStore.getState();
    this.lookupState = LookupStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  onChange(state) {
    this.setState(state);
  }
  componentDidMount() {
    AuthStore.listen(this.onChange);
    PageStore.listen(this.onChange);
    LookupStore.listen(this.onChange);
    AuthActions.getUserAuthenticationData();
    PageActions.getAllPages();
    LookupActions.getLookups();
  }

  componentWillUnmount() {
    AuthStore.unlisten(this.onChange);
    PageStore.unlisten(this.onChange);
    LookupStore.unlisten(this.onChange);
  }


  render() {
    return (
      <div>
        <AuthHeader />

        <div className="App-container">
          <Header />
          {this.props.children}
          <Footer />
          <AppBackdrop />
        </div>
      </div>
    );
  }
}

export default App;
