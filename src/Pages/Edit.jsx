import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Edit = ({ id }) => {
    const navigate = useNavigate();
    const [msg,setmsg]=useState('')
    const [edit, setEdit] = useState({
        _id:'',
        mentor: '',
        name:''
        
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await axios.get(`https://assigning-student-mentor-db.onrender.com/api/student/${id}`);
            setEdit(res.data.data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEdit((prev) => (
            { ...prev, [name]: value }
        ));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`https://assigning-student-mentor-db.onrender.com/api/assignmentor/${id}`, edit);
            console.log(res.data);
            setmsg(res.data.message)

            navigate('/getStudent');
        } 
        catch (err) {
            console.error('Error updating data:', err);
            // Add more specific error handling if needed
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h1>{msg}</h1>
            <label className='col-12 col-sm-2 m-2'>Student ID</label>
                <input type="text" name='_id' className='m-2' value={edit._id} readOnly /><br />
                

                <label className='col-12 col-sm-2 m-2'>Student Name</label>
                <input type="text" name='name' className='m-2' value={edit.name} readOnly /><br />
                
                <label className='col-12 col-sm-2 m-2'>Mentor Name</label>
                <input type="text" name='mentor' className='m-2' value={edit.mentor} onChange={handleChange} /><br />
                
                <br /><br />
                <button type="submit" className='btn btn-danger'>Update</button><br /><br />
            </form>
        </div>
    );
};

export default Edit;
