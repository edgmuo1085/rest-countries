import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { dataPaises } from "../../data/data";
import { Paises } from '../interfaces';

@Injectable({
	providedIn: 'root'
})
export class PaisesService {

	constructor() { }

	getAllPais = (): Observable<Paises[]> => {
		const paises = of(dataPaises);
		return paises;
	}
}
