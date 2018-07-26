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
  },
  {
    path: 'adapt-tree-shakeable-providers',
    loadChildren: './adapt-tree-shakeable-providers/adapt-tree-shakeable-providers.module#AdaptTreeShakeableProvidersModule'
  }
]

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
