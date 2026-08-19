export default class Login {
  constructor(usuario, senha, btnEntrar) {
    this.usuario = document.querySelector(usuario);
    this.senha = document.querySelector(senha);
    this.btnEntrar = document.querySelector(btnEntrar);
    this.erroName = document.querySelector(".erro-name");
    this.erroSenha = document.querySelector(".erro-senha");
  }
  validacaoCampos() {
    const nome = this.usuario.value;
    const senha = this.senha.value;
    let elementoFilhoUser = this.usuario.parentElement.nextElementSibling;
    let elementoFilhoPassword = this.senha.parentElement.nextElementSibling;

    if (nome == "" || !this.validacaoNome(nome)) {
      elementoFilhoUser.classList.add("active");
      elementoFilhoUser.innerHTML = "Preencha o campo nome";
    } else {
      elementoFilhoUser.classList.remove("active");
    }

    if (senha == "") {
      elementoFilhoPassword.classList.add("active");
      elementoFilhoPassword.innerHTML = "Preencha o campo senha";
    } else if (this.validacaoSenha(senha)) {
      elementoFilhoPassword.classList.add("active");
      elementoFilhoPassword.innerHTML =
        "A senha deve ter no maximo 8 caracteres";
    } else {
      elementoFilhoPassword.classList.remove("active");
      this.autenticacaoUser(nome, senha);
    }
  }
  async carregarUsuarios() {
    try {
      const respose = await fetch(
        "http://127.0.0.1:5500/Sistema-de-Gestao-Veterinaria-WEB/Frontend/usuariosapi.json",
      );
      const resposeJson = await respose.json();

      return resposeJson;
    } catch (erro) {
      console.log("Erro " + erro);
      return null;
    }
  }

  async autenticacaoUser(nome, senha) {
    const usuario = await this.carregarUsuarios();

    const existe = usuario.some((u) => u.nome == nome && u.senha == senha);
    const url = window.location;
    const urlDashBoard =
      "http://127.0.0.1:5500/Sistema-de-Gestao-Veterinaria-WEB/Frontend/pages/dashboard.html";
    if (existe) {
      alert("Usuario Encontrado");
      this.limparCampos();
      window.location.href = urlDashBoard;
    } else {
      this.limparCampos();
      alert("Usuario não Encontrado");
    }
  }

  validacaoNome(nome) {
    const validName = new RegExp(/^[A-Z][a-z0-9]+\s[A-Za-z0-9]/);
    return validName.test(nome);
  }
  validacaoSenha(senha) {
    const isValid = senha.length < 8;
    return isValid;
  }
  limparCampos() {
    this.usuario.value = "";
    this.senha.value = "";
  }
  addEventLogin(event) {
    event.preventDefault();
    this.validacaoCampos();
  }
  bindEvents() {
    this.addEventLogin = this.addEventLogin.bind(this);
  }
  init() {
    this.bindEvents();
    this.btnEntrar.addEventListener("click", this.addEventLogin);
    return this;
  }
}
