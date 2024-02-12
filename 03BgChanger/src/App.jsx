import { useState } from 'react'


function App() {
  const [color, setColor] = useState("black")

  return (
    <div className='w-full h-screen duration-200'
      style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-3'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onMouseEnter={() => setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: 'red' }}>Red</button>
          <button onMouseEnter={() => setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: 'green' }}>Green</button>
          <button onMouseEnter={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: 'blue' }}>Blue</button>
          <button onMouseEnter={() => setColor("white")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{ backgroundColor: 'white' }}>White</button>
          <button onMouseEnter={() => setColor("olive")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: 'olive' }}>olive</button>
          <button onMouseEnter={() => setColor("gray")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: 'gray' }}>Gray</button>
          <button onMouseEnter={() => setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{ backgroundColor: 'yellow' }}>Yellow</button>
          <button onMouseEnter={() => setColor("pink")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{ backgroundColor: 'pink' }}>Pink</button>
          <button onMouseEnter={() => setColor("purple")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: 'purple' }}>Purple</button>
          <button onMouseEnter={() => setColor("lavender")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{ backgroundColor: 'lavender' }}>Lavender</button>
          <button onMouseEnter={() => setColor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: 'black' }}>Blck</button>
        </div>
      </div>
    </div>
  )
}

export default App
