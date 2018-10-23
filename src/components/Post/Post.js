import React from 'react';
import './Post.css';

const post = ({ post, clicked }) => (
  <article className="Post" onClick={clicked}>
    <h1> {post.title} </h1>
    <div className="Info">
      <div className="Author">{post.author}</div>
    </div>
  </article>
);

export default post;
