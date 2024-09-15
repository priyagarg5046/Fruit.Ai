import React, { useState } from "react";


const Translator = () => {
    const [inputText, setInputText] = useState('');
    const [translatedText, setTranslatedText] = useState('');
  
    const handleTranslate = () => {
      // Placeholder logic for translation
      setTranslatedText(`Translated: ${inputText}`);
    };
  
    return (
      <div>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter text to translate"
        />
        <button onClick={handleTranslate}>Translate</button>
        {translatedText && <p>{translatedText}</p>}
      </div>
    );
  };
  
  export default Translator;