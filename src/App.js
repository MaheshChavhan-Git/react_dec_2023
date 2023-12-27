import logo from './logo.svg';
import './App.css';

import Footer from './components/footer/Footer';
import Body from './components/body/Body';
import Navbar from './components/navbar/Navbar';
import Carousel from './components/carousal/Carousel';
import Categories from './components/categories/Categories';
import Demo2 from './components/demo/Demo2';

function App() {
  return (
    <div>
    
    <Navbar />
  {/*<Categories />*/}
    {/*<Carousel />*/}
    <Body />
    <Footer />
    </div>
  );
}

export default App;
