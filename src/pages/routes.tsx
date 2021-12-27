import React, { lazy } from 'react';
import { RouteObj } from 'models';

const CurriculumVitae = lazy(() => import('./curriculum-vitae').then((module) => ({ default: module.CurriculumVitae })));

export const routes: RouteObj[] = [
    {
        title: 'Home',
        path: '/',
        reactPath: '/',
        icon: 'home',
        component: <div>Home</div>,
        showOnSidebar: true
    },
    {
        title: 'Currículo Detalhado',
        path: '/detailed-curriculum',
        reactPath: '/detailed-curriculum',
        icon: 'receipt',
        component: <CurriculumVitae />,
        showOnSidebar: true
    },
    {
        title: 'Tecnologias',
        path: '/technologies',
        reactPath: '/technologies',
        icon: 'fileCode',
        component: <div>Tecnologias</div>,
        showOnSidebar: true
    },
    {
        title: 'Trajetória',
        path: '/planning',
        reactPath: '/planning',
        icon: 'route',
        component: <div>Planejamento</div>,
        showOnSidebar: true
    },
    {
        title: 'Contato',
        path: '/contact',
        reactPath: '/contact',
        icon: 'envelope',
        component: <div>Contato</div>,
        showOnSidebar: true
    },
];