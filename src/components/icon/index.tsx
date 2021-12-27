import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faChartPie, faCog, faCreditCard, faEnvelope, faFileCode, faHome, faMapSigns, faNewspaper, faReceipt, faRoute, faWallet } from '@fortawesome/free-solid-svg-icons';
import React, { ReactElement } from 'react';

export const iconNames = {
    chartLine: { svg: null, fontAwesome: faChartLine },
    chartPie: { svg: null, fontAwesome: faChartPie },
    cog: { svg: null, fontAwesome: faCog },
    creditCard: { svg: null, fontAwesome: faCreditCard },
    envelope: { svg: null, fontAwesome: faEnvelope },
    fileCode: { svg: null, fontAwesome: faFileCode },
    home: { svg: null, fontAwesome: faHome },
    mapSigns: { svg: null, fontAwesome: faMapSigns },
    newsPaper: { svg: null, fontAwesome: faNewspaper },
    receipt: { svg: null, fontAwesome: faReceipt },
    route: { svg: null, fontAwesome: faRoute },
    wallet: { svg: null, fontAwesome: faWallet },
}

interface Props {
    icon: keyof typeof iconNames;
}

export const Icon = (props: Props): ReactElement => {

    if (iconNames[props.icon].svg) {
        return <>
            {iconNames[props.icon].svg}
        </>
    }

    return (
        <FontAwesomeIcon icon={iconNames[props.icon].fontAwesome} size='2x' />
    );
};
