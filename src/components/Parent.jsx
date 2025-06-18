import { useState } from "react"
import Table from "./Table"

export default function Parent(){
const [counter,setcounter]=useState(0)
const data=[
{
    "name":"GMIT",
    "ID":1
},
{
    "name":"BIET",
    "ID":2
},
{
    "name":"JAIN",
    "ID":3
},  
{    "name":"UBDT",
    "ID":4
},
]
return (
    <div>
        <Table data={data} c={counter} />
        <button onClick={()=>setcounter(counter+1)}>increment</button>
        <button onClick={()=>setcounter(counter-1)}>decrement</button>
    </div>
)
    
    
}