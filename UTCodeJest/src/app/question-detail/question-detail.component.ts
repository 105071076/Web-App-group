import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css'],
})
export class QuestionDetailComponent {
  currPost: any;

  liked: boolean = false; // Variable to track whether the button is liked
  toggleLike(): void {
    this.liked = !this.liked; // Toggle the liked state
  }

  userComment = ''; // For the new comment input by the user
  comments: { text: string; order: number }[] = []; // Initialize as an empty array
  orderCounter = this.comments.length + 1; // Initialize the order counter to the highest value

  constructor(
    private postService: PostService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.currPost = this.postService.getPost();
    console.log(this.currPost);
  }

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

  getFileType(fileBase64: string): string {
    if (fileBase64.startsWith('data:image')) {
      return 'image';
    } else if (fileBase64.startsWith('data:application/pdf')) {
      return 'pdf';
    } else if (fileBase64.startsWith('data:text/plain')) {
      return 'text';
    }
    return 'unknown';
  }

  sanitizedUrl(fileBase64: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(fileBase64);
  }
}
