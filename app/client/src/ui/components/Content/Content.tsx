import styled from 'styled-components'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Menu from '../Menu/Menu'

const Content = () => (
    <StyledContent>
        <Header />
        <Menu />
        <Main />
    </StyledContent>
)
const StyledContent = styled.div`
    width: 100%;
    display: grid;
    grid-template-areas:
        'menu header'
        'menu main ';
    grid-template-rows: 1fr;
    grid-template-columns: 250px 1fr;
`

export default Content
