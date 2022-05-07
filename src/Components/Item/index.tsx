import React from 'react';
import style from './item.module.scss';

interface IItem {
  name: string;
  description: string;
}

const Item: React.FC<IItem> = (props) => {
  const { name, description } = props;

  return (
    <div className={style.page_item}>
      <p>Ботинки</p>
      <p>Описание</p>
    </div>
  );
};

export default Item;
