import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
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
  SubTitleLogin,
  Title,
  TitleLogin,
  Wrapper,
  Terms,
  ToLogin
} from './styles'
import { IFormData } from './types';

const schema = yup.object({
  name: yup.string().min(3, 'No mínimo 3 caracteres.').required("Campo obrigatório!"),
  email: yup.string().email('email não é válido.').required("Campo obrigatório!"),
  password: yup.string().min(3, 'No mínimo 3 caracteres.').required("Campo obrigatório!"),
}).required()

const SignUp = () => {
  const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async (formData: IFormData) => {
    try {
      const { data } = await api.post('users', formData);
      console.log("Novo usuário criado:", data);
      navigate("/login");
    } catch {
      alert('Houve um erro: ');
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
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubTitleLogin>Crie sua conta e make the change._</SubTitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input control={control} name="name" errorMessage={errors?.name?.message} placeholder="Nome" leftIcon={<MdPerson />} />
              <Input control={control} name="email" errorMessage={errors?.email?.message} placeholder="E-mail" type="email" leftIcon={<MdEmail />} />
              <Input control={control} name="password" errorMessage={errors?.password?.message} placeholder="Senha" type="password" leftIcon={<MdLock />} />
              <Button title="Entrar" variant="secondary" />
            </form>
            <Terms>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</Terms>
            <ToLogin>Já tenho conta. <span onClick={() => { navigate("/login") }}>Fazer login</span></ToLogin>

          </Wrapper>
        </Column>
      </Container>
    </div>
  );
};

export default SignUp;
