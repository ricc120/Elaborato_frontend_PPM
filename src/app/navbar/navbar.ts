import { Component, signal } from "@angular/core";
import { CommonModule } from "@angular/common";

interface NavItem {
  label: string;
  path: string;
  icon?: string;
}

@Component({
    selector: 'app-navbar',
    imports: [CommonModule],
    templateUrl: './navbar.html',
    styleUrls: ['./navbar.css']
})

export class Navbar {
  isNavCollapsed = signal(true);
  
  navItems: NavItem[] = [
    { label: 'Local', path: '/local', icon: 'bi-geo-alt' },
    { label: 'Sports', path: '/sports', icon: 'bi-trophy' },
    { label: 'Opinion', path: '/opinion', icon: 'bi-chat-quote' },
    { label: 'Life', path: '/life', icon: 'bi-heart' },
    { label: 'Entertainment', path: '/entertainment', icon: 'bi-film' },
    { label: 'Business', path: '/business', icon: 'bi-briefcase' },
    { label: 'Politics', path: '/politics', icon: 'bi-building' },
  ];

  toggleNav() {
    this.isNavCollapsed.set(!this.isNavCollapsed());
  }
}