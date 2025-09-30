import Home from './pages/Home'
import Login from './pages/Login'
import Apelido from './pages/Apelido'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/Apelido' element={<Apelido />} />
            </Routes>
        </BrowserRouter>
    )
}