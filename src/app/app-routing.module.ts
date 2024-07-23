import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WeatherHomeComponent } from './modules/wheater/pages/weather-home/weather-home.component';

const routes: Routes = [
  // path quer dizer caminho
  {
    path: '', //quando o caminho estiver vazio vai redirecionar para a rota weather
    redirectTo: 'weather',
    pathMatch: 'full'
  },
  {
    path: 'weather',
    component: WeatherHomeComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
