import { Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import React, { ReactElement, useEffect } from 'react'

interface Props {
    label: string;
    loading?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}

export const InputButton = (props: Props): ReactElement => {
    const handleOnClick = () => {
        if (props.onClick) props.onClick();
    }

    if (props.loading !== undefined) {
        return (
            <LoadingButton
                disabled={props.disabled}
                loading={props.loading}
                onClick={handleOnClick}
            >
                {props.label}
            </LoadingButton>
        )
    }

    return (
        <Button variant='contained' fullWidth disabled={props.disabled} onClick={handleOnClick}>{props.label}</Button>
    );
};
