import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-ng-if-example3',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './ng-if example3.component.html',
  styleUrl: './ng-if example3.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgIfExample3Component { 
counter = 0;

increase(){
 ++this.counter;
}
}

