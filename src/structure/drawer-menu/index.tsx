import { RouteObj } from 'models';
import React, { ReactElement, ReactNode, useEffect } from 'react'
import { DrawerMenuDesktop } from './components';

interface Props {
    routes: RouteObj[];
}

export const DrawerMenu = (props: Props): ReactElement => {
    return (
        <DrawerMenuDesktop routes={props.routes} />
    );
};
