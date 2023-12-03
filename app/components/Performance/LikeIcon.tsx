import React from 'react';
import { BiLike } from 'react-icons/bi';
import styles from './Performance.module.css';

const LikeIcon = () => {
  return (
    <div className={`${styles.likeIcon} bg-[#44DA4C]`}>
      <BiLike size='2rem' color='white' />
    </div>
  );
};

export default LikeIcon;
