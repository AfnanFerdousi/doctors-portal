import React from 'react';

const Service = ({ service, setTreatment }) => {
    const {name, slots} = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-primary font-bold">{name}</h2>
                <p>{
                    slots.length 
                    ? <span className=''>{slots[0]}</span>
                    : <span className='text-red-500'>Try Another Date</span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions">
                <label htmlFor="booking-modal" 
                disabled={slots.length == 0} 
                onClick={() => setTreatment(service)}
                className="btn btn-primary font-bold text-white bg-gradient-to-r from-secondary to-primary mt-3">BOOK APPOINTMENT</label>
                </div>
            </div>
        </div>
    );
};

export default Service;