
import './App.css'
import LineCart from './components/LineChart/LineCart'
import Navbar from './components/Navbar/Navbar'
import Phones from './components/Phones/Phones'
import PriceOption from './components/PriceOption/PriceOption'

function App() {
  

  return (
    <>
   
      
      <Navbar></Navbar>
    {/* <DaisyNav></DaisyNav> */}
    <PriceOption></PriceOption>
    <LineCart></LineCart>
    <Phones></Phones>
    </>
  )
}

export default App
