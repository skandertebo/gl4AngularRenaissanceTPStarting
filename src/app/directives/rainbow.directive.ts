import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]',
  standalone: true
})
export class RainbowDirective {
  colors = [ 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet' ];
  constructor() { }
  @HostBinding('style.borderColor') bc=this.colors[0];
  @HostBinding('style.color') c=this.colors[0];

  ngOnInit() {
    this.bc = this.colors[0];
    this.c = this.colors[0];
  }

  @HostListener('keyup') onMouseEnter() {
    let index = Math.floor(Math.random() * this.colors.length);
    this.bc = this.colors[index];
    this.c = this.colors[index];
  }
}
