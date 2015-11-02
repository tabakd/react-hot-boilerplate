import React, { Component } from 'react';

export default class App extends Component {
  render() {
    const styles = require('./App.scss');
    return (
      <div className={styles.App}>
        Hello, world.
      </div>
    );
  }
}
