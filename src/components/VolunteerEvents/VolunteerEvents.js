import React, { useEffect, useState } from 'react';
import './VolunteerEvents.css';
import fakeData from '../fakeData/fakeData';
import { Link, useParams } from 'react-router-dom';

const VolunteerEvents = () => {

    const { _id } = useParams();

    // const event = fakeData;
    const [events, setEvents] = useState(fakeData)
 
    // load events data from API
    // API working but API not get data from MongoDB, alternative why try fakeData 
    // useEffect(() => {
    //     fetch('https://vast-anchorage-58744.herokuapp.com/allEvent')
    //         .then(res => res.json())
    //         .then(data => setEvents(data))
    // }, [])

    // load events data from fakeData
    useEffect(() => {
        fetch('http://localhost:5000/allEvent')
            .then(res => res.json())
            .then(data => setEvents(fakeData))
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