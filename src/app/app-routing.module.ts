import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteguardGuard } from './guards/routeguard.guard';

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((auth) => auth.AuthModule),
  },
  {
    path: 'admin',
    // canActivate: [RouteguardGuard],
    loadChildren: () =>
      import('./admin/admin.module').then((admin) => admin.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
