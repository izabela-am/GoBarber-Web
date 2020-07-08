import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import {
  FiArrowLeft,
  FiMail,
  FiUser,
  FiLock,
} from 'react-icons/fi';
import * as Yup from 'yup';

import Button from '../../components/Button';
import Input from '../../components/Input';

import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './style';

const SignUp: React.FC = () => {
  const formRef = useRef(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'Senha muito fraca'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Container>

      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu Cadastro</h1>
          <Input name="name" icon={FiUser} placeholder="nome" />
          <Input name="email" icon={FiMail} placeholder="e-mail" />
          <Input name="password" icon={FiLock} type="password" placeholder="senha" />
          <Button type="submit">Cadastrar</Button>
        </Form>

        <a href="criar">
          <FiArrowLeft />
          Voltar
        </a>
      </Content>

    </Container>
  );
};

export default SignUp;
