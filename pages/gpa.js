  
import Link from 'next/link'
import { createContext, useEffect, useReducer , useState } from "react";
import dynamic from 'next/dynamic'
//import CourseCard from "../components/CourseCard";
const CourseCard = dynamic(() => import("../components/CourseCard"))
//import CourseForm from "../components/CourseForm";
const CourseForm = dynamic(() => import("../components/CourseForm"))

export const CardContext = createContext({});

function gpa() {
  const [GPA, setGPA] = useState(0.00);
  function calculateGPA() {
    // TODO
    let grade = 0.00
    let credit = 0
    state.currentState.forEach(obj => {
      if(obj.a !== "W"){
        grade += Number(obj.g) * Number(obj.c)
        credit += Number(obj.c)
      }
    })
    grade  = Number(grade) / Number(credit)
    if(Number(grade) >= 0)
      setGPA(Number(grade.toPrecision(3)))
    else setGPA(0.00)
  }

  const reducer = (state , action) =>{
    switch(action.type){
      case "ADD_CARD":
        return {
          ...state,
          currentState: [...state.currentState, action.payload],
        };
      case "SET_CARD":
        return {
          ...state,
          currentState: action.payload,
        };
      case "DELETE_CARD":
        return {
          ...state,
          currentState: state.currentState.filter((card) => card.id !== action.payload),
        };
      }
  }

  const [state,dispatch] = useReducer(reducer, {currentState:[],})
  function fetchCards() {
    const localState = localStorage.getItem("currentState");
    if (localState) {
      dispatch({
        type: "SET_CARD",
        payload: JSON.parse(localState),
      })
    }
    calculateGPA()
  }

  useEffect(fetchCards, [])
  useEffect(() => {
    localStorage.setItem("currentState", JSON.stringify(state.currentState));
    calculateGPA()
  }, [state.currentState])

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
    <CardContext.Provider value = {{state,dispatch}}>
      <div>
        <h1 class ="headone">GPA CALCULATOR V.3</h1>
        <CourseCard state={state.currentState} />
      </div>
      <CourseForm />
      
      <p id = "show"class ="show" align = "center">Your GPA is {GPA.toFixed(2)}</p>
    </CardContext.Provider>
    </>
  );
}

export default gpa;
