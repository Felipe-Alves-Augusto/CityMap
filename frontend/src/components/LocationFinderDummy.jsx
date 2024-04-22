import React, { useContext } from "react";
import { useMapEvents } from "react-leaflet";
import ModalForm from "./ModalForm";
import AppContext from "../context/AppContext";


const LocationFinderDummy = (props) => {

    const {setShowModal, setLat, setLng, setShowMessage} = useContext(AppContext);

    useMapEvents({
        click(e) {
            console.log(e)
            setLat(e.latlng.lat);
            setLng(e.latlng.lng);
            
            setShowModal(true);
            setShowMessage(false);
            
        }
    });


    return (
        
        <ModalForm></ModalForm>
        
    )
};

export default LocationFinderDummy;