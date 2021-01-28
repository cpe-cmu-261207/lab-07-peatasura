import {useEffect} from 'react';
import axios from 'axios'
  
import Link from 'next/link'
const baseURL = 'https://dummyapi.io/data/api'
const Home = () => {
  return (
    <>
      <h1>This is home page</h1>
      <table >
       
        <th>
            <Link href="/">Home</Link>         
            <Link href="/gallery">Gallery</Link>
            <Link href="/contact">Contact</Link>
            <Link href = "post">Post</Link>
            <button onclick="clickbutton()">
                <Link
                 href="/gpa">Calculate GPA
                    
                </Link>
            </button>
        </th>
     
        
      </table>

        <h1>MyProfile</h1> <img src = "photo/pro.jpg" alt = "my pic" width="350" height="450"/>

        <h2>NAME :  Prayat Kaewthep<br/>
                 Date of birth : 05/01/2001<br/>
    
             </h2>
        <p>
        I interested in music and anime.<br/>
        one of my favorite song is millionare-Thescript<br/>
        I live in Phayao but now i live in Chiang Mai
        </p>
         <h3>CMU Student in  Bachelor of Engineering (Computer Engineering) B.Eng.(Computer Engineering)<br/>
        Skill : C++,Java</h3>

             <h4> Education: primary school Phayaopittayakhom School<br/> 
                Now : Chiang Mai University (2nd)</h4>

      
          

    </>
  )
}

export default Home
