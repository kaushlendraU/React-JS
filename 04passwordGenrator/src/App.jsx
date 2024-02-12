import { useCallback, useEffect, useState, useRef } from 'react'


function App() {
  const [length, setLenght] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook 
  const passwordRef = useRef(null)

  let passwordGenrator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[{`~"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    
    // give the user to copy sepecific range
    passwordRef.current?.setSelectionRange(0, 32)

    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenrator()
  }, [length, numberAllowed, charAllowed, passwordGenrator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-xl px-4 my-12 text-orange-500 bg-gray-700 text-center p-6'>
        <h1 className='text-2xl text-blue-200'>Password Genrator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-1 p-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3' placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 duration-100'>Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1 ">
            <input type="range"
              min={6}
              max={32}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLenght(e.target.value) }} />
            <label>Length: {length}</label>
          </div>
          <div className="flex text-sm gap-x-2">
            <input type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => { setNumberAllowed((prev) => !prev); }}
            />
            <label htmlFor='numberInput'>Numbers{length}</label>
          </div>
          <div className="flex text-sm gap-x-2">
            <input type="checkbox"
              defaultChecked={charAllowed}
              id='ccharacterInput'
              onChange={() => { setCharAllowed((prev) => !prev); }}
            />
            <label htmlFor='characterInput'>Characters{length}</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
