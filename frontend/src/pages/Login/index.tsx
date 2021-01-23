import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { FormHandles } from '@unform/core';
import { Container, Content } from './styled';

import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';

import logo from '../../assets/logo.svg';

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(async (data: Object) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Email is required')
          .email('Please, put a valid email'),
        password: Yup.string().min(6, 'Minimun 6 digits'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <>
      <Container>
        <Content>
          <img src={logo} alt="Logo" />
          <Form ref={formRef} onSubmit={handleSubmit}>
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
