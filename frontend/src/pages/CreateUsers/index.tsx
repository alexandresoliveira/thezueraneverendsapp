import React, { useCallback } from 'react';
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
import { Form } from '@unform/web';

import { Container, Content, RowButtons, Line } from './styled';
import Input from '../../components/Input';
import Button from '../../components/Button';

const CreateUsers: React.FC = () => {
  const handleSubmit = useCallback((data: Object) => {
    console.log(data);
  }, []);

  return (
    <Container>
      <Link to="/">
        <FiChevronLeft size={24} />
        Back
      </Link>
      <Content>
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
        <Line />
        <Form onSubmit={handleSubmit}>
          <h1>New Account</h1>
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
