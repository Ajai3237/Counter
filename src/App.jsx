import './App.css'
import Counter from './Counter'

function App() {


  return (
    <>
      <div style={{ height: '100vh' }} className="d-flex align-items-center justify-content-center w-100 flex-column">

        <div style={{
          background: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderRadius: '10px',
          padding: '20px',
          boxShadow: '0 4px 6px rgba(2, 2, 1, 0.5)',
          borderRadius:'10px'
        }} className="d-flex align-items-center justify-content-center p-5 rounded flex-column">
          <h2 style={{ fontFamily: 'monospace', fontWeight: "bold", textShadow: "2px 2px 4px rgba(2, 0, 0, 0.7)" }} className='text-warning'>COUNTER APPLICATION</h2>
          <Counter />
        </div>

      </div>

    </>
  )
}

export default App
