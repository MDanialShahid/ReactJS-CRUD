import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

export const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [salary, setSalary] = useState('');
  const [terms, setTerms] = useState({});
  const [district, setDistrict] = useState('');
  const {addUser} = useContext(GlobalContext);
  const history = useNavigate();  

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: uuid(),
      name,
      email,
      district,
      salary,
      terms
    }

    addUser(newUser);
    history('/home');
  }

  const handleChange = (e) => {
    setDistrict(e.target.value);
  };

  const handleCheckbox = e => {
    setTerms(e.target.value);
  };

  return (
    <Form onSubmit={onSubmit}>
      
      <FormGroup>
        <b><Label>Name</Label></b>
        <Input type='text' value={name} onChange={(e) => { setName(e.target.value) }} name='name' placeholder='Enter User' required></Input>
        <b><Label>Email</Label></b>
        <Input type='text' value={email} onChange={(e) => { setEmail(e.target.value) }} name='email' placeholder='Enter Email' required></Input>
        <b><Label>Salary</Label></b>
        <Input type='number' value={salary} onChange={(e) => { setSalary(e.target.value) }} name='salary' placeholder='Enter Salary' required></Input>
        <b><Label>District</Label></b>
        <select className='form-select' value={district} onChange={handleChange} required>
          <option disabled value=''>Choose...</option>
          <option value="Balochistan">Balochistan</option>
          <option value="Islamabad">Islamabad</option>
          <option value="Punjab">Punjab</option>
          <option value="Gilgit">Gilgit</option>
          <option value="Sindh">Sindh</option>
          <option value="KPK">KPK</option>
        </select>
        <br></br>
        <Input type='checkbox' value="Agreed" onChange={handleCheckbox} name='terms' required/>
        <label>Agree to Terms and Conditions</label> <br></br>
      </FormGroup>
      <Button type='submit'>Add</Button>
      <Link to='/home' className='btn btn-danger ms-2'>Cancel</Link>
    </Form>
  );
}
