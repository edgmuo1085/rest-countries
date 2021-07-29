import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PaisComponent } from './pages/home/pais/pais.component';

const routes: Routes = [
	{
		path: 'home',
		children: [
			{ path: '', component: HomeComponent },
			{ path: ':id', component: PaisComponent },
		]
	},
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full',
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
