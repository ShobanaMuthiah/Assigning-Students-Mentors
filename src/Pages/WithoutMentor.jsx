import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WithoutMentor = ({setId}) => {
    const [data,setData]=useState([])
    const navig=useNavigate()
    
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData=async()=>{

        await axios.get("https://assigning-student-mentor-db.onrender.com/api/studentwithoutmentor")
        .then(res=>setData(res.data.data))
        .catch(error=>console.log(error))
    }
  
    return (
        <div>
<button className='btn btn-success m-4'onClick={()=>{navig('/getStudent')}}>Back</button>

            <div className="table-responsive">
  <table className="table table-danger align-top">
    <thead>
      <tr>
      <th>S.No</th>

        <th>User Id</th>
        
        <th>Student Name</th>
   
      </tr>
    </thead>
    <tbody className='text-justify'>
    {data.map((e,index)=>{
            return(
                <tr key={index}>
                <th scope='row'>{index+1}</th>
                <td>{e._id}</td>
                <td>{e.name}</td>
              
                </tr>
            )
           })}
    </tbody>
  </table>
</div>
        </div>
    );
};

export default WithoutMentor;