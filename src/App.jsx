
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './routes/home/Home'
import SingleBlogs from './routes/single_blogs/SingleBlogs'
import NotFound from "./routes/not-found/NotFound"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:blogsId" element={<SingleBlogs/>} />
        <Route path='not-found' element={<NotFound/>} />
        <Route path='*' element={<Navigate to='/not-found'/>} />
      </Routes>
    </>
  )
}

export default App
