import { useState, useEffect } from 'react';
import './App.css';

function App() {
const [emotion, setEmotion] = useState("happy");
const [secondary, setSecondary] = useState("tired")

useEffect(() => {
  console.log(`Its ${emotion} around here!`)
}, [emotion])

useEffect(() => {
  console.log(`Its ${secondary} around here!`)
},[secondary])
return (
<>
<h1>Current emotion is {emotion} and {secondary}.</h1>
<button onClick={() => setEmotion("happy")}>Make Happy</button>
<button onClick={() => setSecondary("crabby")}>Make crabby</button>
<button onClick={() => setEmotion("frustrated")}>Frustrate</button>
<button onClick={() => setEmotion("enthusiastic")}>Enthuse</button>
</>
  )
  
}

export default App;
