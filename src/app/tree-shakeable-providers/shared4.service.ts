import { Injectable } from '@angular/core';
import { TreeShakeableProvidersModule } from './tree-shakeable-providers.module';

console.log('Shared4Service bundled');

@Injectable({
  providedIn: TreeShakeableProvidersModule
})
export class Shared4Service {
  constructor() { }
}
