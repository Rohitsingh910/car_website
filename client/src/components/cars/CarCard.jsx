import React from 'react';

const CarCard = ({ car }) => {
  return (
    <div className="border p-4 rounded shadow-lg">
      <img src={car.image} alt={car.name} className="w-full h-48 object-cover mb-4" />
      <h3 className="text-xl font-semibold">{car.name}</h3>
      <p>{car.description}</p>
    </div>
  );
}

export default CarCard;
