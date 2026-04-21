import { useEffect, useRef, useState } from 'react'

const PasswordGen = () => {

  const passwordRef = useRef(null);

  const [password, setPassword] = useState("")
  const [length, setLength] = useState(8)
  const [numbersAllowed, setNumbersAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [copyBtn, setCopyBtn] = useState(false)

  
  useEffect(() => {

    setCopyBtn(false)

    const generatePassword = () => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  
      if (numbersAllowed) str += "0123456789";
      if (characterAllowed) str += "~!@#$%^&*_+";
  
      for (let i = 0; i < length; i++) {
        let char = Math.floor(Math.random() * str.length)
        pass += str.charAt(char);
      }
  
      setPassword(pass);
    }

   generatePassword();

  },[length, numbersAllowed, characterAllowed])

  const handleCopyToClipboard = () => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,4)

    setCopyBtn(true)

    // console.log("passwordRef:", passwordRef.current)

    window.navigator.clipboard.writeText(password);
  }

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-2xl px-4 my-20 border border-amber-200 bg-gray-900'>
      
      <div className='flex flex-col gap-3 items-center px-4 py-8'>

        <h1 className='text-2xl text-white font-semibold'>
          Password Generator
        </h1>

        <div className='flex shadow-md rounded-lg mb-4 mt-2.5 w-full'>
          <input 
            type="text" 
            placeholder='Password'
            value={password}
            readOnly
            ref={passwordRef}
            className='outline-none rounded-md text-amber-500 w-full py-1 px-3 shadow-2xl'
          />

          <button
            onClick={handleCopyToClipboard}
            className='text-white bg-amber-300 rounded px-3 py-0.5 hover:bg-amber-400'
          >
            {copyBtn ? "Copied" : "Copy"}
          </button>
        </div>

        <div className='flex text-sm gap-x-2'>

          <div className='flex items-center gap-x-1'>

            <input 
              type="range"
              min={8}
              max={30}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
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
              checked={numbersAllowed}
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
              checked={characterAllowed}
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