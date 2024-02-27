import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/inapp-page/inapp-page.component').then(
        (c) => c.InappPageComponent,
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login-page/login-page.component').then(
        (c) => c.LoginPageComponent,
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
]
