import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './links.component.html',
  styleUrl: './links.component.scss'
})
export class LinksComponent {

  links: Link[] = [];
  
  constructor(private http: HttpClient) {
    this.asyncConstructor();
  }

  async asyncConstructor() {
    this.links = await this.fetchLinksData()
    console.log(this.links)
  }

  async fetchLinksData(): Promise<Link[]> {
      let links: Link[] = []
      const categories: LinkCategory[] = await this.http.get<LinkCategory[]>('data/links.json').toPromise() || [];
      
      // const columns = Math.floor(window.innerWidth/400);
      // console.log('Screen width:', columns);

      for (let category of categories) {
        // let linkTarget = Math.ceil(category.links.length / columns) * columns 
        let categoryLinks: Link[] = []
        for (let link of category.links) {
          categoryLinks.push({...link, color: category.color, category_icon: category.icon});
        }

        // for (let i = 0; categoryLinks.length < linkTarget; i++) {
        //   categoryLinks.push({
        //     visible: false,
        //     color: category.color,
        //     platform: '',
        //     name: '',
        //     username: '',
        //     icon: '',
        //     link: ''
        //   });
        // }

        links.push(...categoryLinks)
      }
      return links;
    }

}

class LinkCategory {
  category: string = '';
  icon: string = '';
  color: string = '';
  links: Link[] = [];
}

class Link {
  visible: boolean = false;
  color: string = '';
  platform: string = '';
  name: string = '';
  username: string = '';
  icon: string = '';
  link: string = '';
  category_icon: string = '';
  type: string = '';
}
