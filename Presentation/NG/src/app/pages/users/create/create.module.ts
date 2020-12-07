import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CreateRouting } from './create.routing';
import { CreateComponent } from './create.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [CreateComponent],
  imports: [
    CommonModule, 
    RouterModule, 
    CreateRouting, 
    FormsModule,
    BsDropdownModule
  ],
})
export class CreateModule {}
