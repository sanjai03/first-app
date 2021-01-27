import {useState} from 'react'

function Form(){
    const[name,setName]=useState("")
    const[designation,setDesignation]=useState("")
    const[doj,setDOJ]=useState("")
    
    return(
        <div className="row mb-2">
            <div className="col-6">Name</div>
            <div className="col-6"><input type="text" onChange={(e)=>setName(e.target.value)} /></div>
            <div className="col-6">Designation</div>
            <div className="col-6"><input type="text" onChange={(e)=>setDesignation(e.target.value)} /></div>

            <div className="col-6">DOJ</div>
            <div className="col-6 "><input type="date" onChange={(e)=>setDOJ(e.target.value)} /></div>

            <div className="col-6"></div>
            <div className="col-6 mb-5"><button className="btn btn-success">Add</button></div>
            <div className="col-6">Name</div>
            <div className="col-6">{name}</div>
            <div className="col-6">Designation</div>
            <div className="col-6">{designation}</div>

            <div className="col-6">DOJ</div>
            <div className="col-6">{doj}</div>


        </div>
    )
}
export default Form