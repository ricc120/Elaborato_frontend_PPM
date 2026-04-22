import { Component } from "@angular/core";
import { HeroNews } from "../hero-news/hero-news";
import { Footer } from "../footer/footer";

@Component({
    selector: 'app-main',
    imports: [HeroNews, Footer],
    templateUrl: './main.html',
    styleUrls: ['./main.css'],
    standalone: true,
})

export class Main {

}