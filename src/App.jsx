import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import List from './pages/List'
import Search from './pages/Search'
import Home from './pages/Home'
import HandyConnectPage from './pages/OnboardingPage'
import Notification from './pages/Notification'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import OnboardingPage from "./pages/OnboardingPage";

function App() {
  return (
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<List />} />
            <Route path="/search" element={<Search />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
  )
}

export default App
