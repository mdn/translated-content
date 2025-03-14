---
title: Number.prototype.toPrecision()
slug: Web/JavaScript/Reference/Global_Objects/Number/toPrecision
---

{{JSRef}}

O método **`toPrecision()`** retorna uma string que representa o valor do objeto {{jsxref("Number")}} com uma precisão específica.

{{InteractiveExample("JavaScript Demo: Number.toPrecision()")}}

```js interactive-example
function precise(x) {
  return x.toPrecision(4);
}

console.log(precise(123.456));
// Expected output: "123.5"

console.log(precise(0.004));
// Expected output: "0.004000"

console.log(precise(1.23e5));
// Expected output: "1.230e+5"
```

## Sintaxe

```
numObj.toPrecision([precisão])
```

### Parâmetros

- `precisão`
  - : Opcional. Um inteiro especificando o número de algarismos significativos.

### Retorno

Uma string representando um objeto {{jsxref("Number")}} em notação de ponto fixo ou exponencial arredondada segundo o parâmetro `precisão`. Veja a discussão sobre arredondamento feita na documentação do método {{jsxref("Number.prototype.toFixed()")}}, que também se aplica ao método `toPrecision()`.

Se o parâmetro `precisão` for omitido, este método terá o mesmo comportamento de {{jsxref("Number.prototype.toString()")}}. Se o parâmetro `precisão` for um valor não inteiro, ele será arredondado para a sua representação mais próxima em inteiro.

### Exceções

- {{jsxref("Global_Objects/RangeError", "RangeError")}}
  - : Se o valor de `precisão` não estiver compreendido entre 1 e 100 (inclusive), um {{jsxref("RangeError")}} será lançado. É permitido às implementações suportar valores menores e maiores que esses, sendo um requisito do ECMA-262 que seja dado suporte a uma precisão de até 21 algarismos significativos.

## Exemplos

### Utilizando `toPrecision`

```js
var numObj = 5.123456;

console.log(numObj.toPrecision()); // logs '5.123456'
console.log(numObj.toPrecision(5)); // logs '5.1235'
console.log(numObj.toPrecision(2)); // logs '5.1'
console.log(numObj.toPrecision(1)); // logs '5'

numObj = 0.000123;

console.log(numObj.toPrecision()); // logs '0.000123'
console.log(numObj.toPrecision(5)); // logs '0.00012300'
console.log(numObj.toPrecision(2)); // logs '0.00012'
console.log(numObj.toPrecision(1)); // logs '0.0001'

// observe que a notação exponencial pode ser retornado em alguns casos
console.log((1234.5).toPrecision(2)); // logs '1.2e+3'
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toString()")}}
