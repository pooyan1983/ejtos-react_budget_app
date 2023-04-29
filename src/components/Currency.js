import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);

    const submitEvent = (currency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency,
        });
    }

    return (
        <div >
            <div className='row'>

            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                </div>
                <select className="custom-select" id="inputGroupSelect01" onChange={(event) => submitEvent(event.target.value)}>
                        <option defaultValue>Currency ({currency})</option>
                        <option value="£" name="pound"> £ Pound</option>
                        <option value="$" name="dollar"> $ Dollar</option>
                <option value="€" name="euro">€ Euro</option>
                <option value="₹" name="rupee">₹ Ruppee</option>
                </select>
                </div>
                </div>
        </div>
    );
    };

export default Currency;