import { Component, ElementRef } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-loader-svg',
  templateUrl: './loader-svg.component.html',
  styleUrls: ['./loader-svg.component.scss'],
})
export class LoaderSvgComponent {
  private toggle = true;
  private subscription: Subscription = new Subscription();

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit() {
    const path = this.elRef.nativeElement.querySelector('path');

    this.subscription = interval(1000).subscribe(() => {
      if (this.toggle) {
        path.setAttribute('stroke-dasharray', '1px 1px');
      } else {
        path.setAttribute('stroke-dasharray', '0.0px 1px');
      }
      this.toggle = !this.toggle; // Toggle the flag
    });
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
