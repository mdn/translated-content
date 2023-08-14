---
title: Math.clz32()
slug: Web/JavaScript/Reference/Global_Objects/Math/clz32
---

{{JSRef}}

A função Math.clz32 () retorna o número de zero bit inicial na representação binária de 32 bits de um número.

{{EmbedInteractiveExample("pages/js/math-clz32.html")}}

## Sintaxe

```
Math.clz32(x)
```

### Parâmetros

- _x_
  - : Um número.

### Valor de retorno

O número de zero bits à esquerda na representação binária de 32 bits do número fornecido.

## Descrição

"`clz32`" é short para`CountLeadingZeroes32`.

Se x não for um número, ele será convertido em um número primeiro e depois convertido em um número inteiro não assinado de 32 bits.

Se o número inteiro não assinado de 32 bits convertido for 0, retorne 32, porque todos os bits são 0.

Essa função é particularmente útil para sistemas que são compilados para JS, como o Emscripten.

## Exemplos

### Usando `Math.clz32()`

```js
Math.clz32(1); // 31
Math.clz32(1000); // 22
Math.clz32(); // 32

var stuff = [NaN, Infinity, -Infinity, 0, -0, null, undefined, "foo", {}, []];
stuff.every((n) => Math.clz32(n) == 32); // true

Math.clz32(true); // 31
Math.clz32(3.5); // 30
```

## Contagem dos principais e mais além

No momento, não há Math.clon para "Count Leading Ones" (chamado "clon", não "clo", porque "clo" e "clz" são muito semelhantes, especialmente para pessoas que não falam inglês). No entanto, uma função clon pode ser criada facilmente, invertendo os bits de um número e passando o resultado para Math.clz32. Fazer isso funcionará porque o inverso de 1 é 0 e vice-versa. Assim, a inversão dos bits inverterá a quantidade medida de 0s (de Math.clz32), fazendo com que Math.clz32 conte o número de unidades em vez de contar o número de zeros.

Considere a seguinte palavra de 32 bits:

```js
var a = 32776; // 00000000000000001000000000001000 (16 zeros à esquerda)
Math.clz32(a); // 16

var b = ~32776; // 11111111111111110111111111110111 (32776 inverso, 0 zeros à esquerda)
Math.clz32(b); // 0 (isso é igual a quantos líderes existem em um)
```

Usando essa lógica, uma função clon pode ser criada da seguinte maneira:

```js
var clz = Math.clz32;
function clon(integer) {
  return clz(~integer);
}
```

Além disso, essa técnica pode ser estendida para criar funções inumeráveis "Contagem de zeros à direita" e funções de contagem de zeros, como mostrado abaixo. A função ctrz abaixo preenche todos os bits altos com o bit mais baixo preenchido e depois os anula para apagar todos os bits mais altos definidos, de modo que o clz possa ser usado.

```js
var clz = Math.clz32;
function ctrz(integer){ // contar zeros à direita
   // 1. preencha todos os bits mais altos após o primeiro
    integer |= integer << 16;
    integer |= integer << 8;
    integer |= integer << 4;
    integer |= integer << 2;
    integer |= integer << 1;
// 2. Agora, a inversão dos bits revela os bits mais baixos
    return 32 - clz(~integer) |0; // `|0`garante coerção inteira
}
function ctron(integer){ // conta os que estão à direita
     // Nenhum operador shift-fill-in-with-ones está disponível em
     // JavaScript, portanto, o código abaixo é o mais rápido
    return ctrz(~integer);
/ * Implementação alternativa para fins demonstrativos:
        // 1. apaga todos os bits mais altos após o primeiro zero
       integer &= (integer << 16) | 0xffff;
       integer &= (integer << 8 ) | 0x00ff;
       integer &= (integer << 4 ) | 0x000f;
       integer &= (integer << 2 ) | 0x0003;
       integer &= (integer << 1 ) | 0x0001;
      // 2. Agora, reverter os bits revela os zeros mais baixos
       return 32 - clon(~integer) |0;
    */
}
```

Transforme essas funções auxiliares no módulo ASM.JS; então, você tem uma verdadeira obra-prima de desempenho. Situações como essas são exatamente para o que o ASM.JS foi projetado.

```js
var countTrailsMethods = (function (stdlib, foreign, heap) {
  "use asm";
  var clz = stdlib.Math.clz32;
  function ctrz(integer) {
    // count trailing zeros
    integer = integer | 0; // coerce to an integer
    // 1. preencha todos os bits mais altos após o primeiro
    // ASM js, por algum motivo, não permite ^ =, & = ou | =
    integer = integer | (integer << 16);
    integer = integer | (integer << 8);
    integer = integer | (integer << 4);
    integer = integer | (integer << 2);
    integer = integer | (integer << 1);
    // 2. Agora, a inversão dos bits revela os bits mais baixos
    return (32 - clz(~integer)) | 0;
  }
  function ctron(integer) {
    //contar os últimos
    integer = integer | 0; // coagir a um número inteiro
    return ctrz(~integer) | 0;
  }
  // infelizmente, o ASM.JS exige objetos compactos lentos:
  return { a: ctrz, b: ctron };
})(window, null, null);
var ctrz = countTrailsMethods.a;
var ctron = countTrailsMethods.b;
```

## Polyfill-"Trecho de código"

O seguinte polyfill é o mais eficiente.

```js
if (!Math.clz32)
  Math.clz32 = (function (log, LN2) {
    return function (x) {
      // Seja n ToUint32 (x).
      // Seja p o número de zero bits iniciais em
      // a representação binária de 32 bits de n.
      // Retornar p.
      var asUint = x >>> 0;
      if (asUint === 0) {
        return 32;
      }
      return (31 - ((log(asUint) / LN2) | 0)) | 0; // the "| 0" acts like math.floor
    };
  })(Math.log, Math.LN2);
```

## Especificações

| Especificação                                            |
| -------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-math.clz32', 'Math.clz32')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Math.clz32")}}

## Veja também

- {{jsxref("Math")}}
- {{jsxref("Math.imul")}}
