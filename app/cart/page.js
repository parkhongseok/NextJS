'use client'
import { useState } from 'react'
import Data from './data.js'

export default function Cart(){
  let products = ['fuckingAssHoletomatos', 'matherfuckenHamberger', 'stupidBullShitChicken']
  let [cnt, changeCnt] = useState([1, 2, 3]) 
  return (
    <div>
      <Data></Data>
      <h2 className="title">Cart</h2>
      <div className="cart-item"></div>
      <div className="cart-item-title">
        <p>상품명</p>
        <p>금액</p>
        <p>수량</p>
      </div>
      {products.map((item, i)=>{
        return(
        <CartItem 
          item = {item} 
          i={i}
          cnt = {cnt}
          changeCnt = {changeCnt}
          key={i}
        >

        </CartItem>)
      })}

    </div>
  )
}
function CartItem(props){
  let SetCnt = function(n){
    const newCnt = [...props.cnt]
    if(n){
      newCnt[props.i]++
    }
    else{
      if(newCnt[props.i]>0)
        newCnt[props.i]--
    }
    props.changeCnt(newCnt)
  }
  return (
    <div className="cart-item">
    <p>{props.item}</p>
    <p>$40</p>
    <p>{props.cnt[props.i]}개  
      <span className='btnBox'>
        <button className='btn'
        onClick={()=>{
          SetCnt(true)
        }}
        >+</button>
        <button 
        className='btn'
        onClick={()=>{
          SetCnt(false)
        }}
        >-</button>
      </span>
    </p>
  </div>
  )
}