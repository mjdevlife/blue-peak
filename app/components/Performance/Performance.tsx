import React from 'react';
import styles from './Performance.module.css';
import fan from '/public/images/per_fun.png';
import Image from 'next/image';
import Card from '../Evidence/Card';
import PerformanceCard from './PerformanceCard';
import { BiLike } from 'react-icons/bi';
import LikeIcon from './LikeIcon';
import DisLikeIcon from './DislikeIcon';

const cardData = [
  {
    id: 1,
    content: (
      <p>
        The reduced production costs of our new wind turbine design also
        contribute to increased profitability for our customers.
      </p>
    ),
  },
  {
    id: 2,
    content: (
      <p>
        The flat, thin wings used in our design are lighter and less expensive
        to produce than traditional materials, which means that our turbines are
        more cost-effective to manufacture and maintain.
      </p>
    ),
  },
];

const items = [
  {
    id: 1,
    title: 'Advantages of the New Wind Turbines​',
    content: [
      'The Outer Surface Of The Wing Is A Flat Plate With Light Weight',
      '(As a result, the mechanical resistance becomes smaller) ​Reduced Production Costs',
      '​The Moving Resistance Of The Wing Is Small, And The Moving Speed Of The Wing Is Fast',
      '​In The Case Of Flat Blades, Because Of The High Speed, Small Machines Do Not Need Intermediate Speed, And Can Be Directly Used With Generators​​',
      'The Efficiency Of Wind Wing Is More Than 20% Higher Than Before',
      'Power Wing Efficiency Is More Than 25% Higher',
    ],
    color: '#44DA4C',
    icon: <LikeIcon />,
  },
  {
    id: 2,
    title: 'Disadvantage of the Existing Wind Turbines',

    icon: <DisLikeIcon />,
    color: '#DC3545',
    content: [
      'The Production Cost Of Wings Is High',
      'The Wing Is Heavy And Inefficient​',
      '​When The Wing Rotates, Because The Wing Itself Has Its Own Thickness To Obtain Lift, The Moving Resistance Is Very Large',
      'When The Wing Rotates Faster, The Air Will Change The Flow Channel And Flow Towards The End Of The Wing, So There Is Not Enough Efficiency',
    ],
  },
];

const Performance = () => {
  return (
    <section className='mx-auto'>
      <header className='pt-10'>
        <h2 className='text-center text-2xl sm:text-5xl font-bold px-1'>
          High Performance Flat and Thin Wind Turbine
        </h2>
      </header>
      <div className={` container mx-auto ${styles.cardContainer}`}>
        <div className='mt-10'>
          <Image
            src={fan}
            alt='High performance turbine'
            className='max-w-full'
          />
        </div>
        <div className='mt-8 leading-7 px-3'>
          <p>
            In addition to the immediate benefits of higher power generation and
            lower operating costs, the improved efficiency of our new wind
            turbine design also leads to long-term benefits.
            <strong>For example</strong> , it allows for the use of{' '}
            <strong>smaller</strong> <strong>generators</strong>, which reduces
            the upfront costs of adoption and makes our turbine more accessible
            to a wider range of customers.
          </p>
          <div className='mt-5'>
            {cardData.map((card) => (
              <Card key={card.id}>{card.content}</Card>
            ))}
          </div>
        </div>
      </div>
      <div className={`container mx-auto ${styles.comparisonCard} mt-10`}>
        <div className='px-4'>
          <PerformanceCard item={items[0]} />
        </div>
        <div className='px-4'>
          <PerformanceCard item={items[1]} />
        </div>
      </div>
    </section>
  );
};

export default Performance;
