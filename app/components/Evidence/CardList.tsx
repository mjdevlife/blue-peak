import Card from './Card';
import styles from './Evidence.module.css';

const cardData = [
  {
    id: 10,
    content: (
      <p className='text-gray-700 leading-7'>
        We have <strong>testing data</strong> that compares the performance of
        our high-performance flat and thin wind turbines with existing designs.
      </p>
    ),
  },
  {
    id: 20,
    content: (
      <p className='text-gray-700 leading-7'>
        For example, our newly developed flat wind turbine has an efficiency of
        <strong>0.5437</strong>. It is much more higher than wind turbine that
        has been developed until now.
      </p>
    ),
  },
  {
    id: 30,
    content: (
      <p className='text-gray-700 leading-7'>
        <strong>The higher efficiency</strong> of our new wind turbine design
        means that it is able to generate more power in low wind conditions,
        resulting in a more consistent and{' '}
        <strong>reliable source of power</strong>. This, in turn, leads to{' '}
        <strong>lower operating costs</strong> for our customers, as they are
        able to generate more power with the same amount of wind energy.
      </p>
    ),
  },
];

const CardList = () => {
  return (
    <>
      {cardData.map((card) => (
        <Card key={card.id}>{card.content}</Card>
      ))}
    </>
  );
};

export default CardList;
