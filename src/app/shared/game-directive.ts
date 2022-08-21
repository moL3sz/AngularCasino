import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[gameProvider]',
})
export class GameDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
