import Header from './Header';
import Calc from './Calc/indes';
import './global.css'

const App = () => {

  return (
    <>
      <Header />
      <div className="container">
        <Calc />
      </div>
    </>
  )
}

export default App;