import { useEffect, useState } from 'react'

const PasswordGen = () => {

  const [password, setPassword] = useState("")
  const [length, setLength] = useState(8)
  const [numbersAllowed, setNumbersAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)

  
  useEffect(() => {
    const generatePassword = () => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  
      if (numbersAllowed) str += "0123456789";
      if (characterAllowed) str += "~!@#$%^&*_+";
  
      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char);
      }
  
      setPassword(pass);
    }

    generatePassword();

  },[length, numbersAllowed, characterAllowed])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-2xl px-4 my-20 border border-amber-200 bg-gray-900'>
      
      <div className='flex flex-col gap-3 items-center px-4 py-8'>

        <h1 className='text-2xl text-white font-semibold'>
          Password Generator
        </h1>

        <div className='flex shadow-md rounded-lg mb-4 mt-2.5'>
          <input 
            type="text" 
            placeholder='Password'
            value={password}
            readOnly
            className='outline-none rounded-md text-amber-500 w-full py-1 px-3 shadow-2xl'
          />

          <button
            className='text-white bg-amber-300 rounded px-3 py-0.5 hover:bg-amber-400'
          >
            Copy
          </button>
        </div>

        <div className='flex text-sm gap-x-2'>

          <div className='flex items-center gap-x-1'>

            <input 
              type="range"
              min={8}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className='cursor-pointer'
            />

            <label
             htmlFor="length"
             className='text-amber-600'
            >
              Length: {length}
            </label>

          </div>

          <div className='flex items-center gap-x-1'>

            <input 
              type="checkbox" 
              defaultChecked={numbersAllowed}
              onChange={() => setNumbersAllowed((prev) => !prev)}
            />

            <label
             htmlFor="numbers"
             className='text-amber-600'
            >
              Numbers
            </label>

          </div>

          <div className='flex items-center gap-x-1'>

            <input 
              type="checkbox" 
              defaultChecked={characterAllowed}
              onChange={() => setCharacterAllowed((prev) => !prev)}
            />

            <label
             htmlFor="characters"
             className='text-amber-600'
            >
              Characters
            </label>

          </div>

        </div>

      </div>

    </div>
  )
}

export default PasswordGen