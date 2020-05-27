import React, {useReducer, createContext, useEffect, useState} from 'react';
import TodoReducer from '../Reducer/todoreducer'


export const TodoContext = createContext();
const initialvalue = {
   todo : [],
  currentvalue : {}
}
const TodoContextProvider = (props) => {
    const [todoobj, dispatch] = useReducer(TodoReducer,initialvalue, ()=>{
        const localData = localStorage.getItem('todo');
        return localData ? JSON.parse(localData) : initialvalue;
    }); 
   
     useEffect(()=>{
      localStorage.setItem('todo', JSON.stringify(todoobj));
     },[todoobj]);

    return ( 
        <TodoContext.Provider value={{todoobj, dispatch}}>
           {props.children}
        </TodoContext.Provider>
     );
}
 
export default TodoContextProvider;