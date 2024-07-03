// src/components/PokemonCard.tsx

import React from 'react';

export interface PokemonCardProps {
  name: string;
  id: number;
  image: string;
  type: string;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({
  name,
  id,
  image,
  type,
}) => {
  return (
    <div className="rounded overflow-hidden shadow-lg bg-white min-w-80 p-4">
      <div className="font-bold capitaliz mb-2">Pokedex {`#${id}`}</div>
      <div className="bg-slate-600 rounded-sm">
        <img
          className="w-full max-w-72 fit object-contain"
          src={image}
          alt={name}
        />
      </div>
      <div className="pt-4 flex flex-col gap-2">
        <div className="font-bold text-xl capitalize">{name}</div>
        <div className="font-bold mb-2 text-sm w-full capitalize">
          {type} Type
        </div>
      </div>
    </div>
  );
};
