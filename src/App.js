import {Routes,Route}from 'react-router-dom'
import Heder from './Components/Heders'
import About from './Components/About'
import Contact from './Components/Contact'
import notFound from './Components/notFound'
import BlogsList from './Components/BlogLists'
import BlogIteamDetails from './Components/BlogIteamDetails'
import './App.css'
const App =  () => (
    <>
    <Heder/>
    <Routes>
      <Route exact path="/" Component={BlogsList} />
      <Route exact path="/about" Component={About} />
      <Route exact path="/contact" Component={Contact} />
      <Route exact path="/blogs/:id" Component={BlogIteamDetails} /> 
      <Route path='*' Component={notFound} />
    </Routes> 
    </>
  
)
export default App