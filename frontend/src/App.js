import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddWord from './pages/AddWord';
import Dictionary from './pages/Dictionary';
import Feed from './pages/Feed';
import Profile from './pages/Profile';
import Notifications from './pages/Notifications';
import WordDetail from './pages/WordDetail';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddWord />} />
        <Route path="/dictionary" element={<Dictionary />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/word/:id" element={<WordDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
