import { Component, OnInit, Output, EventEmitter, ViewEncapsulation, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { RouterService } from './shared/router.service';

declare const APP_EVENT_BUS;


@Component({
  templateUrl: './seguros.component.html',
  styleUrls: ['./seguros.component.css', '../../styles.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SegurosComponent implements OnInit {

  constructor(private router: Router, private routerService: RouterService) {}


  @Output()
  public emitTypeSeguro = new EventEmitter<number>();




  ngOnInit() {
    //this.emitEvent();
    this.router.navigate(['cotacao']);

    this.routerService.subEventsRouter();
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
