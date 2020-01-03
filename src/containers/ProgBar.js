
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class ProgBar extends Component {
  render() {
    return (
      <div >
        <h1>Prog Bar</h1>
      </div>
    );
  }
}

ProgBar.propTypes = {
};

export const mapDispatchToProps = dispatch => ({
});

export const mapStateToProps = state => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ProgBar);
