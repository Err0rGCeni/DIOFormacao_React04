import Header from "../../components/Header";
import Card from "../../components/Card";
import UserInfo from "../../components/UserInfo";


import {
  Container,
  Column,
  TitleHighlight
} from './styles'

const Feed = () => {
  return (
    <div>
      <Header auth={true}/>
      <Container>
        <Column flex={3}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># Ranking 5 TOP DA SEMANA</TitleHighlight>
          <UserInfo percentual={85} nome="Gnaeus" image={"https://raw.githubusercontent.com/Err0rGCeni/DIOProject_PortfolioGG/main/assets/img/my-photo.jpg"} />
          <UserInfo percentual={75} nome="Gnomicius" image={"https://raw.githubusercontent.com/Err0rGCeni/DIOProject_PortfolioGG/main/assets/img/my-photo.jpg"} />
          <UserInfo percentual={60} nome="Gnaeus" image={"https://raw.githubusercontent.com/Err0rGCeni/DIOProject_PortfolioGG/main/assets/img/my-photo.jpg"} />
          <UserInfo percentual={50} nome="Gnaeus" image={"https://raw.githubusercontent.com/Err0rGCeni/DIOProject_PortfolioGG/main/assets/img/my-photo.jpg"} />
          <UserInfo percentual={25} nome="Gnomicius" image={"https://raw.githubusercontent.com/Err0rGCeni/DIOProject_PortfolioGG/main/assets/img/my-photo.jpg"} />
        </Column>
      </Container>
    </div>
  );
};

export default Feed;
