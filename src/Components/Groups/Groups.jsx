import { useEffect, useState } from "react";
import Carditem from "../Carditem";
import axios from "axios";
function Groups(){
    const [groups,setgroups]=useState([
        { title: 'abcd', body: 'eghd', image: 'Component2.png', },
        { title: 'jkh', body: 'ljh', image: 'Component2.png', },
        { title: 'zxcv', body: 'qwe', image: 'Component2.png', }])
        useEffect(()=>{
                axios.get( "https://www.anapioficeandfire.com/api/books?pageSize=30").then((resp)=>{
                    setgroups(resp.data)
                    console.log("hio")
                    console.log(resp.data)
                }).catch(error=>{console.error(error);})
          
        })
        return(
            <>
            <h1>Популярные группы</h1>
            {
                groups.map(
                    (cartitem,index)=>
                    <Carditem cartitem={cartitem} key={index}/>
                )}
            </>
        )
}
export default Groups