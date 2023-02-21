import React, { useState } from 'react';
import axios from 'axios';
import Logo from '../logo/logo';
import Footer_logo from '../logo/footer_logo';

function Form() {
  const [paymentoption, setPaymentoption] = useState('monthly');
  const [isRegistered, setIsRegistered] = useState(false);

  const handlePaymentoptionChange = (e) => {
    setPaymentoption(e.target.value);
  };

  const handleSignUpClick = () => {
    // Here you can write the code to handle form submission and check if the user is already registered
    const isAlreadyRegistered = false; // Set this to true to test the already registered message

    if (!isAlreadyRegistered) {
      setIsRegistered(true);
    }
  };

  //connecting the google sheets document so data can be sent and saved there.

  const [name,setName] = useState('');
  const [surname,setSurname] = useState('');
  const [phonenumber,setPhonenumber] = useState('');
  const [email,setEmail] = useState('');
  

// sign up click handler
const handleSignupClick =(event)=>{
  event.preventDefault();;
  // console.log(name,surname,phonenumber,email,paymentoption);
  const data_sheets = {
    Name:name,
    Surname:surname,
    Phonenumber:phonenumber,
    Email:email,
    // PaymentOption:paymentoption
  }
  axios.post('https://sheet.best/api/sheets/f12ce248-c4db-4278-a8da-9d22f716c32f',data_sheets)
  .then(()=>{
    // console.log(response);
    setName('');
    setSurname('');
    setPhonenumber('');
    setEmail('');
    // setPaymentoption('');
  })
}

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Logo/>
      <div className="mx-auto max-w-md p-4 bg-white rounded-lg shadow-lg" onSubmit={handleSignupClick}>
        
        <div className="mb-4">
          <label htmlFor="name" className="block font-bold mb-2">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="block w-full p-2 border rounded"
            onChange={(event)=>setName(event.target.value)}
            value={name}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="surname" className="block font-bold mb-2">
            Surname
          </label>
          <input
            id="surname"
            name="surname"
            type="text"
            className="block w-full p-2 border rounded"
            onChange={(event)=>setSurname(event.target.value)}
            value={surname}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block font-bold mb-2">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="block w-full p-2 border rounded"
            onChange={(event)=>setPhonenumber(event.target.value)}
            value={phonenumber}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-bold mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="block w-full p-2 border rounded"
            onChange={(event)=>setEmail(event.target.value)}
            value={email}
          />
        </div>
        {/* <div className="mb-4">
          <label htmlFor="paymentOption" className="block font-bold mb-2">
            Payment Option
          </label>
          <select
            id="paymentOption"
            name="paymentOption"
            value={paymentoption}
            onChange={(event)=> handlePaymentoptionChange + setPaymentoption(event.target.value)}
            className="block w-full p-2 border rounded"
            
          >
            <option value="monthly">Monthly: R25.00</option>
            <option value="annually">Annually: R348.95</option>
          </select>
        </div> */}
        <div className="flex justify-center">
          <button
            className="bg-yellow-600 text-white px-4 py-2 rounded-lg"
            onClick={handleSignUpClick}
          >
            Sign up
          </button>
        </div>
        {isRegistered ? (
          <div className="text-green-500 mt-4 text-center">
            Successfully registered, We are excited you've joined us!
          </div>
        ) : null}
      </div>
      <footer className="mt-8 text-center text-gray-500">
        &copy; 2023 1020 Hivezzz (Pty) Ltd <Footer_logo/>.
      </footer>
    </div>
  );
}

export default Form;

