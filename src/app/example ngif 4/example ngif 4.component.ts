import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-example-ngif-4',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './example ngif 4.component.html',
  styleUrl: './example ngif 4.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleNgif4Component {
  email= '';
  isValidEmail= false;

  checkEmail(emailInput: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.isValidEmail = emailRegex.test(emailInput);
  }
}
