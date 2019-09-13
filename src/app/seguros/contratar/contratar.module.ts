import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContratarComponent } from './contratar.component';
import {MatRadioModule} from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatRadioModule,
    MatButtonModule
  ],
  declarations: [ContratarComponent]
})
export class ContratarModule { }
