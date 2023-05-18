import { lazy } from 'react'
import {Route,Routes} from 'react-router-dom'
import './App.css'
import { Header } from './components/Header/Header'

const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const TweetPage = lazy(() => import('./pages/TweetPage/TweetPage'))

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route index element={<HomePage />} />
          <Route path="tweets" element={TweetPage}/>
        </Route>
      </Routes>
    </>
  )
}


