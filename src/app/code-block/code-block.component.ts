import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-code-block',
  standalone: true,
  imports: [],
  templateUrl: './code-block.component.html',
})
export class CodeBlockComponent {
  @Input() lines: LineEntry[] | undefined;
}

export interface LineEntry {
  text: string;
  prefix?: string;
  type?: LineEntryType | string;
}

// define line entry types as an enum
export enum LineEntryType {
  standard = '',
  info = 'text-info',
  success = 'text-success',
  warning = 'text-warning',
  error = 'text-error',
}
