import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/layout/NavigationBar';
import FormPage from './pages/FormPage';
import HomePage from './pages/HomePage';
import NvmTimingApp from './pages/nvm-timing/NvmTimingApp';
import './styles/App.css';


function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/nvm-timing/*" element={<NvmTimingApp />} />
      </Routes>
    </Router>
  );
}

export default App;
