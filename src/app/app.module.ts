import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProfissionaisComponent } from './profissionais/profissionais.component';
import { FormsModule } from '@angular/forms';
import { ProfissionaisDetailComponent } from './profissionais-detail/profissionais-detail.component';
import { ProfissionalService } from './services/profissional.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './services/message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

//Imports In memory web api (for testing purposes)
import {HttpClientInMemoryWebApiModule, InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './services/in-memory-data.service';
import { ProfissionalSearchComponent } from './profissional-search/profissional-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfissionaisComponent,
    ProfissionaisDetailComponent,
    MessagesComponent,
    DashboardComponent,
    ProfissionalSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation : false}
    )
  ],
  providers: [
    ProfissionalService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
