import React from 'react';
import UserList from '../listItem/UserList';
{/*import ConditionalDemo2 from '../conditional/ConditionalDemo2'*/}

export default function Body() {
  return (
    <div>
     <div>
      <div style= {{minHeight:"100px"}}>This is Body Component</div>
      <UserList />
      {/*<ConditionalDemo2 />*/}
      </div>
     </div>
  )
}
