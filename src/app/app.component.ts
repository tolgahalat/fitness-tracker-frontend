import {Component, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';

import {Menubar} from 'primeng/menubar';

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
  imports: [RouterOutlet, Menubar],
  standalone: true
})
export class AppComponent implements OnInit {
  // menuItems: MenuItem[] = [
  //   {label: 'Dashboard', icon: 'pi pi-home', routerLink: '/'},
  //   {label: 'Exercises', icon: 'pi pi-dumbbell', routerLink: '/exercises'},
  //   {label: 'Workout Log', icon: 'pi pi-calendar', routerLink: '/workout-log'}
  // ];

  menuItems: any[] = [];
  activeRoute: string = '';

  constructor(private router: Router) {
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
