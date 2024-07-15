import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-ng-if-example2',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './ng-if example2.component.html',
  styleUrl: './ng-if example2.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgIfExample2Component {
  showText = true;
 }
