import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Create from './Pages/Create';
import Edit from './Pages/Edit';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import CreateStudent from './Pages/CreateStudent';
import GetMentor from './Pages/GetMentor';
import GetStudents from './Pages/GetStudents';
import AssignStudents from './Pages/AssignStudents';
import WithoutMentor from './Pages/WithoutMentor';

const App = () => {
  const [id,setId]=useState(0)
  return (
    <div>
      
      <BrowserRouter>
      <div>
        <Nav/>
      </div>
      <Routes>
        <Route path='/withoutmentor' element={<WithoutMentor id={id}/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/createStudent' element={<CreateStudent/>}/>
        <Route path='/getMentor' element={<GetMentor setId={setId}/>}/>
        <Route path='/getStudent' element={<GetStudents setId={setId}/>}/>
        <Route path='/edit/:id' element={<Edit id={id}/>}/>
        <Route path='/assignstudents/:id' element={<AssignStudents id={id}/>}/>
      </Routes>
      <div>
        <Footer/>
      </div>
      </BrowserRouter>
    </div>
  );
};


export default App;