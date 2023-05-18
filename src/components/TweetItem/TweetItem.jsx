import PropTypes from 'prop-types';
import { useState,useEffect } from 'react';
import logo from './../../images/logo.png'
import quest from './../../images/questions.png'
import defAvatar from './../../images/avatar.png'
import arrow from './../../images/arrow.png'
import css from './TweetItem.module.css'
import { updateFollowers } from '../services/tweetApi';

const TweetItem = ({ id,avatar, tweets, followers }) => {
  const [isFollowing, setIsFollowing] = useState(localStorage.getItem('isFollowing') === 'true');

useEffect(() => {
    if (isFollowing) {
      localStorage.setItem('isFollowing', true);
    } else {
      localStorage.removeItem('isFollowing');
    }
}, [isFollowing]);

const toggleFollow = async () => {
  try {
    switch (isFollowing) {
      case true:
        await updateFollowers(id, followers - 1);
        setIsFollowing(false);
        localStorage.removeItem('isFollowing');
        break;
      case false:
        await updateFollowers(id, followers + 1);
        setIsFollowing(true);
        localStorage.setItem('isFollowing', true);
        break;
      default:
        break;
    }
  } catch (error) {
    console.error('Произошла ошибка при обновлении followers', error);
  }
};
  return (
    <div className={css.tweet_item}>
      <img src={logo} className={css.tweet_item_logo}></img>
      <img src={quest} className={css.tweet_item_quest_img}></img>
      <img src={arrow} className={css.tweet_item_arrow}></img>
      <img src={defAvatar || avatar} className={css.tweet_item_avatar}></img>
      <p className={css.tweet_item_tweets}>{tweets} TWEETS</p>
      <p className={css.tweet_item_followers}>{followers} FOLLOWERS</p> 
      <button
        type="button"
        className={`${css.tweet_item_button} ${isFollowing ? css.following : ''}`}
        onClick={toggleFollow}
      >
        {isFollowing ? 'FOLLOWING' : 'FOLLOW'}
      </button>
    </div>
  );
};

TweetItem.propTypes = {
  avatar: PropTypes.string,
  tweets: PropTypes.number,
  followers: PropTypes.number,
  id:PropTypes.string
};

export default TweetItem;