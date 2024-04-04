const input = require("readline-sync"); // instalada atraves do npm para ler linhas

let informacaoSalas = [
  {
    nome: "Sala_01",
    tipo: "Sala Padrão",
    quantidadeDePessoasComportadas: 8,
    ocupada: true,
    dataReserva: "10/04/2024",
    horaInicioReserva: "8:18",
    horarioTerminoReserva: "8:25",
  },
  {
    nome: "Sala_02",
    tipo: "Sala Padrão",
    quantidadeDePessoasComportadas: 8,
    ocupada: false,
    dataReserva: null,
    horaInicio: null,
    horarioTerminoReserva: null,
  },
  {
    nome: "Sala_03",
    tipo: "Sala Luxo",
    quantidadeDePessoasComportadas: 18,
    ocupada: true,
    dataReserva: "11/04/2024",
    horaInicioReserva: "8:45",
    horarioTerminoReserva: "8:53",
  },
  {
    nome: "Sala_04",
    tipo: "Sala Luxo",
    quantidadeDePessoasComportadas: 18,
    ocupada: false,
    dataReserva: null,
    horaInicio: null,
    horarioTerminoReserva: null,
  },
  {
    nome: "Sala_05",
    tipo: "Sala Super Luxo",
    quantidadeDePessoasComportadas: 40,
    ocupada: true,
    dataReserva: "08/04/2024",
    horaInicio: "16:02",
    horarioTerminoReserva: "16:12",
  },
  {
    nome: "Sala_06",
    tipo: "Sala Super Luxo",
    quantidadeDePessoasComportadas: 40,
    ocupada: true,
    dataReserva: "10/04/2024",
    horaInicio: "8:10",
    horarioTerminoReserva: "8:17",
  },
  {
    nome: "Sala_07",
    tipo: "Sala Super Luxo",
    quantidadeDePessoasComportadas: 40,
    ocupada: false,
    dataReserva: null,
    horaInicio: null,
    horarioTerminoReserva: null,
  },
];

/*Delcaracao da varivael que ira armazenar todas os componentes e atribuicao de cada um dos 
valores, simulando inserções manuais em um sistema que o banco de dados colocou
em cada elemento seu valor
*/

let quartoDesejado = parseInt(
  input.question(
    "Digite o tipo de quarto desejado ( 1-Sala para ate 7 pessoas/ 2-Sala para ate 18 pessoas/ 3-Sala para ate 40 pessoas/ 4- Ver todas as salas disponivies e nao disponiveis/ 5-Ver Apenas Salas Disponiveis: ): "
  )
);

//Aqui estamos falando para o usuario digitar qual a opcao desejada, e ja fazendo ir de string para int (numero inteiro)
//pois todo input vem em forma de texto.

if (quartoDesejado === 1) {
  for (let i = 0; i < informacaoSalas.length; i++) {
    if (
      informacaoSalas[i].quantidadeDePessoasComportadas === 8 &&
      informacaoSalas[i].ocupada === false
    ) {
      console.log(
        `O quarto ${informacaoSalas[i].nome} Está disponivel para locação e comporta a quantidade de pessoas foi passada nos parametros`
      );
    }
  }
} else if (quartoDesejado === 2) {
  for (let i = 0; i < informacaoSalas.length; i++) {
    if (
      informacaoSalas[i].quantidadeDePessoasComportadas === 18 &&
      informacaoSalas[i].ocupada === false
    ) {
      console.log(
        `O quarto ${informacaoSalas[i].nome} Esta disponivel para localçao e comporta a quantidade de pessoas passada nos parametros`
      );
    }
  }
} else if (quartoDesejado === 3) {
  for (let i = 0; i < informacaoSalas.length; i++) {
    if (
      informacaoSalas[i].quantidadeDePessoasComportadas === 40 &&
      informacaoSalas[i].ocupada === false
    ) {
      console.log(
        `O quarto ${informacaoSalas[i].nome} Esta disponivel para localçao e comporta a quantidade de pessoas passada nos parametros`
      );
    }
  }
} else if (quartoDesejado === 4) {
  console.log("");
  console.log("Visão Geral das Salas: ");
  console.log("");

  for (let i = 0; i < informacaoSalas.length; i++) {
    if (informacaoSalas[i].ocupada == false) {
      console.log("");
      console.log(
        `Sala:  ${informacaoSalas[i].nome} está disponivel para locação`
      );
      console.log(`-------------------------`);
      console.log("===========================");
    } else {
      console.log("");
      console.log(
        `Sala:  ${informacaoSalas[i].nome} está indisponivel para locação`
      );
      console.log(`-------------------------`);
      console.log("===========================");
    }
  }
} else if (quartoDesejado === 5) {
  console.log("-------------------------");

  console.log("Salas Disponiveis para locação: ");
  console.log("");

  for (let i = 0; i < informacaoSalas.length; i++) {
    if (informacaoSalas[i].ocupada === false) {
      console.log(
        `Sala ${informacaoSalas[i].nome} está disponível para locação.`
      );
      console.log(`Tipo: ${informacaoSalas[i].tipo}`);
      console.log(
        `Capacidade: ${informacaoSalas[i].quantidadeDePessoasComportadas}`
      );
      console.log("-------------------------");
    }
  }
}


//conforme solicitado pelo o usuario cada resposta se enquadra dentro de cada parametro digitado.
