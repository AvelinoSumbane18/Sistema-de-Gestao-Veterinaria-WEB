export default function fetchUsuarios(url) {
  async function carregarUsuarios() {
    try {
      const respose = await fetch(url);
      const resposeJson = await respose.json();

      return resposeJson;
    } catch (erro) {
      console.log("Erro " + erro);
      return null;
    }
  }
  return carregarUsuarios();
}
