import { useState ,useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter,Routes,Route, useParams } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GroupDetails from './pages/GroupDetails';
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="*" element ={<HomePage/>}/>
      <Route path="/" element={<HomePage/>}/>
     <Route path="/:Group" element={<GroupDetails/>}/> 
    </Routes>
  
  )
}

export default App

