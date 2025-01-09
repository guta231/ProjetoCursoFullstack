import logo from '../../imagens/logo.svg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`

const LogoImage = styled.img`
    margin-right: 10px;
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImage
                src={logo}
                alt='logo'
            />
            
            <Link to="/"><p><strong>Alura</strong>Books</p></Link>
       </LogoContainer>
    )
}

export default Logo