---
title: String.prototype.endsWith()
slug: Web/JavaScript/Reference/Global_Objects/String/endsWith
---

{{JSRef}}

O método **`endsWith()`** indica se uma string termina com determinados caracteres, retornando `true` ou `false`.

## Sintaxe

```
str.endsWith(stringSendoBuscada[, tamanho])
```

### Parâmetros

- `stringSendoBuscada`
  - : Os caracteres a serem pesquisados no final da string.
- `tamanho`
  - : Opcional. Se fornecido, substitui o tamanho da string passada. Se omitido, o valor padrão é o tamanho da string.

### Valor retornado

**`true`** se os caracteres passados forem encontrados no final da string. Do contrário, retorna **`false`**.

## Descrição

Este método permite que você verifique se uma string termina ou não com determinados caracteres. Este método é case-sensitive.

## Exemplos

### Usando `endsWith()`

```js
var str = "Ser ou não ser, eis a questão";

console.log(str.endsWith("questão")); // retorna true
console.log(str.endsWith("ser")); // retorna false
console.log(str.endsWith("ser", 14)); // retorna true
```

## Polyfill

Este método foi adicionada na especificação ECMAScript 6 e talvez não esteja disponível em todos as implementações JavaScript ainda. No entanto, você pode criá-lo adicionando o seguinte código:

```js
if (!String.prototype.endsWith)
  String.prototype.endsWith = function (searchStr, Position) {
    // This works much better than >= because
    // it compensates for NaN:
    if (!(Position < this.length)) Position = this.length;
    else Position |= 0; // round position
    return (
      this.substr(Position - searchStr.length, searchStr.length) === searchStr
    );
  };
```

## Especificações

| Especificação                                                                          | Status               | Comentário         |
| -------------------------------------------------------------------------------------- | -------------------- | ------------------ |
| {{SpecName('ES6', '#sec-string.prototype.endswith', 'String.prototype.endsWith')}}     | {{Spec2('ES6')}}     | Definição inicial. |
| {{SpecName('ESDraft', '#sec-string.prototype.endswith', 'String.prototype.endsWith')}} | {{Spec2('ESDraft')}} |                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.String.endsWith")}}

## Veja também

- {{jsxref("String.prototype.startsWith()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
