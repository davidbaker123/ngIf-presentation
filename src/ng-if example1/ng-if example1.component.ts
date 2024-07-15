import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-ng-if-example1',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './ng-if example1.component.html',
  styleUrl: './ng-if example1.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgIfExample1Component { }
