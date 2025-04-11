import { Routes, Route, Navigate } from 'react-router-dom';
import '../../styles/nvm-timing.css';
import StartPoint from './StartPoint';
import EndPoint from './EndPoint';
import Results from './Results';

function NvmTimingApp() {
  return (
    <div className="nvm-timing-app">
      <Routes>
        <Route path="start-point" element={<StartPoint />} />
        <Route path="end-point" element={<EndPoint />} />
        <Route path="results" element={<Results />} />
        <Route path="" element={<Navigate to="start-point" replace />} />
      </Routes>
    </div>
  );
}

export default NvmTimingApp;
