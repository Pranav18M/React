import './App.css'
import Course from './Course';
import f1 from './assets/f1.jpg'
import max from './assets/max.png'
import vk from './assets/vk.jpg'

function App() {
   return (
     <>
              <Course name="The Formula 1 Blueprint"  price="$199" rate="9/10" image={f1} show={true} />
              <Course name="Max Verstappen: The Racing Masterclass"  price="$199"  rate="8/10" image={max} show={true}/>
              <Course  name="goat of thr cricket"   price="$199" rate="10/10" image={vk} show={true} />

      </>
  );
}

export default App
