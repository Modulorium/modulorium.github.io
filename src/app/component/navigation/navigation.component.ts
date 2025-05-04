import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GroupComponent, NavigationGroup, NavigationItem } from './group/group.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, GroupComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {


  // ===== Constructor =====

  constructor(private router: Router, private http: HttpClient) {
    this.asyncConstructor();
  }
  
  async asyncConstructor() {
    this.navigation = await this.fetchNavigationData()
  }
  
  // ===== Variables =====

  collapsed: boolean = localStorage.getItem('navigation:collapsed') === 'true';
  activeSection: string = localStorage.getItem('activeSection') || "General";
  navigation: Map<string, NavigationGroup[]> = new Map();
  navigationSections: NavigationGroup = new NavigationGroup();

  // ===== Controls =====

  toggleCollapse() {
    this.collapsed = !this.collapsed;
    localStorage.setItem('navigation:collapsed', this.collapsed.toString());
  }

  optionClicked(link: string) {
    if (link.startsWith('~')) {
      this.router.navigate([link.slice(1)]);
    } else if (link.startsWith('>')) {
      this.activeSection = link.split("|")[0].slice(1)
      this.router.navigate([link.split("|")[1]]);
    } else {
      window.location.href = link;
    }
    localStorage.setItem('activeSection', this.activeSection);
  }

  // ===== Helper =====

  async fetchNavigationData(): Promise<Map<string, NavigationGroup[]>> {
    let navigationMap: Map<string, NavigationGroup[]> = new Map();
    const result: any = await this.http.get<any>('data/navigation.json').toPromise()
    for (const key in result) {
      navigationMap.set(key, result[key]);
    }
    this.navigationSections = navigationMap.get("Main")?.at(0) ?? new NavigationGroup();
    return navigationMap;
  }

}
