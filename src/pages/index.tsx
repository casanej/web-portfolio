import React, { lazy, ReactElement, Suspense, useEffect, useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { DrawerMenu } from 'structure';
import { routes } from './routes';

export const AppPages = (): ReactElement => {

    const Login = lazy(() => import('./login').then((module) => ({ default: module.Login })));

    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='' element={<DrawerMenu routes={routes}>
                        <Routes>
                            {
                                routes.map((route) => <Route key={route.path} path={route.reactPath} element={route.component} />)
                            }
                            <Route
                                path='*'
                                element={
                                    <main style={{ padding: '1rem' }}>
                                        <p>There nothing here!</p>
                                    </main>
                                }
                            />
                        </Routes>
                    </DrawerMenu>} >
                        {
                            routes.map((route) => <Route key={route.path} path={route.reactPath} element={route.component} />)
                        }
                        <Route
                            path='*'
                            element={
                                <main style={{ padding: '1rem' }}>
                                    <p>There nothing here!</p>
                                </main>
                            }
                        />
                    </Route>
                    {/* <RouteProtected path='/login' element={Login} />
                    <RouteProtected path='/' isPrivate>
                        <DrawerMenu routes={routes} />
                        <Route>
                            {
                                routes.map((route) => <RouteProtected key={route.path} path={route.reactPath} exact>{route.component}</RouteProtected>)
                            }
                            <RouteProtected path='/404' exact><div>PAGE NOT FOUND</div></RouteProtected>
                            <Navigate to='/404' />
                        </Route>
                    </RouteProtected> */}
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};
