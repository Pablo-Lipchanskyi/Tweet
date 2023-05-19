import { Suspense, lazy } from 'react';
import { Route, Routes, redirect } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

const HomePages = lazy(() => import('./pages/HomePage/HomePage'));
const TweetPage = lazy(() => import('./pages/TweetPage/TweetPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'))

export const App = () => {
  return (
    <>
      <Header />
      <Suspense>
      <Routes>
        <Route path="/" element={<HomePages />}/>
        <Route path="/tweets" element={<TweetPage />} />
          
        <Route path='*' element={<HomePages/>} />
      </Routes>
      </Suspense>
      <Footer/>
    </>
  );
};
