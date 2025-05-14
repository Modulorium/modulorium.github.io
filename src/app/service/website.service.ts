import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebsiteService {

	constructor() { }

	activeSection: string = localStorage.getItem('activeSection') || "General";

	public setSection(section: string) {
		this.activeSection = section
		localStorage.setItem('activeSection', section);
	}
  
}
