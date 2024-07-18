import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import emailjs from 'emailjs-com';
import "./feedback.css";
import "./Sweetpopup.css";

const FeedbackModal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [rating, setRating] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRatingChange = (value) => {
    setRating(value === rating ? null : value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      rating,
      feedback,
    };
    console.log(formData);

    emailjs.send(
      'service_ifek0ov',   //Service_ID
      'template_ndx2kok',   //Template_ID
      formData, 
      '4kNzuPWxQwXpq7otN'    // User_ID
    ).then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setRating(null);
        setName("");
        setEmail("");
        setFeedback("");
        Swal.fire({
          title: "Feedback submitted successfully!",
          text: "Thanks for taking the time to share your thoughts!",
          icon: "success",
          confirmButtonText: "Back",
          customClass: {
            popup: "custom-popup",
            title: "custom-title",
            content: "custom-content",
            confirmButton: "custom-confirm-button",
          },
        });
      }, 1000);
    }).catch((error) => {
      console.error('Error sending email:', error);
    });
  };

  return (
    <div className="feedback-wrapper">
      <div className="feedback-form">
        <div>
          <h2>Tell Us What You Think!</h2>
          <p>
            Share your thoughts on how we're doing and where we can enhance our
            service.
            <br /> <span className="vigyname">VigyBag</span>
          </p>
          <div>
            <p htmlFor="rating" className="rate-para">
              <strong>Rate Us Below</strong>
            </p>
            <div className="rating-container">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  className={value <= rating ? "active" : ""}
                  onClick={() => handleRatingChange(value)}>
                  {value <= rating ? "★" : "☆"}
                </button>
              ))}
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              placeholder="Enter your name"
              required
            />
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              required
            />
            <label htmlFor="feedback">Your Feedback</label>
            <textarea
              id="feedback"
              rows="4"
              value={feedback}
              onChange={handleFeedbackChange}
              placeholder="Let us know how we can improve..."
              required></textarea>
            <button type="submit">Submit Feedback</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
