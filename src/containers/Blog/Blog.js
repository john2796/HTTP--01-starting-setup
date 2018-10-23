import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
//import axios from 'axios';
import axios from '../../axios';

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: '',
    error: false
  };
  // GET Data
  componentDidMount() {
    axios
      .get('/posts')
      .then(res => {
        const posts = res.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: 'Mikko'
          };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch(err => {
        // CATCHES ERROR
        this.setState({ error: true });
        console.log(err);
      });
  }

  // post select & get the id need this to pass id as props on fullPost so it will have access to id
  postSelectedHanlder = id => {
    this.setState({ selectedPostId: id });
    console.log(this.state.selectedPostId);
  };

  render() {
    const { error, selectedPostId } = this.state;
    let posts = (
      <p style={{ textAlign: 'center' }}> Something went wrong ...</p>
    );
    // ERROR HANDLING
    if (!error) {
      posts = this.state.posts.map(post => (
        <Post
          post={post}
          key={post.id}
          clicked={() => this.postSelectedHanlder(post.id)}
        />
      ));
    }

    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost id={selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
