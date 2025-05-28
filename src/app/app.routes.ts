import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { InspiracaoComponent } from './componentes/inspiracao/inspiracao.component';
import { ProgramacaoComponent } from './componentes/programacao/programacao.component';
import { GiftsComponent } from './componentes/gifts/gifts.component';
import { ParceirosComponent } from './componentes/parceiros/parceiros.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'inspiracao', component: InspiracaoComponent },
  { path: 'programacao', component: ProgramacaoComponent },
  { path: 'gifts', component: GiftsComponent },
  { path: 'parceiros', component: ParceirosComponent },
  { path: '**', redirectTo: '/home' }
];
