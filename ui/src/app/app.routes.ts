import { Routes } from '@angular/router';
import { authGuard } from './core/auth/auth-guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'comptes' },
  {
    path: 'login',
    loadComponent: () => import('./features/login/login').then((m) => m.Login),
    title: 'Banque · connexion',
  },
  // TODO partie 2 : protéger ces routes avec une guard (canActivate).
  // TODO partie 3 : n'y laisser entrer que les bons rôles (data: { roles: [...] }).
  {
    path: 'comptes',
    loadComponent: () => import('./features/comptes/liste-comptes').then((m) => m.ListeComptes),
    title: 'Banque · comptes',
    canActivate: [authGuard],
  },
  {
    path: 'comptes/:id',
    loadComponent: () => import('./features/comptes/detail-compte').then((m) => m.DetailCompte),
    title: 'Banque · compte',
    canActivate: [authGuard],
  },
  { path: '**', redirectTo: 'comptes' },
];
