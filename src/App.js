import React from 'react';
import Todo from './Component/todo';
import NavBar from './Component/navbar';
import './index.css'
import ThemeProviderContext from './Context/theme';
import Themetoggle from './Component/Themetoggle';
import AuthContextProvider from './Context/auth';
import TodoContextProvider from './Context/Todo';
import InputForm from './Component/inputform';


function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <ThemeProviderContext>
      <NavBar />
      <TodoContextProvider>
      <Todo />
      <InputForm />
      </TodoContextProvider>
      <Themetoggle />
      </ThemeProviderContext>
      </AuthContextProvider>

    </div>
  );
}

export default App;
