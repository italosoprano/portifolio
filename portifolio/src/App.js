import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <About/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
