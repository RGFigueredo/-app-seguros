import { Inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router, RouteConfigLoadStart, NavigationEnd, NavigationCancel, NavigationError, Event } from '@angular/router';
import { DOCUMENT } from '@angular/common';

const BASE_HREF_PROJECT = "/app-seguros/";

@Injectable({
    providedIn: 'root'
})
export class RouterService
{
    private baseHREFCurrent:string;

    constructor(private router: Router, 
        @Inject(DOCUMENT) private document: Document){}
  

    public subEventsRouter() {

        if (environment.production)
        {
          this.router.events.subscribe((event: Event) => {
    
            if (event instanceof RouteConfigLoadStart) 
            {
              this.setTagBaseHref(BASE_HREF_PROJECT);
            }
            else if (event instanceof NavigationEnd) 
            {
              this.setTagBaseHrefCurrent();
            }
            else if (event instanceof NavigationCancel) 
            {
              this.setTagBaseHrefCurrent();
            }
            else if (event instanceof NavigationError)
            {
              this.setTagBaseHrefCurrent();
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
          this.baseHREFCurrent = this.getTagBaseHref().href;
          this.getTagBaseHref().href = url;
        }
      }
    
      private setTagBaseHrefCurrent() {
    
        const base = this.getTagBaseHref();
    
        if (base)
        {
          base.href = this.baseHREFCurrent;
        }
    
      }

}