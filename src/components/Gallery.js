import React from 'react';
import Photo from './Photo';

function Gallery({ images, handleRemove }) {
  return (
    <>
      <div className="image-grid">
        {images.map((image, index) => (
          <Photo image={image} handleRemove={handleRemove} key={index} />
        ))}
      </div>
    </>
  );
}

export default Gallery;
