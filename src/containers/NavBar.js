
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class NavBar extends Component {
  render() {
    return (
      <div >
        <h1>Nav Bar</h1>
      </div>
    );
  }
}

NavBar.propTypes = {
};

export const mapDispatchToProps = dispatch => ({
});

export const mapStateToProps = state => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
