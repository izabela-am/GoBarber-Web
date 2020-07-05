import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import Button from '../../components/Button';
import Input from '../../components/Input';

import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './style';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />
        <form>
          <h1>Faça seu Login</h1>
          <Input name="email" icon={FiMail} placeholder="e-mail" />
          <Input name="password" icon={FiLock} type="password" placeholder="senha" />
          <Button type="submit">Entrar</Button>
          <a href="forgot">Esqueci minha senha</a>
        </form>

        <a href="criar">
          <FiLogIn />
          Criar Conta
        </a>
      </Content>
      <Background />

    </Container>
  );
};

export default SignIn;
