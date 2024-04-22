import React from "react";
import { MapContainer, Popup, TileLayer, CircleMarker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import LocationFinderDummy from "./LocationFinderDummy";
import './css/Map.css'
import Aside from "./Aside";
import Message from "./Message";

const SimpleMap = ({ pointsOfInterest }) => {

    //handle de mouseover para abrir os popup do circle marker
    const handleMouseOver = (e) => {
      
        e.target.openPopup();
      
    }

    // handle de mouseout para fechar o popup circle marker
    const handleMouseOut = (e) => {
      e.target.closePopup();
    }
  
    return ( 

        <MapContainer  center={[-23.5603458, -46.6385071]} zoom={13} style={{ height: '100vh', width: '100vw' }}>
          
        <TileLayer  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {pointsOfInterest.map((poi, index) => (
          <>
              <>
              {poi.category == 'saude' &&
                <CircleMarker eventHandlers={{mouseover: handleMouseOver, mouseout: handleMouseOut}} fillOpacity={1.0}  center={[parseFloat(poi.lat), parseFloat(poi.lng)]} color='red' key={index}>
                  <Popup>
                    <div>
                      <h2 className="font-bold text-lg">{poi.point}</h2>
                      <p><strong>Endereço: </strong>{poi.address}</p>
                      <p><strong>Cordenadas: </strong> {poi.lat}, {poi.lng}</p>
                    </div>
                  </Popup>
                </CircleMarker>
              }


          </>

          <>
              {poi.category == 'tecnologia' &&
                <CircleMarker eventHandlers={{mouseover: handleMouseOver, mouseout: handleMouseOut}} fillOpacity={1.0} center={[parseFloat(poi.lat), parseFloat(poi.lng)]} color='blue' key={index}>
                  <Popup>
                    <div>
                      <h2 className="font-bold text-lg">{poi.point}</h2>
                      <p><strong>Endereço: </strong>{poi.address}</p>
                      <p><strong>Cordenadas: </strong> {poi.lat}, {poi.lng}</p>
                    </div>
                  </Popup>
                </CircleMarker>
              }


          </>

          <>
              {poi.category == 'servicos' &&
                <CircleMarker eventHandlers={{mouseover: handleMouseOver, mouseout: handleMouseOut}} fillOpacity={1.0} center={[parseFloat(poi.lat), parseFloat(poi.lng)]} color='yellow' key={index}>
                  <Popup>
                    <div>
                      <h2 className="font-bold text-lg">{poi.point}</h2>
                      <p><strong>Endereço: </strong>{poi.address}</p>
                      <p><strong>Cordenadas: </strong> {poi.lat}, {poi.lng}</p>
                    </div>
                  </Popup>
                </CircleMarker>
              }

          </>

          <>
              {poi.category == 'Alimentação' &&
                <CircleMarker eventHandlers={{mouseover: handleMouseOver, mouseout: handleMouseOut}} fillOpacity={1.0}  center={[parseFloat(poi.lat), parseFloat(poi.lng)]} color='lime' key={index}>
                  <Popup>
                    <div>
                      <h2 className="font-bold text-lg">{poi.point}</h2>
                      <p><strong>Endereço: </strong>{poi.address}</p>
                      <p><strong>Cordenadas: </strong> {poi.lat}, {poi.lng}</p>
                    </div>
                  </Popup>
                </CircleMarker>
              }

          </>

          <>
              {poi.category == 'distribuição' &&
                <CircleMarker eventHandlers={{mouseover: handleMouseOver, mouseout: handleMouseOut}} fillOpacity={1.0} center={[parseFloat(poi.lat), parseFloat(poi.lng)]} color='cyan' key={index}>
                  <Popup>
                    <div>
                      <h2 className="font-bold text-lg">{poi.point}</h2>
                      <p><strong>Endereço: </strong>{poi.address}</p>
                      <p><strong>Cordenadas: </strong> {poi.lat}, {poi.lng}</p>
                    </div>
                  </Popup>
                </CircleMarker>
              }

          </>

          <>
              {poi.category == 'outro' &&
                <CircleMarker eventHandlers={{mouseover: handleMouseOver, mouseout: handleMouseOut}} fillOpacity={1.0} center={[parseFloat(poi.lat), parseFloat(poi.lng)]} color='purple' key={index}>
                  <Popup>
                    <div>
                      <h2 className="font-bold text-lg">{poi.point}</h2>
                      <p><strong>Endereço: </strong>{poi.address}</p>
                      <p><strong>Cordenadas: </strong> {poi.lat}, {poi.lng}</p>
                    </div>
                  </Popup>
                </CircleMarker>
              }

          </>

          </>
 
        ))}


        <LocationFinderDummy></LocationFinderDummy>
        <Aside></Aside>
        <Message></Message>
      </MapContainer>
        
    );
  };
  
  export default SimpleMap;