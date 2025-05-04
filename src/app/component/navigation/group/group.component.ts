import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './group.component.html',
  styleUrl: './group.component.scss'
})
export class GroupComponent {

  constructor(public router: Router) {}

  @Output() optionClicked = new EventEmitter<string>();
  @Input() data: NavigationGroup = new NavigationGroup();
  @Input() collapsed: boolean = false;
  @Input() activeSection: string = "";

  clickOption(link: string) {
    this.optionClicked.emit(link);
  }

  linkMatches(link: string): boolean {
    if (link.startsWith('>')) {
      return link.slice(1, link.indexOf("|")) == this.activeSection
    } else {
      return link.endsWith(this.router.url)
    }
  }

}


export class NavigationGroup {
  title: string = ""
  icon: string = ""
  options: NavigationItem[] = [];
}

export class NavigationItem {
  visible: boolean = true
  title: string = ""
  icon: string = ""
  link: string = ""
}

