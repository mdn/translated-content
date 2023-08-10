---
title: Número
slug: Web/JavaScript/Reference/Global_Objects/Number
---

{{JSRef("Global_Objects", "Number")}}

## Sumário

O objeto JavaScript **`Number`** é um objeto encapsulado que permite você trabalhar com valores numéricos. Um objeto `Number` é criado utilizando o construtor `Number()`.

## Construtor

```
new Number(value);
```

### Parâmetros

- `value`
  - : O valor numérico do objeto sendo criado.

## Descrição

Os principais usos para o objeto `Number` são:

- Se o objeto não pode ser convertido para um número, é retornado `NaN`.
- Fora do contexo de um construtor (Ex., Sem o operador {{jsxref("Operators/new", "new")}}, `Number` pode ser utilizador para realizar uma conversão de tipo.

## Propriedades

- {{jsxref("Number.EPSILON")}} {{experimental_inline}}
  - : O menor intervalo entre dois números representáveis.
- {{jsxref("Number.MAX_SAFE_INTEGER")}} {{experimental_inline}}
  - : O inteiro máximo seguro em JavaScript (253 -1).
- {{jsxref("Number.MAX_VALUE")}}
  - : O maior número representável positivo.
- {{jsxref("Number.MIN_SAFE_INTEGER")}} {{experimental_inline}}
  - : O inteiro mínimo seguro em JavaScript (-(253 -1)).
- {{jsxref("Number.MIN_VALUE")}}
  - : O número mínimo representável positivo - isto é, o número positivo mais próximo de zero (sem ser zero na verdade).
- {{jsxref("Number.NaN")}}
  - : Valor especial que não é número.
- {{jsxref("Number.NEGATIVE_INFINITY")}}
  - : Valor especial representando infinito negativo; retornado no "overflow".
- {{jsxref("Number.POSITIVE_INFINITY")}}
  - : Valor especial representando infinito; retornado no "overflow".
- {{jsxref("Number.prototype")}}
  - : Permite a adição de propriedades a um objeto Number.

## Methods

- {{jsxref("Number.isNaN()")}} {{experimental_inline}}
  - : Determina se o valor passado é NaN.
- {{jsxref("Number.isFinite()")}} {{experimental_inline}}
  - : Determina se o tipo e o valor passado é um número finito.
- {{jsxref("Number.isInteger()")}} {{experimental_inline}}
  - : Determina se o tipo do valor passado é inteiro.
- {{jsxref("Number.isSafeInteger()")}} {{experimental_inline}}
  - : Determina se o tipo do valor passado é um inteiro seguro (número entre -(253 -1) e 253 -1).
- ~~{{jsxref("Number.toInteger()")}}~~
  - : ~~Usado para avaliar o valor passado e convertê-lo a um inteiro (ou infinito), mas foi removido.~~
- {{jsxref("Number.parseFloat()")}} {{experimental_inline}}
  - : O valor é o mesmo que {{jsxref("Global_Objects/parseFloat", "parseFloat")}} do objeto global.
- {{jsxref("Number.parseInt()")}} {{experimental_inline}}
  - : O valor é o mesmo que {{jsxref("Global_Objects/parseInt", "parseInt")}} do objeto global.

## Instâncias `Number`

Toda instância `Number` herdam de {{jsxref("Number.prototype")}}. O objeto 'prototype' do construtor `Number` pode ser modificado para afetar todas as instâncias `Number`.

### Métodos

{{page('/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/prototype', 'Methods')}}

## Exemplos

### Exemplo: Usando o objeto `Number` para atribuir valores a variáveis numéricas

O seguinte exemplo usa as propriedades do objeto `Number` para atribuir valores a várias variáveis numéricas:

```js
var biggestNum = Number.MAX_VALUE;
var smallestNum = Number.MIN_VALUE;
var infiniteNum = Number.POSITIVE_INFINITY;
var negInfiniteNum = Number.NEGATIVE_INFINITY;
var notANum = Number.NaN;
```

### Exemplo: Intervalo inteiro para `Number`

O seguinte exemplo mostra os valores inteiros mínimo e máximo que podem ser representados como objeto `Number` (para mais detalhes, referir-se ao padrão EcmaScript standard (EcmaScript standard), capítulo _8.5 O tipo de número (The Number Type_):

```js
var maxInt = 9007199254740992;
var minInt = -9007199254740992;
```

Ao analisar dados que foram serializados para JSON, valores inteiros que caem fora desse intervalo podem ser corrompidos quando o analisador JSON os converte ao tipo `Number`. Usando `String` em vez disso é uma possível alternativa para se evitar um resultado indesejado.

### Exemplo: Usando `Number para converter um objeto Date`

O exemplo a seguir converte o objeto `Date` para um valor numérico usando `Number como uma função`:

```js
var d = new Date("December 17, 1995 03:24:00");
print(Number(d));
```

Isto resulta em "819199440000".

### Converte 'string' numérica em números

```js
Number("123"); // 123
Number("12.3"); // 12.3
Number(""); // 0
Number("0x11"); // 17
Number("0b11"); // 3
Number("0o11"); // 9
Number("foo"); // NaN
Number("100a"); // NaN
```

## Especificações

| Especificação                                              | Situação           | Comentário                                                                                           |
| ---------------------------------------------------------- | ------------------ | ---------------------------------------------------------------------------------------------------- |
| Primeiro edição ECMAScript. Implementado em JavaScript 1.1 | Padrão             | definição inicial.                                                                                   |
| {{SpecName('ES5.1', '#sec-15.7', 'Number')}}               | {{Spec2('ES5.1')}} |                                                                                                      |
| {{SpecName('ES6', '#sec-number-objects', 'Number')}}       | {{Spec2('ES6')}}   | Novos métodos e propriedades adicionadas (EPSILON, isFinite, isInteger, isNaN, parseFloat, parseInt) |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Number")}}

## Veja também

- {{jsxref("Global_Objects/NaN", "NaN")}}
- O objeto global {{jsxref("Global_Objects/Math", "Math")}}
