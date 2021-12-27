import React, { ReactElement, useEffect } from 'react'
import { ContainerStyled } from './index.style';

interface Props {
    children: ReactElement | ReactElement[];
}

export const Container = (props: Props): ReactElement => {

    return (
        <ContainerStyled>
            {props.children}
        </ContainerStyled>
    );
};
