import { Component } from "@angular/core";
import { HeroNews } from "../hero-news/hero-news";

@Component({
    selector: 'app-main',
    imports: [HeroNews],
    templateUrl: './main.html',
    styleUrls: ['./main.css'],
    standalone: true,
})

export class Main {

}