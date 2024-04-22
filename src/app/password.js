"use client";
import { React, useState } from "react";

export default function PasswordPage() {
  const [longer, setLonger] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [letters, setLetters] = useState(false);
  const [specials, setSpecials] = useState(false);

  const submitLonger = (event) => {
    setLonger(event.target.value);
  };

  const submitNumbers = () => {
    setNumbers(!numbers);
  };

  const submitLetters = () => {
    setLetters(!letters);
  };

  const submitSpecials = () => {
    setSpecials(!specials);
  };

  console.log(numbers, letters, specials);

  return (
    <div>
      <div>
        <div>Nombre de caractères Max 32</div>
        <div>
          <input
            onChange={submitLonger}
            value={longer}
            type="number"
            min="8"
            max="32"
          />
        </div>
      </div>
      <div>
        <div>Mettre des chiffres</div>
        <div>
          <input type="checkbox" checked={numbers} onChange={submitNumbers} />
        </div>
      </div>
      <div>
        <div>Mettre des lettres</div>
        <div>
          <input type="checkbox" checked={letters} onChange={submitLetters} />
        </div>
      </div>
      <div>
        <div>Mettre des caractères spéciaux</div>
        <div>
          <input type="checkbox" checked={specials} onChange={submitSpecials} />
        </div>
      </div>
    </div>
  );
}
