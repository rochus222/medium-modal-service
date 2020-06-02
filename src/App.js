import React from 'react';
import {connect} from 'react-redux';

import {openProfile} from "./store";
import Modal from './Modal';

const App = ({showProfile}) => {
  return (
    <div className="App">
      <button onClick={() => showProfile()}>Show Profile</button>
      <Modal />
    </div>
  );
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  showProfile: (id) => dispatch(openProfile(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
