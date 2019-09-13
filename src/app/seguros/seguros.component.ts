import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

declare const APP_EVENT_BUS;

@Component({
  templateUrl: './seguros.component.html',
  styleUrls: ['./seguros.component.css']
})
export class SegurosComponent implements OnInit {


  constructor(private router: Router) { }

  @Output()
  public emitTypeSeguro = new EventEmitter<number>();




  ngOnInit() {
    //this.emitEvent();
    this.router.navigate(['cotacao'])
  }


  emitEvent() {
    try
    {
      if (APP_EVENT_BUS)
      {
        const subscription = APP_EVENT_BUS.subscribe('eventTeste', arg => console.log(">>> dentro do seguros...", arg));
      }
    }
    catch (e)
    {
      console.log(e);
    }
  }

}
