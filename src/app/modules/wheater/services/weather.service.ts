// Importações necessárias do Angular e RxJS
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Decorador @Injectable para tornar esta classe injetável
@Injectable({
  providedIn: 'root' // Define que este serviço será fornecido na raiz da aplicação
})
export class WeatherService {
  // Chave da API para acessar o serviço de previsão do tempo
  private apiKey = '04a39c8e97a4af456a4f69347ac85c28';

  // Construtor que injeta o serviço HttpClient para fazer requisições HTTP
  constructor(private http: HttpClient) { }

  // Método para obter os dados de previsão do tempo com base no nome da cidade
  getWeatherDatas(cityName: string): Observable<any> {
    // Faz uma requisição GET à API do OpenWeatherMap para obter os dados de previsão do tempo
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`,
      {} // Pode ser usado para passar opções adicionais para a requisição (neste caso, não há opções adicionais)
    );
  }
}
