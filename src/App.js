import React, { useState, useEffect } from 'react';
import MarsPhoto from './component/MarsPhoto';
import './App.css';

const App = () => {
  const [photos, setPhotos] = useState([]);

  
  useEffect(() => {
    fetchMarsPhotos();
  }, []);

  const fetchMarsPhotos = async () => {

      const apiKey = process.env.REACT_APP_NASA_API_KEY;
      const response = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiKey}`
      );
      
      const data = await response.json();
      setPhotos(data.photos);
  };

  return (
    <div className="App">
      <h1>Mars Photos</h1>
      <div className='photoWrap'>
         {photos.map((photo) => (
          <MarsPhoto key={photo.id} photo={photo} />
          ))}
      </div>
    </div>
  ); 
};

export default App;
 
