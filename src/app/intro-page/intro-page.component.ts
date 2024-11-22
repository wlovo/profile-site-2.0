import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {BasePageComponent} from '../base-page/base-page.component';
import {ProfileImageComponent} from '../profile-image/profile-image.component';
import {CodeBlockComponent, LineEntry, LineEntryType} from '../code-block/code-block.component';

@Component({
  selector: 'app-intro-page',
  standalone: true,
  imports: [
    BasePageComponent,
    NgOptimizedImage,
    ProfileImageComponent,
    CodeBlockComponent,
  ],
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.css'],
})
export class IntroPageComponent {
  lines: LineEntry[] = [
    {text: 'hello', prefix: '$', type: LineEntryType.standard},
    {text: 'Finished loading \'hello\'!', prefix: '>', type: 'text-emerald-500'},
  ];
}
