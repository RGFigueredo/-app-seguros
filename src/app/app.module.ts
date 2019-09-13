import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { SegurosComponent } from './seguros/seguros.component';
import { createCustomElement } from '@angular/elements';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CotacaoComponent } from './seguros/cotacao/cotacao.component';
import { CotacaoModule } from './seguros/cotacao/cotacao.module';
import { ContratarModule } from './seguros/contratar/contratar.module';
import { ContratarComponent } from './seguros/contratar/contratar.component';

@NgModule({
  declarations: [
    SegurosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CotacaoModule,
    ContratarModule,
    MatCardModule,
    MatButtonModule,
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
          component: ContratarComponent
        }
      ]
    )
  ],
  providers: [],
  entryComponents: [SegurosComponent]
  /*   bootstrap: [SegurosComponent] */
})
export class AppModule {

  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const appSeguros = createCustomElement(SegurosComponent, { injector: this.injector });
    customElements.define('app-seguros', appSeguros);
  }
}
