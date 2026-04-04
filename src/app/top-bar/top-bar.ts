import { Component, signal } from "@angular/core";
import { DatePipe, CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-top-bar',  
    imports: [DatePipe, CommonModule, FormsModule],  
    templateUrl: './top-bar.html',
    styleUrls: ['./top-bar.css']
})

export class TopBar {  
  currentDate = new Date();
  currentTime = new Date().toLocaleTimeString();
  searchQuery = signal('');
  isSearchFocused = signal(false);
  
  onSearchChange(value: string) {
    this.searchQuery.set(value);
  }
  
  onSearch(e: Event) {
    e.preventDefault();
    if (this.searchQuery()) {
      console.log('Searching for:', this.searchQuery());
    }
  }
}