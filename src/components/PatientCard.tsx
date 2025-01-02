import React from 'react';

export interface Patient {
  id: number;
  picture: string;
  name: string;
  age: number;
  diagnose: string;
  link: string;
}

const PatientCard: React.FC<Patient> = ({ id, picture, name, age, diagnose, link }) => {
  return (
    <div className="card cell" data-testid={`card-${id}`} style={{height: "300px"}}>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img data-testid={`card-${id}-img`} src={picture} alt="Placeholder" style={{borderRadius: '50%'}} />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4" data-testid={`card-${id}-title`} >{name} ({age})</p>
          </div>
        </div>

        <div className="content">
          <p data-testid={`card-${id}-content`} style={{maxHeight: "90px", overflow: "auto"}}><strong>Diagnóstico:</strong> {diagnose}</p>
          <br />
          <button data-testid={`card-${id}-button`} onClick={(e) => {
            e.preventDefault();
            window.open(link, '_blank', 'noopener');
          }} className="button is-primary">
            Más detalles
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientCard;