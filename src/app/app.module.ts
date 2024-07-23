// Importa a classe NgModule do Angular core
import { NgModule } from '@angular/core';
// Importa o módulo BrowserModule que é necessário para qualquer aplicação Angular que irá rodar em um navegador
import { BrowserModule } from '@angular/platform-browser';
// Importa o módulo BrowserAnimationsModule que habilita animações no Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Importa o módulo HttpClientModule que permite a comunicação com servidores HTTP
import { HttpClientModule } from '@angular/common/http';

// Importa os componentes da aplicação
import { AppComponent } from './app.component';
// Importa o módulo FormsModule para suporte a formulários
import { FormsModule } from '@angular/forms';
// Importa o módulo de roteamento da aplicação
import { AppRoutingModule } from './app-routing.module';
// Importa o módulo FontAwesomeModule para utilizar ícones do Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// Importa as classes RouterModule e Routes para definir as rotas da aplicação
import { RouterModule, Routes } from '@angular/router';
// Importa o componente WeatherHomeComponent
import { WeatherHomeComponent } from './modules/wheater/pages/weather-home/weather-home.component';
// Importa o componente WeatherCardComponent
import { WeatherCardComponent } from './modules/wheater/components/weather-card/weather-card.component';

// Define as rotas da aplicação
const routes: Routes = [
  // Adicione suas rotas aqui
];

// Decorador @NgModule que define as propriedades do módulo
@NgModule({
  declarations: [
    // Declara os componentes que pertencem a este módulo
    AppComponent,
    WeatherHomeComponent,
    WeatherCardComponent
  ],
  imports: [
    // Importa os módulos necessários para a aplicação
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes), // Configura o roteamento com as rotas definidas
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Define o componente inicial que será carregado quando a aplicação iniciar
})
// Exporta a classe AppModule que é o módulo raiz da aplicação
export class AppModule { }
