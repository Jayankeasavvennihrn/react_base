import { useState } from 'react'
import InputComponent from './components/input_component'
import Employee from './components/employee';



function App() {
  const [name, setName] = useState("Jayan Keasav Vennih");

  const updateFunction = (value: string) => {
    console.log(value);
    setName(value);
  }

  return (
    <>
    <Employee />
    {/* <BodyComponent /> */}
    <InputComponent defaultValue={name} onSave={updateFunction} />
    </>
  )
}

export default App
