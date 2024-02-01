import React from "react";
function Carditem(props){
    return(
        <div id={props.key}>
<div style={{width: '100%', height: '100%', position: 'relative', borderRadius: 20.13, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
    <img src={props.cartitem.image} alt=""/>
    <div style={{width: 279.64, height: 121.35, background: 'linear-gradient(357deg, black 0%, rgba(0, 0, 0, 0) 100%)', borderRadius: 15.86}} />
    <div style={{width: 219.10, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.07, display: 'inline-flex'}}>
        <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 7.30, display: 'flex'}}>
            <div style={{paddingLeft: 13.22, paddingRight: 13.22, paddingTop: 4.41, paddingBottom: 4.41, background: 'rgba(0, 0, 0, 0.54)', borderRadius: 70.48, overflow: 'hidden', border: '1.10px white solid', backdropFilter: 'blur(11.78px)', justifyContent: 'center', alignItems: 'center', gap: 11.01, display: 'flex'}}>
                <div style={{width: 8.10, height: 8.10, background: '#28F524', borderRadius: 9999}} />
                <div style={{color: 'white', fontSize: 14.09, fontFamily: 'Proxima Nova', fontWeight: '400', wordWrap: 'break-word'}}>Смотрю</div>
            </div>
        </div>
        <div style={{paddingLeft: 13.22, paddingRight: 13.22, paddingTop: 4.41, paddingBottom: 4.41, background: 'rgba(0, 0, 0, 0.54)', borderRadius: 70.48, overflow: 'hidden', border: '1.10px white solid', backdropFilter: 'blur(37.32px)', justifyContent: 'center', alignItems: 'center', gap: 11.01, display: 'flex'}}>
            <div style={{color: 'white', fontSize: 14.09, fontFamily: 'Proxima Nova', fontWeight: '400', wordWrap: 'break-word'}}>9.6</div>
        </div>
    </div>
</div>
    {props.cartitem.title}
    {props.cartitem.body}
    
            </div>
    )
}
export default Carditem;