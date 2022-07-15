import React from 'react';

export const MyComponent = props => {
    const [userInfo, setUserInfo] = React.useState({
        name: 'Name',
        age: 10
    });

    // React.useEffect(() => {
    //     setTimeout(() => {
    //         setUserInfo({name:'Name by useEffect',age:'10 by useEffect'});
    //     },3500)
    // }, []);//use enpty array as a default setter useEffect(rightPath,wrongPath)
    // //good for chained effects
    // //no need to give mount and unmount effect for useState
       

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