---
title: Math
slug: Web/JavaScript/Reference/Global_Objects/Math
---

{{JSRef("Global_Objects", "Math")}}

**Math** é um objeto embutido que tem propriedades e métodos para constantes e funções matemáticas. Não é um objeto de função.

## Descrição

Ao contrário de outros objetos globais, `Math` não é um construtor. Todas as propriedades e métodos de `Math` são estáticos. Você pode referenciar a constante PI como `Math.PI` e você pode chamar a função de seno como `Math.sin(x)`, onde `x` é o argumento do método. Constantes são definidas com a precisão total de números reais em JavaScript.

## Propriedades

- {{jsxref("Math.E")}}
  - : Constante de Euler e base dos logaritmos naturais, aproximadamente 2.718.
- {{jsxref("Math.LN2")}}
  - : Logaritmo natural de 2, aproximadamente 0.693.
- {{jsxref("Math.LN10")}}
  - : Logaritmo natural de 10, aproximadamente 2.303.
- {{jsxref("Math.LOG2E")}}
  - : Logaritmo de E na base 2, aproximadamente 1.443.
- {{jsxref("Math.LOG10E")}}
  - : Logaritmo de E na base 10, aproximadamente 0.434.
- {{jsxref("Math.PI")}}
  - : Relação entre a circunferência de um círculo e o seu diâmetro, aproximadamente 3.14159.
- {{jsxref("Math.SQRT1_2")}}
  - : Raiz quadrada de 1/2; Equivale a 1 dividido pela raiz quadrada de 2, aproximadamente 0.707.
- {{jsxref("Math.SQRT2")}}
  - : Raiz quadrada de 2, aproximadamente 1.414.

## Métodos

> **Nota:** Note que as funções trigonométricas (sin(), cos(), tan(), asin(), acos(), atan(), atan2()) recebem ou retornam ângulos em radianos. Divida por (`Math.PI/180`) para converter radianos em graus, ou multiplique por esse valor para fazer a conversão inversa.

- {{jsxref("Global_Objects/Math/abs", "Math.abs(x)")}}

  - : Retorna o módulo, ou valor absoluto, de um número (

    <math><semantics><mrow><mo stretchy="false">|</mo><mi>x</mi><mo stretchy="false">|</mo></mrow><annotation encoding="TeX">|x|</annotation></semantics></math>

    ).

- {{jsxref("Global_Objects/Math/acos", "Math.acos(x)")}}

  - : Retorna o arco-coseno de um número (

    <math><semantics><mrow><mo lspace="0em" rspace="0em">arccos</mo><mi>x</mi></mrow><annotation encoding="TeX">\arccos{x}</annotation></semantics></math>

    ).

- {{jsxref("Global_Objects/Math/acosh", "Math.acosh(x)")}} {{experimental_inline}}
  - : Retorna o arco-coseno hiperbólico de um número.
- {{jsxref("Global_Objects/Math/asin", "Math.asin(x)")}}

  - : Retorna o arco-seno de um número (

    <math><semantics><mrow><mo lspace="0em" rspace="0em">arcsin</mo><mi>x</mi></mrow><annotation encoding="TeX">\arcsin{x}</annotation></semantics></math>

    ).

- {{jsxref("Global_Objects/Math/asinh", "Math.asinh(x)")}} {{experimental_inline}}
  - : Retorna o arco-seno hiperbólico de um número.
- {{jsxref("Global_Objects/Math/atan", "Math.atan(x)")}}

  - : Retorna o arco-tangente de um número (

    <math><semantics><mrow><mo lspace="0em" rspace="0em">arctan</mo><mi>x</mi></mrow><annotation encoding="TeX">\arctan{x}</annotation></semantics></math>

    ).

- {{jsxref("Global_Objects/Math/atanh", "Math.atanh(x)")}} {{experimental_inline}}

  - : Retorna o arco-tangente hiperbólico de um número (

    <math><semantics><mrow><mo lspace="0em" rspace="0em">arctan</mo><mi>x</mi></mrow><annotation encoding="TeX">\arctan{x}</annotation></semantics></math>

    ).

- {{jsxref("Global_Objects/Math/atan2", "Math.atan2(x, y)")}}
  - : Retorna o arco-tangente do quociente de seus argumentos.
- {{jsxref("Global_Objects/Math/cbrt", "Math.cbrt(x)")}} {{experimental_inline}}

  - : Retorna a raiz cúbica de um número (

    <math><semantics><mroot><mi>x</mi><mn>3</mn></mroot><annotation encoding="TeX">\root{3}{x}</annotation></semantics></math>

    ).

