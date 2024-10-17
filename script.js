
let campoIdade;
let campoRomance;
let campoDrama;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "@rasinformática");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoRomance = createCheckbox("Gosta de filmes de romance?");
  campoDrama = createCheckbox("adoro filme de drama");
}

function draw() {
  background("#8BC34A");
  let idade = campoIdade.value();
  let gostaDeRomance = campoRomance.checked();
  let gostaDeDrama = campoDrama.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeRomance, gostaDeDrama);

  fill(color(6, 10, 15));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeRomance, gostaDeDrama) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "nasofia";
    } else {
      if (idade >= 12) {
        if(gostaDeRomance || gostaDeDrama) {
          return "nasofia";          
        } else{
         return "Programando com html e css";
        }
      } else {
        if (gostaDeRomance) {
          return "Tele hackers";
        } else {
          return "Nenhum sistema é 100% seguro";
        }
      }
    }
  } else {
    if (gostaDeRomance) {
      return "@rasinformática";
    } else {
      return "Todo Hacker tem um início";
    }
  }
}
