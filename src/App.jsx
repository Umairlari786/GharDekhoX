import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import './App.css'
import Company from "./components/Company/Company.jsx";
import Recidency from "./components/Recidency/Recidency.jsx";
import Value from "./components/Value/Value.jsx";
import Contact from "./components/Contact/Contact.jsx"
function App() {
  return (
    <div className="APP">
      <div>
       <div className="white-gradient" />
        <Header/>
        <Hero />
      </div>
      <Company />
      <Recidency />
      <Value />
      <Contact />
    </div>
  );
}

export default App;
