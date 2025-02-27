---
title: ReferenceError
slug: Web/JavaScript/Reference/Global_Objects/ReferenceError
---

{{JSRef}}

O objeto **`ReferenceError`** representa um erro quando uma variável não existente é referenciada.

## Sintaxe

```
new ReferenceError([message[, fileName[, lineNumber]]])
```

### Parâmetros

- `message`
  - : Opcional. Descrição legível do erro.
- `fileName` {{non-standard_inline}}
  - : Opcional. O nome do arquivo contendo o código que causou a excessão.
- `lineNumber` {{non-standard_inline}}
  - : Opcional. O número da linha do código que causou a excessão.

## Descrição

O `ReferenceError` acontece quando é feita uma tentativa de referenciar uma variável que não foi declarada.

## Propriedades

- {{jsxref("ReferenceError.prototype")}}
  - : Permite a inclusão de propriedades em um objeto `ReferenceError`.

## Métodos

O `ReferenceError` não contém métodos próprios, porém, ele herda alguns métodos através da cadeia de protótipos.

## Instâncias do `ReferenceError`

### Propriedades

<!-- TODO: page macro not supported: page('/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError/prototype', 'Properties') -->

### Métodos

<!-- TODO: page macro not supported: page('/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError/prototype', 'Methods') -->

## Exemplos

### Capturando um `ReferenceError`

```js
try {
  var a = variavelNaoDefinida;
} catch (e) {
  console.log(e instanceof ReferenceError); // true
  console.log(e.message); // "variavelNaoDefinida não está definida"
  console.log(e.name); // "ReferenceError"
  console.log(e.fileName); // "Scratchpad/1"
  console.log(e.lineNumber); // 2
  console.log(e.columnNumber); // 6
  console.log(e.stack); // "@Scratchpad/2:2:7\n"
}
```

### Criando um `ReferenceError`

```js
try {
  throw new ReferenceError("Olá", "arquivoQualquer.js", 10);
} catch (e) {
  console.log(e instanceof ReferenceError); // true
  console.log(e.message); // "Olá"
  console.log(e.name); // "ReferenceError"
  console.log(e.fileName); // "arquivoQualquer.js"
  console.log(e.lineNumber); // 10
  console.log(e.columnNumber); // 0
  console.log(e.stack); // "@Scratchpad/2:2:9\n"
}
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Error")}}
- {{jsxref("ReferenceError.prototype")}}
