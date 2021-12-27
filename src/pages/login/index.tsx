import { Container, InputButton, InputText, Text } from 'components';
import React, { ReactElement, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from 'context'
import { LoginStyled } from './index.style';

interface Props { }

export const Login = (props: Props): ReactElement => {
    const { signIn } = useAuth();

    const handleLogin = () => {
        const isLoginSuccess = signIn({ email: '', password: '' });

        if (isLoginSuccess) {
            window.location.href = '/';
        }
    }

    return (
        <Container>
            <LoginStyled>
                <h1>Login</h1>
                <InputText label='Usuário'/>
                <InputText type='password' label='Senha'/>
                <Link to={'/forgot-password'} >
                    <Text>Esqueceu a senha ?</Text>
                </Link>
                <InputButton label='Entrar' onClick={handleLogin}/>
            </LoginStyled>
        </Container>
    );
};
