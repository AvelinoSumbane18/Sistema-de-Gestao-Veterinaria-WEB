export default class ModalLogout {
  constructor(modal, btnNao, btnSim, btnSair) {
    this.modal = document.querySelector(modal);
    this.btnNao = document.querySelector(btnNao);
    this.btnSim = document.querySelector(btnSim);
    this.btnSair = document.querySelector(btnSair);
    this.activeClass = "active";
    this.urlLogin =
      "http://127.0.0.1:5500/Sistema-de-Gestao-Veterinaria-WEB/Frontend/pages/login.html";
  }
  abrirModal() {
    this.modal.classList.add(this.activeClass);
  }
  fecharModal() {
    this.modal.classList.remove(this.activeClass);
  }

  voltarPaginaLogin() {
    this.modal.classList.remove(this.activeClass);
    window.location.href = this.urlLogin;
  }

  addModalLogoutEvent() {
    this.btnNao.addEventListener("click", this.fecharModal);
    this.btnSim.addEventListener("click", this.voltarPaginaLogin);
    this.btnSair.addEventListener("click", this.abrirModal);
  }
  bindEvents() {
    this.abrirModal = this.abrirModal.bind(this);
    this.fecharModal = this.fecharModal.bind(this);
    this.voltarPaginaLogin = this.voltarPaginaLogin.bind(this);
  }

  init() {
    this.bindEvents();
    this.addModalLogoutEvent();
    return this;
  }
}
