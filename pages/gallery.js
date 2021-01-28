  
import Link from 'next/link'
const gallery = () => {
    return (
      <>
        
    
        
      <table>
       
       <th>     <Link href="/">Home</Link>         
            <Link href="/gallery">Gallery</Link>
            <Link href="/contact">Contact</Link>
            <button onclick="clickbutton()">
                <Link
                 href="/gpa">Calculate GPA
                    
                </Link>
            </button>  
       </th>
    
       
   </table>

   <h1> My Gallery</h1>

   <table>
       
       <tr>
         
           <td>
                <img src = "photo/pro.jpg" alt = "my pic" width="220" height="330" />
           <p>
               My Picture
           </p>
           </td>
           <td>
               <img src = "photo/ed.jpg" alt = "eds" width= "350" height = "250" />
           <p>
               ED Sheeran
           </p>
           </td>
           <td>
                <img src = "photo/cats.jpg" alt = "cats" width= "350" height="250" />
           <p>
               cats
           </p>
       
           </td>
             
          

        
       </tr>
     
      
      
   </table>

  
   <table>
      
       <tr>
           <td>
             <img src = "photo/2.png" alt = "fav2" width="350" height="250"/>
           <p> Jinx LOL</p>   
           </td>
          <td>
              <img src = "photo/5.png" alt = "fav1" width="350" height="250" />
           <p> LiverpoolFC</p>
          </td>
           <td>
             <img src = "photo/6.png" alt = "eds" width= "350" height = "250" />
           <p>
              Mo Salah
           </p>  
           </td>
          
          
           
       </tr>
      
       
   </table>
   <table>
       
       <tr>
         
           <td>
                 <img src = "photo/ben.jpg" alt = "eds" width= "350" height = "250" />
           <p>
             Benjamin Tenyson
           </p>
           </td>
           <td>
           <img src = "photo/8.png" alt = "eds" width= "350" height = "250" />
           <p>
             Sasuke
           </p>
         
           </td>
           <td>
                <img src = "photo/sawa.jpg" alt = "sawa" width= "350" height="250" />
           <p>
               Sawada Tsunayoshi
           </p>
       
           </td>
             
          

        
       </tr>
     
      
      
   </table>





  
      
          

    </>
            
  
      
    )
  }
  
  export default gallery
  