import { Component, OnInit } from '@angular/core';
interface Question {
  id: number;
  type: string;
  label: string;
  required: boolean;
  options: string[];
  multiple?: boolean;
  showOptions?: boolean;

}
@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrl: './formbuilder.component.css'
})
export class FormbuilderComponent implements OnInit {
  questions: Question[] = [];
  selectedAnswerType: string = '';
  showAlert: boolean = false;
  ngOnInit(): void {
    const storedFormData = localStorage.getItem('form-data');
    if (storedFormData) {
      this.questions = JSON.parse(storedFormData);
    }
  }


  addQuestion() {
    const newQuestion: Question = {
      id: this.questions.length + 1,
      type: 'text',
      label: '',
      required: false,
      options: [],
      multiple: false
    };
    this.questions.push(newQuestion);
  }

  removeQuestion(index: number) {
    this.questions.splice(index, 1);
  }
  onBack(): void {
    console.log('onBack');
  }
  onQuestionTypeChange(question: Question) {
    if (question.type === 'radio' || question.type === 'checkbox') {
      question.options = [''];
    } else {
      question.options = [];
    }
  }

  addOption(question: Question) {
    question.options = question.options || [];
    question.options.push('');
  }

  removeOption(question: Question, index: number) {
    question.options = question.options || [];
    question.options.splice(index, 1);
  }

  onSubmit(): void {
    console.log('onSubmit');
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
    }, 60000);
    // Hide the alert after 3 seconds
    const formData = JSON.stringify(this.questions);
    localStorage.setItem('form-data', formData);
  }

}
