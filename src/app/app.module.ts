import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { SegurosComponent } from './seguros/seguros.component';
import { createCustomElement } from '@angular/elements';
import { RouterModule } from '@angular/router';
import { ResidencialComponent } from './seguros/residencial/residencial.component';
import { ResidencialModule } from './seguros/residencial/residencial.module';
import { AutomotivoComponent } from './seguros/automotivo/automotivo.component';
import { AutomotivoModule } from './seguros/automotivo/automotivo.module';

@NgModule({
  declarations: [
    SegurosComponent
  ],
  imports: [
    BrowserModule,
    ResidencialModule,
    AutomotivoModule,
    RouterModule.forRoot(
      [
        {
           path : 'residencial',
           component:ResidencialComponent
        },
        {
          path : 'automotivo',
          component:AutomotivoComponent
       }        
      ]
    )
  ],
  providers: [],
  entryComponents: [SegurosComponent]
/*   bootstrap: [SegurosComponent] */
})
export class AppModule { 

  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const appSeguros = createCustomElement(SegurosComponent, { injector: this.injector });
    customElements.define('app-seguros', appSeguros);
  }
}
