import React from 'react';

export const MyComponent = props => {
    const [visible,setVisible] = React.useState(false);
    return(
        <>
        {visible && <MyChildComponent/>}
        <button onClick={()=>setVisible(!visible)}>
            Toggle child component display
        </button>
        </>
    )
}

const MyChildComponent = () => {
    const [userInfo, setUserInfo] = React.useState({
        name: 'Name',
        age: 10
    });

    React.useEffect(()=>{
        console.log("Called when componet is mounted.");
        return()=>console.log("Called on component is unmounted.");
    },[]);

    return (
        <div>
            <h4>{userInfo.name}  {userInfo.age}</h4>
            <input value={userInfo.name}
                onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value})}/>
            <input value={userInfo.age}
                onChange={(e) => setUserInfo({ ...userInfo, age: e.target.value})}/>
        </div>
    );
}