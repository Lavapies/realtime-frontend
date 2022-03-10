import React from 'react';
import {Link} from 'react-router-dom'

export default function PostCard({message, _id}) {
  return (
    <div>
        <Link to={`/posts/${_id}`}>
            <h3>{message}</h3>
        </Link>
    </div>
  )
}
