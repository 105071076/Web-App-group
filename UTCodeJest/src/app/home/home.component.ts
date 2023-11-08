
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Properties for two-way data binding
  // Replace 'modelName' with the appropriate variable names
  modelName: string = '';
  modal: any;

  constructor() { }

  ngOnInit(): void {
  }

  // Placeholder for potential API calls in the future
  callApi() {
    // TODO: Implement API call logic here
  }



  clickQuestions () {
    this.modal = document.getElementById("AskQuestionModal");
    this.modal.style.display = "block";
  }
}
