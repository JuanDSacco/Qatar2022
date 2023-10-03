import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './Header/Header'
import Home from './Routes/Home/Home'
import Dios from './Routes/Dios/Dios'
import FixtureDemo from './Routes/FixtureDemo/FixtureDemo'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/d10s' element={<Dios/>}/>
          <Route path='/fixture' element={<FixtureDemo/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
