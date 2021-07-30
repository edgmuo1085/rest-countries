import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	modeDark: boolean = false;
	body!: HTMLElement;

	constructor(private renderer: Renderer2) {
		this.body = document.getElementsByTagName('body')[0];

		if (localStorage.getItem("modeDark")) {
			let darkMode = localStorage.getItem("modeDark");
			if (darkMode === 'true') this.addDark();
		}
	}

	ngOnInit(): void {
	}

	changeDark = () => {
		if (localStorage.getItem("modeDark")) {
			let darkMode = localStorage.getItem("modeDark");

			if (darkMode === 'false') this.addDark();
			else this.removerDark();
		}
		else this.addDark();
	}

	removerDark = () => {
		this.renderer.removeClass(this.body, "dark");
		localStorage.setItem("modeDark", "false");
	}

	addDark = () => {
		this.renderer.addClass(this.body, "dark");
		localStorage.setItem("modeDark", "true");
	}

}
