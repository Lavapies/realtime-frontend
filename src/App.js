import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import PostList from './Pages/PostList';
import PostDetails  from './Pages/PostDetails';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path='/' element={<Home />}/>
       <Route path='/posts' element={<PostList />}/>
       <Route path='/posts/:id' element={<PostDetails />}/>

     </Routes>
    </div>
  );
}

export default App;
