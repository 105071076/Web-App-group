import { Component } from '@angular/core';

@Component({
  selector: 'app-forum-detail',
  templateUrl: './forum-detail.component.html',
  styleUrls: ['./forum-detail.component.css']
})
export class ForumDetailComponent {
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
