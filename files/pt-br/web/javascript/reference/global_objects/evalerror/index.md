---
title: EvalError
slug: Web/JavaScript/Reference/Global_Objects/EvalError
---

{{JSRef}}

O Objeto **`EvalError`** indica um erro em relação a função global {{jsxref("Global_Objects/eval", "eval()")}}. Esta exceção não é mais lançada pelo JavaScript, no entanto, o objeto `EvalError` ainda permanece compatível.

## Sintaxe

```
new EvalError([message[, fileName[, lineNumber]]])
```

### Parâmetros

- `message`
  - : Opcional. Descrição do erro legível para humanos
- `fileName` {{non-standard_inline}}
  - : Opcional. O nome do arquivo que contém o código que causa a exceção
- `lineNumber` {{non-standard_inline}}
  - : Opcional. O número da linha do código que causa a exceção

## Propriedades

- {{jsxref("EvalError.prototype")}}
  - : Permite a adição de propriedades para um objeto `EvalError`.

## Métodos

O global `EvalError` não contém métodos próprios, no entando, ele irá herdar alguns métodos através da cadeia de protótipos.

## `Instâncias do EvalError`

### Propriedades

{{page('/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/EvalError/prototype', 'Properties')}}

### Métodos

{{page('/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/EvalError/prototype', 'Methods')}}

## Exemplos

`EvalError` não é usado na especificação ECMAScript e deste modo não será lançado pelo tempo de execução. No entando, o objeto em si permanece para compatibilidade com versões anteriores da especificação.

### Criando um `EvalError`

```js
try {
  throw new EvalError("Hello", "someFile.js", 10);
} catch (e) {
  console.log(e instanceof EvalError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "EvalError"
  console.log(e.fileName); // "someFile.js"
  console.log(e.lineNumber); // 10
  console.log(e.columnNumber); // 0
  console.log(e.stack); // "@Scratchpad/2:2:9\n"
}
```

## Especificações

| Especificação                                                                                   | Status               | Comentário                                                                        |
| ----------------------------------------------------------------------------------------------- | -------------------- | --------------------------------------------------------------------------------- |
| {{SpecName('ES3')}}                                                                             | {{Spec2('ES3')}}     | Definição inicial.                                                                |
| {{SpecName('ES5.1', '#sec-15.11.6.1', 'EvalError')}}                                            | {{Spec2('ES5.1')}}   | Não utilizada na especificação. Presente para compatibilidade com outras versões. |
| {{SpecName('ES6', '#sec-native-error-types-used-in-this-standard-evalerror', 'EvalError')}}     | {{Spec2('ES6')}}     | Não utilizada na especificação. Presente para compatibilidade com outras versões. |
| {{SpecName('ESDraft', '#sec-native-error-types-used-in-this-standard-evalerror', 'EvalError')}} | {{Spec2('ESDraft')}} |                                                                                   |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.EvalError")}}

## Veja também

- {{jsxref("Error")}}
- {{jsxref("EvalError.prototype")}}
- {{jsxref("Global_Objects/eval", "eval()")}}
