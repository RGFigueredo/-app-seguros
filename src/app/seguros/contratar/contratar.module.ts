import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContratarComponent } from './contratar.component';
import {MatRadioModule} from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        component:ContratarComponent
      }
    ]),
    MatRadioModule,
    MatButtonModule
  ],
  declarations: [ContratarComponent]
})
export class ContratarModule { }
