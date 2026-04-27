import { Component } from "@angular/core";
import { AdBannerComponent } from "../ad-banner/ad-banner";
import { ApColumnComponent } from "../ap-column/ap-column";
import { CategoryBlockComponent } from "../category-block/category-block";
import { NumberedListComponent } from "../numbered-list/numbered-list";
import { EssentialOpinions } from "../essential-opinions/essential-opinions";
import { MustNews } from "../must-news/must-news";
import { Footer } from "../footer/footer";
import { Navbar } from "../navbar/navbar";
import { TopBar } from "../top-bar/top-bar";
@Component({
    selector:'app-hero-news',
    templateUrl:'./hero-news.html',
    styleUrls: ['./hero-news.css'],
    imports: [AdBannerComponent, ApColumnComponent, CategoryBlockComponent, NumberedListComponent, EssentialOpinions, MustNews, Footer,Navbar,TopBar],
})

export class HeroNews {
    currentDateTime = new Date();
    currentTime = new Date().getTime;
    currentDate = new Date().getDate;
}