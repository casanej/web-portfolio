import { Typography, TypographyTypeMap } from '@mui/material';
import React, { ReactElement, ReactNode, useEffect } from 'react'

interface Props {
    children: string;
    type?: TypographyTypeMap['props']['variant'];
}

export const Text = (props: Props): ReactElement => {
    return (
        <Typography variant={props.type || 'body1'} >{props.children}</Typography>
    );
};
