import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import InitiativesPage from './pages/Initiatives';
import GazraCafe from './pages/GazraCafe';
import EventsPage from './pages/Events';
import VolunteerPage from './pages/Volunteer';
import Gallery from './pages/Gallery';
import ContactPage from './pages/Contact';
import MenuCard from './components/shared/MenuCard';
import EventCalendarPage from './pages/EventCalendarPage';
import GazraSupportFund from './pages/GazraSupportFung';
import GazraSkills from './pages/GazraSkills';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/initiatives" element={<InitiativesPage />} />
          <Route path="/cafe" element={<GazraCafe />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/volunteer" element={<VolunteerPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/Menu" element={<MenuCard />} />
          <Route path="/calendar" element={<EventCalendarPage />} />
          <Route path="/gazra-support" element={<GazraSupportFund />} />
          <Route path="/gazra-skills" element={<GazraSkills />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;