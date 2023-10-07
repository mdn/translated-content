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

{{page('/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError/prototype', 'Properties')}}

### Métodos

{{page('/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError/prototype', 'Methods')}}

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

| Especificação                                                                                             | Estado               | Comentário         |
| --------------------------------------------------------------------------------------------------------- | -------------------- | ------------------ |
| {{SpecName('ES3')}}                                                                                       | {{Spec2('ES3')}}     | Definição inicial. |
| {{SpecName('ES5.1', '#sec-15.11.6.3', 'ReferenceError')}}                                                 | {{Spec2('ES5.1')}}   |                    |
| {{SpecName('ES6', '#sec-native-error-types-used-in-this-standard-referenceerror', 'ReferenceError')}}     | {{Spec2('ES6')}}     |                    |
| {{SpecName('ESDraft', '#sec-native-error-types-used-in-this-standard-referenceerror', 'ReferenceError')}} | {{Spec2('ESDraft')}} |                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.ReferenceError")}}

## Veja também

- {{jsxref("Error")}}
- {{jsxref("ReferenceError.prototype")}}
