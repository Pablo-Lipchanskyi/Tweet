import { Suspense, lazy } from 'react';
import { Route, Routes, redirect, } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

const HomePages = lazy(() => import('./pages/HomePage/HomePage'));
const TweetPage = lazy(() => import('./pages/TweetPage/TweetPage'));

export const App = () => {
  return (
    <>
      <Header />
      <Suspense>
      <Routes>
        <Route path="/" element={<HomePages />}/>
        <Route path="/tweets" element={<TweetPage />} />
          
          <Route path='*' element={redirect}/>
      </Routes>
      </Suspense>
      <Footer/>
    </>
  );
};
