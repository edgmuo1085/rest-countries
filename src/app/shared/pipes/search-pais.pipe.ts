import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'searchPais'
})
export class SearchPaisPipe implements PipeTransform {

	resultPaises: Array<any> = [];

	transform(paises: Array<any>, args: string): any {
		this.resultPaises = [];

		if (args === '' || args.length < 2) { return paises; }

		for (let item of paises) {
			let parametros: string = item.name.toString().toLowerCase();

			if (parametros.indexOf(args.toLowerCase()) > -1) {
				this.resultPaises.push(item);
			}
		}

		return this.resultPaises;
	}
}