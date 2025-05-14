import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { HttpClient } from '@angular/common/http';
import { PanelsComponent, Panel } from '../../component/panels/panels.component';
import { ProfileComponent } from '../../component/profile/profile.component';
import { Router } from '@angular/router';

@Component({
	selector: 'app-general',
	standalone: true,
	imports: [CommonModule, PanelsComponent, ProfileComponent],
	templateUrl: './general.component.html',
	styleUrl: './general.component.scss'
})
export class GeneralComponent {

	constructor(private http: HttpClient, private router: Router) {
		this.asyncConstructor();
	}

	async asyncConstructor() {
		console.log(this.router.url)
		switch (this.router.url) {
			case "/":
				this.profilePicture = "image/profile/def.png"
				break;
			case "/minecraft":
				this.profilePicture = "image/profile/mc.png"
				break;
			case "/development":
				this.profilePicture = "image/profile/dev.png"
				break;
			case "/archive":
				this.profilePicture = "image/profile/def.png"
				break;
		}
	}

	profilePicture: string = ""

	panels: Panel[] = [
		{
			"name": "General",
			"description": "Go back to the home page and discover more...",
			"images": [
				{
					"link": "image/panel/blank.png",
					"title": "Placeholder Image"
				},
				{
					"link": "image/panel/gen_1.png",
					"title": "Link Page Preview"
				},
				{
					"link": "image/panel/blank.png",
					"title": "Placeholder Image"
				}
			],
			"link": "/"
		},
		{
			"name": "Minecraft",
			"description": "Learn more about my history with command blocks and datapacks...",
			"images": [
				{
					"link": "image/panel/mc_2.png",
					"title": "Gamemode 4 Display"
				},
				{
					"link": "image/panel/mc_1.png",
					"title": "The Hatter NPC"
				},
				{
					"link": "image/panel/mc_3.png",
					"title": "Smithed Summit"
				}
			],
			"link": "/minecraft"
		},
		{
			"name": "Development",
			"description": "Learn more about my other development projects...",
			"images": [
				{
					"link": "image/panel/dev_3.png",
					"title": "World Gen Demo"
				},
				{
					"link": "image/panel/dev_1.jpg",
					"title": "Game Engine Icons"
				},
				{
					"link": "image/panel/dev_2.png",
					"title": "Petal Perspective Screenshot"
				}
			],
			"link": "/development"
		},
		{
			"name": "Archive",
			"description": "A collection of useful information, reviews, etc...",
			"images": [
				{
					"link": "image/panel/arc_2.jpg",
					"title": "Steam Banner",
					"flip": true
				},
				{
					"link": "image/panel/arc_3.png",
					"title": "VSCode Screenshot",
					"flip": true,
				},
				{
					"link": "image/panel/arc_1.png",
					"title": "Movie Collage"
				}
			],
			"link": "/archive"
		}
	]

}
