import { useState } from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Button from '../components/button/button'
import Display from '../components/display/display'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Header/>
      <Display value = {count}/>
      <div className='flex justify-center'>
        <Button name="+" onClick = {()=> setCount(count+1)}/>
        <Button name="Reset" onClick = {()=> setCount(0)}/>
        <Button name="-" onClick = {()=> setCount(count-1)}/>
      </div>
      <Footer/>
    </>
  )
}

export default App
