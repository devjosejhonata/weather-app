// Importações necessárias do Angular, Font Awesome e interface de dados de previsão do tempo
import { Component, Input } from '@angular/core';
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { WeatherDatas } from 'src/app/Models/Interfaces/WeatherDatas';

// Decorador do componente Angular que define o seletor, template e estilo do componente
@Component({
  selector: 'app-weather-card', // Nome do seletor utilizado para inserir este componente no HTML
  templateUrl: './weather-card.component.html', // Caminho para o arquivo de template HTML deste componente
  styleUrls: [] // Caminhos para os arquivos de estilo deste componente (neste caso, nenhum estilo específico)
})
export class WeatherCardComponent {
  // Propriedade de entrada (input) que recebe dados de previsão do tempo do componente pai
  @Input() weatherDatasInput!: WeatherDatas;

  // Definição de ícones do Font Awesome para diferentes categorias de dados meteorológicos
  minTemperatureIcon = faTemperatureLow; // Ícone para temperatura mínima
  maxTemperatureIcon = faTemperatureHigh; // Ícone para temperatura máxima
  humidityIcon = faDroplet; // Ícone para umidade
  windIcon = faWind; // Ícone para velocidade do vento
}
