import styled from 'styled-components';

export const LoginStyled = styled.div`
    width: 100%;
    max-width: 425px;
    max-height: 33vh;
    margin: auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    align-items: center;
    background-color: ${props => props.theme.currentPallet.background.secondary};
    border-radius: 5px;
`