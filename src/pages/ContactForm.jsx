import React, { useState } from "react";
import Navbar2 from '../components/Navbar2';
import Footer from "../components/Footer/Footer";
import '../css/ContactForm.css';

const ContactForm = () => {
  
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <>
    <Navbar2 />
    <div class="row">

    
      <div class="column left">

      <form onSubmit= {handleSubmit}>

        <div class="head">
          <p>Reach out to us</p>
        </div>

        <div class="hrr"><hr /></div>
        <br />

        <div>
        <label htmlFor="name">Name : </label>
        <input type="text" id="name" required  />
      </div>
      <br />

      <div>
        <label htmlFor="email">Email : </label>
        <input type="email" id="email" required />
      </div>
      <br />

      <div >
        <label htmlFor="message">Message : </label>
        <div class="area">
            <textarea id="message" required cols={80} rows={5} />
        </div>
      </div>
      <br />

      <div class="center">
        <button type="submit">{status}</button>
      </div>

      </form>
    </div>
  
    

    <div class="column right">
        <p>insert image here</p>
    </div>

    </div> 

    <div class="row">
      <div class="column">
        <footer>
        <Footer />
        </footer>
      </div>
    </div>    
    
    </>
  );
};

export default ContactForm;