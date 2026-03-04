import { inject, runInInjectionContext } from '@angular/core';
import { Injector } from '@angular/core';
import { type CanActivateFn } from '@angular/router';
import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { HomeComponent } from './home/home.component';

const CORE_REMOTE = 'http://localhost:4203/remoteEntry.js';

const authGuard: CanActivateFn = (route, state) => {
  const inj = inject(Injector);
  return loadRemoteModule({
    type: 'module',
    remoteEntry: CORE_REMOTE,
    exposedModule: './AuthGuard',
  }).then((m) => runInInjectionContext(inj, () => m.authGuard(route, state)));
};

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'login',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: CORE_REMOTE,
        exposedModule: './LoginComponent',
      }).then((m) => m.LoginComponent),
  },
  {
    path: 'mfe1',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Component',
      }).then((m) => m.App),
    canActivate: [authGuard],
  },
  {
    path: 'mfe2',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './Component',
      }).then((m) => m.App),
    canActivate: [authGuard],
  },
];
