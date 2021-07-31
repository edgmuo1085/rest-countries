import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { Paises } from 'src/app/interfaces';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

	paises!: Paises[];
	paisesFiltros!: Paises[];
	buscarPais: string = '';
	loading: boolean = true;
	suscripcion!: Subscription;
	regiones: Array<string> = ['Todas', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

	constructor(private paisesServices: PaisesService) { }

	ngOnInit(): void {
		this.loading = true;
		const sub1$ = this.paisesServices.getAllPais().subscribe(
			(val: Paises[]) => {
				this.paises = val;
				this.paisesFiltros = val;
				this.loading = false;
			}
		);

		this.suscripcion = sub1$;
	}

	buscarRegiones = (region: string) => {
		if (region == 'Todas') {
			this.paises = [];
			this.paises = this.paisesFiltros;
		}
		else {
			let regiones = this.paisesFiltros.filter((element: any) => element.region.toString().toLowerCase() === region.toLowerCase());
			this.paises = [];
			this.paises = regiones;
		}
	}

	searchPaises = (e: any) => {
		const filterValue = e.target.value;
		this.buscarPais = filterValue;
	}

	ngOnDestroy() {
		if (this.suscripcion) this.suscripcion.unsubscribe();
	}
}