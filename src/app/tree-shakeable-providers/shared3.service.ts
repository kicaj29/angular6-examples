import { Injectable } from '@angular/core';

console.log('Shared3Service bundled even though not used because it is provided directly in AppModule');

@Injectable()
export class Shared3Service {
  constructor() { }
}
