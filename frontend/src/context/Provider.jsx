import React, {useState} from "react";
import AppContext from "./AppContext";

const Provider = (props) => {

    const [showModal, setShowModal] = useState(false);
    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');
    const [showMessage, setShowMessage] = useState(false)


    return (
        <AppContext.Provider value={{
            showModal,
            setShowModal,
            lat,
            setLat,
            lng,
            setLng,
            showMessage,
            setShowMessage
            
            }}>
            {props.children}
        </AppContext.Provider>
    )

}

export default Provider;