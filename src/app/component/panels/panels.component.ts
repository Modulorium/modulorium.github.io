import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'
import { GalleryComponent } from './gallery/gallery.component';
import { Router } from '@angular/router';
import { WebsiteService } from '../../service/website.service';

@Component({
	selector: 'app-panels',
	imports: [CommonModule, GalleryComponent],
	templateUrl: './panels.component.html',
	styleUrl: './panels.component.scss'
})
export class PanelsComponent {

	@Input() panels: Panel[] = []
	@Input() gap: string = "20px";

	constructor(private router: Router, public website: WebsiteService) {
		this.asyncConstructor();
	}

	async asyncConstructor() {
		
	}

	clickPanel(panel: Panel) {
		this.website.setSection(panel.name)
		this.router.navigate([panel.link])
	}

}

export class Panel {
	name: string = ""
	description: string = ""
	images: any[] = []
	link: string = ""
}