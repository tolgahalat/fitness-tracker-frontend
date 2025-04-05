import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

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
export class AppComponent {
  menuItems: MenuItem[] = [
    {label: 'Dashboard', icon: 'pi pi-home', routerLink: '/'},
    {label: 'Exercises', icon: 'pi pi-dumbbell', routerLink: '/exercises'},
    {label: 'Workout Log', icon: 'pi pi-calendar', routerLink: '/workout-log'}
  ];

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
