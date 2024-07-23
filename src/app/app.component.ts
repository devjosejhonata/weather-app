// Importa a classe Component do Angular core
import { Component } from '@angular/core';

// Decorador @Component que define as propriedades do componente
@Component({
  selector: 'app-root',           // Seletor CSS que identifica este componente na marcação HTML
  templateUrl: './app.component.html',  // Caminho para o template HTML do componente
  styleUrls: ['./app.component.scss']   // Caminho para o arquivo de estilos SCSS do componente
})
export class AppComponent {
  // Propriedade que armazena o título da aplicação
  title = 'weather-app';
}
