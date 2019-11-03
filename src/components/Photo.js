import React from 'react';
import ModalImage from 'react-modal-image';

function Photo({ image, handleRemove }) {
  const handleClick = () => {
    handleRemove(image.uuid);
  };
  return (
    <div className="image-item">
      <ModalImage small={image.src} medium={image.src} hideDownload={true} />
      <div className="top-right">
        <button
          className="delete-image"
          data-uuid={image.uuid}
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-trash-2"
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Photo;
