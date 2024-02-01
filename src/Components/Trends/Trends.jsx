import React, {  useEffect, useState } from "react";
import Carditem from "../Carditem";
import axios from "axios";

function Trends() {

    const [trends, settrends] = useState([
    { title: 'abcd', body: 'eghd', image: 'Component2.png', },
    { title: 'jkh', body: 'ljh', image: 'Component2.png', },
    { title: 'zxcv', body: 'qwe', image: 'Component2.png', }
    ])
   
        async function fetch(){
     const  resp=await axios.get( "https://www.anapioficeandfire.com/api/books?pageSize=30")
       console.log(resp.data)
        }
 
    return (
        
        <div className="name">
            
            <h1>тренды</h1>
            
        { trends.map((cartitem, index) =>
            <Carditem cartitem={cartitem} key={index} />
        
        )
}
        </div>
    )
}
export default Trends;