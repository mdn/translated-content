---
title: FileReader.onload
slug: Web/API/FileReader/load_event
---

{{APIRef}}

A propriedade **FileReader.onload** contém um manipulador de eventos (event handler) executado quando o evento de carregamento ({{event('load')}}) é ativado, quando o conteúdo lido com [readAsArrayBuffer](/pt-BR/docs/Web/API/FileReader/readAsArrayBuffer), [readAsBinaryString](/pt-BR/docs/Web/API/FileReader/readAsBinaryString), [readAsDataURL](/pt-BR/docs/Web/API/FileReader/readAsDataURL) ou [readAsText](/pt-BR/docs/Web/API/FileReader/readAsText) fica disponível.

## Exemplo

```js
// Callback de um <input type="file" onchange="onChange(event)">
function onChange(event) {
  var file = event.target.files[0];
  var reader = new FileReader();
  reader.onload = function (event) {
    // O arquivo de texto será impresso aqui
    console.log(event.target.result);
  };

  reader.readAsText(file);
}
```
