import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
   
    return (
        <div className='text-center'>


<div class="row m-5">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">   <Link className="nav-link active" aria-current="page" to='/create'>New Mentor</Link>
     <hr />   <Link className="nav-link active" aria-current="page" to='/createStudent'>New Student</Link>
               </h5>
        
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title"><Link className="nav-link active" aria-current="page" to='/getMentor'>View Mentors</Link>
 <hr />   <Link className="nav-link active" aria-current="page" to='/getStudent'>View Students</Link>
</h5>
      </div>
    </div>
  </div>
</div>


            
          

        </div>

       
    );
};

export default Home;