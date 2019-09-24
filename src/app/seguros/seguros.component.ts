import { Component, OnInit, Output, EventEmitter, ViewEncapsulation, Inject } from '@angular/core';
import { Router, RouteConfigLoadStart, NavigationEnd, NavigationCancel, NavigationError, Event } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { environment } from '../../environments/environment';

declare const APP_EVENT_BUS;
const BASE_HREF = "/";

@Component({
  templateUrl: './seguros.component.html',
  styleUrls: ['./seguros.component.css', '../../styles.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SegurosComponent implements OnInit {

  private isChangedBaseHrefDefault: boolean = false;

  constructor(private router: Router,
    @Inject(DOCUMENT) private document: Document) {
    this.subEventsRouter();
  }


  private subEventsRouter() {
    
    if (environment.production)
    {
      this.router.events.subscribe((event: Event) => {

        if (event instanceof RouteConfigLoadStart) 
        {
          this.setTagBaseHref("/app-seguros/");
        }
        else if (event instanceof NavigationEnd) 
        {
          this.setTagBaseHrefDefault();
        }
        else if (event instanceof NavigationCancel) 
        {
          this.setTagBaseHrefDefault();
        }
        else if (event instanceof NavigationError)
        {
          this.setTagBaseHrefDefault();
        }
      });
    }
  }

  private getTagBaseHref(): HTMLBaseElement {
    const base = this.document.getElementsByTagName("base");

    if (base && base.length)
    {
      return base[0];
    }
  }

  /**
   * 
   * @param url 
   */
  private setTagBaseHref(url: string) {
    if (url)
    {
      this.getTagBaseHref().href = url;
      this.isChangedBaseHrefDefault = true;
    }
  }

  private setTagBaseHrefDefault() {
    if (this.isChangedBaseHrefDefault)
    {
      const base = this.getTagBaseHref();

      if (base)
      {
        base.href = BASE_HREF;
      }

      this.isChangedBaseHrefDefault = false;
    }
  }

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
