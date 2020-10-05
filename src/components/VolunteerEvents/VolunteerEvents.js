import React, { useEffect, useState } from 'react';
import './VolunteerEvents.css';
import allEvent from '../fakeData/allEvents';
import { Link, useParams } from 'react-router-dom';

const VolunteerEvents = () => {

    const { _id } = useParams();

    // const event = allEvent;
    const [events, setEvents] = useState([])

    // load events data from API
    // useEffect(() => {
    //     fetch('https://still-sierra-69434.herokuapp.com/events')
    //         .then(res => res.json())
    //         .then(data => setEvents(data))
    // }, [])

    // load events data from fakeData
    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => setEvents(allEvent))
    }, [])

    return (
        <div className="row">
            {
                events.map(event =>
                    <div className="col-md-3" key={event._id}>
                        <img src={event.image} className="card-img" alt="..." />
                        {/* <h3 className="bg-primary text-white p-3 rounded">{event.name}</h3> */}
                        <Link to={`/eventRegistration/${event._id}`}><h3 className="bg-primary text-white p-3 rounded">{event.name}</h3></Link>
                    </div>

                )
            }
        </div>
    );
};

export default VolunteerEvents;