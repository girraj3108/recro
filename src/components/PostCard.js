
import React from 'react';
import "./postCard.scss";

 export default function PostCard(props) {
     const {innerRef} = props;
    const {userId, id, title, body} = props.card;

    return (
      <div className="post-card-container" ref={innerRef}>
          <div className="id-section-container">
            <span>userId: {userId}</span>
            <span>ID: {id}</span>
          </div>
          <div className="card-title">{title}</div>
          <div className="card-body">{body}</div>
      </div>
    );
  }


