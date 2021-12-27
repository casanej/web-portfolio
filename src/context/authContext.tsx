import React, { createContext, useCallback, useState, useContext, useEffect } from 'react'

interface SignInProps {
    email: string;
    password: string;
}

interface AuthContextProps {
    USER_LOGGED: boolean;
    signIn: ({ email, password }: SignInProps) => boolean
    signOut: () => void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

interface Props {
    children: React.ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
    const [userLogged, setUserLogged] = useState<boolean>(true);

    useEffect(() => {
        const user = localStorage.getItem('casanje-web-token');
        if (!user) {
            setUserLogged(false);
        }
    }, [])

    const signIn = useCallback(() => {
        setUserLogged(true);
        localStorage.setItem('casanje-web-token', 'user-token');

        return true
    }, [])

    const signOut = useCallback(() => {
        localStorage.removeItem('casanje-web-token');
        setUserLogged(false);
    }, [])

    return (
        <AuthContext.Provider
            value={{
                USER_LOGGED: userLogged,
                signIn,
                signOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }

    return context
}
