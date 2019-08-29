import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

const styles = {
  paper: {
    float: 'left',
    marginLeft: '250px',
    width: '50%'
  },
  index: {
    float: 'right'
  },
}

class ArticleList extends React.Component {
  render() {
    let lists = [];
    lists.push (
      <ListItem
      key={'index'}
        divider={true}
        disabled={true}
      >
        <ListItemText
          primary={
            <div style={styles.index}>
              <span style={{fontSize: 13}}>{'排序: '}</span>
              <Button
                size={'small'}
                color={'secondary'}
              >
                {'时间'}
              </Button>
              <Button
                size={'small'}
                color={'default'}
              >
               {'阅读量'}
              </Button>
            </div>
          }
        >
        </ListItemText>
      </ListItem>

    )
    for(let k in this.props.article) {
      lists.push (
        <ListItem
          key={k}
          divider={true}
        >
          <ListItemText
            primary={this.props.article[k].title}
            secondary={this.props.article[k].time}
          >
          </ListItemText>
        </ListItem>
      )
    }

    return (
      <Paper style={styles.paper}>
        <List>
          {lists}
        </List>
      </Paper>
    )
  }
}

function mapStateToProps(state) {
  return {
    article: state.article
  }
}

export default connect(mapStateToProps)(ArticleList);
