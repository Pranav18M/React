import './App.css'
import Navbar from './navbar';
import Course from './Course';
import Footer from './Footer';
import f1 from './assets/f1.jpg'
import max from './assets/max.png'


function App() {
   return (
     <>
              <Course name="The Formula 1 Blueprint" price="$199" image={f1}/>
              <Course name="Max Verstappen: The Racing Masterclass" price="$199" image={max}/>
                   <Course name="Fast-track with F1 ideas" price="$199" />



      </>
  );
}

export default App
