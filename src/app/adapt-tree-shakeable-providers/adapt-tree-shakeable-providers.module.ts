import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeShakeableProvidersModule } from '../tree-shakeable-providers/tree-shakeable-providers.module';

@NgModule({
  imports: [
    CommonModule,
    TreeShakeableProvidersModule
  ]
})
export class AdaptTreeShakeableProvidersModule { }
