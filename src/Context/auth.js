import React, {useState, useContext, createContext} from 'react';
export const AuthContext = createContext();
const AuthContextProvider = (props) => {
    
    const [Authentication, setauthentication] = useState(
        {
            isAuthenticationstatus : false
        });
     const userAuthentication = () =>{
         setauthentication({
            isAuthenticationstatus : !Authentication.isAuthenticationstatus
            });
     }
    return ( 
        <AuthContext.Provider value={{...Authentication, userAuthentication: userAuthentication}}>
           {props.children}
        </AuthContext.Provider>
     );
}
 
export default AuthContextProvider;
