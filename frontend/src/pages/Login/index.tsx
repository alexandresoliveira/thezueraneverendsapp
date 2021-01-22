import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';

import { Container, Content } from './styled';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logo from '../../assets/logo.svg';

const Login: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <>
      <Container>
        <Content>
          <img src={logo} alt="Logo" />
          <Form onSubmit={handleSubmit}>
            <Input name="email" icon={FiMail} placeholder="Email" />
            <Input name="password" icon={FiLock} placeholder="Password" />
            <Button type="submit">Sign In</Button>
            <Link to="/users/new">Create New Account</Link>
          </Form>
        </Content>
      </Container>
    </>
  );
};

export default Login;
