import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClasseBagageWarning]'
})
export class ClasseBagageWarningDirective {

  constructor(private el: ElementRef) { }

  @Input() appClasseBagageWarning!: string;
  @Input() nbBagages!: number;

  displayWarning(): void {
    let standardWarning: boolean = this.appClasseBagageWarning == 'STANDARD' && this.nbBagages > 1;
    let businessWarning: boolean = this.appClasseBagageWarning == 'BUSINESS' && this.nbBagages > 2;
    let premiumWarning: boolean = this.appClasseBagageWarning == 'PREMIUM' && this.nbBagages > 3;
    if (standardWarning || businessWarning || premiumWarning) {
      this.el.nativeElement.style.backgroundColor = 'red';
    }
  }

  ngOnInit(): void {
    this.displayWarning();
  }
}
