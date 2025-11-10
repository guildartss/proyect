import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home')
    },
    {
        path: 'stock',
        loadComponent: () => import('./pages/stock/stock')
    },
    {
        path: 'users',
        loadComponent: () => import('./pages/users/users')
    },
    {
        path: '**',
        redirectTo: ''
    }
];
