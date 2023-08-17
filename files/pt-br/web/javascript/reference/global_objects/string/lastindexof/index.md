---
title: String.prototype.lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
---

{{JSRef}}

O método `lastIndexOf()` retorna o índice da última ocorrência do valor especificado encontrado na {{jsxref("String")}}. Quando `fromIndex` é especificado, a pesquisa é realizada de trás para frente. Retorna `-1` se o valor não for encontrado.

## Sintaxe

```
str.lastIndexOf(searchValue[, fromIndex])
```

### Parâmetros

- `searchValue`
  - : Uma string representando o valor a ser procurado. Se `searchValue` for uma string vazia, `str.length` é retornado.
- `fromIndex`
  - : Opcional. O índice no qual a pesquisa será iniciada de trás para frente. O valor padrão é `+Infinity`. Se `fromIndex >= str.length`, toda string é pesquisada. Se `fromIndex < 0`, o comportamento será o mesmo que seria com o índice `0`.

### Valor retornado

O índice da última ocorrência referente ao valor especificado em `searchValue`. É retornado `-1` se nada for encontrado.

## Descrição

Os caracteres em uma string são indexados da esquerda para a direita. O índice do primeiro caractere é `0`, e o índice do último caractere é `str.length - 1`.

```js
"ricardo".lastIndexOf("r"); // retorna 4
"ricardo".lastIndexOf("a", 3); // retorna 3
"ricardo".lastIndexOf("a", 0); // retorna -1
"ricardo".lastIndexOf("x"); // retorna -1
"ricardo".lastIndexOf("r", -5); // retorna 0
"ricardo".lastIndexOf("r", 0); // retorna 0
"ricardo".lastIndexOf(""); // retorna 7
"ricardo".lastIndexOf("", 2); // retorna 2
```

### Sensível a maiúsculas e minúsculas

O método `lastIndexOf()` é sensível a letras maiúsculas e minúsculas. Por exemplo, a seguinte expressão retorna `-1`:

```js
"Blue Whale, Killer Whale".lastIndexOf("blue"); // retorna -1
```

## Exemplos

### Usando `lastIndexOf()`

O seguinte exemplo usa `lastIndexOf()` para localizar valores nas string `"Brave new world"`.

```js
var anyString = "Brave new world";

console.log(
  "O índice do primeiro w a partir do final é " + anyString.lastIndexOf("w"),
);
// retorna 10

console.log(
  'O índice de "new" a partir do final é ' + anyString.lastIndexOf("new"),
);
// retorna 6
```

## Especificações

| Especificação                                                                                | Estado               | Comentários        |
| -------------------------------------------------------------------------------------------- | -------------------- | ------------------ |
| {{SpecName('ES1')}}                                                                          | {{Spec2('ES1')}}     | Definição inicial. |
| {{SpecName('ES5.1', '#sec-15.5.4.8', 'String.prototype.lastIndexOf')}}                       | {{Spec2('ES5.1')}}   |                    |
| {{SpecName('ES6', '#sec-string.prototype.lastindexof', 'String.prototype.lastIndexOf')}}     | {{Spec2('ES6')}}     |                    |
| {{SpecName('ESDraft', '#sec-string.prototype.lastindexof', 'String.prototype.lastIndexOf')}} | {{Spec2('ESDraft')}} |                    |

## Navegadores compatíveis

{{Compat("javascript.builtins.String.lastIndexOf")}}

## Veja também

- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.split()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.lastIndexOf()")}}
