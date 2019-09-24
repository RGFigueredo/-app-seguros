import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CotacaoComponent } from './cotacao.component';
import {MatStepperModule} from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { CdkStepperModule } from '@angular/cdk/stepper';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  imports: [
    CommonModule,
    MatNativeDateModule,
    CdkStepperModule,
    MatStepperModule ,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  declarations: [CotacaoComponent]
})
export class CotacaoModule { }
