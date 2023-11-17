import { Component } from '@angular/core';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent {

// ... other properties ...

  liked: boolean = false; // Variable to track whether the button is liked
  toggleLike(): void {
    this.liked = !this.liked; // Toggle the liked state
  }

  userComment = ''; // For the new comment input by the user
  comments: { text: string; order: number; }[] = []; // Initialize as an empty array
  orderCounter = this.comments.length + 1; // Initialize the order counter to the highest value

  constructor() {}

  addComment(): void {
    if (this.userComment.trim()) {  
      // Create a new comment object with text and order number
      const newComment = {
        text: this.userComment,
        order: this.orderCounter++,

      };

      // Add the new comment to the beginning of the comments array
      this.comments.unshift(newComment);
      this.userComment = '';
    }
  }  


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