import './App.css'
import Counter from './Counter'

function App() {


  return (
    <>
      <div style={{ height: '100vh' }} className="d-flex align-items-center justify-content-center w-100 flex-column">

        <div style={{backgroundColor:"gray"}} className="d-flex align-items-center justify-content-center p-5 rounded flex-column  ">
          <h2 style={{fontFamily:'monospace', fontWeight:"bold", textShadow: "2px 2px 4px rgba(2, 0, 0, 0.7)" }} className='text-warning '>COUNTER APPLICATION</h2>
          <Counter />

        </div>


      </div>

    </>


  )
}

export default App
