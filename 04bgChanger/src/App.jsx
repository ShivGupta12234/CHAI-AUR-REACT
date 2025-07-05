import { useState } from "react"

function App() {
  const [color, setColor] = useState("black")

  return (
    <>
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white rounded-3xl px-3 py-2" >
          <button onClick={() => setColor("red")} className="outline-none px-4 rounded-3xl text-white shadow-lg" style={{backgroundColor: "red"}}>RED</button>
          <button onClick={() => setColor("teal")} className="outline-none px-4 rounded-3xl text-white shadow-lg" style={{backgroundColor: "teal"}}>TEAL</button>
          <button onClick={() => setColor("green")} className="outline-none px-4 rounded-3xl text-white shadow-lg" style={{backgroundColor: "green"}}>GREEN</button>
          <button onClick={() => setColor("blue")} className="outline-none px-4 rounded-3xl text-white shadow-lg" style={{backgroundColor: "blue"}}>BLUE</button>
          <button onClick={() => setColor("pink")} className="outline-none px-4 rounded-3xl text-white shadow-lg" style={{backgroundColor: "pink"}}>PINK</button>
          <button onClick={() => setColor("brown")} className="outline-none px-4 rounded-3xl text-white shadow-lg" style={{backgroundColor: "brown"}}>BROWN</button>
          <button onClick={() => setColor("grey")} className="outline-none px-4 rounded-3xl text-white shadow-lg" style={{backgroundColor: "grey"}}>GREY</button>
          <button onClick={() => setColor("lavender")} className="outline-none px-4 rounded-3xl bg-violet-400 text-white shadow-lg">LILAC</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
