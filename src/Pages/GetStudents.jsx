import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GetStudents = ({setId}) => {
    const [data,setData]=useState([])
    const navig=useNavigate()
    const [del,setDel]=useState([])
    useEffect(()=>{
        fetchData()
    },[del])
    const fetchData=async()=>{

        await axios.get("https://assigning-student-mentor-db.onrender.com/api/student")
        .then(res=>setData(res.data.data))
        .catch(error=>console.log(error))
    }
    const handleEdit=(id)=>{
setId(id)
navig(`/edit/${id}`)
    }
    const handleDelete=async(id)=>{

await axios.delete(`https://assigning-student-mentor-db.onrender.com/api/studentdel/${id}`)
.then(res=>setDel(res.data))
.catch(error=>console.log(error))
    }
    return (
        <div>
<button className='btn btn-success m-4'onClick={()=>{navig('/withoutmentor')}}>Without Mentor</button>

            <div className="table-responsive">
  <table className="table table-danger align-top">
    <thead>
      <tr>
      <th>S.No</th>

        <th>User Id</th>
        
        <th>Student Name</th>
        <th>Mentor</th>
        <th>Previous Mentor</th>
        
        <th colSpan={2} className='text-center'>Actions</th>

      </tr>
    </thead>
    <tbody>
    {data.map((e,index)=>{
            return(
                <tr key={index}>
                <th scope='row'>{index+1}</th>
                <td>{e._id}</td>
                <td>{e.name}</td>
                <td>
                    {e.mentor}
                </td>
                <td>
                    {e.PrevMentor?<div>{e.PrevMentor}</div>:""}
                </td>
                <td><button className='btn btn-warning 'onClick={()=>{handleEdit(e._id)}}>Assign Mentor</button></td>

                <td><button className='btn btn-danger ' onClick={()=>{handleDelete(e._id)}}>Remove Student</button></td>

                </tr>
            )
           })}
    </tbody>
  </table>
<button className='btn btn-success m-4'onClick={()=>{navig('/createStudent')}}>Add Student</button>
</div>

      
        </div>
    );
};

export default GetStudents;