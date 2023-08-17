import React, { useEffect, useState } from 'react'

const Post = () => {
    const [currentPost, setCurrentPost] = useState([]);
    useEffect(()=>{
        fetch("https://puce-easy-crocodile.cyclic.cloud/post").then((res)=>res.json()).then((data)=>{
            setCurrentPost(data)
        }
        )
    },[])
  return (
    <>
    {currentPost.map((el)=>
        (
        <div key={el._id} style={{
            border:"1px solid black",
            padding:"10px"
        }}>
            <h1>title : {el.title}</h1>
            <p>live : {el.live.toString()}</p>
        </div>
        )
    )}
    </>
  )
}

export default Post