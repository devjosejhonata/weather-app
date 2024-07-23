// Definição da interface WeatherDatas para estruturar os dados de previsão do tempo
export interface WeatherDatas {
  // Coordenadas geográficas
  coord: {
    lon: number; // Longitude
    lat: number; // Latitude
  };

  // Informação do clima
  weather: [
    {
      id: number; // ID da condição climática
      main: string; // Grupo principal do clima (e.g. Rain, Snow, Clear, etc.)
      description: string; // Descrição detalhada do clima
      icon: string; // Ícone para representar a condição climática
    }
  ];

  // Tipo de estação de coleta de dados
  base: string;

  // Informação principal do clima
  main: {
    temp: number; // Temperatura atual
    feels_like: number; // Sensação térmica
    temp_min: number; // Temperatura mínima
    temp_max: number; // Temperatura máxima
    pressure: number; // Pressão atmosférica
    humidity: number; // Umidade
  };

  // Visibilidade (em metros)
  visibility: number;

  // Informação sobre o vento
  wind: {
    speed: number; // Velocidade do vento
    deg: number; // Direção do vento (em graus)
  };

  // Informação sobre as nuvens
  clouds: {
    all: number; // Cobertura de nuvens (em porcentagem)
  };

  // Data e hora da coleta de dados (em segundos desde 01/01/1970)
  dt: number;

  // Informação do sistema
  sys: {
    type: number; // Tipo de sistema
    id: number; // ID do sistema
    country: string; // Código do país
    sunrise: number; // Hora do nascer do sol (em segundos desde 01/01/1970)
    sunset: number; // Hora do pôr do sol (em segundos desde 01/01/1970)
  };

  // Deslocamento do fuso horário (em segundos)
  timezone: number;

  // ID da cidade
  id: number;

  // Nome da cidade
  name: string;

  // Código da resposta (por exemplo, 200 para sucesso)
  cod: number;
}
