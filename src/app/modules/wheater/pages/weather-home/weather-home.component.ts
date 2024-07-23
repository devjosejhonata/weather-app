// Importações necessárias do RxJS, modelos de dados, serviços e componentes Angular
import { Subject, takeUntil } from 'rxjs';
import { WeatherDatas } from './../../../../Models/Interfaces/WeatherDatas';
import { WeatherService } from './../../services/weather.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// Decorador do componente Angular que define o seletor, template e estilo do componente
@Component({
  selector: 'app-weather-home', // Nome do seletor utilizado para inserir este componente no HTML
  templateUrl: './weather-home.component.html', // Caminho para o arquivo de template HTML deste componente
  styleUrls: [] // Caminhos para os arquivos de estilo deste componente (neste caso, nenhum estilo específico)
})
export class WeatherHomeComponent implements OnInit, OnDestroy {
  // Declaração de um Subject que será utilizado para cancelar assinaturas observáveis quando o componente for destruído
  private readonly destroy$: Subject<void> = new Subject();

  // Propriedade inicial do nome da cidade
  initialCityName = 'Sao Paulo';

  // Propriedade que armazena os dados de previsão do tempo
  weatherDatas!: WeatherDatas;

  // Ícone de busca do Font Awesome
  searchIcon = faMagnifyingGlass;

  // Injeção do serviço WeatherService no construtor
  constructor(private WeatherService: WeatherService) { }

  // Método do ciclo de vida do Angular que é chamado quando o componente é inicializado
  ngOnInit(): void {
    this.getWheaterDatas(this.initialCityName); // Obtém os dados de previsão do tempo para a cidade inicial
  }

  // Método para obter os dados de previsão do tempo com base no nome da cidade
  getWheaterDatas(cityName: string): void {
    this.WeatherService.getWeatherDatas(cityName) // Chama o serviço para obter os dados de previsão do tempo
      .pipe(takeUntil(this.destroy$)) // Usa o operador takeUntil para cancelar a assinatura quando destroy$ emitir um valor
      .subscribe({
        // O próximo valor emitido pelo observable é atribuído à propriedade weatherDatas
        next: (Response) => {
          Response && (this.weatherDatas = Response);
          console.log(this.weatherDatas); // Exibe os dados no console para depuração
        },
        // Em caso de erro, exibe o erro no console
        error: (error) => console.log(error),
      });
  }

  // Método chamado quando o formulário é submetido
  onSubmit(): void {
    this.getWheaterDatas(this.initialCityName); // Obtém os dados de previsão do tempo para a cidade atual
    console.log("CHAMOU A FUNÇÃO"); // Exibe mensagem no console para depuração
    this.initialCityName = ''; // Limpa o campo de entrada da cidade
  }

  // Método do ciclo de vida do Angular que é chamado quando o componente é destruído
  ngOnDestroy(): void {
    this.destroy$.next(); // Emite um valor para cancelar assinaturas observáveis
    this.destroy$.complete(); // Completa o Subject para liberar recursos
  }
}
