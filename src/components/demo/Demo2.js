//This is example of Expression

import React from 'react'


export default function Demo2() {
    function formatName(user){
        return user.firstName + " " + user.lastName;
    }
    let user = {
        firstName : 'Mahesh',
        lastName : 'Chauhan',
    };
    return (
        <div>
         <h2>React Version is {React.version}</h2>
         <h2>{1 + 2}</h2>
         <h2>My Name is - {user.firstName}</h2>
         <h2>My Full Name is - {formatName(user)} </h2>
        </div>
    )
}