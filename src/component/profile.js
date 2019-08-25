import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

const styles = {
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
  }
}

export default class Profile extends React.Component {
  render() {
    return (
      <div>
        <Paper style={styles.paper}>
          <div>
            <Avatar style={styles.avatar} src='http://s13.sinaimg.cn/orignal/4a30d769hcf283d4da12c' />
            <span style={styles.author}>{'闫某某'}</span>
          </div>
          <div>
            <span></span>
          </div>
        </Paper>
      </div>
    )
  }
}
