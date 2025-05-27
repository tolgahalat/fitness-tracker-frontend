import {Component, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';

import {Menubar} from 'primeng/menubar';
import {LayoutService} from './services/layout.service';
import {Button} from 'primeng/button';

interface MenuItem {
  label: string;
  icon: string;
  routerLink: string;
  style?: { color: string };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, Menubar, Button],
  standalone: true
})
export class AppComponent implements OnInit {

  toggleDarkMode() {
    this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
  }

  menuItems: any[] = [];
  activeRoute: string = '';

  constructor(private router: Router,
              public layoutService: LayoutService) {
    this.router.events.subscribe(() => {
      this.activeRoute = this.router.url;
      this.updateMenuItems(); // yeniden oluştur
    });
  }

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Exercises',
        routerLink: '/exercises',
        styleClass: this.getActiveClass('/exercises'),
      },
      {
        label: 'Users',
        routerLink: '/users',
        styleClass: this.getActiveClass('/users'),
      },
      {
        label: 'Functions',
        routerLink: '/functions',
        styleClass: this.getActiveClass('/functions'),
      }
    ];
  }

  getActiveClass(path: string): string {
    return this.activeRoute === path ? 'active-menu-item' : '';
  }

  updateMenuItems() {
    this.menuItems = [
      {
        label: 'Exercises',
        routerLink: '/exercises',
        styleClass: this.getActiveClass('/exercises'),
      },
      {
        label: 'Users',
        routerLink: '/users',
        styleClass: this.getActiveClass('/users'),
      },
      {
        label: 'Functions',
        routerLink: '/functions',
        styleClass: this.getActiveClass('/functions'),
      }
    ];
  }

  // isDarkMode = true;
  //
  // toggleDarkMode() {
  //   this.isDarkMode = !this.isDarkMode;
  //   document.body.classList.toggle('app-dark', this.isDarkMode);
  //   this.updateMenuItemsStyle();
  // }
  //
  // updateMenuItemsStyle() {
  //   this.menuItems.forEach(item => {
  //     item.style = {color: this.isDarkMode ? '#ffffff' : '#000000'};
  //   });
  // }
}
