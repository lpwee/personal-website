import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavigationBar from './components/layout/NavigationBar';
import FormPage from './pages/FormPage';
import HomePage from './pages/HomePage';
import './styles/App.css';


function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/resume" element={<Navigate to="/resume/LooPingWee_Resume_Dec24.pdf" />} />
      </Routes>
    </Router>
  );
}

export default App;
