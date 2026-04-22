import { Component, HostListener } from "@angular/core";
import { CommonModule } from "@angular/common";


@Component({
    selector: 'app-footer',
    templateUrl: './footer.html',
    styleUrl: './footer.css',
    imports: [CommonModule],

})

export class Footer {
  showScrollButton: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset > 50) {
      this.showScrollButton = true;
    } else {
      this.showScrollButton = false;
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}