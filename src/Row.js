function Row(props){
    console.log(props.id)
    return(
        
            <tr>
            <td>{props.name}</td>
            <td>{props.designation}</td>
            <td>{props.doj}</td>
        </tr>
    )    
}
export default Row