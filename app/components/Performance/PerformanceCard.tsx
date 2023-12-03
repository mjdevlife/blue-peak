import { ReactNode } from 'react';

import styles from './Performance.module.css';

type ItemProp = {
  id: number;
  title: string;
  content: string[];
  icon: ReactNode;
  color: string;
};

interface Props {
  item: ItemProp;
}

const PerformanceCard = ({ item }: Props) => {
  return (
    <div className={styles.cardOuter}>
      <div className={styles.likerPostion}>{item.icon}</div>
      <div
        className={`${styles.performanceCard} mt-10 border-b-orange-400`}
        style={{ borderBottom: `4px solid ${item.color}` }}
      >
        <h3 className={`${styles.heading} font-semibold text-2xl`}>
          {item.title}
        </h3>
        <ul className='list-disc leading-10 mt-5 ml-5'>
          {item.content.map((el) => (
            <li key={item.id}>{el}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PerformanceCard;
