import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


export default function PostDetails() {
    const { id } = useParams();

    const [post, setPost] = useState(null);

    useEffect(() => {
        // request to the server
        axios.get(`/api/posts/${id}`)
        .then(response => {
            setPost(response.data)
        })
        .catch(err => console.log(err))
    }, [])

  return (
      <>
        {post === null ? <div>'Loading'</div> : 
            <>
                <h1>Post Details</h1>
                <p>{post.message}</p>
            </>
    }</>
  )
}
