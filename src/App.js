import React, { useState, useEffect } from 'react';
import Gallery from './components/Gallery';

import './App.css';
import { deserialize, save, remove, UUID } from './helpers.js';

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(deserialize());
  }, []);

  const upload = files => {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.addEventListener(
        'load',
        function() {
          let uuid = UUID();
          save(uuid, reader.result);
          setImages(deserialize());
        },
        false,
      );
    }
  };

  const openFileSelect = () => {
    const fileElem = document.getElementById('file-upload');
    fileElem.click();
  };

  const handleRemove = uuid => {
    remove(uuid);
    setImages(deserialize());
  };

  return (
    <div className="container">
      <header className="App-header">
        <div className="upload-btn-wrapper">
          <button href="#" id="upload" className="btn" onClick={openFileSelect}>
            Upload Images
          </button>
          <input
            type="file"
            name="file-upload"
            id="file-upload"
            multiple
            accept="image/*"
            style={{ display: 'none' }}
            onChange={e => upload(e.target.files)}
          />
        </div>
      </header>
      <Gallery images={images} handleRemove={handleRemove} />
    </div>
  );
}

export default App;
