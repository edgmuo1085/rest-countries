import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { PaisComponent } from './pages/home/pais/pais.component';
import { SearchPaisPipe } from './shared/pipes/search-pais.pipe';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		PaisComponent,
		SearchPaisPipe,
		NavbarComponent,
		FooterComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgbPaginationModule,
		NgbAlertModule,
		HttpClientModule,
		NgbModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
