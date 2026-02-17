import React, { useEffect } from 'react';
import './Project.css'

const Project = ({ open, onClose, title, description, link, image }) => {

  useEffect(() => {
    if (open) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [open]);

  if (!open) return null;

  return (
    <div onClick={onClose} className='overlay'>
      <div onClick={(e) => {e.stopPropagation();}} className='modal-container' >
        <i className = 'material-icons close-btn' onClick={onClose}>close</i>
        <div className='project-content'>
          <h1>{title}</h1>
          <p>{description}</p>

          <a href={ link } target="_blank" rel="noopener noreferrer">
            <img src={image}/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;