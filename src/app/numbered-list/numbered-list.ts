import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-numbered-list',
  templateUrl: './numbered-list.html',
  styleUrl: './numbered-list.css',
  standalone: true,
  imports: [CommonModule, DatePipe]
})
export class NumberedListComponent {
  @Input() title: string = '';
  @Input() iconClass: string = '';
  @Input() iconColor: string = 'red';
  
  currentDateTime = new Date();
}