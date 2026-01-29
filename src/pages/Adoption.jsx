import React, { useState } from 'react';
import PetCard from '../components/PetCard';
import './Adoption.css';

const Adoption = () => {
  const initialPets = [
  { id: 1, name: 'Bella', breed: 'Golden Retriever', age: 3, gender: 'Female', image: '/goldenRet.webp' },
  { id: 2, name: 'Max', breed: 'Beagle', age: 2, gender: 'Male', image: '/beagle.webp' },
  { id: 3, name: 'Luna', breed: 'Labrador', age: 4, gender: 'Female', image: '/lab.jpeg' },
  { id: 4, name: 'Charlie', breed: 'Cocker Spaniel', age: 5, gender: 'Male', image: '/spaniel.jpeg' },
  { id: 5, name: 'Lucy', breed: 'Pomaranian', age: 1, gender: 'Female', image: '/pomo.jpeg' },
  { id: 6, name: 'Cooper', breed: 'German Shepherd', age: 3, gender: 'Male', image: '/german.jpeg' },
  { id: 7, name: 'Daisy', breed: 'Boxer', age: 2, gender: 'Female', image: '/boxer.jpeg' },
  { id: 8, name: 'Rocky', breed: 'French Bulldog', age: 6, gender: 'Male', image: '/french.jpeg' },
  { id: 9, name: 'Molly', breed: 'Pug', age: 1, gender: 'Female', image: '/pug.jpeg' },
  { id: 10, name: 'Buddy', breed: 'Dalmatian', age: 4, gender: 'Male', image: '/dalmatian2.jpeg' },
  { id: 11, name: 'Sadie', breed: 'Shih Tzu', age: 3, gender: 'Female', image: '/shih.jpeg' },
  { id: 12, name: 'Jack', breed: 'Country', age: 5, gender: 'Male', image: '/country2.jpeg' },
];


  const [adoptedStatus, setAdoptedStatus] = useState({}); // Track adoption by ID

  const handleAdopt = (id, name) => {
    const pickupDate = prompt(`Enter pickup date for ${name} (YYYY-MM-DD):`);
    if (!pickupDate || !/^\d{4}-\d{2}-\d{2}$/.test(pickupDate)) {
      alert('Invalid date format! Adoption cancelled.');
      return;
    }

    setAdoptedStatus((prev) => ({
      ...prev,
      [id]: pickupDate,
    }));

    alert(`🎉 ${name} adopted!\n📅 Pickup Date: ${pickupDate}`);
  };

  return (
    <div className="adoption-page">
      <h1>Pets Available for Adoption</h1>
      <div className="pet-list">
        {initialPets.map((pet) => (
          <PetCard
            key={pet.id}
            pet={pet}
            isAdopted={!!adoptedStatus[pet.id]}
            pickupDate={adoptedStatus[pet.id]}
            onAdopt={() => handleAdopt(pet.id, pet.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default Adoption;
