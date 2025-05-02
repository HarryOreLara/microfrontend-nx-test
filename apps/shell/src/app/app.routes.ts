import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'concesionarias',
    loadChildren: () =>
      import('concesionarias/Routes').then((m) => m.remoteRoutes),
  },
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
