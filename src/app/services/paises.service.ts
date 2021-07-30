import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";

import { environment } from 'src/environments/environment';
import { Paises } from '../interfaces';

@Injectable({
	providedIn: 'root'
})
export class PaisesService {

	urlPaises!: string;

	constructor(private http: HttpClient) {
		this.urlPaises = environment.apiCountry + 'all';
	}

	getAllPais = (): Observable<Paises[]> => {
		return this.http.get<Paises[]>(this.urlPaises)
			.pipe(tap((val: Paises[]) => {
				this.setPaises(val)
			}));
	}

	setPaises = (data: Paises[]): void => {
		//console.log(data);
		

		localStorage.setItem("data_paises", JSON.stringify(data));
	}
}
