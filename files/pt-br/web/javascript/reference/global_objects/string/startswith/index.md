---
title: String.prototype.startsWith()
slug: Web/JavaScript/Reference/Global_Objects/String/startsWith
---

{{JSRef}}

O método **`startsWith()`** determina se uma string começa com os caracteres especificados, retornando `true` ou `false`.

{{EmbedInteractiveExample("pages/js/string-startswith.html")}}

## Sintaxe

```
str.startsWith(searchString[, position])
```

### Parâmetros

- _`searchString`_
  - : Os caracteres a serem procurados a partir do início dessa string.
- _`position`_
  - : Opcional. A posição nessa string na qual se inicia a busca pela _`searchString`_. O valor padrão é `0`.

### Valor retornado

**`true`** se os caracteres fornecidos forem encontrados no início da string. Se não, **`false`**.

## Descrição

Esse método permite determinar se uma string começa ou não com outra string. Esse método é case-sensitive (difere maiúsculas de minúsculas, e vice-versa).

## Exemplos

### Usando `startsWith()`

```js
//startswith
let str = "Ser ou não ser, eis a questão.";

console.log(str.startsWith("Ser")); // true
console.log(str.startsWith("não ser")); // false
console.log(str.startsWith("não ser", 7)); // true
```

## Polyfill

Este método foi adicionaldo à especificação ECMAScript 2015 e pode ainda não estar disponível em todas as implementações do JavaScript. No entanto, você pode usar o polyfill `String.prototype.startsWith()` adicionando o seguinte código:

```
if (!String.prototype.startsWith) {
    Object.defineProperty(String.prototype, 'startsWith', {
        value: function(search, rawPos) {
            var pos = rawPos > 0 ? rawPos|0 : 0;
            return this.substring(pos, pos + search.length) === search;
        }
    });
}
```

Um polyfill mais robusto (totalmente conforme com a especificação ES2015), mas com menor desempenho e compacto está disponível [no GitHub por Mathias Bynens](https://github.com/mathiasbynens/String.prototype.startsWith).

## Especificações

| Especificação                                                                              |
| ------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-string.prototype.startswith', 'String.prototype.startsWith')}} |

## Navegadores compatíveis

{{Compat("javascript.builtins.String.startsWith")}}

## Veja também

- {{jsxref("String.prototype.endsWith()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
