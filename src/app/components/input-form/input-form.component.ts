import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {
  text: string;
  showSuccessMessage: boolean = false;
  showErrorMessage: boolean = false;
  successMessage: string = 'Your application was submitted!';
  errorMessage: string = 'Oops, something went wrong!';

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formData) {
    this.showSuccessMessage = true;
    formData.reset()
  }

}
