import axios from "axios";
import React, { useEffect, useState } from "react";
import Carditem from "../Carditem";


 function Updates(){
const[upd,setupd]=useState([{title:'abcd',body:'eghd',image:'Component2.png',},
{title:'jkh',body:'ljh',image:'Component2.png',}, {title:'zxcv',body:'qwe',image:'Component2.png',}])
useEffect(()=>{
    const controller = new AbortController();

    setInterval(()=>{
        axios.get( "https://www.anapioficeandfire.com/api/books?pageSize=30").then((resp)=>{
            setupd(resp.data)
            console.log("hio")
            console.log(resp.data)
        }).catch(error=>{console.error(error);})
    }, 10000)
    controller.abort()

})
return (
    <>
        <h1>обновы</h1>
        {
        upd.map((cartitem,index)=>
            <Carditem cartitem={cartitem} key={index}/>
        )} 
    </>
)
}
export default Updates;