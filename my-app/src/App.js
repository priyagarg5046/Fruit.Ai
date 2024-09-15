import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Chatbot from './components/Chatbot';
import Translator from './components/Translator';
import FAQ from './components/FAQ';
import About from './components/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chatbot" element={<Chatbot/>} />
        <Route path="/translator" element={<Translator/>} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
  );
}

export default App;