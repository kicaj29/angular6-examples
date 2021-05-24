import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { TableColResizeComponent } from './table-col-resize/table-col-resize.component';

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
    path: 'tab-col-resize',
    component: TableColResizeComponent
  }
]

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
