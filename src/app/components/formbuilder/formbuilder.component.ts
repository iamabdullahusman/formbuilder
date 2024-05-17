import { Component } from '@angular/core';

interface Question {
  id: number;
  type: string;
  label: string;
  required: boolean;
  options?: string[];
  multiple?: boolean;
  showOptions?: boolean; 
}
@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrl: './formbuilder.component.css'
})
export class FormbuilderComponent {
  questions: Question[] = [];
  
 

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

}
