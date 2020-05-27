import React, {useReducer, createContext} from 'react';
import ThemeReducer from '../Reducer/themereducer'
export const themeContext = createContext();

const ThemeProviderContext = (props) => {
    
    const [themedata, dispatch] = useReducer(ThemeReducer,{
        isLightTheme : true,
        light : {syntax : '#555', ui:'#ddd', bg:'#eee'}, 
        dark :  {syntax : '#ddd', ui:'#333', bg:'#555'}
    });
   
    

    return ( 
        <themeContext.Provider value={{themedata, dispatch }}>
            {props.children}
        </themeContext.Provider>
     );
}
 
export default ThemeProviderContext;