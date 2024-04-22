import React from "react";
import './css/Aside.css'
import Category from "./Category";
import L from 'leaflet'

const Aside = () => {


    return (
        <div ref={(ref) => {
            if(!ref) return;
            L.DomEvent.disableClickPropagation(ref).disableScrollPropagation(ref);
            
        }} className="aside shadow-xl rounded-2xl px-4 py-4">
            <Category color="green" text="Alimentação"></Category>
            <Category color="blue" text="Tecnologia"></Category>
            <Category color="red" text="Saúde"></Category>
            <Category color="yellow" text="Serviços"></Category>
            <Category color="pink" text="Distribuição"></Category>
            <Category color="purple" text="Outro"></Category>
        </div>
    )


}

export default Aside;