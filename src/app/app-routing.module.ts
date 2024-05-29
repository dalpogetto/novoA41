import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CalculoComponent } from './components/calculo/calculo.component';
import { HomeComponent } from './components/home/home.component';
import { InformeComponent } from './components/informe/informe.component';
import { ParamestabComponent } from './components/paramestab/paramestab.component';
import { EmbalagemComponent } from './components/embalagem/embalagem.component';
import { ReparosComponent } from './components/reparos/reparos.component';
import { SeletorComponent } from './components/seletor/seletor.component';
import { MonitorProcessosComponent } from './components/monitor-processos/monitor-processos.component';
import { TempComponent } from './components/temp/temp.component';

const routes: Routes = [
  {path: '', redirectTo: '/temp', pathMatch: 'full'},
  {path:'informe', component:InformeComponent},
  {path:'home', component:HomeComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'calculo', component:CalculoComponent},
  {path:'paramestab', component:ParamestabComponent},
  {path:'embalagem', component:EmbalagemComponent},
  {path:'reparos', component:ReparosComponent},
  {path:'seletor', component:SeletorComponent},
  {path:'monitor', component:MonitorProcessosComponent},
  {path:'temp', component:TempComponent},
  
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
