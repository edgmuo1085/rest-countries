import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { PaisComponent } from './pages/home/pais/pais.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
  PaisComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgbPaginationModule,
		NgbAlertModule,
		NgbModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
