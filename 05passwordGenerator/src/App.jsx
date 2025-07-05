import { useState, useCallback, useEffect, useRef} from "react";

function App() {
  let [length, setLentgth] = useState(8);
  const [numsAllowed, setNumsAllowed] = useState(false);
  const [charsAllowed, setCharsAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);
  //useRef Hook:
  const passRef = useRef(null)

  const passGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numsAllowed) {
      str += "0123456789";
    }
    if (charsAllowed) {
      str += "!@#$%^&*()_+<>?~:,./;'-=";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numsAllowed, charsAllowed, setPassword]);

  const copyPassowrdToClipboard = useCallback(()=>{
    passRef.current?.select()
    passRef.current?.setSelectionRange(0, 100)
    window.navigator.clipboard.writeText(password)

    setCopied(true);
    setTimeout(()=>setCopied(false), 3000)


  }, [password])

  useEffect(() => {
    passGen();
  }, [length, numsAllowed, charsAllowed, setPassword]);

  return (
    <>
      <div className="w-full  max-w-md mx-auto shadow-xl rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            ref={passRef}
            className="copy-field outline-none w-full py-1 px-3 selection:bg-gray-600 selection:text-white"
            placeholder="password"
            readOnly
          />
          <button onClick= {copyPassowrdToClipboard}
          className="copyBtn outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            {copied ? "COPIED" : "COPY"}
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex item-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLentgth(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numsAllowed}
              id="numberInput"
              onChange={() => {
                setNumsAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charsAllowed}
              id="characterInput"
              onChange={() => {
                setCharsAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
