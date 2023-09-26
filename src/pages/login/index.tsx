import { MdEmail, MdLock } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { api } from '../../services/api';

import {
  Column,
  Container,
  CreateText,
  ForgetText,
  Row,
  SubTitleLogin,
  Title,
  TitleLogin,
  Wrapper
} from './styles'
import { IFormData } from './types';

const schema = yup.object({
  email: yup.string().email('email não é válido.').required("Campo obrigatório!"),
  password: yup.string().min(3, 'No mínimo 3 caracteres.').required("Campo obrigatório!"),
}).required()

const Login = () => {
  const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async (formData: IFormData) => {
    try {
      const { data } = await api.get(`users?email=${formData.email}&senha?=${formData.password}`)
      console.log("req-data:", data)

      if (data.length === 1) {
        navigate("/feed")
      } else {
        alert('Email/Senha inválido.')
      }
    } catch {
      alert('Houve um erro: ')
    }
  };

  return (
    <div>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input control={control} name="email" errorMessage={errors?.email?.message} placeholder="E-mail" leftIcon={<MdEmail />} />
              <Input control={control} name="password" errorMessage={errors?.password?.message} placeholder="Senha" type="password" leftIcon={<MdLock />} />
              <Button title="Entrar" variant="secondary" type="button"/>
            </form>
            <Row>
              <ForgetText>Esqueci minha senha</ForgetText>
              <CreateText>Criar Conta</CreateText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </div>
  );
};

export default Login;
