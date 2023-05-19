import { useEffect, useState } from 'react';
import TweetItem from './../TweetItem/TweetItem';
import { fetchTweets } from './../../services/tweetApi';
import css from './TweetList.module.css';

export const TweetList = () => {
  const [tweets, setTweets] = useState([]);
   const [visibleTweets, setVisibleTweets] = useState(4);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTweets();
      setTweets(data);
    };

    fetchData();
  }, []);

 const loadMoreTweets = () => {
    setVisibleTweets(prevVisibleTweets => prevVisibleTweets + 4); 
  };


  return (
    <>
      <div className={css.tweet_list}>
      {tweets.slice(0, visibleTweets).map(({ avatar, tweets, followers, id }) => (
        <TweetItem
          key={id}
          id={id}
          avatar={avatar}
          tweets={tweets}
          followers={followers}
        />
      ))}
    </div>
    {visibleTweets < tweets.length && (
        <button type="button" onClick={loadMoreTweets} className={css.tweet_list_button}>
          Load More
        </button>
      )}
    </>
  );
};

