import React, { useState, useEffect } from "react";
import axios from "axios";

const FAQForm = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [faqs, setFaqs] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch all FAQs when component mounts
    axios
      .get("http://localhost:5000/faqs")
      .then((response) => setFaqs(response.data))
      .catch((error) => console.error("Error fetching FAQs:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question || !answer) {
      setError("Both question and answer are required.");
      return;
    }

    // Submit FAQ to Flask API
    axios
      .post("http://localhost:5000/faqs", { question, answer })
      .then((response) => {
        setFaqs([...faqs, response.data]);
        setQuestion("");
        setAnswer("");
        setError("");
      })
      .catch((error) => console.error("Error adding FAQ:", error));
  };

  return (
    <div>
      <h2>Add FAQ</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Question:</label>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Enter question"
            required
          />
        </div>
        <div>
          <label>Answer:</label>
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Enter answer"
            required
          />
        </div>
        <button type="submit">Add FAQ</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>

      <h2>Existing FAQs</h2>
      <ul>
        {faqs.length > 0 ? (
          faqs.map((faq) => (
            <li key={faq.id}>
              <strong>Q:</strong> {faq.question} <br />
              <strong>A:</strong> {faq.answer}
            </li>
          ))
        ) : (
          <p>No FAQs available.</p>
        )}
      </ul>
    </div>
  );
};

export default FAQForm;