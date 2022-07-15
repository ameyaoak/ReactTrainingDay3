import React from 'react';

const MyContext = React.createContext({
    username:"",
    setUsername: ()=>{}
});

export const MyComponent = props => {
    const myContext = React.useContext(MyContext);
    return(
        <>
        <h3>{myContext.username}</h3>
        </>
    )
}
 
export const MyContextProvider = props => {
    const[username,setUsername] = React.useState('Name');
    return(
        <MyContextProvider value={{username,setUsername}}>
            {props.children}
        </MyContextProvider>
    )
}