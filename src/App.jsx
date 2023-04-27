<<<<<<< Updated upstream
=======
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Topbar } from "./components/";
import { Header } from "./containers";
import { Fragment } from "react";


>>>>>>> Stashed changes

function App() {

  return (
<<<<<<< Updated upstream
    <>
      <h1>Initial Push!</h1>
    </>
=======
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Fragment>
            <Topbar/>
            <Navbar/>
            <Header/>
          </Fragment>
        } />
      </Routes>
    </BrowserRouter>
>>>>>>> Stashed changes
  )
}

export default App
