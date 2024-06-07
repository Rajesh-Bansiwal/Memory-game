import React, { useEffect, useState } from 'react'
const getnum=()=>{
  const list=[]
  for(let i=1;i<=8;i++){
    list.push(i)
    list.push(i)
  }
  return list;
}
const App = () => {
  const[solve,setsolve]=useState([])
 const[num,setnum]=useState(getnum())
 const[stage,setstage]=useState('init')
 const[help,sethelp]=useState([])
 const rand=()=>{
  const c=[...num]
  return c.sort(()=>Math.random()-0.5)
 } 
 const handelstage=()=>{
  setstage("start")
  setnum(rand())
  setsolve([])
 }
const handelclick=(ele,i)=>{
  if(help.length===2){
    return
  }
  sethelp((prev)=>[...prev,i])
}
useEffect(()=>{
if(help.length===2){
  setTimeout(()=>{
const id1=help[0]
const id2=help[1]
if(num[id1]===num[id2]){
  setsolve((prev)=>[...prev,num[id1]])
}
sethelp([])
  },1000)
}
},[help])
useEffect(()=>{
  if(solve.length===8){
    setstage("win")
  }
},[solve])
const getclass=(num,i)=>{
if(solve.includes(num)){
  return "hidden"
}
}
 return (
    <div style={{margin:"0px auto"}} >
      {stage==="init" && <button onClick={handelstage}>Play Game</button>}
      {stage==="start" && 
      <div style={{width:"700px",gap:"5px",display:"grid",gridTemplateColumns:"repeat(4,50px)"}}>
{
  num.map((ele,i)=>(
    <p  key={i} onClick={()=>handelclick(ele,i)} style={{visibility:getclass(ele,i),
    fontSize:help.includes(i)?"30px":"0px",
    backgroundColor:"green",padding:"5px",height:"30px",width:"80%",textAlign:'center'}}>{ele}</p>
  ))
}
      </div>
      }
      {
       stage==="win"&& <div>
          <h1>you win the game</h1>
          <button onClick={handelstage}>Play again</button>
        </div>
      }
    </div>
  )
}

export default App
