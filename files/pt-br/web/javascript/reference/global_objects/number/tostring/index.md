---
title: Number.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Number/toString
---

{{JSRef}}

## Resumo

O método **`toString()`** retorna uma string representando o objeto {{jsxref("Global_Objects/Number", "Number")}} especificado.

## Sintaxe

```
numObj.toString([radix])
```

### Parâmetros

- `radix`
  - : Opcional. Um inteiro entre 2 e 36 especificando a base utilizada para representar os valores numéricos.

### Exceções

- {{jsxref("Global_Objects/RangeError", "RangeError")}}
  - : se `toString()` receber um valor de radix fora do intervalo entre 2 e 36, uma exceção {{jsxref("Global_Objects/RangeError", "RangeError")}} é lançada.

## Descrição

O objeto {{jsxref("Global_Objects/Number", "Number")}} sobrescreve o método `toString()` do objeto {{jsxref("Global_Objects/Object", "Object")}}; ele não herda de {{jsxref("Object.prototype.toString()")}}. Para objetos {{jsxref("Global_Objects/Number", "Number")}}, o método `toString()` retorna uma representação string do objeto na base especificada.

O método `toString()` analisa seu primeiro argumento e tenta retornar uma representação string na raiz (base) especificada. Para raizes maiores que 10, as letras do alfabeto indicam valores maiores que 9. Por exemplo, para números hexadecimais (base 16), letras entre `a` e `f` são utilizadas.

Se o `radix` não for especificado, a raiz assumida como preferencial é a 10.

Se o `numObj` for negativo, o sinal é preservado. Isto acontece mesmo se a raiz for 2; a string retornada é a representação binária positiva de `numObj` precedida por um sinal `- e` **não** o complemento de dois do `numObj`.

## Exemplos

### Exemplo: Usando `toString`

```js
var count = 10;

console.log(count.toString()); // displays '10'
console.log((17).toString()); // displays '17'

var x = 6;

console.log(x.toString(2)); // displays '110'
console.log((254).toString(16)); // displays 'fe'

console.log((-10).toString(2)); // displays '-1010'
console.log((-0xff).toString(2)); // displays '-11111111'
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
