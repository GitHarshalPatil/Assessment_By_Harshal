import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ name: '', email: '', age: '' });

    // Fetch users from backend API
    useEffect(() => {
        axios.get('http://localhost:4000/users')
            .then(response => {
                setUsers(response.data);
                console.log(response.data)
            })
            .catch(error => console.log(error));
    }, []);


    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/users', newUser)
            .then(response => {
                setUsers([...users, response.data]); // Add new user to state
                console.log("this is my post data", response.data);
                setNewUser({ name: '', email: '', age: '' }); // Reset form
            })
            .catch(error => console.log(error));
    };

    return (
        <div>
            <div className="table-responsive container-fluid">
                <h3>Users List</h3>
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <h2>Add New User</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={newUser.name}
                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={newUser.email}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Age"
                    value={newUser.age}
                    onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
                />
                <button type="submit" className='btn btn-primary ms-2'>Submit</button>
            </form>
        </div>
    );
}

export default Users;
