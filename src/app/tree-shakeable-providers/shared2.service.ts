import { Injectable } from '@angular/core';

console.log('Shared2Service is not bundled because it not used and providedIn is used');

@Injectable({
  providedIn: 'root'
})
export class Shared2Service {
  constructor() { }
}
