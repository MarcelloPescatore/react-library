import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home.jsx'
import Books from './pages/Books.jsx'
import About from './pages/About.jsx'
import Contacts from './pages/Contacts.jsx'
import DefaultLayout from "./components/DefaultLayout.jsx"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout/>} >
            <Route path="/" element={ <Home />} />
            <Route path="/books" element={ <Books />} />
            <Route path="/about" element={ <About />} />
            <Route path="/Contacts" element={ <Contacts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
