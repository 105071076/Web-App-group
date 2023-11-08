
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  activeLink: string = '';
  profileSearchQuery: string = '';
  constructor() { }

  setActiveLink(link: string): void {
    this.activeLink = link;
  }
}
