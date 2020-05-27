const ThemeReducer =(state, action)=>{

    switch(action.type)
    {
        case 'ThemeToggle':
          
        return {
            ...state,
            isLightTheme : !state.isLightTheme
        }
        
          
        default:
            return state;
    }

}
export default ThemeReducer;