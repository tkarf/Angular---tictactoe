import { Component, Input } from '@angular/core';
//OnInit = Lifecykel hook - allows you to run code when the app is initialized 

//Component decorator - Every components start with component decorator (start with @)
//Allows us to pass in an object that configures the way the component behave.


@Component({
  selector: 'app-square',
  template: `
    <button nbButton *ngIf="!value">{{ value }}</button>
    <button nbButton hero status="success" *ngIf="value == 'X'">{{ value }}</button>
    <button nbButton hero status="info" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }']
})
export class SquareComponent  {

  @Input() value: 'X' | 'O';

}

//Example of OnInit lifecykel hook

// export class SquareComponent implements OnInit {
//   constructor() { }1
//   ngOnInit(): void {
//   }
// }
