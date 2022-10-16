import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../componennts/Footer/Footer';
import Header from '../componennts/header/Header'

const Main = () => {
     return (
          <div>
               <Header></Header>
               <Outlet></Outlet>
               <Footer></Footer>
          </div>
     );
};

export default Main;