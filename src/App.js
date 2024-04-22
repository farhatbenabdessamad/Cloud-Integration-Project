import React from 'react';
import GoogleMapReact from 'google-map-react';
import './App.css';

const AnyReactComponent = ({ text }) => <div className="marker">{text}</div>;

function App() {
  const center = { lat: 59.95, lng: 30.33 };
  const zoom = 11;

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBcOAVBob-kK5KRxAMz4QqL6t91z0GqO-E' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <AnyReactComponent
          lat={center.lat}
          lng={center.lng}
        />
      </GoogleMapReact>
    </div>
  );
}

export default App;
