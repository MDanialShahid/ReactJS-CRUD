import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';
import {
  Table,
  Container,
  Button
} from 'reactstrap';

export const UserList = () => {
  const { users, removeUser } = useContext(GlobalContext);
  return (
    <>
      {users.length > 0 ? (
        <div>
          <Container>
            <Table id='mytable' className='mt-5 table-bordered'>
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Email Address</th>
                  <th>District</th>
                  <th>Salary</th>
                  <th>Terms</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map((user, index) => {
                    return (
                      <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.district}</td>
                        <td>{user.salary}</td>
                        <td>{user.terms}</td>
                        <td>
                          <Link to={`/edit/${user.id}`} color="warning" className="btn btn-warning me-1">Edit</Link>
                          <Button onClick={() => removeUser(user.id)} color="danger">Delete</Button>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>
          </Container>
        </div>
      ) : (
        <h4 className="text-center">No Users</h4>
      )}
    </>
  )
}