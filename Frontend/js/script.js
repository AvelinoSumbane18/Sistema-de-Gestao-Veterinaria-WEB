import Login from "./modules/login.js";

const login = new Login("#usuario", "#senha", "#btnEntrar");
login.init();
console.log(login.validacaoNome("Avelino2 Sumbanesds212"))
console.log(login.validacaoSenha("12jsjsksks"))
console.log(login);
