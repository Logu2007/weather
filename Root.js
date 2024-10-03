import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Weather from './Weather'

const Root = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/'element={<Weather/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Root