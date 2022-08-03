import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paises } from 'src/app/interfaces';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.scss'],
})
export class PaisComponent implements OnInit {
  numericCode: string = '';
  dataPais: any;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.numericCode = this.route.snapshot.params.id;
    this.cargarPaises('' + this.numericCode);
  }

  ngOnInit(): void {}

  cargarPaises = (code: string) => {
    if (localStorage.getItem('data_paises') && code != '') {
      let data: any = localStorage.getItem('data_paises');
      const paises: Paises[] = JSON.parse(data);
      console.log(paises);

      let paisSeleccionado = paises.filter(
        (element: any) => element.name.common == code
      );

      if (paisSeleccionado.length > 0) {
        this.dataPais = paisSeleccionado[0];
      } else this.router.navigate(['/home']);
    } else this.router.navigate(['/home']);
  };
}
