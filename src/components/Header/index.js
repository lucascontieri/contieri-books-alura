import Logo from '../Logo';
import IconesHeader from '../IconesHeader';
import OpcoesHeader from '../OpcoesHeader';
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: white;
    display: flex;
    justify-content:center;
    width: 100%;
    height: 100%;
`

function Header () {
    return (
        <HeaderContainer>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>
        </HeaderContainer>
    )
}

export default Header;


    