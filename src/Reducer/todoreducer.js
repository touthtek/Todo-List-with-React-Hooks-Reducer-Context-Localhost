import uuid from 'react-uuid'

const TodoReducer = (state, action)=>{

   switch(action.type){
 
       case 'AddTodo' : 

       if(!action.todo){
        return state;
    }

    if(state.todo.findIndex(t => t.title === action.todo) > -1)
    {
        return state;
    }

        const todolist = [
           ...state.todo,
           {id:uuid(), title : action.todo, completed : false}
       ]
       return {
        ...state,
        todo : todolist
       }
       

       case 'Complete':
          
        const todoresult = state.todo.map(item =>
            item.id === action.todo.id
            ? {...action.todo, completed : !action.todo.completed} : item
            )
            return {
                ...state,
                todo : todoresult

            }

            case  'Delete' : 
            
             const result = state.todo.filter(item => item.id !== action.id);
             return {
                 ...state,
                 todo : result
             }
           
           return[
                ...state,
               //todoList : todoresult
           ]

           case 'Edit' : 
         
           return {
               ...state,
               currentvalue : action.todo
           }

           case 'Update' : 

           if(!action.todo){
            return state;
        }
    
        if(state.todo.findIndex(t => t.title === action.todo) > -1)
        {
            return state;
        }

           const updatedtodo = {
            ...state.currentvalue, 
            title : action.todo
         }
         const todoIndex = state.todo.findIndex(t => t.id === state.currentvalue.id );
         const todoupdate = [
             ...state.todo.slice(0, todoIndex),
             updatedtodo,
             ...state.todo.slice(todoIndex + 1)
         ]
         return {
             ...state,
             currentvalue : {},
            todo:  todoupdate
         }
            
            
      
       default : 
       return state;
   }

}
export default TodoReducer;