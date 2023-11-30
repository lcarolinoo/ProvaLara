import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Categorias from '../pages/Categorias'
import Roupas from '../pages/Roupas'
import Sobre from '../pages/Sobre'
export default function AppRouter() {
    return (
        <div>
            <Routes>
                <Route path='/'element={<Categorias/>}> </Route>
                <Route path='/roupas' element={<Roupas />}></Route>
                <Route path='/sobre' element={<Sobre />}></Route>
            </Routes>

        </div>
    )
}
