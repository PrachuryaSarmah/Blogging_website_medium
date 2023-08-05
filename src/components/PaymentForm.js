import React, { useState } from 'react';
import axios from 'axios';
import './PaymentForm.css';

const PaymentForm = () => {
  const [selectedPlan, setSelectedPlan] = useState('free');

  const handlePayment = async () => {
    try {
      // Replace 'YOUR_ROR_API_ENDPOINT' with the payment API endpoint of your backend
      const response = await axios.post('YOUR_ROR_API_ENDPOINT/payment', {
        plan: selectedPlan,
      });
      // Handle the payment response from the backend (e.g., redirect to success page)
      console.log('Payment successful:', response.data);
    } catch (error) {
      console.error('Error processing payment:', error);
    }
  };

  return (
    <div className='container'>
      <h2>Choose Subscription Plan</h2>
      <label>
        
        1 post per day - Free
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="3-posts"
          checked={selectedPlan === '3-posts'}
          onChange={() => setSelectedPlan('3-posts')}
        />
        3 posts per day - $3
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="5-posts"
          checked={selectedPlan === '5-posts'}
          onChange={() => setSelectedPlan('5-posts')}
        />
        5 posts per day - $5
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="10-posts"
          checked={selectedPlan === '10-posts'}
          onChange={() => setSelectedPlan('10-posts')}
        />
        10 posts per day - $10
      </label>
      <br />
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default PaymentForm;
