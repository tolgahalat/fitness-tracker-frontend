import { Component } from '@angular/core';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-demo',
  imports: [ButtonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss',
  standalone: true,
})
export class DemoComponent {

}
