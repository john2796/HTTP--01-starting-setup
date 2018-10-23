import React, { Component } from 'react';

import './FullPost.css';
import axios from 'axios';

class FullPost extends Component {
  state = {
    loadedPost: null
  };
  // Fetching Data on Update (without Creating Infinite Loops)
  // Post by id
  // when clicking post render it on this full post
  componentDidUpdate() {
    // run if props is clicked
    if (this.props.id) {
      // prevent infinite loop if it's there is no loadedpost or loadedPost and loaded post id does does not equal with props.id
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)
      )
        axios
          .get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
          .then(res => this.setState({ loadedPost: res.data }));
    }
  }
  render() {
    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
    if (this.props.id) {
      post = <p style={{ textAlign: 'center' }}>Loading...</p>;
    }
    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button className="Delete">Delete</button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
