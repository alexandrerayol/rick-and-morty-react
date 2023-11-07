import  { Container } from './index'
import headerIconRick from '../../assets/header-icon-rick.svg'
export function Header(){
    return(
        <>
            <Container>
                <img src={headerIconRick} alt="Header icon Rick" title='Rick Sanchez'/>
                <form>
                    <input type="text" placeholder='Pesquise por um personagem'/>
                    <button type='submit'>Pesquisar</button>
                </form>
            </Container>
        </>
    )
}