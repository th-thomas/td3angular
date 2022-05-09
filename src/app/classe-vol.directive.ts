import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appClasseVol]'
})
export class ClasseVolDirective {

  constructor(private el: ElementRef) {}

  @Input() appClasseVol!: string;


  colorize(): void {
    var color: string;
    switch (this.appClasseVol) {
      case 'BUSINESS':
        color = 'red';
        break;
      case 'PREMIUM':
        color = 'green';
        break;
      default:
        color = 'blue';
    }
    this.el.nativeElement.style.color = color;
  }

  ngOnInit(): void {
    this.colorize();
  }
}
