---
title: Blob.type
slug: Web/API/Blob/type
---

{{APIRef("File API")}}

A propriedade **`type`** de um objeto [`Blob`](/pt-BR/docs/Web/API/Blob) fornece [MIME type](/pt-BR/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types) do arquivo. Ela retorna uma string vazia se o tipo não puder ser determinado.

## Syntaxe

```
var mimetype = instanceOfFile.type
```

## Valor

Uma string

## Exemplo

```js
var i, fileInput, files, allowedFileTypes;

// fileInput é um HTMLInputElement: <input type="file" multiple id="myfileinput">
fileInput = document.getElementById("myfileinput");

// files é um objeto FileList (similiar ao NodeList)
files = fileInput.files;

// nossa aplicação permite apenas imagens dos tipos *.png, *.jpeg and *.gif
allowedFileTypes = ["image/png", "image/jpeg", "image/gif"];

for (i = 0; i < files.length; i++) {
  // Testa se file.type é um tipo de arquivo permitido.
  if (allowedFileTypes.indexOf(files[i].type) > -1) {
    // file type é um dos tipos permitidos. Código aqui.
  }
});
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{domxref("Blob")}}
