import logo from './logo.svg';
import ComponentA from './Component/ComponentA';
import './App.css';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import Popular from './Popular/Popular';
import Menu from './Menu/Menu';
import Customer from './Customer/Customer';
import Update from './Update/Update';
import Gallery from './Gallery/Gallery';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
    
     <Navbar />
     <Header />
     <Popular />  
     <Menu /> 
     <Customer />
     <Update />
     <Gallery />
     <Footer />
    </div>
  );
}

export default App;
