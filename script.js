function aplicarCifra() {
    const text = document.getElementById("text").value;
    const deslocamento = parseInt(document.getElementById("deslocamento").value);
    const resultado = cifraCesar(text, deslocamento);
    document.getElementById("resultado").textContent = resultado;
  }
  
  function cifraCesar(str, deslocamento) {
    // ormaliza o deslocamento para o intervalo 0-25.
    deslocamento = deslocamento % 26;
  
    return str.split("").map((char) => {

      const charCode = char.charCodeAt(0);
  
      if (charCode >= 65 && charCode <= 90) {
        // Converte o código ASCII para 0-25, aplica o deslocamento com % 26 e retorna ao intervalo ASCII das maiúsculas.
        return String.fromCharCode(((charCode - 65 + deslocamento) % 26) + 65);
      }
  
      if (charCode >= 97 && charCode <= 122) {
        // Converte o código ASCII para 0-25, aplica o deslocamento com % 26 e retorna ao intervalo ASCII das minúsculas.
        return String.fromCharCode(((charCode - 97 + deslocamento) % 26) + 97);
      }
  
      return char;
    }).join("");
  }
  