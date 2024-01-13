/*import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Location {
  id: number;
  city_name: string;
  latitude: number;
  longitude: number;
}

const SavedLocations: React.FC = () => {
  const [savedLocations, setSavedLocations] = useState<Location[]>([]);

  useEffect(() => {
    const fetchSavedLocations = async () => {
        try {
          const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6ImRpZGlkaWRpIn0.jsCY7oZoLSDzIP_ptI44AWnFq44tWAGIya5OrxbokTo'; // Replace with your actual token
          const response = await axios.get<Location[]>('saved-locations', {
            headers: { Authorization: `Bearer ${token}` },
          });
          console.log('Response:', response);
          console.log('Data:', response.data);
          setSavedLocations(response.data);
        } catch (error) {
          console.error('Error fetching saved locations:', error);
          
        }
      };

    fetchSavedLocations();
  }, []);

  return (
    <div>
      <h2>Saved Locations</h2>
      <ul>
        {savedLocations.map((location) => (
          <li key={location.id}>
            {location.city_name} - Latitude: {location.latitude}, Longitude: {location.longitude}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedLocations;*/
