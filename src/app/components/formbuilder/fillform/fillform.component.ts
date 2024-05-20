import { Component, OnInit } from '@angular/core';
interface MCQ {
  text: string; // Question text
  options: { text: string; value: string }[]; // Array of option objects
}
@Component({
  selector: 'app-fillform',
  templateUrl: './fillform.component.html',
  styleUrl: './fillform.component.css'
})
export class FillformComponent implements OnInit {
  mcQuestions: MCQ[] = [];

  ngOnInit(): void {
    this.mcQuestions = [
      {
        text: 'What is your favorite color?',
        options: [
          { text: 'Red', value: 'red' },
          { text: 'Green', value: 'green' },
          { text: 'Blue', value: 'blue' },
          { text: 'Yellow', value: 'yellow' }
        ]
      },
      {
        text: 'What is your preferred programming language?',
        options: [
          { text: 'JavaScript', value: 'javascript' },
          { text: 'Python', value: 'python' },
          { text: 'Java', value: 'java' },
          { text: 'C++', value: 'cpp' }
        ]
      },
      {
        text: 'What is your favorite fruit?',
        options: [
          { text: 'Apple', value: 'apple' },
          { text: 'Orange', value: 'orange' },
          { text: 'Banana', value: 'banana' },
          { text: 'Other (please specify)', value: 'other' } // Option for "Other" with radio button
        ]
      },
      {
        text: 'Are you a morning person or a night owl?',
        options: [
          { text: 'Morning Person', value: 'morning' },
          { text: 'Night Owl', value: 'night' }
        ]
      }
    ];
  }
  onSubmit() {
    alert('Response added successfully!');
  }

}
