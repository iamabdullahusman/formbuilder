import { NgModule } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FormbuilderComponent } from './components/formbuilder/formbuilder.component';

const routes: Routes = [
  {path:'formbuilder',component:FormbuilderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
