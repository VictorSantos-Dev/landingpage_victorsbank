import './App.css'
import Header from './components/header/Header'
import Saldo from './components/saldo/Saldo'
import Services from './components/services/Services'
import Shopping from './components/shopping/Shopping'


function App() {
  return (
    
    <div className="app">
      <Header />
      <Saldo />
      <Services />
      <Shopping />
    </div>
  )
}

export default App
