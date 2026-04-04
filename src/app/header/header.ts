import { Component } from "@angular/core";
import { Navbar } from "../navbar/navbar";
import { TopBar } from "../top-bar/top-bar";

@Component({
    selector: 'app-header',
    imports: [TopBar, Navbar],
    templateUrl: './header.html',
})

export class Header {
    
}