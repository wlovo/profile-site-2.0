import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {IntroPageComponent} from './intro-page/intro-page.component';
import {SocialMediaComponent} from './social-media/social-media.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IntroPageComponent, SocialMediaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'profile-site-2.0';
}
