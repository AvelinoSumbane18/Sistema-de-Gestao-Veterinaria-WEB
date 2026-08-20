export default function HorarioAtual() {
   function init() {
    const data = new Date();
    let diaAgora=diaDaSemana(data.getDay);
    let dataAgora=data.getDate();
    let mesAgora=data.getMonth();
    let anoAgora=data.getFullYear();

    console.log(diaAgora,dataAgora, mesAgora, anoAgora)

   
  }
  function diaDaSemana(dia) {
    let diaSemana;
    switch (dia) {
      case 1:
        diaSemana = "Segunda-Feira";
        break;
      case 2:
        diaSemana = "Terca-Feira";
        break;
      case 3:
        diaSemana = "Quarta-Feira";
        break;
      case 4:
        diaSemana = "Quinta-Feira";
        break;
      case 5:
        diaSemana = "Sexta-Feira";
        break;
      case 6:
        diaSemana = "Sabado";
        break;
      case 7:
        diaSemana = "Domingo";
        break;
    }
    return diaSemana;
  }
}
