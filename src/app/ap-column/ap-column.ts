import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ap-column',
  templateUrl: './ap-column.html',
  styleUrls: ['./ap-column.css'],
})
export class ApColumnComponent {
  @Input() title: string = '';
  @Input() hideBorderRight: boolean = false; // Per togliere il bordo all'ultima colonna
}