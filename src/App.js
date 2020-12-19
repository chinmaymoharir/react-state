import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [emotion, setEmotion] = useState("Happy")
  const [secondary, setSecondary] = useState("Tired")
  useEffect(() => {
    console.log(`It's ${emotion} around here!`)
  }, [emotion])

  useEffect (() => {
    console.log(`It's ${secondary} around here!`)
  }, [secondary])
  return (
    <>
      <h1>Current emotion is {emotion}.</h1>
      <button onClick = { () => setEmotion("Happy")}>Make Happy</button>
      <button onClick = { () => setSecondary("Crabby")}>Make Crabby</button>
      <button onClick = { () => setEmotion("Frustrated")}>Frustrate</button>
      <button onClick = { () => setEmotion("Enthusiastic")}>Enthuse</button>

    </>
  );
}

export default App;
