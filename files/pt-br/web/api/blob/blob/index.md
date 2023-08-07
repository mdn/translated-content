---
title: Blob
slug: Web/API/Blob/Blob
---

{{APIRef("File API")}}

Blob()

Retorna um novo objeto Blob criado, cujo o conteúdo consiste na concatenação de um array de valores estabelecidos no parâmetro da função.

## Syntaxe

```
var aBlob = new Blob( array[, options]);
```

### Parâmetros

- _array_ é um {{jsxref("Array")}} de objetos {{jsxref("ArrayBuffer")}}, {{domxref("ArrayBufferView")}}, {{domxref("Blob")}}, {{domxref("DOMString")}}, ou uma combinação de quaisquer um destes objetos, que serão colocados dentro do {{domxref("Blob")}}. DOMStrings são codificadas como UTF-8.
- _options_ é um dicionário opcional `BlobPropertyBag` que pode especificar os dois atributos seguintes:

  - `type`, com um valor padrão de `""`, que representa o MIME type do conteúdo do array que será inserido no blob.
  - `endings`, com um valor padrão de `"transparent"`, especifica como strings contendo o caracter de final de linha `\n` deverão ser escritos. Tem um dos dois valores: `"native"`, indicando que caracteres de final de linha são modificados para coincidir com a convenção do Sistema Operacional, ou `"transparent"`, indicando que finais são armazenados no blob sem quaisquer modificações. {{non-standard_inline}}

## Exemplo

```js
var aFileParts = ['<a id="a"><b id="b">hey!</b></a>']; // an array consisting of a single DOMString
var oMyBlob = new Blob(aFileParts, { type: "text/html" }); // the blob
```

## Especificação

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- A versão descontinuada que o construtor {{domxref("BlobBuilder")}} substitui.
