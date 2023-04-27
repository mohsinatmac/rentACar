import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Topbar } from "./components/";
import { Header } from "./containers";
import { Fragment } from "react";



function App() {

  return (
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
  )
}

export default App
