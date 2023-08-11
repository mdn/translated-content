---
title: FileReader()
slug: Web/API/FileReader/FileReader
---

O construtor **`FileReader()`** cria um novo `FileReader`.

Para mais detalhes de como usar o `FileReader`, veja [Using files from web applications](/pt-BR/docs/Web/API/File/Using_files_from_web_applications).

## Sintaxe

```js
var reader = new FileReader();
```

### Parâmetros

Nenhum.

## Exemplo

O seguinte trecho de código ilustra a criação de um objeto [`FileReader`](/pt-BR/docs/Web/API/FileReader) usando o construtor `FileReader()` e depois utilizando o objeto:

```js
function printFile(file) {
  var reader = new FileReader();
  reader.onload = function (evt) {
    console.log(evt.target.result);
  };
  reader.readAsText(file);
}
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Using files from web applications](/pt-BR/docs/Web/API/File/Using_files_from_web_applications)
