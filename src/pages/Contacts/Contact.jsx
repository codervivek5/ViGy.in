import React, { useState } from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import Logo from '../../assets/offical_logo.png';

const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          contactNumber,
          message,
        }),
      });

      if (response.ok) {
        alert('Message submitted successfully!');
        setFirstName('');
        setLastName('');
        setEmail('');
        setContactNumber('');
        setMessage('');
      } 
    } catch (error) {
      console.error();
      
    } finally {
      setSubmitting(false);
    }
  };

  const handleContactNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
    setContactNumber(value);
  };

  return (
    <div className="bg-[#fff0e3ff] min-h-screen flex items-center justify-center mt-1">
      <div
        className="bg-[#393d3cff] text-white py-8 px-6 sm:px-12 rounded-lg"
        style={{
          marginTop: "21vh",
          borderRadius: "20px",
          width: "90vw",
          maxWidth: "600px",
          marginBottom: "13vh",
        }}>
        <div className="flex items-center justify-center mb-6">
          <div className="relative bg-[#393d3cff] rounded-full p-4 mb-3"
            style={{ top: '2vh', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px', padding: '27px' }}>

            <img src={Logo} alt="Logo" width={"50px"} height={"50px"} />
          </div>
        </div>
        <h2 className="text-3xl font-semibold text-center mb-4 mt-10 text-white">
          Contact Us
        </h2>
        <p className="text-gray-400 text-center text-lg mb-8">
          Got something to say? Let us know!
        </p>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <input
                className="appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
                type="text"
                placeholder="First Name *"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                className="appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
                type="text"
                placeholder="Last Name *"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <input
                className="appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
                type="email"
                placeholder="Email Address *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                className="appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
                type="tel"
                placeholder="Contact Number *"
                value={contactNumber}
                onChange={handleContactNumberChange}
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <textarea
              className="appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
              rows={4}
              placeholder="Tell us your thoughts..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="flex flex-col items-center mb-3">
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg focus:outline-none focus:shadow-outline mb-6 transition duration-300 w-full"
              type="submit"
              disabled={submitting}
            >
              {submitting ? 'Submitting...' : 'Get In Touch'}
            </button>
            <hr className="w-full h-1 bg-white z-2 relative" />
            <p className="text-white text-sm mb-2 text-center px-10"
              style={{ padding: '10px', border: '1px solid white', borderRadius: '20px', backgroundColor: '#1a1821ff', zIndex: '5', width: '15vw', minWidth: '100px', position: 'relative', top: '-20px' }}>or contact us via</p>
            <div className="flex flex-col items-center mb-1 mt-4">
              <div className="flex items-center mb-2">
                <FaEnvelope className="text-gray-400 mr-2" />
                <span className="text-gray-400 text-sm"><a href="mailto:vigybag@gmail.com">vigybag@gmail.com</a></span>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-gray-400 mr-2" />
                <span className="text-gray-400 text-sm"> <a href="tel:+919123456789">+91 9123456789</a></span>
              </div>

            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
