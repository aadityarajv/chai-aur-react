import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <div className=" w-full h-screen duration-200" style={{ backgroundColor: color}}>
      <div className=" fixed flex flex-wrap justify-center top-12 inset-x-2">
        <div className=" flex flex-wrap justify-center gap-3 shadow-xl rounded-lg bg-white px-2 py-2">
          <button className=" outline-none px-4 rounded-full shadow-lg text-white" style={{ backgroundColor: "red"}} onClick={() => setColor("red")}>Red</button>
          <button className=" outline-none px-4 rounded-full shadow-lg text-white" style={{ backgroundColor: "blue"}} onClick={() => setColor("blue")}>Blue</button>
          <button className=" outline-none px-4 rounded-full shadow-lg text-white" style={{ backgroundColor: "pink"}} onClick={() => setColor("pink")}>Pink</button>
          <button className=" outline-none px-4 rounded-full shadow-lg text-white" style={{ backgroundColor: "black"}} onClick={() => setColor("black")}>Black</button>
          <button className=" outline-none px-4 rounded-full shadow-lg text-white" style={{ backgroundColor: "teal"}} onClick={() => setColor("teal")}>Teal</button>
          <button className=" outline-none px-4 rounded-full shadow-lg text-white" style={{ backgroundColor: "green"}} onClick={() => setColor("green")}>Green</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
