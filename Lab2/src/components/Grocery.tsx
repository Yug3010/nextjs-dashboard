import React from 'react'

type taskProp={
  title:string;
  quantity:number;
  id:number;
}


const Grocery = (props:taskProp) => {
  return (
    <>
    <h1>{props.quantity}</h1>
    <h1>{props.title}</h1>
    <ul>
        {/* {props.tasks.map((e)=>{
          return <li>{e}</li>
        })} */}
        <button>Add</button>
        <button>Delete</button>
      </ul>

    </>
  
  )
}

export default Grocery;