import React, { useEffect, useState } from 'react'
import './App.css'
import SimpleMap from './components/Map'
import ModalForm from './components/ModalForm';
import Provider from './context/Provider';
import axios from 'axios';



function App() {


  const [pointsOfInterest, setPointsOfInterest] = useState([]);


    //pegando os dados do back-end postgresql e passando via props
    useEffect(() => {

        axios.get('http://127.0.0.1:8000/api/pontosInteresse')
          .then((response) => {
              
              setPointsOfInterest(response.data);
          }).catch((error) => {
            console.log('não foi possível trazer os dados', error)
          })

    }, [pointsOfInterest])


  return (
      <Provider>
        <SimpleMap pointsOfInterest={pointsOfInterest}></SimpleMap>
      </Provider>
    
  )
}

export default App
