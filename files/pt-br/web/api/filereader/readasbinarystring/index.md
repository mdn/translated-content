---
title: FileReader.readAsBinaryString()
slug: Web/API/FileReader/readAsBinaryString
---

{{APIRef("File API")}} {{non-standard_header}}

O método `readAsBinaryString` é usado para iniciar a leitura do conteúdo de um {{domxref("Blob")}} especificado, ou {{domxref("File")}}. Quando a operação de leitura é finalizada, o {{domxref("FileReader.readyState","readyState")}} se torna "`DONE"`, e o evento {{event("loadend")}} é acionado. Neste momento, o atributo {{domxref("FileReader.result","result")}} contém o dado binário bruto do arquivo.

Note que este método se tornou obsoleto desde 12 de Julho de 2012 Working Draft do W3C.

## Sintaxe

```
instanciaDeFileReader.readAsBinaryString(blob);
```

### Parametros

- `blob`
  - : O {{domxref("Blob")}} ou {{domxref("File")}} que deseja ler.

## Exemplo

```js
var canvas = document.createElement("canvas");
var height = 200;
var width = 200;

canvas.width = width;
canvas.height = height;

var ctx = canvas.getContext("2d");

ctx.strokeStyle = "#090";
ctx.beginPath();
ctx.arc(width / 2, height / 2, width / 2 - width / 10, 0, Math.PI * 2);
ctx.stroke();

canvas.toBlob(function (blob) {
  var reader = new FileReader();

  reader.onloadend = function () {
    console.log(reader.result);
  };

  reader.readAsBinaryString(blob);
});
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja Também

- {{domxref("FileReader")}}
