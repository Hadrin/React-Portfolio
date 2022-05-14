import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Portfolio from './pages/portfolio';
import About from './pages/about';
import Contact from './pages/contact';

function App() {
  document.body.style = 'background: lightblue;';

  return (
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <div className="container" >
            <Header />
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </Router>
  );
}

export default App;
