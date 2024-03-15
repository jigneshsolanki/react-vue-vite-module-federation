import './App.css'
import Counter from "remoteApp/Counter";
import useCounter from "remoteApp/store";

function App() {

  const counter = useCounter((state) => state.counter);
  const increaseCounter = useCounter((state) => state.increaseCounter);
 

  return (
    <>
     
      <h1> React host</h1>
      <div className="card">
       <Counter />
      </div>
     
      <div>
        <button onClick={increaseCounter}>Click host: {counter}</button>
      </div>

    </>
  )
}

export default App
