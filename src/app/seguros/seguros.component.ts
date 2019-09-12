import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

declare const APP_EVENT_BUS;

@Component({
/*   selector: 'app-seguros', */
  templateUrl: './seguros.component.html',
  styleUrls: ['./seguros.component.css']
})
export class SegurosComponent implements OnInit {

  private _type:number;

  constructor(private router:Router) { }

  @Output()
  public emitTypeSeguro = new EventEmitter<number>();

  @Input()
  set type(typeParam:number)
  {
    console.log("typeParam " + typeParam);
    if(typeParam)
    {
      this._type = typeParam;
      this.routerType();
    }
  }

  routerType()
  {
     if(this._type)
     {
        if(this._type == 1)
        {
            this.router.navigate(['residencial']);
        }
        else if(this._type == 2)
        {
            this.router.navigate(['automotivo']);
        }
     }
      
  }

  emitType()
  {
    console.log("enviando tipo de seguro "+ this._type);
    this.emitTypeSeguro.emit(this._type);
  }

  ngOnInit() {

    if(APP_EVENT_BUS)
    {
      const subscription = APP_EVENT_BUS.subscribe('eventTeste', arg => console.log(">>> dentro do seguros...", arg));
    }
  }

}
