import { Component } from "@angular/core";
import { AdBannerComponent } from "../ad-banner/ad-banner";
import { ApColumnComponent } from "../ap-column/ap-column";
import { CategoryBlockComponent } from "../category-block/category-block";
import { NumberedListComponent } from "../numbered-list/numbered-list";

@Component({
    selector:'app-hero-news',
    templateUrl:'./hero-news.html',
    styleUrls: ['./hero-news.css'],
    imports: [AdBannerComponent, ApColumnComponent, CategoryBlockComponent, NumberedListComponent],
})

export class HeroNews {
    currentTime: string = new Date().toLocaleTimeString();
    currentDate: string = new Date().toLocaleDateString();
}