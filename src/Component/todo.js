import React, {useContext, useState} from 'react';
import { themeContext } from '../Context/theme';
import {TodoContext} from '../Context/Todo';

const  Todo = () => {
    const {themedata} = useContext(themeContext);
    const {isLightTheme, light, dark} = themedata;
    const {todoobj, dispatch} = useContext(TodoContext);
     const theme = isLightTheme ? light : dark;
    return todoobj.todo.length > 0 ? (  
       <div className="book-list" style={{color:theme.syntax, background:theme.bg}}>
        <ul>
            {todoobj.todo.map(item => {
                return(
<li style={{background: item.completed ? 'green' : theme.ui, color : item.completed ? 'white' : theme.syntax }} key={item.id}>
    <div className="row">
    <div className="col-md-8">{item.title}</div>
    <div className="col-md-4"><input type="checkbox" checked={item.completed} onClick={()=>dispatch({type:'Complete', todo : item})} /> | <span className="fa fa-edit" onClick={()=>dispatch({type:'Edit', todo:item})}></span> | <span className="fa fa-trash" onClick={()=>{dispatch({type:'Delete', id:item.id})}} ></span></div>
    </div>
</li>
                )
            })}
           
        </ul>
        </div>

    )
    :(<div className="book-list" style={{color:theme.syntax, background:theme.bg}}>
                <div style={{background:theme.ui, padding:10}}>
                   you have no list to display
                </div>
        </div>
        );
}
 
export default Todo;