import React, {useContext, useState, useEffect} from 'react';
import {TodoContext} from '../Context/Todo'
import {themeContext} from '../Context/theme'

const InputForm = () => {
  
    const {themedata} = useContext(themeContext);
    const {isLightTheme, light, dark} = themedata;
    const [todo, setTodo] = useState("");
    const {todoobj:{currentvalue ={}}, dispatch} = useContext(TodoContext);
    const theme = isLightTheme ? light : dark;
    const handleSubmit = event =>{
        event.preventDefault();
        if(!currentvalue.title)
        {
           dispatch({type:'AddTodo', todo: todo});
        }
        else{
            dispatch({type:'Update', todo:todo});
        }
       setTodo("");
    }
      
  useEffect(()=>{
      setTodo(currentvalue.title);
  },[currentvalue]);

    return (  
        <div className="book-list" style={{color:theme.syntax, background:theme.bg}}>
         <form onSubmit={handleSubmit}>
        <input  type="text" 
        onChange={event=>{setTodo(event.target.value)}}
         value ={todo}
         className="form-control"
        />
        </form>
        </div>
       
    );
}
 
export default InputForm;