import { Component } from "@angular/core";

@Component({
    selector:'app-hero-news',
    templateUrl:'./heroNews.html',
    styleUrls: ['./heroNews.css'],
})

export class HeroNews {
    currentTime: string = new Date().toLocaleTimeString();
    currentDate: string = new Date().toLocaleDateString();
}