import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

declare const APP_EVENT_BUS;

@Component({
  selector: 'app-contratar',
  templateUrl: './contratar.component.html',
  styleUrls: ['./contratar.component.css']
})
export class ContratarComponent implements OnInit, OnDestroy {

  public value:string;
  private sub: Subscription;
  
  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.value = params['value']; 
    })

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


  public contratar()
  {
  
      try
      {
        if (APP_EVENT_BUS)
        {
          console.log(">>> message-success "); 
          APP_EVENT_BUS.publish('message-success', 'Seguro contrato com sucesso');

          console.log(">>> go-home "); 
          APP_EVENT_BUS.publish('go-home', '');
        }
      }
      catch (e)
      {
        console.log(e);
      }
    
  }

  public newCotacao()
  {
    this.router.navigate(['cotacao']);
  }



}
