  
import Link from 'next/link'
const contact = () => {
  return (
   <>
    <table>
       
        <th>
        <Link href="/">Home</Link>         
            <Link href="/gallery">Gallery</Link>
            <Link href="/contact">Contact</Link>
            <button onclick="clickbutton()">
                <Link
                 href="/gpa">Calculate GPA
                    
                </Link>
            </button>
        </th>
     
        
    </table>
        <h1>
            Social link:
        </h1>
        <p>
           Facebook:<a  class = "o"href="https://www.facebook.com/pr.kaewthep/">https://www.facebook.com/pr.kaewthep/</a><br/>
           
           Fanpage:<a class = "o" href="https://www.facebook.com/Scientist.dell">https://www.facebook.com/Scientist.dell</a> Please like and follow!!!!<br/>
           Email:<a class = "o" href="Prayat_k@cmu.ac.th">Prayat_k@cmu.ac.th</a><br/>
        </p>
    
        <div >
            <form>
                <label for="fname">Name:</label>
                <input type="text" id="fname" name="fname" placeholder="Enter Name"/><br/>
                <label for="lname">Subject:</label>
                <input type="text" id="lname" name="lname" placeholder="Enter Subject"/><br/>
                
                <label for="lname">Massage</label>
                <textarea id ="lname" name = "Massage" placeholder="Enter Massage"rows="4" cols="50"></textarea> <br/>
                <label for="fgender">Gender :</label>
                <input type="checkbox" id = "Male" name = "Male"/>
                <label for="Male">Male</label>
                <input type="checkbox" id = "Female" name = "Female"/>
                <label for="Female">Female</label>
                <br/>
                <label for="femail">E-mail:</label>
                <input type="text" id="femail" placeholder="Enter E-mail"name="femail"/><br/>
                <label for="lphone">Phone:</label>
                <input type="text" id="lphone" placeholder="Enter Phone"name="lphone"/><br/>
               
              </form>
             <button onclick="clickbutton()">
                <input type="submit" value="Submit"/>
             </button>
        </div>
        </>
  )
}

export default contact
