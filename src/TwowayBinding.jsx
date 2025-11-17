import React, { useState } from 'react'
import './twoway.css'
import { FaDeleteLeft } from "react-icons/fa6";

const TwowayBinding = () => {
    const [first, setfirst] = useState('')
    const [second, setsecond] = useState('')
    const [add, setadd] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log("form submitted!!");

        const copyadd = [...add];
        copyadd.push({ first, second });
        setadd(copyadd)
        console.log(add);


        setfirst('')
        setsecond('')
    }

    const handledelete = (idx) => {
        const copyadd = [...add];
        copyadd.splice(idx,1)

        setadd(copyadd)
        console.log(copyadd);

    }
    return (
        <>
            <div className='not-main'>
                <div className="container">
                    <div className="not-inner-main">

                        {/* LEFT SIDE FORM */}
                        <div className="not-child">
                            <div className="not-inner-child">
                                <h3>Add Notes</h3>

                                <form onSubmit={(e) => {
                                    handleSubmit(e)
                                }}>

                                    <input
                                        type="text"
                                        className='First-input'
                                        placeholder="Enter note title"
                                        value={first}
                                        onChange={(e) => {
                                            setfirst(e.target.value)
                                        }}
                                    />

                                    <textarea
                                        className='second-input'
                                        placeholder="Enter note description"
                                        value={second}
                                        onChange={(e) => {
                                            setsecond(e.target.value)
                                        }}
                                    />

                                    <button className='btn-click'>Add Note</button>
                                </form>
                            </div>
                        </div>

                        {/* RIGHT SIDE NOTES */}
                        <div className="not-child">
                            <div className="notes-list">
                                <h3>Your Notes</h3>

                                {add.map((i, idx) => {
                                    return (
                                        <>
                                            <div className="note-card" key={idx}>
                                                <div className="note-one">

                                                    <h4>{i.first}</h4>
                                                    <p>{i.second}</p>
                                                </div>
                                                <div className="note-two">
                                                    <button className='btn-delete'
                                                        onClick={()=>{
                                                            handledelete(idx)
                                                        }}
                                                    ><FaDeleteLeft /></button>

                                                </div>
                                            </div>
                                        </>
                                    )
                                })}

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default TwowayBinding
