import { ReactNode } from 'react';
import styles from './Evidence.module.css';

interface Props {
  children: ReactNode;
}

const Card = ({ children }: Props) => {
  return <div className={`${styles.card} shadow-md`}> {children}</div>;
};

export default Card;
