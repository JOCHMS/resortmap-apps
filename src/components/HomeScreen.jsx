import React from 'react';
import L from 'leaflet';

const HomeScreen = () => {
  const [map, setMap] = React.useState(null);

  React.useEffect(() => {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          if (map) {
            L.marker([position.coords.latitude, position.coords.longitude]).addTo(map).bindPopup('Your location').openPopup();
          }
        },
        (error) => console.error('Error:', error)
      );
    }
  }, [map]);

  return (
    <div className="home-screen">
      <h1>Resort Navigation</h1>
      <div id="map" style={{ height: '600px', width: '100%' }}></div>
    </div>
  );
};

export default HomeScreen;
