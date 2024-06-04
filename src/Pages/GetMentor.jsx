import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GetMentor = ({setId}) => {
    const [data,setData]=useState([])
    const navig=useNavigate()
    const [del,setDel]=useState([])
    useEffect(()=>{
        fetchData()
    },[del])
    const fetchData=async()=>{

        await axios.get("https://assigning-student-mentor-db.onrender.com/api/mentor")
        .then(res=>setData(res.data.data))
        .catch(error=>console.log(error))
    }
    const handleEdit=(id)=>{
setId(id)
navig(`/assignstudents/${id}`)
    }
    const handleDelete=async(id)=>{

await axios.delete(`https://assigning-student-mentor-db.onrender.com/api/mentordel/${id}`)
.then(res=>setDel(res.data.message))
.catch(error=>console.log(error))
    }
    return (
        <div>
            <div className="table-responsive">
  <table className="table table-danger align-top">
    <thead>
      <tr>
      <th>S.No</th>

        <th>User Id</th>
        
        <th>Mentor Name</th>
        <th>Students(ID)</th>
        
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
                    {e.students.map((ele,ind)=>{
                        return(
                            <div key={ind}>{ele}</div>
                        )
                        })}
                </td>
                <td><button className='btn btn-warning 'onClick={()=>{handleEdit(e._id)}}>edit</button></td>

                <td><button className='btn btn-danger ' onClick={()=>{handleDelete(e._id)}}>delete</button></td>

                </tr>
            )
           })}
    </tbody>
  </table>
<button className='btn btn-success m-4'onClick={()=>{navig('/create')}}>create</button>
</div>

      
        </div>
    );
};

export default GetMentor;