- {{jsxref("Global_Objects/Math/ceil", "Math.ceil(x)")}}
  - : Retorna o menor inteiro que é maior ou igual a um número.
- {{jsxref("Global_Objects/Math/cos", "Math.cos(x)")}}

  - : Retorna o coseno de um número (

    <math><semantics><mrow><mo lspace="0em" rspace="0em">cos</mo><mi>x</mi></mrow><annotation encoding="TeX">\cos{x}</annotation></semantics></math>

    ).

- {{jsxref("Global_Objects/Math/cosh", "Math.cosh(x)")}} {{experimental_inline}}
  - : Retorna o coseno hiperbólico de um número .
- {{jsxref("Global_Objects/Math/exp", "Math.exp(x)")}}

  - : Retorna

    <math><semantics><msup><mi>e</mi><mi>x</mi></msup><annotation encoding="TeX">e^x</annotation></semantics></math>

    , onde _x_ é o argumento, e

    <math><semantics><mi>e</mi><annotation encoding="TeX">e</annotation></semantics></math>

    é a constante de Euler (2.718...), a base do logaritmo natural.

- {{jsxref("Global_Objects/Math/expm1", "Math.expm1(x)")}} {{experimental_inline}}

  - : Retorna

    <math><semantics><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>-</mo><mn>1</mn></mrow><annotation encoding="TeX">e^x-1</annotation></semantics></math>

    .

- {{jsxref("Global_Objects/Math/floor", "Math.floor(x)")}}
  - : Retorna o maior inteiro que é menor ou igual a um número.
- {{jsxref("Global_Objects/Math/fround", "Math.fround(x)")}} {{experimental_inline}}
  - : Retorna a mais próxima representação de ponto flutuante de [precisão-única](http://en.wikipedia.org/wiki/Single_precision) de um número.
- {{jsxref("Global_Objects/Math/hypot", "Math.hypot([x[,y[,…]]])")}} {{experimental_inline}}

  - : Retorna a raiz quadrada da soma dos quadrados dos argumentos (

    <math><semantics><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mo>…</mo></mrow></msqrt><annotation encoding="TeX">\sqrt{x^2 + y^2 + \dots}</annotation></semantics></math>

    ).

- {{jsxref("Global_Objects/Math/imul", "Math.imul(x)")}} {{experimental_inline}}
  - : Retorna o resultado de uma multiplicação de inteiro de 32-bit.
- {{jsxref("Global_Objects/Math/log", "Math.log(x)")}}

  - : Retorna o logaritmo natural (

    <math><semantics><mrow><msub><mo lspace="0em" rspace="0em">log</mo><mi>e</mi></msub><mi>x</mi></mrow><annotation encoding="TeX">\log_ex</annotation></semantics></math>

    ou

    <math><semantics><mrow><mo lspace="0em" rspace="0em">ln</mo><mi>x</mi></mrow><annotation encoding="TeX">\ln{x}</annotation></semantics></math>

    ) de um número.

- {{jsxref("Global_Objects/Math/log1p", "Math.log1p(x)")}} {{experimental_inline}}

  - : Retorna o logaritmo natural de 1 + x (

    <math><semantics><mrow><msub><mo lspace="0em" rspace="0em">log</mo><mi>e</mi></msub><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy="false">)</mo></mrow><annotation encoding="TeX">\log_e(1+x)</annotation></semantics></math>

    ou

    <math><semantics><mrow><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy="false">)</mo></mrow><annotation encoding="TeX">\ln(1+x)</annotation></semantics></math>

    ) de um número.

- {{jsxref("Global_Objects/Math/log10", "Math.log10(x)")}} {{experimental_inline}}

  - : Retorna o logaritmo de x na base 10 (

    <math><semantics><mrow><msub><mo lspace="0em" rspace="0em">log</mo><mn>10</mn></msub><mi>x</mi></mrow><annotation encoding="TeX">\log\_{10}x</annotation></semantics></math>

    ).

- {{jsxref("Global_Objects/Math/log2", "Math.log2(x)")}} {{experimental_inline}}

  - : Retorna o logaritmo de x na base 2 (

    <math><semantics><mrow><msub><mo lspace="0em" rspace="0em">log</mo><mn>2</mn></msub><mi>x</mi></mrow><annotation encoding="TeX">\log_2 x</annotation></semantics></math>

    ).

- {{jsxref("Global_Objects/Math/max", "Math.max([x[,y[,…]]])")}}
  - : Retorna o maior dentre os parâmetros recebidos.
