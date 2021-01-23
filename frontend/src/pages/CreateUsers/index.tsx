import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  FiChevronLeft,
  FiGithub,
  FiGitlab,
  FiLinkedin,
  FiUser,
  FiMail,
  FiLock,
} from 'react-icons/fi';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { Container, Title, Content, RowButtons } from './styled';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';

const CreateUsers: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(async (data: Object) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('Name invalid!'),
        email: Yup.string()
          .required('Email invalid!')
          .email('This is not valid email!'),
        password: Yup.string().min(6, 'Minimum 6 digits'),
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
    <Container>
      <Link to="/">
        <FiChevronLeft size={18} />
        Back
      </Link>
      <Title>New Account</Title>
      <Content>
        <h1>Connect with</h1>
        <RowButtons>
          <Button>
            <FiGithub />
          </Button>
          <Button>
            <FiGitlab />
          </Button>
          <Button>
            <FiLinkedin />
          </Button>
        </RowButtons>
        <h1>or</h1>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" icon={FiUser} placeholder="Name" />
          <Input name="email" icon={FiMail} placeholder="Email" />
          <Input name="password" icon={FiLock} placeholder="Password" />
          <Button type="submit">Send</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default CreateUsers;
