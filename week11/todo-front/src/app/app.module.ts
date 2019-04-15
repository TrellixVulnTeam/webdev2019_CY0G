import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { MainComponent } from './main/main.component';

import { HttpClientModule } from '@angular/common/http';

import { ProviderService } from './shared/services/provider.service';



@NgModule({

  declarations: [

    AppComponent,

    MainComponent

  ],

  imports: [

    BrowserModule,

    AppRoutingModule,

    HttpClientModule

  ],

  providers: [

    ProviderService

  ],

  bootstrap: [AppComponent]

})

export class AppModule { }
