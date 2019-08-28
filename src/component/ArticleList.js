import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
  div: {
    float: 'right'
  }
}

class ArticleList extends React.Component {
  render() {
    let lists = [];
    for(let k in this.props.article) {
      lists.push(
        <ListItem key={k}>
          <ListItemText key={k}
            primary={this.props.article[k].title}
            secondary={this.props.article[k].time}
          >
          </ListItemText>
        </ListItem>
      )
    }

    return (
      <div style={styles.div}>
        <List>
          {lists}
        </List>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    article: state.article
  }
}

export default connect(mapStateToProps)(ArticleList);
