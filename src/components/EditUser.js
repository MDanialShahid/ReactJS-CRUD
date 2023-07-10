import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

export const EditUser = () => {
  const { editUser, users } = useContext(GlobalContext);
  const { id } = useParams();

  const [selectedUser, setSelectedUser] = useState({
    id: '',
    name: '',
    email: '',
    district: '',
    salary: '',
    terms: ''
  })
  const history = useNavigate();
  const currentUserId = id;

  useEffect(() => {
    const userId = currentUserId;
    const selectedUser = users.find(user => user.id === userId);
    setSelectedUser(selectedUser);
  }, [currentUserId, users])

  const onChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    editUser(selectedUser);
    history('/home');
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <b><Label>Name</Label></b>
        <Input type='text' value={selectedUser.name} onChange={onChange} name='name' placeholder='Enter User' required></Input>
        <b><Label>Email</Label></b>
        <Input type='text' value={selectedUser.email} onChange={onChange} name='email' placeholder='Enter Email' required></Input>
        <b><Label>Salary</Label></b>
        <Input type='number' value={selectedUser.salary} onChange={onChange} name='salary' placeholder='Enter Salary' required></Input>
        <b><Label>District</Label></b>
        <select className='form-select' value={selectedUser.district} onChange={onChange} name='district' required>
          <option disabled value=''>Choose...</option>
          <option value="Balochistan">Balochistan</option>
          <option value="Islamabad">Islamabad</option>
          <option value="Punjab">Punjab</option>
          <option value="Gilgit">Gilgit</option>
          <option value="Sindh">Sindh</option>
          <option value="KPK">KPK</option>
        </select>
        <br></br>
        <Input type='checkbox' defaultChecked value="Agreed" onChange={onChange} name='terms' required/>
        <label>Agree to Terms and Conditions</label> <br></br>
      </FormGroup>
      <Button type='submit'>Done</Button>
      <Link to='/home' className='btn btn-danger ms-2'>Cancel</Link>
    </Form>
  );
}