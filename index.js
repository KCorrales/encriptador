function encrypt() {
    let text = document.getElementById("textInput").value;
    let msgTitle = document.getElementById("resultTitle");
    let textP = document.getElementById("resultText");
    let image = document.getElementById("animation");
  
    let encryptedText = text
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (text.length != 0) {
      document.getElementById("textInput").value = encryptedText;
      msgTitle.textContent = "Texto encriptado con éxito";
      textP.textContent = "";
      image.src = "./img/encrypt.jpg";
    } else {
        image.src = "./img/search.jpg";
        msgTitle.textContent = "Ningún mensaje fue encontrado";
      textP.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal( "Debes ingresar un texto", "warning");
    }
  }
  
  function decrypt() {
    let text = document.getElementById("textInput").value;
    let msgTitle = document.getElementById("resultTitle");
    let textP = document.getElementById("resultText");
    let image = document.getElementById("animation");
  
    let encryptedText = text
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    
      if (text.length != 0) {
        document.getElementById("textInput").value = encryptedText;
        msgTitle.textContent = "Texto desencriptado con éxito";
        textP.textContent = "";
        image.src = "img/decrypt.jpg";
      } else {
        image.src = "img/search.jpg";
        msgTitle.textContent = "Ningún mensaje fue encontrado";
        textP.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Debes ingresar un texto", "warning");
      }
  }