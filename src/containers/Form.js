
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div >
        <h1>Form</h1>
      </div>
    );
  }
}

Form.propTypes = {
};

export const mapDispatchToProps = dispatch => ({
});

export const mapStateToProps = state => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
