import './App.css';
import About from './components/About';
import Client from './components/Client';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import Project from './components/Project';
import Services from'./components/Services';


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Services/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
