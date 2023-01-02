import logo from './logo.svg';
import './App.css';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';
import { Cards } from './cards/Cards';

function App() {
  return (
    <>
     <div className='main_app_div'>
     <Header/>
      <Cards/>
     <Footer />

     </div>
     
    </>
  );
}

export default App;
