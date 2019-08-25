import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

const styles = {
  div: {
    float: 'left'
  },
  avatar: {
    float: 'left',
    width: 80,
    height: 80,
    marginLeft: 25,
    marginTop: 30,
  },
  author: {
    marginLeft: 20,
    fontSize: 22,
    marginTop: 45,
    float: 'left'

  },
  paper: {
    marginLeft: '20px',
    width: '15%',
    height: '220px'
  },
  article: {
    float: 'left',
    marginTop: 30,
    marginLeft: 40
  },
  article_num: {
    marginLeft: 48
  }
}

export default class Profile extends React.Component {
  render() {
    return (
      <div>
        <Paper style={styles.paper}>
          <div style={styles.div}>
            <Avatar style={styles.avatar} src='http://s13.sinaimg.cn/orignal/4a30d769hcf283d4da12c' />
            <span style={styles.author}>{'闫某某'}</span>
          </div>
          <div style={styles.div}>
            <span style={styles.article}>{'文章'}</span>
            <div style={styles.article_num}>{'20'}</div>
          </div>
        </Paper>
      </div>
    )
  }
}
