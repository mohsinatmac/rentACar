import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/";
import { Header } from "./containers";
import { Fragment } from "react";



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Fragment>
            <Navbar/>
            <Header/>
          </Fragment>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
