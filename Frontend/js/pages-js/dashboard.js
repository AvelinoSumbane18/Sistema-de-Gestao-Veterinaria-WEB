import ModalLogout from "../modules/modalLogout.js";
import HorarioAtual from "../modules/horarioAtual.js";

const modalLogout = new ModalLogout(
  '[data-modal="logout" ]',
  "#btnNao",
  "#btnSim",
  '[data-btn="Sair"]'
);
modalLogout.init();
console.log(modalLogout);
// console.log(document.querySelectorAll(".logout-alert"));
// const horarioAtual = new HorarioAtual();
// horarioAtual.init();