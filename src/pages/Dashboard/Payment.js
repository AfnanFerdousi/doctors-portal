import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L0hrPH2cLojiURK74I446s6HjHcPirYw3vyPdVfm8lKYFkLq9S5werxHr74Qk09FM63vy1HxlUPC41xOybHSKhI00sgSQ8V8M');

const Payment = () => {
    const { id } = useParams();
    const url = `https://radiant-hollows-72125.herokuapp.com/booking/${id}`;

    const { data: appoinment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className="text-success font-bold">Hello, {appoinment.patientName}</p>
                    <h2 className="card-title">Please Pay for {appoinment.treatment}</h2>
                    <p>Your Appointment: <span className='text-orange-700'>{appoinment.date}</span> at {appoinment.slot}</p>
                    <p>Please pay: ${appoinment.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className='card-body'>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appoinment={appoinment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;