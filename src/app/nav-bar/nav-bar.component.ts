import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  templateUrl: './nav-bar.component.html',
  imports: [
    NgClass,
    RouterLink,
    RouterLinkActive
  ]
})
export class NavBarComponent {
  @Input() background: string | undefined;
}
