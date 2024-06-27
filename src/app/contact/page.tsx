'use client'
import React from 'react'
import './contact.css';
import { motion as m } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm("mdoroodj");
    return(
    <div>
      <m.div className='container'
        initial={{y:1700, opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{type:"tween",duration:2}} 
    >{
      (state.succeeded)? (<h1>Thanks for interacting!</h1>):
        (<div>
          <h1>Contact me!</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">
              Your email:
            </label>
            <input
              id="email"
              type="email" 
              name="email"
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
            <textarea
              id="message"
              name="message"
              rows={15}
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
              Submit
            </button>
          </form>
        </div>
    )}
      </m.div>
    </div>
    ); 
}

export default Contact