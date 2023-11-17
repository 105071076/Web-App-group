
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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

  userData: any;
  posts: any;
  constructor( private http: HttpClient, private router: Router,  private userService: UserService) { 
    this.userData = userService.getUser();
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.userData)

    this.http.post('http://localhost:5001/api/post/getUserPosts', this.userData)
    .subscribe(response => {
      this.posts = response;
      this.userService.setUser(this.userData);
      // Handle success - maybe navigate the user or display a success message
    }, error => {
      console.error(error);
      // Handle error - maybe display an error message to the user
    });
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
