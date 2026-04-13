import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-block',
  templateUrl: './category-block.html',
  styleUrls: ['./category-block.css'],
  imports: [CommonModule],

})

export class CategoryBlockComponent {
    @Input() title: string = '';
    @Input() customColor: string = ''; 
}