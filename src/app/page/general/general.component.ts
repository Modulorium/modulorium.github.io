import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { HttpClient } from '@angular/common/http';
import { PanelsComponent, Panel } from '../../component/panels/panels.component';
import { ProfileComponent } from '../../component/profile/profile.component';
import { Router } from '@angular/router';
import { ProfileData } from '../../data/ProfileData';

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
		this.profileData = ProfileData.get(this.router.url)
	}

	profileData: any = {}

}
