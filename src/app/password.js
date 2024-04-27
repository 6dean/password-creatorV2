"use client";
import { React, useState } from "react";
import "./reset.css";
import "./styles.css";

export default function PasswordPage() {
  const [longer, setLonger] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [specials, setSpecials] = useState(false);
  const [password, setPassword] = useState("");

  const submitLonger = (event) => {
    setLonger(event.target.value);
  };

  const submitNumbers = () => {
    setNumbers(!numbers);
  };

  const submitSpecials = () => {
    setSpecials(!specials);
  };

  const functionPass = () => {
    if (numbers && specials) {
      const generatePassword = () => {
        const characters =
          "A1B2C3D4E5F6G7H8I9J0K!L#M$N%O&P*Q+R<S=T>U?V@W{X}Y~Zabcdefghijklmnopqrstuvwxyz";

        let result = "";
        for (let i = 0; i < longer; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          result += characters[randomIndex];
        }
        return setPassword(result);
      };
      generatePassword();
    }

    if (specials && !numbers) {
      const generatePassword = () => {
        const characters =
          "ABCDEFGHIJK!L#M$N%O&P*Q+R<S=T>U?V@W{X}Y~Zabcdefghijklmnopqrstuvwxyz";

        let result = "";
        for (let i = 0; i < longer; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          result += characters[randomIndex];
        }
        return setPassword(result);
      };
      generatePassword();
    }
    if (!specials && numbers) {
      const generatePassword = () => {
        const characters =
          "A1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6Q7R8S9T0U1V2W3X4Y5Z6abcdefghijklmnopqrstuvwxyz1234567890";

        let result = "";
        for (let i = 0; i < longer; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          result += characters[randomIndex];
        }
        return setPassword(result);
      };
      generatePassword();
    } else if (!specials && !numbers) {
      const generatePassword = () => {
        const characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        let result = "";
        for (let i = 0; i < longer; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          result += characters[randomIndex];
        }
        return setPassword(result);
      };
      generatePassword();
    }
  };

  return (
    <div className="box">
      <div className="element-choice">
        <div>{longer == 32 ? "Custom length (Maximum)" : "Custom length"}</div>
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
      <div className="element-choice">
        <div>Add numbers</div>
        <div>
          <input type="checkbox" checked={numbers} onChange={submitNumbers} />
        </div>
      </div>
      <div className="element-choice">
        <div>Add special characters</div>
        <div>
          <input type="checkbox" checked={specials} onChange={submitSpecials} />
        </div>
      </div>
      <div className="element-button">
        <input type="button" value="Generate" onClick={functionPass} />
      </div>
      <div className="box-password">
        <div className="password-style">
          {password ? password : "Create your password"}
        </div>
      </div>
    </div>
  );
}
