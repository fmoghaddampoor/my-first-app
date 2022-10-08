import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServerComponent} from "./server/server.component";
import {PanelsComponent} from './panels/panels.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    PanelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
