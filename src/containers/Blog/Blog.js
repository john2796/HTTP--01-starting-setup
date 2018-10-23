import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: ''
  };
  // GET Data
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
      const posts = res.data.slice(0, 4);
      const updatedPosts = posts.map(post => {
        return {
          ...post,
          author: 'Mikko'
        };
      });
      this.setState({ posts: updatedPosts });
    });
  }

  // post select & get the id
  postSelectedHanlder = id => {
    this.setState({ selectedPostId: id });
    console.log(this.state.selectedPostId);
  };

  render() {
    const { posts, selectedPostId } = this.state;
    const post = posts.map(post => (
      <Post
        post={post}
        key={post.id}
        clicked={() => this.postSelectedHanlder(post.id)}
      />
    ));
    return (
      <div>
        <section className="Posts">{post}</section>
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
