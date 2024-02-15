import React from 'react';
import "./Table.css"

interface User {
  businessName: string;
  name: string;
  phone: string;
  signedUp: string;
}

interface UserTableProps {
  data: User[];
}

const UserTable: React.FC<UserTableProps> = ({ data }) => {
  return (
    <div className="table-container">
      <h2>New SignUp</h2>
      <table>
        <thead>
          <tr>
            <th>Business Name</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Signed Up</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index}>
              <td>{user.businessName}</td>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.signedUp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
