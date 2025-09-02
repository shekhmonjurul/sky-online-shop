import { BiSolidEdit } from "react-icons/bi";
export default function Table({ users }) {
  return (
    <table className="custom-table">
      <thead>
        <tr>
          <th className="no-border">
            <input type="checkbox" className="width-height-25" />
          </th>
          <th>Invoice</th>
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
      <tbody>
        {users.map((usr , index) => ((index + 1)%2==0)? (
          <tr key={usr.usrId} >
            <td>
              <input type="checkbox" className="width-height-25" />
            </td>
            <td>{usr.usrId}</td>
            <td>{usr.date}</td>
            <td className="large-td">{usr.name}</td>
            <td>{usr.phoneNumber}</td>
            <td className="large-td">{usr.address}</td>
            <td>{usr.product}</td>
            <td className="midel-td">{"\u09F3" + usr.price}</td>
            <td className="large-td">{usr.note}</td>
            <td className="button">
              <a href="/edit">
                <BiSolidEdit />
              </a>
            </td>
          </tr>
        ):(
          <tr key={usr.usrId} className="bacground-color">
            <td>
              <input type="checkbox" className="width-height-25" />
            </td>
            <td>{usr.usrId}</td>
            <td>{usr.date}</td>
            <td className="large-td">{usr.name}</td>
            <td>{usr.phoneNumber}</td>
            <td className="large-td">{usr.address}</td>
            <td>{usr.product}</td>
            <td className="midel-td">{"\u09F3" + usr.price}</td>
            <td className="large-td">{usr.note}</td>
            <td className="button">
              <a href="/edit">
                <BiSolidEdit />
              </a>

            </td>
          </tr>
        ) )}
      </tbody>
    </table>
  );
}
