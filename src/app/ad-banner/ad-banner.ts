import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-ad-banner',
    templateUrl: './ad-banner.html',
    styleUrls: ['./ad-banner.css'],
})

export class AdBannerComponent {
    @Input() size: string = '';
    @Input() wrapperClass: string = '';
}