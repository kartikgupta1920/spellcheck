import React, { useState } from 'react';
import './SpellCheck.css';

const customDictionary = {
  teh: 'the',
  wrok: 'work',
  fot: 'for',
  exampl: 'example',
};

const SpellCheck = () => {
  const [inputText, setInputText] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setInputText(value);
    checkSpelling(value);
  };

  const checkSpelling = (text) => {
    const words = text.split(' ');
    for (let i = 0; i < words.length; i++) {
      const word = words[i].toLowerCase();
      if (customDictionary[word]) {
        setSuggestion(`Did you mean: ${customDictionary[word]}?`);
        return;
      }
    }
    setSuggestion('');
  };

  return (
    <div className="spell-check-container">
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        value={inputText}
        onChange={handleChange}
        placeholder="Enter text..."
      />
      {suggestion && <p>{suggestion}</p>}
    </div>
  );
};

export default SpellCheck;
