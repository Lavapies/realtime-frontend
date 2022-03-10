import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostCard from '../components/PostCard';
import AddPost from '../components/AddPost'

export default function PostList() {
    const [posts, setPosts] = useState([]);

    // get all the posts from the backend 
    const getAllPosts = () => {
        // request 'api/posts'
        axios.get('/api/posts')
        .then(response => {
            console.log(response.data)
            // set the state of posts
            setPosts(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getAllPosts()
    }, [])

  return (
      <>
        <h1>All the posts</h1>
        {posts.map(post => <PostCard key={post._id} {...post} />)}
        <AddPost />
    </>
  )
}
