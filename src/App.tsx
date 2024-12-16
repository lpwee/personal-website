import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavigationBar from './NavigationBar'
import FormPage from './FormPage'
import './App.css'

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={
          <main className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-6">Welcome</h1>
            <p>Welcome to my personal website. Feel free to explore!</p>
          </main>
        } />
        <Route path="/form" element={<FormPage />} />
        <Route path="/docs" element={
          <main className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-6">Documentation</h1>
            <p>Documentation content coming soon...</p>
          </main>
        } />
        <Route path="/examples" element={
          <main className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-6">Examples</h1>
            <p>Examples content coming soon...</p>
          </main>
        } />
        <Route path="/blog" element={
          <main className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-6">Blog</h1>
            <p>Blog content coming soon...</p>
          </main>
        } />
      </Routes>
    </Router>
  )
}

export default App
