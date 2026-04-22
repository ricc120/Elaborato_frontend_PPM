import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdBannerComponent } from "../ad-banner/ad-banner";

@Component({
    selector: 'app-must-news',
    templateUrl: './must-news.html',
    styleUrl: './must-news.css',
    imports: [CommonModule,AdBannerComponent],
})

export class MustNews {
    @Input() title: string = '';
    @Input() contentType: 'photo' | 'label' = 'photo';
    @Input() showButton: boolean = true
}