import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Home itemsPerPage={15}/>
      <Footer/>
    </div>
  );
}

export default App;
