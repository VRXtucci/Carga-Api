import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, useParams } from 'react-router-dom';
import './App.css';

const API_URL = 'https://jsonplaceholder.typicode.com';

function PhotoData() {
  const { photoId } = useParams();
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    async function fetchPhoto() {
      const response = await fetch(`${API_URL}/photos/${photoId}`);
      const photoData = await response.json();
      setPhoto(photoData);
    }
    fetchPhoto();
  }, [photoId]);

  return (
    <div>
      <h2>Photo Details</h2>
      {photo && (
        <div>
          <p>Title: {photo.title}</p>
          <img src={photo.url} alt={photo.title} />
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/photos/1">Photo 1</Link>
            </li>
            <li>
              <Link to="/photos/2">Photo 2</Link>
            </li>
            {/* Add more links for other photos */}
          </ul>
        </nav>

        <Route path="/photos/:photoId" component={PhotoData} />
      </div>
    </Router>
  );
}

export default App;
