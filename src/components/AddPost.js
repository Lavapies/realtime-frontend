import React, { useState } from 'react';
import axios from 'axios';

export default function AddPost() {

    const [message, setMessage] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        // send the data from the state as a post request to the backend
        axios.post('/api/posts/new', {message})
        .then(response => {
            console.log(response)
        })
        .catch(err => console.log(err));
        // refresh the post list
    }

  return (
      <>
        <h1>AddPost</h1>
        <from onSubmit={handleSubmit}>
            <label htmlFor='message'>Message</label>
            <input 
            id='message'
            type='text'
            value={message}
            onChange={e => setMessage(e.target.value)}
            />
            <button type='submit'>Post</button>
        </from>
    </>
  )
}
