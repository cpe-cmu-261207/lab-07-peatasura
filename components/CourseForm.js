
import { GRADES } from "../utils/grades";
import { CREDITS } from "../utils/credits";
import { useContext, useState } from "react";
import {CardContext} from "../pages/gpa"
const CourseForm = () => {
  const [inputData, setInputData] = useState({name: "",a:"",g:0,c:0});   

  const {dispatch } = useContext(CardContext)

  return (
    <>
      <form onSubmit = {() => {
        dispatch({
          type: "ADD_CARD",
          payload: {
            id: Date.now(),
            name: inputData.name,
            a : inputData.a,
            g : inputData.g,
            c : inputData.c
          }
        })
        document.getElementById("name").value =''
        document.getElementById("grade").selectedIndex = 0
        document.getElementById("w").selectedIndex = 0
        }}>
          <table id="form" align ="center">
            
              <label for="name">Subject</label>
              <input id="name" type="text" placeholder="ชื่อวิชา" onChange = {(e)=>{
                setInputData({...inputData,
                name : e.currentTarget.value})
                }}/>
              <label for ="grade" >GPA</label>
                <select id="grade" onChange = {(e)=>{ setInputData({...inputData,
                g : e.currentTarget.value,
                a : e.currentTarget.options[e.currentTarget.selectedIndex].text})
                }}>
                <option value = "-2"></option>
                {GRADES.map((item) => { return <option value={item.value} >{item.name}</option> })}
                </select>
                <label for ="w" >Unit</label>
                <select id="w" onChange = {(e)=>{
                  setInputData({...inputData,
                  c : e.currentTarget.value})
                }}>
                  
                <option value = "0"></option>
                {CREDITS.map((item) => {return <option value = {item}>{item}</option>})}
                </select>
              
              <button type = "submit">Add</button>
           

                </table>
      </form>
      
    </>
  );
};

export default CourseForm;