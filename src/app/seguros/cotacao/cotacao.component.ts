import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cotacao',
  templateUrl: './cotacao.component.html',
  styleUrls: ['./cotacao.component.css']
})
export class CotacaoComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  public value:string;

  constructor(private _formBuilder: FormBuilder, private router:Router) { }

  ngOnInit() 
  {  
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }



  calcValorCotacao()
  {
    this.value = (Math.random() * (5000 - 800) + 800).toLocaleString('pt-BR');
  }


  routerContratar()
  {
    this.router.navigate(['contratar', this.value])
  }
}
