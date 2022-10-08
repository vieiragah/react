import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';
import Company from './Components/Pages/Company';
import NewProject from './Components/Pages/NewProject';
import Projects from './Components/Pages/Projects';


import Container from './Components/Pages/layout/Container';
import NavBar from './Components/Pages/layout/NavBar'
import Footer from './Components/Pages/layout/Footer'

function App() {
  return (
    <Router>
      <NavBar/>
      <Container customClass="min-heigth">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/company" element={<Company/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/newproject" element={<NewProject/>}/>
      </Routes>
      </Container>
      <Footer/>
    </Router>
  )
}

export default App;
