import { FiThumbsUp } from 'react-icons/fi'

import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture
} from './styles';

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src={"https://s3-alpha-sig.figma.com/img/76dc/2afe/34138bf3e5fa50890ac096b57e9cd9be?Expires=1691366400&Signature=lqrViytnj4Qs0Tw02LoxuyPnj~0PKknzGh9rK-3kqjD5uDJmFEdRmfNofgNl9eSIjf1N1zA2TUIOBs2hyReBCgCzHBvYJujUPAKEylWeEoYONjbndpJm046pluDTkYBXtbVIhHmt2zrFDSyQQYG9NyIHh6P0y637pvxSOTYN85MDe5maS~qUGAVM4HIOG-Pc7DKbuwr-HjHV0s76mtBVz0EZv7C~CACHfgiWl~1lxxu8OVHgSVd9e5ERk6XnDfJaZBeqKnrF96kyMKmmK0qBcgAV~Kk0R~wVheeCrdlJsJj431IrtSMEByv3fMKfH5JWXpF2WwDDIeg3s5h~VEOZHQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}/>
            <Content>
                <UserInfo>
                    <UserPicture />
                    <div>
                        <h4>Gnaeus Gnomicius</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para HTML e CSS</h4>
                    <p>Projeto feito pipipipópópó...<strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #JavaScript</h4>
                    <p>
                        <FiThumbsUp /> 99
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export default Card