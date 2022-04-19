import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Contact from './components/Contact';
import Experience from './components/Experience'

function App() {
  return (
    <>
    <Navbar />
    <Header />
    <Experience />
    <Contact />
    </>
  );
}

export default App;
