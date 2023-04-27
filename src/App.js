import { Fragment } from 'react';
import './App.css';
import Home from'./Components/Home/home';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Book from './Components/Book/book';
import Navbar from './Components/Navbar/navbar';


function App() {
  return (
    <Fragment>
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/book" element={<Book/>}></Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
