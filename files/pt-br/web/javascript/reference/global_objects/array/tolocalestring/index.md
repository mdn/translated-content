---
title: Array.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toLocaleString
---

{{JSRef}}O método **`toLocaleString()`** retorna uma representaçao de elementos de um array. Os elementos são convertidos para Strings utilizando seus respectivos métodos `toLocaleString` e essas cadeias são separadas por uma sequência específica de localidade (separados por virgula ",").

## Sintaxe

```
array.toLocaleString();
```

### Parâmetros

- `locales` {{optional_inline}}
  - : Uma string com uma tag de linguagem BCP 47, ou um array como strings. Para uma forma geral e uma interpretação do arquivo `locales`, veja a página {{jsxref("Intl")}}.
- `options` {{optional_inline}}
  - : Um objeto com as propriedades de configurações, para números veja {{jsxref("Number.prototype.toLocaleString()")}}, e para datas veja {{jsxref("Date.prototype.toLocaleString()")}}.

### Retorno

Uma string que representa os elementos de um array.

## Exemplos

### Usando `toLocaleString`

Os elementos de um array são convertidos para strings usando seus respectivos métodos `toLocaleString`:

- `Object`: {{jsxref("Object.prototype.toLocaleString()")}}
- `Number`: {{jsxref("Number.prototype.toLocaleString()")}}
- `Date`: {{jsxref("Date.prototype.toLocaleString()")}}

```js
var numero = 1337;
var data = new Date();
var meuArray = [numero, data, "foo"];

var resultado = meuArray.toLocaleString();

console.log(resultado);
// saída '1337,July 26, 2015 at 20:02:23 GMT-3,foo'
// se estiver no Brasil com o fuso horario GMT-0300 (BRT) de Brasília.
```

Para mais exemplos, veja as páginas {{jsxref("Intl")}}, {{jsxref("NumberFormat")}}, e {{jsxref("DateTimeFormat")}}.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Array.prototype.toString()")}}
