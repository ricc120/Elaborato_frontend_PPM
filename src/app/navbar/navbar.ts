import { Component, ElementRef, HostListener, signal, ViewChild } from "@angular/core";
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

  isScrolled: boolean = false;
  drawerOpen = false;

  toggleDrawer() {
    this.drawerOpen = !this.drawerOpen;
    const article = document.querySelector('article');
      article?.classList.toggle('drawer-open', this.drawerOpen);

  }

  @ViewChild('mainNavbar') navbarElement!: ElementRef;
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.navbarElement) {  
      const navPosition = this.navbarElement.nativeElement.getBoundingClientRect().top;
      this.isScrolled = navPosition <= 0;
    }
  }
}