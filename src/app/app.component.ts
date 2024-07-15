import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIfExample1Component } from '../ng-if example1/ng-if example1.component';
import { NgIfExample2Component } from './ng-if example2/ng-if example2.component';
import { NgIfExample3Component } from './ng-if example3/ng-if example3.component';
import { ExampleNgif4Component } from './example ngif 4/example ngif 4.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIfExample1Component,NgIfExample2Component,NgIfExample3Component,ExampleNgif4Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngif-presentation';
}
