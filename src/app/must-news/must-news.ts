import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-must-news',
    templateUrl: './must-news.html',
    styleUrl: './must-news.css',
    imports: [CommonModule],
})

export class MustNews {
    @Input() title: string = '';
    @Input() contentType: 'photo' | 'label' = 'photo';
    @Input() showButton: boolean = true
}