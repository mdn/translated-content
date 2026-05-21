---
title: parseFloat()
slug: Web/JavaScript/Reference/Global_Objects/parseFloat
---

{{jsSidebar("Objects")}}

A função `parseFloat` analisa um argumento (convertendo-o para uma string primeiro caso necessário) e retorna um número de ponto flutuante (número decimal).

{{InteractiveExample("JavaScript Demo: Standard built-in objects - parseFloat()")}}

```js interactive-example
function circumference(r) {
  return parseFloat(r) * 2.0 * Math.PI;
}

console.log(circumference(4.567));
// Expected output: 28.695307297889173

console.log(circumference("4.567abcdefgh"));
// Expected output: 28.695307297889173

console.log(circumference("abcdefgh"));
// Expected output: NaN
```

## Sintaxe

```js
parseFloat(string);
```

### Parâmetros

- `string`
  - : O valor para analisar. Se este argumento não é uma string, então ele é convertido para uma, usando a operação abstrata [`ToString`](https://tc39.es/ecma262/#sec-tostring). Espaços em branco são ignorados.

### Retorna

Um número de ponto flutuante da `string` dada. Ou {{jsxref("NaN")}} quando o primeiro carácter, diferente de um espaço em branco, não pôde ser convertido para um número

## Descrição

`parseFloat` é uma função top-level e não está associada a nenhum objeto.

`parseFloat` analisa um argumento string, e retorna um numero de ponto flutuante. Se ele encontrar um carácter diferente de um sinal (+ ou -), numeral (0-9), um ponto decimal, ou um expoente, ele retorna o valor até esse ponto e ignora esse caractere e todos os caracteres seguintes. Espaços a direita e a esquerda são permitidos.

Se o primeiro carácter não puder ser convertido para um número, `parseFloat` retorna `NaN`.

Para propósitos aritméticos, o valor `NaN` não é um número de qualquer raiz. Você pode chamar a função {{jsxref("isNaN")}} para determinar se o resultado do `parseFloat` é `NaN`. Se `NaN` for passado em operações aritméticas, a operação também retornará `NaN`.

`parseFloat` também pode analisar e retornar o valor `Infinity`. Você pode usar a função {{jsxref("isFinite")}} para determinar se a função é um número finito (not `Infinity`, `-Infinity`, ou `NaN`).

## Exemplos

### `parseFloat` retornando um número

O exemplo a seguir sempre retorna `3.14`:

```js
parseFloat("3.14");
parseFloat("314e-2");
parseFloat("0.0314E+2");
parseFloat("3.14more non-digit characters");
```

### `parseFloat` retornando `NaN`

O exemplo a seguir retorna `NaN`

```js
parseFloat("FF2");
```

### Uma função de análise estrita

As vezes é útil ter uma maneira mais rigorosa para analisar valores float, expressões regulares podem ajudar:

```js
var filterFloat = function (value) {
  if (/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/.test(value))
    return Number(value);
  return NaN;
};

console.log(filterFloat("421")); // 421
console.log(filterFloat("-421")); // -421
console.log(filterFloat("+421")); // 421
console.log(filterFloat("Infinity")); // Infinity
console.log(filterFloat("1.61803398875")); // 1.61803398875
console.log(filterFloat("421e+0")); // NaN
console.log(filterFloat("421hop")); // NaN
console.log(filterFloat("hop1.61803398875")); // NaN
```

Observe que este código é somente um exemplo; ele não aceita números válidos, tais como 1. ou 0,5.

## Especificações

{{Specifications}}

## Compatibilidade

{{Compat}}

## Veja também

- {{jsxref("parseInt()")}}
- {{jsxref("Number.parseFloat()")}}
- {{jsxref("Number.parseInt()")}}
- {{jsxref("isNaN()")}}
