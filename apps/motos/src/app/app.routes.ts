import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  // {
  //   path: '',
  //   // loadChildren: () => import('./remote-entry/entry.routes').then((m) => m.remoteRoutes),
  //   children:[]
  // },
  {
    path:'deportivas',
    loadChildren:()=>import('./pages/deportivas/deportivas.module').then((m)=>m.DeportivasModule)    
  },
  {
    path:'naked',
    loadChildren:()=>import('./pages/naked/naked.module').then((m)=>m.NakedModule)
  },
  {
    path:'scooter',
    loadChildren:()=>import('./pages/scooter/scooter.routes').then((m)=>m.scooterRoutes)
  }
];
