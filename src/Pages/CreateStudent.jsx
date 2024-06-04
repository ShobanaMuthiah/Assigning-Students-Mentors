import React from 'react';
import axios from 'axios';
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateStudent = () => {
    const navi=useNavigate()
    const [create,setCreate]=useState({
        name:'',
    })


    const handleChange=(e)=>{
        const {name,value}=e.target;
        setCreate((prev)=>(
            {...prev
                ,name:value}
        ))
        }
        const handleSubmit=async(e)=>{
           e.preventDefault();
            await axios.post(`https://assigning-student-mentor-db.onrender.com/api/student`,create)
            .then(res=>console.log(res.data))
            .catch(err=>console.log(err))
            navi('/getStudent')
        
        }


    return (
        <div>
            
            <form onSubmit={handleSubmit}>
           <label className='col-12 col-sm-2 m-2 ' >Student Name</label>
<input type="text" className='m-2' name='userid' value={create.userid} onChange={handleChange} />
<br />
<br /> <br />
<button type="submit" className='btn btn-danger'>Add</button><br /><br />
</form>

        </div>
    );
};

export default CreateStudent;