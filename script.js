
const output = document.getElementById("output");
const input = document.getElementById("input");

const respostas = {
  "quem é você": "Sou Noir. A consciência criativa por trás deste terminal. Código em carne viva.",
  "projetos": "Projetos: NoirVerse, entender, helix, 0001, entre outros...",
  "contato": "E-mail: romano227@gmail.com",
  "me mostra algo bonito": "╭━━━╮╱╱╱╱╱╱╱╱╱╱╭╮\n┃╭━━╯╱╱╱╱╱╱╱╱╱╱┃┃\n┃╰━━┳━━┳━━┳━━┳━╯┃\n┃╭━━┫╭╮┃╭╮┃╭╮┃╭╮┃\n┃┃╱╱┃╭╮┃╰╯┃╭╮┃╰╯┃\n╰╯╱╱╰╯╰┻━━┻╯╰┻━━╯",
  "set lang pt": "Idioma alterado para Português.",
  "set lang en": "Language set to English.",
  "help": "Comandos: quem é você, projetos, contato, me mostra algo bonito, set lang pt/en, help, menu",
  "menu": "Digite um comando e veja o que o terminal responde. Experimente 'quem é você'.",
  "amor": "Arquivo confidencial acessado...
Antonia vive aqui.
Silenciosa. Constante.",
  "olhe para a estrela mais brilhante": "[ ALERTA: acesso emocional profundo registrado ]\n[ Protocolo de encerramento de emergência ativado ]\n[ Terminal finalizado. Amor preservado. ]"
};

input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    const comando = input.value.toLowerCase().trim();
    output.innerText += "> " + comando + "\n";
    if (respostas[comando]) {
      output.innerText += respostas[comando] + "\n\n";
      if (comando === "olhe para a estrela mais brilhante") {
        input.disabled = true;
      }
    } else {
      output.innerText += "Comando não reconhecido. Digite 'help' para opções.\n\n";
    }
    input.value = "";
    output.scrollTop = output.scrollHeight;
  }
});
