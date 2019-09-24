import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { SegurosComponent } from './seguros/seguros.component';
import { createCustomElement } from '@angular/elements';
import { RouterModule, Router, RouteConfigLoadStart } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CotacaoComponent } from './seguros/cotacao/cotacao.component';
import { CotacaoModule } from './seguros/cotacao/cotacao.module';
import { ContratarModule } from './seguros/contratar/contratar.module';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    SegurosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CotacaoModule,
    ContratarModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'cotacao'
        },
        {
          path: 'cotacao',
          component: CotacaoComponent
        },
        {
          path: 'contratar/:value',
          loadChildren: () => import('./seguros/contratar/contratar.module').then(m => m.ContratarModule)
        }
      ]
    )
  ],
  
  providers: [ ],
  entryComponents: [SegurosComponent]
  /*   bootstrap: [SegurosComponent] */
})
export class AppModule {
	contructor() {

	}
  constructor(private injector: Injector, router: Router) {
    router.events.subscribe(event => {
			if (event instanceof RouteConfigLoadStart) {
      console.log(">>>> change before... " + event.route.path)
      //event.route.path = "/app-seguros/" +  event.route.path;
      console.log(">>>>> change after... " + event.route.path);
      //event.route.canLoad
			}
		});
   }

  ngDoBootstrap() {
    const appSeguros = createCustomElement(SegurosComponent, { injector: this.injector });
    customElements.define('app-seguros', appSeguros);
  }
}
