import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Create from "./Create";
import Home from "./Home";
import Update from "./Update";
import Read from "./Read";


function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/create' element={<Create />}></Route>
                <Route path='/update/:id' element={<Update />}></Route>
                <Route path='/read/:id' element={<Read />}></Route>
                <Route path='/' element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
     );
}

export default App;