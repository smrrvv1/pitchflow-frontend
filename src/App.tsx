import './App.css'
import { Routes, Route  } from '../node_modules/react-router/dist/development/index';
import { HomePage } from './pages/HomePage/HomePage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { CreateStartupPage } from './pages/CreateStartupPage/CreateStartupPage';
import { MyStartupsPage } from './pages/MyStartupsPage/MyStartupsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/create-startup" element={<CreateStartupPage />} />
      <Route path="/my-startups" element={<MyStartupsPage />} />
    </Routes>
  );
}

export default App;