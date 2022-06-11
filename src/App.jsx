import { BrowserRouter,Routes,Route } from 'react-router-dom'; 
import './css/App.css';
import EventsPage from './pages/EventsPage';
import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/events" element={<EventsPage />} exact />
        <Route path="/team" element={<TeamPage />} exact />
        <Route path="/gallery" element={<GalleryPage />} exact />
        <Route path="/contact" element={<ContactPage />} exact />
        <Route path="/blog" element={<BlogPage />} exact />
        <Route path="/about" element={<AboutPage />} exact />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
