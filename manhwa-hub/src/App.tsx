import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Search from './pages/Search';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div className="flex h-screen w-screen bg-gray-100">
        <div className="w-[10%] h-full bg-white border-r border-gray-300">
          <NavBar />
        </div>

        <main className="w-[90%] h-full p-6 overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buscar" element={<Search />} />
            <Route path="/perfil" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
