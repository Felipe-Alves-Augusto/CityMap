import React, { useContext, useEffect, useRef, useState } from "react";
import './css/ModalForm.css'
import FormGroup from "./FormGroup";
import L from 'leaflet';
import axios from "axios";
import AppContext from "../context/AppContext";
import Loading from "./Loading";


const ModalForm = () => {


    const {showModal, lat, setLat, lng, setLng, setShowMessage, setShowModal} = useContext(AppContext);
    const [pointInterest, setPointInterest] = useState('');
    const [address, setAdrress] = useState('');
    const [category, setCategory] = useState('Alimentação');
    const [loading, setLoading] = useState(false);
    
    
    const handleInputPoint = (e) => {

        setPointInterest(e);
        
    };

    const handleInputAddress = (e) => {
        setAdrress(e);
    }

    const handleInputLat = (e) => {
        setLat(e);
    }

    const handleInputLng = (e) => {
        setLng(e);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/pontosInteresse', {

                point: pointInterest,
                address: address,
                lat: lat,
                lng: lng,
                category: category

            });

            setShowMessage(true);
            setLoading(false);
            setShowModal(false);

            setPointInterest('');
            setAdrress('');
            setCategory('Alimentação');

        } catch (error) {
            console.log('Erro ao criar o ponto de interesse', error);
        }

    }

    
    return (

       <>
            {showModal && 
                <div ref={(ref) =>{
                    if(!ref) return;
                    L.DomEvent.disableClickPropagation(ref).disableScrollPropagation(ref);

                }} className="modal shadow-lg">
                    <div className="btn-close">
                        <button onClick={handleCloseModal} className=" text-danger text-white border-2 border-white transition ease-in float-right hover:border-2 border-rose-600">
                        <svg fill="#333" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                        </button>
                    </div>
                    <form className="clear-both" onSubmit={handleSubmit}>
                        <FormGroup 
                        label="Ponto de Interesse"
                        name="point"
                        onChange={handleInputPoint}
                        
                        value={pointInterest}></FormGroup>

                        <FormGroup 
                        label="Endereço"
                        name="address"
                        onChange={handleInputAddress}
                        
                        value={address}></FormGroup>

                        <FormGroup 
                        label="Latitude"
                        name="lat"
                        onChange={handleInputLat}
                        value={lat}
                        disabled={true}
                        class="disabled"
                        
                        ></FormGroup>

                        <FormGroup 
                        label="Longitude"
                        name="lng"
                        onChange={handleInputLng}
                        disabled={true}
                        class="disabled"
                        value={lng}></FormGroup>


                        <div class="form-group">
                            <label className="block text-sm font-medium leading-6 text-gray-900">Categorias</label>
                            <select name="category" onChange={(e) => setCategory(e.target.value)} value={category} className="block w-full rounded-md border-0 py-2.5 pl-5 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                <option selected value="alimentacao">Alimentação</option>
                                <option value="tecnologia">Tecnologia</option>
                                <option value="saude">Saúde</option>
                                <option value="servicos">Serviços</option>
                                <option value="distribuição">Distribuição</option>
                                <option value="outro">Outro</option>
                            </select>

                        </div>

                        <div className="footer-form">
                            <button type="submit" className="border-0 mt-4 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Salvar</button>
                            {loading &&
                                <Loading></Loading>
                            }
                        </div>
                    </form>
                    
                </div>
            }
       </>
    )

    
}


export default ModalForm