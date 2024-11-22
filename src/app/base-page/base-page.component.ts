import {Component} from '@angular/core';
import {NavBarComponent} from '../nav-bar/nav-bar.component';
import {ProfileImageComponent} from '../profile-image/profile-image.component';
import {SocialMediaComponent} from '../social-media/social-media.component';

@Component({
  selector: 'app-base-page',
  standalone: true,
  imports: [
    NavBarComponent,
    ProfileImageComponent,
    SocialMediaComponent
  ],
  templateUrl: './base-page.component.html',
})
export class BasePageComponent {

}
