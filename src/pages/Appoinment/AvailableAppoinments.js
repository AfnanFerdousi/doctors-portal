import React, { useState, useEffect } from 'react';
import {format} from 'date-fns';
import Service from './Service';
import BookingModal from './BookingModal'

const AvailableAppoinments = ({date}) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="my-20 px-12">
            <h5 className='text-primary text-center font-bold mb-20'>Available Appoinments On {format(date, 'PP')}</h5> 

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service} 
                        setTreatment={setTreatment}                       
                    ></Service>)
                }
            </div>   
            {treatment && <BookingModal date={date}
            setTreatment={setTreatment}
             treatment={treatment}></BookingModal>}       
        </div>
    );
};

export default AvailableAppoinments;