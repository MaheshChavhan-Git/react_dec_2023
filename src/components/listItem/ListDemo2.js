//Program for iterating array of object and display that data in table format . . . . 

import React from 'react'

export default function ListDemo2() {
    let employees = [
        {eId:101, name:'mahesh',sal:40000},
        {eId:102, name:'pratik',sal:30000},
        {eId:103, name:'ajay',sal:35000},
        {eId:104, name:'akshay',sal:25000},
        {eId:105, name:'rishi',sal:39000},
    ]
  return (
    <>
    <h2 className='text-center'>Employee List</h2>
     <table className='table table-bordered table-striped'>
      <thead>
        <tr>
         <th>ID</th>
         <th>Name</th>
         <th>Salary</th>
       </tr>
      </thead>
     <tbody>
      {employees.map((emp,ind)=>{
        return (
            <tr key={ind}>
            <td>{emp.eId}</td>
            <td>{emp.name}</td>
            <td>{emp.sal}</td>
            </tr>
        )
      })}
     </tbody>
    </table>
    
    </>
  )
}
