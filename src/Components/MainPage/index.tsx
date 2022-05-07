import React from 'react';
import style from './mainpage.module.scss';
import Header from '../Header';
import ItemsList from '../ItemList';
import Footer from '../Footer';

const MainPage = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <ItemsList />
      <Footer />
    </div>
  );
  //   <div className={style.main_page}> Main Page</div>;
};

export default MainPage;
