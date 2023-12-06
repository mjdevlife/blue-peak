import React, { ReactNode } from 'react';
import { BiDislike } from 'react-icons/bi';

import styles from './Performance.module.css';

interface Props {
  icon: ReactNode;
  color: string;
}

const DisLikeIcon = () => {
  return (
    <div className={`${styles.likeIcon} bg-[#DC3545]`}>
      <BiDislike size='2rem' color='white' />
    </div>
  );
};

export default DisLikeIcon;
