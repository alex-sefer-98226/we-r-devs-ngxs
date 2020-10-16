import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {AboutUsComponent} from './containers/about-us/about-us.component';
import {HomePageModule} from './containers/home-page/home-page.module';
import {NgxsModule} from '@ngxs/store';
import {environment} from '../environments/environment';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {ModalState} from './store/modal.state';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomePageModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
