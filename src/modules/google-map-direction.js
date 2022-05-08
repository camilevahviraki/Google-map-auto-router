import React from "react";
import GoogleMapReact from 'google-map-react';
import googleMapReact from "google-map-react";

const markers = [
  { text: 'school',
    lat: -1.932114,
    lng: 30.082111
  },
  { text: 'school1',
    lat: -1.933114,
    lng: 30.082111
  },
  { text: 'school2',
    lat: -1.934114,
    lng: 30.082111
  },
  { text: 'school3',
    lat: -1.935114,
    lng: 30.082111
  },
  { text: 'school4',
    lat: -1.936114,
    lng: 30.082111
  }
];

const AnyReactComponent = ({ text }) => <div className="marker">{text}</div>;


export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: -1.935114,
      lng: 30.082111
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {markers.map(marker =>   
        <AnyReactComponent
          lat={marker.lat}
          lng={marker.lng}
          text={marker.text}
        />
        )}

      </GoogleMapReact>
    </div>
  );
}