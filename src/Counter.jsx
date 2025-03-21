import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './Redux/CounderSlice'

function Counter() {
    const [range ,setrange]=useState(1)

    // react hook to call a function / action inside slice : useDispatch ()
    const dispatch = useDispatch()

    // Hook to accesss state in component : useSelector ()
    const counter = useSelector((state) => state.counder.value)

    console.log("range",range);

    const resetAll=()=>{
        dispatch(reset())
        setrange(1)
    }
    
    
    return (
        <>
            <div className="d-flex align-items-center justify-content-center w-100 flex-column">
                <h3 style={{ fontSize: '70px', textShadow: "2px 2px 4px rgba(2, 0, 0, 0.7)"  }}>{counter}</h3>

                <div >
                    <button onClick={()=>dispatch(decrement(Number(range)))} className="btn btn-danger ">DECREMENT</button>
                    <button onClick={resetAll} style={{ width: '120px' }} className="btn btn-warning ms-3">RESET</button>
                    <button onClick={()=>dispatch(increment(Number(range)))} className="btn btn-success ms-3">INCREMENT</button>
                </div>


            </div>
            <input type="text" className='from-control mt-3 w-100' placeholder='Enter Range'value={range} 
            style={{borderColor:'gray', borderRadius:'10px', height:'45px' }}
            onChange={(e)=>setrange(e.target.value)}
            />


        </>
    )
}

export default Counter