import { livros } from './dadosUltimosLancamentos'
import { Titulo } from '../Titulo'
import CardRecomenda from '../CardRecomenda'
import imagemLivro from '../../images/livro-introducao-a-python.jpg'
import styled from 'styled-components'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 100px;
    width: 100%;
    margin-top: 100px;
`

const NovosLivrosContainer = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    gap: 30px;
`

const Imagem = styled.img`
    width: 300px;
    height: 400px;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo 
            cor="#EB9B00" tamanhoFonte="36px">
                ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <NovosLivrosContainer>
                {livros.map(livro => (
                    <Imagem src={livro.src} />
                ))}
            </NovosLivrosContainer>
            <CardRecomenda 
                titulo="Talvez você se interesse por..."
                subtitulo="Python"
                descricao="Neste livro, você encontrará uma introdução abrangente à linguagem de programação Python, cobrindo desde os conceitos básicos até tópicos avançados. Ideal para iniciantes e programadores experientes que desejam aprimorar suas habilidades."
                img={imagemLivro}
            />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos