import { Component } from "@angular/core";
import { AdBannerComponent } from "../ad-banner/ad-banner";
import { ApColumnComponent } from "../ap-column/ap-column";
import { CategoryBlockComponent } from "../category-block/category-block";
import { NumberedListComponent } from "../numbered-list/numbered-list";
import { EssentialOpinions } from "../essential-opinions/essential-opinions";
@Component({
    selector:'app-hero-news',
    templateUrl:'./hero-news.html',
    styleUrls: ['./hero-news.css'],
    imports: [AdBannerComponent, ApColumnComponent, CategoryBlockComponent, NumberedListComponent, EssentialOpinions],
})

export class HeroNews {
    currentDateTime = new Date();
    currentTime = new Date().getTime;
    currentDate = new Date().getDate;
}