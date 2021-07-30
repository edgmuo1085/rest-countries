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
	buscarPais: string = '';
	loading: boolean = true;
	suscripcion!: Subscription;

	constructor(private paisesServices: PaisesService) { }

	ngOnInit(): void {
		this.loading = true;
		const sub1$ = this.paisesServices.getAllPais().subscribe(
			(val: Paises[]) => {				
				this.paises = val;
				this.loading = false;
			}
		);

		this.suscripcion = sub1$;
	}

	searchPaises = (e: any) => {
		const filterValue = e.target.value;
		this.buscarPais = filterValue;
	}

	ngOnDestroy() {
		if (this.suscripcion) this.suscripcion.unsubscribe();
	}
}