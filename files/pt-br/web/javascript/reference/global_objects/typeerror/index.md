---
title: TypeError
slug: Web/JavaScript/Reference/Global_Objects/TypeError
---

{{JSRef}}

O objeto **`TypeError`** representa um erro de quando um valor não é do tipo esperado.

## Sintaxe

```
new TypeError([message[, fileName[, lineNumber]]])
```

### Parâmetros

- `message`
  - : Opcional. Mensagem, descrição do erro
- `fileName` {{non-standard_inline}}
  - : Opcional. O nome do arquivo contendo o código que causou a exceção
- `lineNumber` {{non-standard_inline}}
  - : Opcional. O número da linha do código que causou a exeção

## Descrição

O `TypeError` é ativado quando um operador ou argumento passado para uma função é incompativel com o tipo esperado por esse operador ou função.

## Propriedades

- {{jsxref("TypeError.prototype")}}
  - : Permite a adição de propriedades para o objeto `TypeError`.

## Métodos

O TypeError global não contém métodos por si só, no entanto, ele herda alguns métodos através da cadeia prototype.

## `Instâncias TypeError`

### Propriedades

{{page('/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/TypeError/prototype', 'Properties')}}

### Métodos

{{page('/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/TypeError/prototype', 'Methods')}}

## Exemplos

### Capturando um `TypeError`

```js
try {
  null.f();
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message); // "null has no properties"
  console.log(e.name); // "TypeError"
  console.log(e.fileName); // "Scratchpad/1"
  console.log(e.lineNumber); // 2
  console.log(e.columnNumber); // 2
  console.log(e.stack); // "@Scratchpad/2:2:3\n"
}
```

### Criando um `TypeError`

```js
try {
  throw new TypeError("Hello", "someFile.js", 10);
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "TypeError"
  console.log(e.fileName); // "someFile.js"
  console.log(e.lineNumber); // 10
  console.log(e.columnNumber); // 0
  console.log(e.stack); // "@Scratchpad/2:2:9\n"
}
```

## Especificações

| Specification                                                                               | Status             | Comment            |
| ------------------------------------------------------------------------------------------- | ------------------ | ------------------ |
| {{SpecName('ES6', '#sec-native-error-types-used-in-this-standard-typeerror', 'TypeError')}} | {{Spec2('ES6')}}   |                    |
| {{SpecName('ES5.1', '#sec-15.11.6.5', 'TypeError')}}                                        | {{Spec2('ES5.1')}} |                    |
| {{SpecName('ES3', '#sec-15.11.6.5', 'TypeError')}}                                          | {{Spec2('ES3')}}   | Initial definition |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.TypeError")}}

## Veja também

- {{jsxref("Error")}}
- {{jsxref("TypeError.prototype")}}
