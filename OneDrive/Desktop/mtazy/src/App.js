import Header from './components/Header';
import Navbar from './components/Navbar';
import Offer from './components/offer';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Features from './components/Features';
import Banner from './components/Banner';
import './App.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Banner/>
      <Features/>
      <Offer/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
