import { NgModule } from '@angular/core';
import {RouterModule, Routes, Router} from '@angular/router';
import {ProfissionaisComponent} from './profissionais/profissionais.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfissionaisDetailComponent } from './profissionais-detail/profissionais-detail.component';
import { ProfissionalSearchComponent} from './profissional-search/profissional-search.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard',pathMatch: 'full'},
  {path: 'detail/:id' , component: ProfissionaisDetailComponent},
  {path: 'profissionais', component: ProfissionaisComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [RouterModule.forRoot(routes)]
})



export class AppRoutingModule { }
