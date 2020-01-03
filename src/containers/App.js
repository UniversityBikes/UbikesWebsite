import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavBar } from './NavBar'

export class App extends Component {
  render() {
    return (
      <section >
        <NavBar />
      </section>
    );
  }
}

App.propTypes = {
};

export const mapDispatchToProps = dispatch => ({
});

export const mapStateToProps = state => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
