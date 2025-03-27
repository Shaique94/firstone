import React, { useState } from 'react';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState(null);

  let handleSearch=(event)=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={your_api_id}&units=metric`)
    .then((response) => response.json()) 
    .then((finalresponse)=>{
      console.log(finalresponse)
      setTemperature(finalresponse.main.temp)
    })
    event.preventDefault();

  }


  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f3f4f6' }}>
      <div style={{ width: '100%', maxWidth: '400px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', padding: '20px' }}>
        <div style={{ display: 'flex', marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            style={{ flex: 1, padding: '10px', marginRight: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          <button 
            onClick={handleSearch} 
            style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Search
          </button>
        </div>

        {temperature && (
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '32px', margin: '10px 0' }}>{temperature}</h1>
            <p style={{ fontSize: '18px', color: '#555' }}>{city}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
