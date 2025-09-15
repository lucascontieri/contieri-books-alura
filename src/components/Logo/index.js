import logo from '../../images/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
  display: flex;
  font-size: 2em;
  align-items: center;
`

const LogoImage = styled.img`
    width: 2.5em;
    height: auto;
    margin-right: 10px;
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImage
                src={logo}
                alt='logo-contieri-books'
                />
            <p><strong>Contieri</strong>Books</p>
        </LogoContainer>
    )
}

export default Logo //exportando a funcao para o nosso projeto, sendo reaproveitado no app.js