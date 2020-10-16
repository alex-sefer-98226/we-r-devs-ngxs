import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HomePageComponent} from './home-page.component';
import {TitleComponent} from '../../components/title/title.component';
import {CalendarComponent} from '../../components/calendar/calendar.component';
import {NgxsModule} from '@ngxs/store';
import {ModalState} from '../../store/modal.state';
import {environment} from '../../../environments/environment';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {ModalComponent} from '../../components/modal/modal.component';

@NgModule({
  declarations: [
    HomePageComponent,
    TitleComponent,
    CalendarComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([ModalState], {
      developmentMode: !environment.production
    }),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [HomePageComponent, CalendarComponent, TitleComponent, ModalComponent],
  exports: [HomePageComponent]
})
export class HomePageModule {
}
