import React, { Component } from 'react';
import Profile from './Profile';
import image from '../img/background.jpg';
import ArticleList from './ArticleList';

const style = {
  back_pic: {
    backgroundImage: 'url(' + image + ')',
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
        <Profile />
        <ArticleList />
      </div>
    )
  }
}
