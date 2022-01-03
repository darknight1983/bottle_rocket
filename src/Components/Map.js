import React, {useState} from 'react';
import MapGL, {Marker} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import PinDropIcon from '@mui/icons-material/PinDrop';
import styled from "styled-components";


// This is the apiKey for MapBox
const MapBoxApiKey = `pk.eyJ1IjoiZ2phY29sYnk4MyIsImEiOiJja3hmOGNjOHAyaDV0MnVxaHZicDRzZHpuIn0.z0UevKyN3bN_w5F7rERIVg`;

const StyledPin = styled(PinDropIcon)`
    color: crimson;
`;

const Map = ({ lat, lng}) => {
    const [viewPort, setViewPort] = useState({
        zoom: 8,
        width: '100vw',
        height: "100%"
    });

    const onMapLoad = event => console.log(event);

    return (
        <MapGL
            {...viewPort}
            latitude={lat}
            longitude={lng}
            mapboxApiAccessToken={MapBoxApiKey}
            mapStyle="mapbox://styles/mapbox/dark-v9"
            onViewportChange={setViewPort}
            onLoad={onMapLoad}
        >
            <Marker latitude={lat} longitude={lng} offsetLeft={-20} offsetTop={-10}>
                <StyledPin fontSize={'medium'}/>
            </Marker>
        </MapGL>

    )
};

export default Map;
