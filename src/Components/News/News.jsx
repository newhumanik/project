import { useEffect, useState } from "react";
import Carditem from "../Carditem";
import axios from "axios";
function News(){
    const [news,setnews]=useState([
        { title: 'abcd', body: 'eghd', image: 'Component2.png', },
        { title: 'jkh', body: 'ljh', image: 'Component2.png', },
        { title: 'zxcv', body: 'qwe', image: 'Component2.png', }])
        
        useEffect(()=>{
           
                axios.get( "https://www.anapioficeandfire.com/api/books?pageSize=30").then((resp)=>{
                    setnews(resp.data)
                    console.log("hio")
                    console.log(resp.data)
                }).catch(error=>{console.error(error);})
           
        })
        return (
            <>
            <h1>новости</h1>
            {news.map((cartitem,index)=>
                <Carditem cartitem={cartitem} key={index}/>

            )}
            </>
        )
   
}
export default News