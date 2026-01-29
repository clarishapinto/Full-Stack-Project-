import React from 'react';
import './PetCard.css';

const PetCard = ({ pet, isAdopted, pickupDate, onAdopt }) => {
  return (
    <div className={`pet-card ${isAdopted ? 'adopted' : ''}`}>
      <img src={pet.image} alt={pet.name} className="pet-image" />
      <h3>{pet.name}</h3>
      <p>Breed: {pet.breed}</p>
      <p>Age: {pet.age} years</p>
      <p>Gender: {pet.gender}</p>
      {isAdopted ? (
        <p className="pickup-msg">✅ Adopted - Pickup on: {pickupDate}</p>
      ) : (
        <button className="adopt-button" onClick={onAdopt}>
          Adopt
        </button>
      )}
    </div>
  );
};

export default PetCard;
