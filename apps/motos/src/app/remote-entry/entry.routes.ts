import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntryComponent,
    children: [
      {
        path: 'deportivas',
        loadChildren: () =>
          import('../pages/deportivas/deportivas.module').then(
            (m) => m.DeportivasModule
          ),
      },
      {
        path: 'scooter',
        loadChildren: () =>
          import('../pages/scooter/scooter.routes').then(
            (m) => m.scooterRoutes
          ),
      },
      {
        path: 'naked',
        loadComponent: () =>
          import('../pages/naked/naked.component').then(
            (m) => m.NakedComponent
          ),
      },
    ],
  },
];
