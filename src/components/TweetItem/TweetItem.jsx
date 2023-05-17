import React from 'react';

const TweetItem = ({ tweet }) => {
  return (
    <div>
      <h3>{tweet.username}</h3>
      <p>{tweet.content}</p>
    </div>
  );
};

export default TweetItem;