import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export let appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tree-shakeable-providers'
  },
  {
    path: 'tree-shakeable-providers',
    loadChildren: './tree-shakeable-providers/tree-shakeable-providers.module#TreeShakeableProvidersModule'
  }
]

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
