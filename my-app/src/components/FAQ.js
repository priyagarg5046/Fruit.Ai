import React from 'react';
import './FAQ.css';

const faqs = [
  {
    id: 1,
    title: "How is Tangerine healthy?",
    description: "Tangerine are a great health booster due to their high vitamin C content, which supports the immune system and skin health.",
    imageUrl: "tangerine-image.png" // Add the actual image path or URL here
  },
  {
    id: 2,
    title: "How is Tangerine healthy?",
    description: "Tangerine are a great health booster due to their high vitamin C content, which supports the immune system and skin health.",
    imageUrl: "tangerine-image.png"
  },
  {
    id: 3,
    title: "How is Tangerine healthy?",
    description: "Tangerine are a great health booster due to their high vitamin C content, which supports the immune system and skin health.",
    imageUrl: "tangerine-image.png"
  },
  {
    id: 4,
    title: "How is Tangerine healthy?",
    description: "Tangerine are a great health booster due to their high vitamin C content, which supports the immune system and skin health.",
    imageUrl: "tangerine-image.png"
  }
];

const FAQ = () => {
  return (
    <div className="faq-container">
      <h1 className="faq-title">FAQ Section</h1>
      {faqs.map(faq => (
        <div className="faq-card" key={faq.id}>
          <img src={faq.imageUrl} alt="Tangerine" className="faq-image" />
          <div className="faq-content">
            <h2 className="faq-question">{faq.title}</h2>
            <p className="faq-answer">{faq.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
