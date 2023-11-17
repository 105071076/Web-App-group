import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  postTitle = '';
  postDescription = '';
  postTags = '';
  selectedFiles: FileList | null = null;
  selectedMedia: FileList | null = null;
  modal: any; // Declare the modal property

  constructor() { }

  ngOnInit(): void {
  }

  onFileChange(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      this.selectedFiles = fileList;
    }
  }

  onMediaChange(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      this.selectedMedia = fileList;
    }
  }

  submitPost() {
    // Here you will handle the form submission.
    // This typically involves preparing the data and sending it to a backend server.

    console.log('Form Submission', this.postTitle, this.postDescription, this.postTags);
    // If you have a backend server, you would send the data there.
    // Example: this.http.post('your-backend-endpoint', { title: this.postTitle, ... });
  }

  // Existing methods for modal handling...
  clickQuestion() {
    this.modal = document.getElementById("AskQuestionModal");
    this.modal.style.display = "block";
  }

  closeQuestion() {
    this.modal.style.display = "none";
  }

  clickDiscussion() {
    this.modal = document.getElementById("CreateDiscussionModal");
    this.modal.style.display = "block";
  }

  closeDiscussion() {
    this.modal.style.display = "none";
  }
}
