import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-numbered-list',
  templateUrl: './numbered-list.html',
  standalone: true,
  imports: [CommonModule]
})
export class NumberedListComponent {
  @Input() title: string = '';
  @Input() iconClass: string = '';
  @Input() iconColor: string = 'red';
  
  // Date/Time mockup
  currentDate = new Date();
}