import { useContext, useState } from "react";
import {CardContext} from "../pages/gpa"
const CourseCard = (props) => {
const{dispatch} = useContext(CardContext);
  return (
    props.state.map(obj=>{
      return(<>
      
    
          <div class ="CourseCard" align ="center">
            <p id ="kk">
              <div class="tag">
              <p>วิชา : {obj.name}</p>
              <p>เกรด : {obj.a}</p>
              <p>หน่วยกิต : {obj.c}</p>

              <button class="btn" onClick = {()=>{
                dispatch({
                    type: "DELETE_CARD",
                    payload: obj.id,
                });}}>Delete</button>

              </div>
            </p>
          </div>

        </>
      
      )
    })
    
      
   
  );
};

export default CourseCard;
