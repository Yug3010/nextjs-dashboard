import React, { useState } from 'react'

type ColorCode ={
    rgba: [number, number, number, number];
    hex: string;
  }
  
  type ColorObject= {
    id:number;
    color: string;
    category: string;
    type: string;
    code: ColorCode;
    ondelete: (id: number) => void;
  };
  
  
const Colors:React.FC<ColorObject> = ({id,color,category,type,code,ondelete}) => {
  return (
    <>
        <button onClick={()=>ondelete(id)}>Delete</button>
        <h1>Colour is : {color}</h1>
        <div>Category is : {category}</div>
        <div>Type is : {type}</div>
        <div>Hex value is : {code.hex}</div>
        <div>Rgba value is : {code.rgba}</div>
    </>
    
  )
}

export default Colors