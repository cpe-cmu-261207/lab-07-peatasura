import {useEffect,useState} from 'react'
import Link from 'next/link'
import axios from 'axios'
const baseURL = 'https://dummyapi.io/data/api'
const APP_ID = '601283cc4cde33187a7a4ace';

const Posts = () => {
    const [posts,setPosts] = useState([])

    const fetchTodos = async () => {
        const response = await axios.get(`${baseURL}/post`,  { headers: { 'app-id': APP_ID } })
        console.log(response.data.data)
        setPosts(response.data.data)

    }

    useEffect(fetchTodos,[])
    return (
        <>
            <h1>All Todos from jsonplaceholder</h1>

                <ul>
                    {
                        posts.map(todo => (

                            <Link  key={todo.id} href={`/post/${todo.id}`}>
                                <li>
                                   <p>{todo.text}
                                       </p>
                                       <img src = {todo.image}></img> 
                                       <p>like: {todo.likes}</p>
                                    <button style={{margin:10}}>more</button>
                                </li>
                            </Link>

                        ))
                    }
                </ul>


        </>
    )
}

export default  Posts
