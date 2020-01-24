import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    {{ classMap | json }}
  `,
  host: {
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
