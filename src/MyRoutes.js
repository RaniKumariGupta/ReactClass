import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import First from './First'
import { Test } from './Test'

const MyRoutes=()=> {
  return (
        <Router>
            <Routes>
                <Route path='' element={<Test/>}/>
                <Route path='test' element={<First/>}/>

                
            </Routes>
        </Router>
  )
}

export default MyRoutes
