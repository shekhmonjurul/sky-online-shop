import { BiSolidEdit } from "react-icons/bi";


export default function Table({ users }) {


    return (
        <table className="table">
            <thead className="table-head">
                <tr>
                    <th className="no-border">
                        <input type="checkbox" name="" id="" className="width-height-25" />
                    </th>
                    <th>Invoice </th>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Note</th>
                    <th>Action</th>
                </tr>
            </thead>
            <div>
                {
                    users.map((usr, index) => (
                        <div key={usr.usrId} className="tabel-row">
                            <div className="small-td">
                                <input type="checkbox" name="" id="" className="width-height-25" />
                            </div>
                            <div className="midel-td">{usr.usrId}</div>
                            <div className="small-td">{usr.date}</div>
                            <div className="large-td">{usr.name}</div>
                            <div>{usr.phoneNumber}</div>
                            <div className="large-td">{usr.address}</div>
                            <div className="large-td">{usr.product}</div>
                            <div>{"\u09F3" + usr.price}</div>
                            <div className="large-td">{usr.note}</div>


                            <div className="button">
                                <a href="#"><BiSolidEdit /></a>
                            </div>
                        </table>
                    )
                    )
                }
            </div>
        </div>
    )
}