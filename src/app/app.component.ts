import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    {{ classMap | json }}
    <!-- this won't report error -->
    <app-test [classMap]="classMap"></app-test>
  `,
  host: {
    // this would report error
    '[class]': 'classMap'
  }
})
export class AppComponent implements AfterViewInit {
  classMap = {
    test: true
  };
  ngAfterViewInit(): void {
    this.classMap = {
      test: true
    };
  }
}
