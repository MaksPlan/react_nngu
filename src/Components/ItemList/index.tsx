import React from 'react';
import style from './itemslist.module.scss';
import Item from '../Item';

const ItemMock = [
  {
    id: 1,
    itemName: 'Ботинки',
    itemDiscription: 'смотрите какие потрясающие ботинки',
  },
  {
    id: 2,
    itemName: 'Ботинки',
    itemDiscription: 'смотрите какие потрясающие ботинки',
  },
  {
    id: 3,
    itemName: 'Ботинки',
    itemDiscription: 'смотрите какие потрясающие ботинки',
  },
];

const ItemsList = () => {
  return (
    <div className={style.page_itemslist_wrapper}>
      <p>Здесь будет список товаров</p>
      <div className={style.page_itemlist}>
        {ItemMock.map((item) => {
          const { id, itemName, itemDiscription } = item;
          return <Item name={itemName} description={itemDiscription} />;
        })}
        {/* <Item name={ItemMock.itemName} description={ItemMock.itemDiscription} />
        <Item name="Shapka" description="Nekrasivay shapka" />
        <Item name={ItemMock.itemName} description={ItemMock.itemDiscription} /> */}
      </div>
    </div>
  );
};

export default ItemsList;
