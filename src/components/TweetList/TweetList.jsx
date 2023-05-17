import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TweetItem from './TweetItem';

export const fetchTweets = async () => {
  const response = await axios.get('/tweet');
  return response.data;
}

const TweetList = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTweets();
      setTweets(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {tweets.map((tweet) => (
        <TweetItem key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
};

export default TweetList;