- {{jsxref("Global_Objects/Math/min", "Math.min([x[,y[,…]]])")}}
  - : Retorna o menor dentre os parâmetros recebidos.
- {{jsxref("Global_Objects/Math/pow", "Math.pow(x,y)")}}

  - : Retorna a base `x` elevada à potência `y` do expoente, ou seja,

    <math><semantics><msup><mi>x</mi><mi>y</mi></msup><annotation encoding="TeX">x^y</annotation></semantics></math>

    .

- {{jsxref("Global_Objects/Math/random", "Math.random()")}}
  - : Retorna um número pseudo-aleatório entre 0 e 1.
- {{jsxref("Global_Objects/Math/round", "Math.round(x)")}}
  - : Retorna o valor arrendodado de `x`, para o valor inteiro mais próximo.
- {{jsxref("Global_Objects/Math/sign", "Math.sign(x)")}} {{experimental_inline}}
  - : Retorna o sinal de `x`, indicando se é positivo, negativo ou zero.
- {{jsxref("Global_Objects/Math/sin", "Math.sin(x)")}}

  - : Retorna o seno de um número (

    <math><semantics><mrow><mo lspace="0em" rspace="0em">sin</mo><mi>x</mi></mrow><annotation encoding="TeX">\sin x</annotation></semantics></math>

    ).

- {{jsxref("Global_Objects/Math/sinh", "Math.sinh(x)")}} {{experimental_inline}}

  - : Retorna o seno hiperbólico de um número (

    <math><semantics><mrow><mo lspace="0em" rspace="0em">sinh</mo><mi>x</mi></mrow><annotation encoding="TeX">\sinh x</annotation></semantics></math>

    ).

- {{jsxref("Global_Objects/Math/sqrt", "Math.sqrt(x)")}}

  - : Retorna a raiz quadrada positiva de um número (

    <math><semantics><msqrt><mi>x</mi></msqrt><annotation encoding="TeX">\sqrt x</annotation></semantics></math>

    ).

- {{jsxref("Global_Objects/Math/tan", "Math.tan(x)")}}

  - : Retorna a tangente de um número (

    <math><semantics><mrow><mo lspace="0em" rspace="0em">tan</mo><mi>x</mi></mrow><annotation encoding="TeX">\tan x</annotation></semantics></math>

    ).

- {{jsxref("Global_Objects/Math/tanh", "Math.tanh(x)")}} {{experimental_inline}}

  - : Retorna a tangente hiperbólica de um número (

    <math><semantics><mrow><mo lspace="0em" rspace="0em">tanh</mo><mi>x</mi></mrow><annotation encoding="TeX">\tanh x</annotation></semantics></math>

    ).

- `Math.toSource()` {{Non-standard_inline() }}
  - : Retorna a string `"Math"`.
- {{jsxref("Global_Objects/Math/trunc", "Math.trunc(x)")}} {{experimental_inline}}
  - : Retorna a parte inteira de `x`, removendo quaisquer dígitos fracionários.

## Especificações

| Especificação                                   | Status             | Comentário                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----------------------------------------------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ES1')}}                             | {{Spec2('ES1')}}   | Definição inicial, implementado no JavaScript 1.1.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| {{SpecName('ES5.1', '#sec-15.8', 'Math')}}      | {{Spec2('ES5.1')}} |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| {{SpecName('ES6', '#sec-math-object', 'Math')}} | {{Spec2('ES6')}}   | Novos métodos adicionados: {{jsxref("Math.log10()", "log10()")}}, {{jsxref("Math.log2()", "log2()")}}, {{jsxref("Math.log1p()", "log1p()")}}, {{jsxref("Math.expm1()", "expm1()")}}, {{jsxref("Math.cosh()", "cosh()")}}, {{jsxref("Math.sinh()", "sinh()")}}, {{jsxref("Math.tanh()", "tanh()")}}, {{jsxref("Math.acosh()", "acosh()")}}, {{jsxref("Math.asinh()", "asinh()")}}, {{jsxref("Math.atanh()", "atanh()")}}, {{jsxref("Math.hypot()", "hypot()")}}, {{jsxref("Math.trunc()", "trunc()")}}, {{jsxref("Math.sign()", "sign()")}}, {{jsxref("Math.imul()", "imul()")}}, {{jsxref("Math.fround()", "fround()")}}, {{jsxref("Math.cbrt()", "cbrt()")}} e {{jsxref("Math.clz32()", "clz32()")}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Math")}}

## Veja também

- {{jsxref("Number")}}
