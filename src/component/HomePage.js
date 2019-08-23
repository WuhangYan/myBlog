import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';

const style = {
  backgroundImage: 'url(https://c-ssl.duitang.com/uploads/item/201610/17/20161017162712_vPkxK.jpeg)',
  height: '100%',
  width: '100%',
  backgroundRepeat: 'no-repeat',
  display: 'block',
  position: 'absolute'
}

export default class HomePage extends React.Component {
  render() {
    return (
      <div style={style}>
        {"welcome to my blog!"}
      </div>
    )
  }
}
