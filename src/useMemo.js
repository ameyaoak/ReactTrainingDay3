import React from 'react';

export const MyComponent = props => {
    const [userInfo, setUserInfo] = React.useState({
        name: 'Name',
        age: 10
    });

    return (
        <div>
            <DisplayUsername name={userInfo.name} />
            <h4>{userInfo.name}  {userInfo.age}</h4>
            <input value={userInfo.name}
                onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })} />
            <input value={userInfo.age}
                onChange={(e) => setUserInfo({ ...userInfo, age: e.target.value })} />
        </div>
    );
}

export const DisplayUsername = React.memo(props => {
    console.log("Update the name then this method will be invoked")
    return <h3>{props.name}</h3>//use memo when you have lot of objects and want to just track changes for 1 object
});