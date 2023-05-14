import {getDocs, collection} from 'firebase/firestore'
import { db } from '../../config/firebase'
import { useEffect, useState } from 'react'
import { async } from '@firebase/util'
import { Post } from './post';


 export  interface Post {
    id: string;
    userId : string;
title:string;
username:string;
description:string;

}



export const Main = () => {
   const postsRed = collection(db,"posts")
   const [postsList, setPostsList]=useState<Post[] | null>(null  );

    const getPosts = async () => {
        const data = await getDocs(postsRed)
        setPostsList(data.docs.map((doc)  => ({...doc.data(), id:doc.id}))    as Post[] );
    
    }
    useEffect(()=>{
        getPosts()
    },[]);


    return (

        <div> 
        {postsList?.map((post)=>(
        <Post  post={post} />
        ))}          
        </div>
        )
    
}