import './table.css'
import Row from './Row'

function Table(props){
    
    return(
        <table className="table table-hover">
            <thead>
                <tr><th>Name</th><th>Designation</th><th>Date Of join</th></tr>
            </thead>
            <tbody>
            {props.tableData.map((data,key)=>{
                console.log(data.id)
            return(
                <Row name={data.name} designation={data.designation} doj = {data.Doj} key={data.id} />
                )
            })}    
            </tbody>
        </table>
    )
}
export default Table;