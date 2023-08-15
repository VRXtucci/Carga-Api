import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, useParams, Routes, Outlet } from 'react-router-dom';
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
            <li>
              <Link to="/photos/20">Photo 20</Link>
            </li>
            <li>
              <Link to="/photos/25">Photo 25</Link>
            </li>
            <li>
              <Link to="/photos/30">Photo 30</Link>
            </li>
            <li>
              <Link to="/photos/35">Photo 35</Link>
            </li>
            <li>
              <Link to="/photos/40">Photo 40</Link>
            </li>
            <li>
              <Link to="/photos/45">Photo 45</Link>
            </li>
            <li>
              <Link to="/photos/50">Photo 50</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/photos/:photoId" element={<PhotoData />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
