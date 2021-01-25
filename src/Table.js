import './table.css'

function Table(){
    return(
        <table class="table table-hover">
            <thead>
                <tr><th>Name</th><th>Designation</th><th>Date Of join</th></tr>
            </thead>
            <tbody>
                <tr>
                    <td>Sanjeevi kumar</td>
                    <td>Trainee Developer</td>
                    <td>14/12/2020</td>
                </tr>
            </tbody>
        </table>
    )
}
export default Table;