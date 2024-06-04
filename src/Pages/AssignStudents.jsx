import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AssignStudents = ({ id }) => {
    const navigate = useNavigate();
    const [msg, setMsg] = useState('');
    const [mentor, setMentor] = useState({
        _id: '',
        students: [], // Array to hold student IDs
        name: ''
    });

    useEffect(() => {
        fetchMentor();
    }, []);

    const fetchMentor = async () => {
        try {
            const res = await axios.get(`https://assigning-student-mentor-db.onrender.com/api/mentor/${id}`);
            setMentor(res.data.data);
            setMsg(res.data.message);
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    };

    const handleChange = (e, index) => {
        const { value } = e.target;
        const updatedStudents = [...mentor.students];
        updatedStudents[index] = value.trim(); // Update the student ID in the array
        setMentor((prev) => ({
            ...prev,
            students: updatedStudents
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`https://assigning-student-mentor-db.onrender.com/api/assignstudents/${id}`, {
                students: mentor.students // Ensure the key matches the backend
            });
            console.log(res.data);
            setMsg(res.data.message);
            navigate('/getMentor');
        } catch (err) {
            console.error('Error updating data:', err);
        }
    };

    // Function to add more input boxes
    const addInputBox = () => {
        setMentor((prev) => ({
            ...prev,
            students: [...prev.students, '']
        }));
    };

    // Function to remove input boxes
    const removeInputBox = (index) => {
        const updatedStudents = [...mentor.students];
        updatedStudents.splice(index, 1);
        setMentor((prev) => ({
            ...prev,
            students: updatedStudents
        }));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>{msg}</h1>
                <label className='col-12 col-sm-2 m-2'>Mentor ID</label>
                <input type="text" name='_id' className='m-2' value={mentor._id} readOnly /><br />

                <label className='col-12 col-sm-2 m-2'>Mentor Name</label>
                <input type="text" name='name' className='m-2' value={mentor.name} readOnly /><br />

                {mentor.students.map((studentId, index) => (
                    <div key={index}>
                        <label className='col-12 col-sm-2 m-2'>Student ID {index + 1}</label>
                        <input
                            type="text"
                            className='m-2'
                            value={studentId}
                            onChange={(e) => handleChange(e, index)}
                        />
                        <button type="button" className='btn' onClick={() => removeInputBox(index)}>-</button>
                    </div>
                ))}

                <button type="button" className='btn' onClick={addInputBox}>Add Student</button><br /><br />

                <br /><br />
                <button type="submit" className='btn btn-danger'>Assign Students</button><br /><br />
            </form>
        </div>
    );
};

export default AssignStudents;
