import { useEffect, useState } from 'react';
import TweetItem from './../TweetItem/TweetItem';
import { fetchTweets } from '../services/tweetApi';
import css from './TweetList.module.css';

export const TweetList = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTweets();
      setTweets(data);
      console.log(data)
    };

    fetchData();
  }, []);

  return (
    <div className={css.tweet_list}>
      {tweets.map(({ avatar, tweets, followers, id }) => (
        <TweetItem
          key={id}
          id={id}
          avatar={avatar}
          tweets={tweets}
          followers={followers}
        />
      ))}
    </div>
  );
};

