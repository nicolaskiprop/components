import React from 'react' 
import { Blog, Features, Footer, Header, Possibility, WhatComponent } from './containers'
import {  Brand, Cta, Navbar } from './components'
import './App.css'


const App = () => {
  return (
    <div>
       <div className='App'>
         <div className='gradient__bg'>
            <Navbar/>
            <Header />
         </div>
         <Brand />
         <WhatComponent />
         <Features />
         <Possibility />
         <Cta />
         <Blog />
         <Footer />
       </div>
    </div>
  )
}

export default App