import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'templateDrivenForm';
  name: any;
  email: any;
  password: any;

  onSubmit(data: NgForm) {
    if (data.valid) {
      console.log(data.value);
    }
  }
}
