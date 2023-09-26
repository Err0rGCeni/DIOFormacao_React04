import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import Header from "../../components/Header";
import bannerImage from "../../assets/banner.png"

import {
  Container,
  TextContent,
  Title,
  TitleHighLight
} from './styles'

const Home = () => {
  const navigate = useNavigate();
  const handleClickSignIn = () => {
    navigate("/login")
  }
  
  return (
    <div>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighLight>Implemente</TitleHighLight>
            <br />
            o seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
          </TextContent>
          <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn} />

        </div>
        <div>
          <img src={bannerImage} alt="Imagem Principal" />
        </div>
      </Container>
    </div>
  );
};

export default Home;
