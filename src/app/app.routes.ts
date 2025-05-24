import { Routes } from '@angular/router';
import { LostComponent } from './page/lost/lost.component';

import { LinksComponent } from './page/general/links/links.component';
import { AboutComponent } from './page/general/about/about.component';
import { NowComponent } from './page/general/now/now.component';
import { EndorsedComponent } from './page/general/endorsed/endorsed.component';

import { GeneralComponent } from './page/general/general.component';

export const routes: Routes = [
    { path: '', component: GeneralComponent },
    { path: 'links', component: LinksComponent },
    { path: 'about', component: AboutComponent },
    { path: 'now', component: NowComponent },
    { path: 'endorsed', component: EndorsedComponent },

    { path: 'people', component: LostComponent },
    { path: 'minecraft', component: GeneralComponent },
    { path: 'minecraft/timeline', component: LostComponent },
    { path: 'minecraft/prologue', component: LostComponent },
    { path: 'minecraft/skins', component: LostComponent },
    { path: 'minecraft/gm4', component: LostComponent },
    { path: 'minecraft/gm4/servers', component: LostComponent },
    { path: 'minecraft/gm4/modules', component: LostComponent },
    { path: 'minecraft/smithed', component: LostComponent },
    { path: 'minecraft/smithed/summit', component: LostComponent },
    { path: 'archive', component: GeneralComponent },
    { path: 'archive/youtube', component: LostComponent },
    { path: 'archive/games', component: LostComponent },
    { path: 'archive/books', component: LostComponent },
    { path: 'archive/movies', component: LostComponent },
    { path: 'development', component: GeneralComponent },
    { path: 'development/tools', component: LostComponent },
    { path: 'development/projects', component: LostComponent },
    { path: 'development/projects/petal-perspective', component: LostComponent },
    { path: 'development/projects/:project-id', component: LostComponent },
    { path: '**', redirectTo: '/' },
  ];
