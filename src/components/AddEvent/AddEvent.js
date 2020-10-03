import React from 'react';
import './AddEvent.css';
import logo from '../../logos/logo.png';

import allEvent from '../fakeData/allEvents';

// insert event to mongodb database
const handleAddEvent = () => {
    fetch("http://localhost:5000/addEvent", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(allEvent[0])

    })
    console.log('event added!');
}


const AddEvent = () => {
    return (
        <div className="container-fluid">
            <div className="row admin-navbar">

                <div className="col-md-3">
                    <a className="navbar-brand" href="/home">
                        <img src={logo} alt="" />
                    </a>

                    <ul className="dashboard-menu ">
                        <li><a href="/admin">Volunteer register list</a></li>
                        <li><a href="/addEvent">Add event</a></li>
                    </ul>

                </div>

                <div className="col-md-9" style={{ height: '100vh', background: '#F4F7FC' }}>
                    <h3>Volunteer register list</h3>

                    <div className="bg-white p-5 " >
                        <form action="">
                            <div className="row">
                                <div className="col form-group">
                                    <label htmlFor="title">Event Title</label>
                                    <input type="text" id="title" className="form-control bg-light" placeholder="Event title" required />
                                </div>
                                <div className="col form-group">
                                    <label htmlFor="date">Event Date</label>
                                    <input type="date" id="date" className="form-control bg-light" />
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col">
                                    <label htmlFor="description">Description</label>
                                    <input type="text" id="description" className="form-control bg-light" placeholder="description" />
                                </div>
                                <div className="col form-group">
                                    <label htmlFor="date">Banner</label>
                                    <input type="file" id="image" className="form-control-file" />
                                </div>
                            </div>
                            <div className="row d-flex justify-content-end">
                                <input onClick={() => handleAddEvent} type="submit" value="Submit" className="btn btn-primary " />
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default AddEvent;