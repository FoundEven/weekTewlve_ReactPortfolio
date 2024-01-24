import { Outlet } from 'react-router-dom';
import Footer from "./component/Footer";
import Header from './component/Header';


function App() {


  return (
    <>
      <header className=' p-3 w-100'>
        <Header/>
      </header>
      <main className="mx-5" style={{backgroundColor: "gray"}}>
        <Outlet />
      </main>
      <footer className='text-center bg-body-tertiary border-top border-dark rounded-5 w-100 p-3 h-100 padding-top' style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
        <Footer/>
      </footer>
    </>
  )
}

export default App
