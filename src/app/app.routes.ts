import {Routes} from '@angular/router';
import {IntroPageComponent} from './intro-page/intro-page.component';
import {ResumePageComponent} from './resume-page/resume-page.component';

export const routes: Routes = [
  {path: 'intro', component: IntroPageComponent},
  {path: 'resume', component: ResumePageComponent},
];
