import React, { useEffect, useState } from "react";
import Carditem from "../Carditem";
import axios from "axios";

function Recomendations(){
    const [recomendations,setrecomendations]=useState([
    { title: 'abcd', body: 'eghd', image: 'Component2.png', },
    { title: 'jkh', body: 'ljh', image: 'Component2.png', },
    { title: 'zxcv', body: 'qwe', image: 'Component2.png', }])
    useEffect(()=>{
     
            axios.get( "https://www.anapioficeandfire.com/api/books?pageSize=30").then((resp)=>{
                setrecomendations(resp.data)
                console.log("hio")
                console.log(resp.data)
            }).catch(error=>{console.error(error);})
      
    })
return(
    <>
    <h1>рекомендации</h1>
    {
        recomendations.map((cartitem, index)=>
            <Carditem cartitem={cartitem} key={index} />
        )
    }
    </>
)
}
export default Recomendations