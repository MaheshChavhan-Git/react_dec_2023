// This is example of Conditional Rendering 

import React from 'react'
import Demo2 from '../demo/Demo2'
import Demo4 from '../demo/Demo4'

export default function ConditionalDemo1() {
  
    let n = 8 ;

    return <div>{n % 2 === 0 ? <Demo2 /> : <Demo4 /> }</div>
}
