import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ag-lib',
  template: `
    <p>
      This is a reusable component from ag-lib used in project:  {{projectName}}
    </p>
  `,
  styles: [
  ]
})
export class AgLibComponent implements OnInit {

  @Input() projectName = '';

  constructor() { }

  ngOnInit(): void {
  }

}
