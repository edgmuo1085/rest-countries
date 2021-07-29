import { Component, OnInit } from '@angular/core';
import { Paises } from 'src/app/interfaces';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	paises!: Paises[];

	constructor(private paisesServices: PaisesService) { }

	ngOnInit(): void {
		this.paisesServices.getAllPais().subscribe(
			(val) => {
				this.paises = val;
				console.log(this.paises);
			}
		);
	}
}
