import {  Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import './styles/Pages.css';
import Admissions from "./pages/Admissions";
<<<<<<< HEAD
import ChatbotComponent from "./components/Chatbot/ChatbotComponent";
=======
>>>>>>> c646e82d7b740eb9be189f7c044e9bf2d310aa64

const App = ()=>{
  return(
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/home" element={ <HomePage/>} />
            <Route path="/about" element={ <AboutPage/>} />
            <Route path="/courses" element={< CoursesPage/>}/>
            <Route path="/contact" element={< ContactPage/>}/>
            <Route path="/admissions" element={<Admissions/>}/>
            </Routes>
<<<<<<< HEAD
      <ChatbotComponent/>
=======

>>>>>>> c646e82d7b740eb9be189f7c044e9bf2d310aa64
      </Router>

    </div>

  )
}
export default App;