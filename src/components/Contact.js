import err from '../images/icon-error.svg';
import './contact.css';

// Components
import Button from "./Button"
import { useState, useRef } from 'react';

export default function Contact(){


    const [input, setInput] = useState('')
    let reForm = useRef();

    let handleSubmit = (e) => {
        e.preventDefault();

        if(input === ''){
            reForm.current.classList.add('error');
        }else{
            reForm.current.classList.remove('error');
        }

    }

    let handleChange = (e) => {
        setInput(e.target.value)
    }

    return(
        <div className="contact">
            <p className="persons">35,000+ already joined</p>
            <p className="contact-title">Stay up-to-date with what we're doing</p>

            <form className="form" ref={reForm} onSubmit={handleSubmit}>
                <div className="box-input">
                <input type="email" placeholder="Enter your email address" onChange={handleChange} value={input} />
                <p>Whoops, make sure it's an email</p>
                <img src={err} alt="Error" />
                </div>
                <Button text="Contact Us" styleName="red"/>
            </form>
        </div>
    )

}