import './App.css'
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { CreateStartupPage } from './pages/CreateStartupPage/CreateStartupPage';
import { MyStartupsPage } from './pages/MyStartupsPage/MyStartupsPage';
import { Header } from './components/Header/Header';

function App() {
  return (
    <>
     <Header />
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/create-startup" element={<CreateStartupPage />} />
      <Route path="/my-startups" element={<MyStartupsPage />} />
     </Routes>
    </>
    
  );
}

export default App;