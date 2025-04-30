import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'motos',
    loadChildren: () => import('motos/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    loadChildren: () => import('home/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
