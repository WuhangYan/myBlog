import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';

const style = {
  back_pic: {
    backgroundImage: 'url(https://c-ssl.duitang.com/uploads/item/201610/17/20161017162712_vPkxK.jpeg)',
    height: '100%',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    display: 'block',
    position: 'absolute'
  },
  title: {
    textShadow: '5px 5px 20px red',
    margin: '30px',
    fontSize: '25px',
    fontStyle: 'italic',
  }
}

export default class HomePage extends React.Component {
  render() {
    return (
      <div style={style.back_pic}>
        <div style={style.title}>
          闫某某的博客
        </div>
      </div>
    )
  }
}
