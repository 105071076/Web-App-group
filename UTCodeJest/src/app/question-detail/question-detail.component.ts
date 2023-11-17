import { Component } from '@angular/core';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent {
  userComment = ''; // For the new comment input by the user
  comments: string[] = []; // Initialize the comments as an empty array

  constructor() {}

  addComment(): void {
    if (this.userComment.trim()) { // Check if the comment is not just empty spaces
      this.comments.push(this.userComment); // Add the comment to the comments array
      this.userComment = ''; // Clear the input field
    }
  }

  // ... other methods ...
}




/* --> if we want to store the comments even after a page refresh, we can save it to 
the local storage


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {
  userComment = '';
  comments: string[] = [];

  ngOnInit() {
    this.loadComments();
  }

  loadComments(): void {
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      this.comments = JSON.parse(storedComments);
    }
  }

  addComment(): void {
    if (this.userComment.trim()) {
      this.comments.push(this.userComment);
      localStorage.setItem('comments', JSON.stringify(this.comments));
      this.userComment = '';
    }
  }

  // ... other methods ...
}

*/ 