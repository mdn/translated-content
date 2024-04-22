---
title: Números e datas
slug: Web/JavaScript/Guide/Numbers_and_dates
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Expressions_and_Operators", "Web/JavaScript/Guide/Text_formatting")}}

Este capítulo apresenta como utilizar números e datas em JavaScript.

## Números

Em Javascript, todos os números são implementados em [double-precision 64-bit binary format IEEE 754](https://en.wikipedia.org/wiki/Double-precision_floating-point_format) (Por exemplo, um número entre -(253 -1) e 253 -1). **Não havendo especificação de tipo Integer**. Além de ser capaz de representar números de ponto flutuante, o tipo de número tem três valores simbólicos: `+`{{jsxref("Infinity")}}, `-`{{jsxref("Infinity")}}, and {{jsxref("NaN")}} (not-a-number). Veja também [Estruturas e Tipos de Dados em Javascript](/pt-BR/docs/Web/JavaScript/Data_structures) em contexto com outros tipos primitivos em JavaScript.

Você pode usar quatro tipos de números literais: decimal, binário, octal, e hexadecimal.

### Números Decimais

```js
1234567890;
42;

// Cuidado quando usar zeros à esquerda:

0888; // 888 interpretado como decimal
0777; // interpretado como octal  em modo no-strict (511 em decimal)
```

Note que literais decimais podem começar com zero (`0`) seguido por outro digito decimal, porém se o próximo dígito depois do primeiro zero for menor do que 8, o número será analisado como um número octal.

### Números Binários

A sintaxe para números Binários, usa um zero à esquerda seguido de uma letra minúscula ou maiúscula "B" (`0b` or `0B`). Se os dígitos depois de 0b não forem 0 ou 1, a seguinte exceção [`SyntaxError`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError) é lançada: "Missing binary digits after 0b".

```js
var FLT_SIGNBIT = 0b10000000000000000000000000000000; // 2147483648
var FLT_EXPONENT = 0b01111111100000000000000000000000; // 2139095040
var FLT_MANTISSA = 0b00000000011111111111111111111111; // 8388607
```

### Números octais

A sintaxe dos números octais usa um zero na frente. Se os dígitos depois do 0 estiverem fora do alcance 0 a 7, o número será interpretado como um número decimal.

```js
var n = 0755; // 493
var m = 0644; // 420
```

Modo estrito no ECMAScript 5 proíbe a sintaxe octal. A sintaxe Octal não é parte do ECMAScript 5, mas é suportada por todos os navegadores prefixando o número octal com zero: `0644 === 420` e `"\045" === "%"`. Em ECMAScript 6 números Octais são suportados prefixando o número com "`0`o" isto é.

```js
var a = 0o10; // ES6: Octal
```

### Numeros hexadecimais

A sintaxe numérica Hexadecimal usa um 0 na frente seguido por uma letra "X" maiúscula ou minúscula (`0x` ou `0X)`. Se os dígidos depois do 0x estiverem fora do alcance (0123456789ABCDF), o seguinte erro de sintaxe ([`SyntaxError`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)) ocorrerá: "Identifier starts immediately after numeric literal" (O identificador começa imediatamente depois do literal numérico).

```js
0xfffffffffffffffff; // 295147905179352830000
0x123456789abcdef; // 81985529216486900
0xa; // 10
```

### Exponenciação

```js
1e3; // 1000
2e6; // 2000000
0.1e2; // 10
```

## `Objeto Number`

Um objeto built-in {{jsxref("Number")}} tem propriedades para constantes numéricas, tais como valor máximo, não número e infinito. Você não pode alterar os valores dessas propriedades e elas são usadas assim:

```js
var maiorNum = Number.MAX_VALUE; //Valor máximo
var menorNum = Number.MIN_VALUE; //Valor mínimo
var infiniteNum = Number.POSITIVE_INFINITY; //Infinito positivo
var negInfiniteNum = Number.NEGATIVE_INFINITY; //Infinito negativo
var notANum = Number.NaN; //Não é numeral
```

Você sempre se refere a uma propriedade do objeto predefinido `Number` como mostrado acima, e não como uma propriedade de um objeto `Number que você mesmo criou.`

A tabela à seguir sumariza as propriedades do objeto `Number.`

| Propriedade                            | Descrição                                                                                                  |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| {{jsxref("Number.MAX_VALUE")}}         | O maior número representável.                                                                              |
| {{jsxref("Number.MIN_VALUE")}}         | O menor número representável.                                                                              |
| {{jsxref("Number.NaN")}}               | Valor "not a number" especial                                                                              |
| {{jsxref("Number.NEGATIVE_INFINITY")}} | Valor especial infinito negativo; retornado em overflow                                                    |
| {{jsxref("Number.POSITIVE_INFINITY")}} | Valor especial infinito positivo; retornado em overflow                                                    |
| {{jsxref("Number.EPSILON")}}           | Diferença entre um e o menor valor maior do que um que pode ser representado como um {{jsxref("Number")}}. |
| {{jsxref("Number.MIN_SAFE_INTEGER")}}  | Mínimo safe integer em JavaScript.                                                                         |
| {{jsxref("Number.MAX_SAFE_INTEGER")}}  | Máximo safe integer em JavaScript.                                                                         |

| Método                               | Descrição                                                                                                                                                |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("Number.parseFloat()")}}    | Analisa um argumento string e retorna um número float. O mesmo que a função global {{jsxref("parseFloat", "parseFloat()")}}.                             |
| {{jsxref("Number.parseInt()")}}      | Analisa um argumento string e retorna um inteiro da raiz ou base especificada. O mesmo que a função global{{jsxref("parseInt", "parseInt()")}}.          |
| {{jsxref("Number.isFinite()")}}      | Determina se o valor passado é um número finito.                                                                                                         |
| {{jsxref("Number.isInteger()")}}     | Determina se o valor passado é um inteiro.                                                                                                               |
| {{jsxref("Number.isNaN()")}}         | Determina se o valor passado é {{jsxref("Global_Objects/NaN", "NaN")}}. A versão mais robusta da original {{jsxref("Global_Objects/isNaN", "isNaN()")}}. |
| {{jsxref("Number.isSafeInteger()")}} | Determina se o valor passado é um safe integer.                                                                                                          |

O protótipo `Number` provê métodos para resgatar informações de objetos `Number` em vários formatos. A tabela a seguir sumariza os métodos de `Number.prototype`.

| Método                                                | Descrição                                                                                        |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| {{jsxref("Number.toExponential", "toExponential()")}} | Retorna uma string representando o número em uma notação exponencial.                            |
| {{jsxref("Number.toFixed", "toFixed()")}}             | Retorna uma string representando o número em notação com ponto-fíxo.                             |
| {{jsxref("Number.toPrecision", "toPrecision()")}}     | Retorna uma string representando o número em uma precisão especificada na notação de ponto-fíxo. |

## `Objeto Math`

O objeto {{jsxref("Math")}} tem propriedades e métodos para constantes matemáticas e funções. Por exemplo, o `PI do objeto` Math tem o valor de pi (3,141...), que você usaria em uma aplicação como

```js
Math.PI;
```

Similarmente, funções matemáticas padrão são métodos do Math. Isto inclui funções trigonométricas, logarítmicas, exponenciais, e outras funções. Por exemplo, se você quiser usar a função trigonométrica seno, basta escrever

```js
Math.sin(1.56);
```

Note que todos os métodos trigonométricos pegam argumentos em radianos.

A tabela a seguir sumariza os métodos do objeto Math.

| Método                                                                                                                                                                                                             | Descrição                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| {{jsxref("Math.abs", "abs()")}}                                                                                                                                                                                    | Valor absoluto                                                                                                                       |
| {{jsxref("Math.sin", "sin()")}}, {{jsxref("Math.cos", "cos()")}}, {{jsxref("Math.tan", "tan()")}}                                                                                                                  | Funções trigonométricas padrão; Argumentos em radianos                                                                               |
| {{jsxref("Math.asin", "asin()")}}, {{jsxref("Math.acos", "acos()")}}, {{jsxref("Math.atan", "atan()")}}, {{jsxref("Math.atan2", "atan2()")}}                                                                       | Funções trigonométricas inversas; retorna valores em radianos                                                                        |
| {{jsxref("Math.sinh", "sinh()")}}, {{jsxref("Math.cosh", "cosh()")}}, {{jsxref("Math.tanh", "tanh()")}}                                                                                                            | Funções trigonométricas hiperbólicas; retorna valores em radianos.                                                                   |
| {{jsxref("Math.asinh", "asinh()")}}, {{jsxref("Math.acosh", "acosh()")}}, {{jsxref("Math.atanh", "atanh()")}}                                                                                                      | Funções trigonométricas hiperbólicas inversas; retorna valores em radianos.                                                          |
| {{jsxref("Math.pow", "pow()")}}, {{jsxref("Math.exp", "exp()")}}, {{jsxref("Math.expm1", "expm1()")}}, {{jsxref("Math.log10", "log10()")}}, {{jsxref("Math.log1p", "log1p()")}}, {{jsxref("Math.log2", "log2()")}} | Funções exponenciais e logarítmicas.                                                                                                 |
| {{jsxref("Math.floor", "floor()")}}, {{jsxref("Math.ceil", "ceil()")}}                                                                                                                                             | Retorna o maior/menor inteiro que é menor/maior inteiro que ou igual ao argumento.                                                   |
| {{jsxref("Math.min", "min()")}}, {{jsxref("Math.max", "max()")}}                                                                                                                                                   | Retorna menor ou maior (respectivamente) de uma lista separada por vírgula de argumentos numéricos                                   |
| {{jsxref("Math.random", "random()")}}                                                                                                                                                                              | Retorna um número aleatório entre 0 e 1.                                                                                             |
| {{jsxref("Math.round", "round()")}}, {{jsxref("Math.fround", "fround()")}}, {{jsxref("Math.trunc", "trunc()")}},                                                                                                   | Funções de arredondamento e truncamento.                                                                                             |
| {{jsxref("Math.sqrt", "sqrt()")}}, {{jsxref("Math.cbrt", "cbrt()")}}, {{jsxref("Math.hypot", "hypot()")}}                                                                                                          | Raiz quadrada, raiz cúbica, raiz quadrada da soma de argumentos ao quadrado.                                                         |
| {{jsxref("Math.sign", "sign()")}}                                                                                                                                                                                  | O sinal de um número, indicando se o número é positivo, negativo ou zero.                                                            |
| {{jsxref("Math.clz32", "clz32()")}}, {{jsxref("Math.imul", "imul()")}}                                                                                                                                             | Número de zeros à esquerda na representação binária de 32-bits. The result of the C-like 32-bit multiplication of the two arguments. |

Diferentemente de muitos outros objetos, você nunca cria um objeto Math por conta própria. Você sempre deve utilizar o objeto Math nativo.

## `Objeto Date`

JavaScript não possui dados do tipo data. No entanto, você pode usar o objeto {{jsxref("Date")}} e seus métodos para trabalhar com datas e horas nas suas aplicações. O objeto Date tem um grande número de métodos para setar, recuperar e manipular datas. Ele não tem nenhuma propriedade.

JavaScript manipula datas de maneira semelhante ao Java. As duas linguagens tem muitos dos mesmos métodos para lidar com datas e ambas armazenam datas como números em milisegundos, desde 1 de janeiro de 1970, às 00:00:00 ( January 1, 1970, 00:00:00).

A abrangência do objeto Date é de -100,000,000 dias até 100,000,000 dias relativos a 01 de janeiro de 1970 UTC.

Para criar um objeto Date:

```js
var dateObjectName = new Date([parameters]);
```

onde `dateObjectName` é o nome do objeto Date que está sendo criado; ele pode ser um novo objeto ou uma propriedade de um objeto existente.

A chamada de Date sem a palavra reservada `new`, simplesmente converte a data para uma representação dela como string.

Os `parâmetros` do código acima podem ser qualquer um a seguir:

- Nada: cria a data e hora de hoje. Por exemplo, `today = new Date();.`
- Uma string representando uma data da seguinte forma: "Mês dia, ano, horas:minutos:segundos". Por exemplo, `Xmas95 = new Date("25 de dezembro de 1995, 13:30:00")`. Se você omitir as horas, minutos ou segundos, o valor será setado para zero.
- Um conjunto de valores inteiros para ano, mês e dia. Por exemplo, `var Xmas95 = new Date(1995, 11, 25)`.
- Um conjunto de valores inteiros par ano, mês, dia, hora, minuto e segundos. Por exemplo, `var Xmas95 = new Date(1995, 11, 25, 9, 30, 0);`.

### Métodos do objeto Date

Os métodos do objeto Date para manipular data e hora pertencem às seguintes categorias:

- Métodos "set", para setar valores de data e hora em objetos Date.
- Métodos "get", para recuperar valores de data e hora de objetos Date.
- Métodos "to", para retornar valores de string de objetos Date.
- Métodos parse e UTC, para parsear string de Data.

Com os métods "get" e "set", você pode recuperar e setar segundos, minutos, horas, dia e mês, dia da semana, meses e anos, separadamente. Existe um método `getDay` que retorna o dia da semana, mas não existe um método `setDay` correspondente, porque o dia da semana é setado automaticamente. Estes métodos utilizam números inteiros para representar estes valores da seguinte maneira:

- Segundos e minutos: de 0 a 59
- Horas: de 0 a 23
- Dia: 0 (Domingo) a 6 (Sábado)
- Data: 1 a 31 (dia do mês)
- Meses: 0 (Janeiro) a 11 (Dezembro)
- Ano: anos desde 1900

Por exemplo, suponha que você queira definir a seguinite data:

```js
var Xmas95 = new Date("December 25, 1995");
```

Então `Xmas95.getMonth()` retorna 11 e `Xmas95.getFullYear()` retorna 1995.

Os métodos `getTime` e `setTime` são úteis para comparar datas. O método `getTime` retorna o número dos milisegundos desde 1 de janeiro de 1970, às 00:00:00 para um objeto Date.

Por exemplo, o código a seguir mostra os números dos dias que ainda faltam do ano vigente:

```js
var hoje = new Date();
var fimAno = new Date(1995, 11, 31, 23, 59, 59, 999); // Seta dia e mês
fimAno.setFullYear(hoje.getFullYear()); // Seta o ano para esse ano
var msPorDia = 24 * 60 * 60 * 1000; // Quantidade de milisegundos por dia
var diasRestantes = (fimAno.getTime() - hoje.getTime()) / msPorDia;
var diasRestantes = Math.round(diasRestantes); //retorna os dias restantes no ano
```

Este exemplo cria um objeto Date chamado `hoje` que contém a data de hoje. Ele, então, cria o objeto Date chamado `fimAno`e seta o ano para o ano vigente. Então, usando o número de milisegundos por dia, ele computa o número de dias entre hoje e `fimAno`, usando `getTime` e arredondando os números de dias.

O método `parse` é útil para associar valores de strings de data para objetos Date existentes. Por exemplo, o código a seguir usa `parse` e `setTime` para associar um valor de data ao objeto `IPOdate`:

```js
var IPOdate = new Date();
IPOdate.setTime(Date.parse("Aug 9, 1995"));
```

No exemplo a seguir, a função `JSClock()` retorna o tempo no formato de um relógio digital.

```js
function JSClock() {
  var tempo = new Date();
  var hora = tempo.getHours();
  var minuto = tempo.getMinutes();
  var segundo = tempo.getSeconds();
  var temp = "" + (hora > 12 ? hora - 12 : hora);
  if (hora == 0) temp = "12";
  temp += (minuto < 10 ? ":0" : ":") + minuto;
  temp += (segundo < 10 ? ":0" : ":") + segundo;
  temp += hora >= 12 ? " P.M." : " A.M.";
  return temp;
}
```

A função `JSClock` primeiro cria um objeto new `Date` chamado tempo; já que nenhum argumento é passado, `tempo` é criado com data e hora atuais. Ela então chama os métodos `getHours`, `getMinutes` e `getSeconds` e associa o valor à hora, minuto e segundo atuais à hora, minuto e segundo.

As próximas quatro declarações constroem uma string baseada em time. A primeira declaração cria uma variável `temp`, associando um valor utilizando uma expressão condicional; se hora é maior que 12, (hora - 12), senão simplesmente hora, a não ser que hora seja 0 que, nesse caso, será 12.

A próxima declaração anexa um valor `minuto` a `temp`. Se o valor de minuto for menos que 10, a expressão condicional acrescenta uma string com um 0 na frente; senão ela acrescenta uma string com dois pontos. Então a declaração anexa um valor `segundo` a `temp` do mesmo jeito.

Finalmente, a expressão condicional anexa "P.M." a `temp` se `hora` for 12 ou maior; senão ela anexa "A.M." a `temp`.

{{PreviousNext("Web/JavaScript/Guide/Expressions_and_Operators", "Web/JavaScript/Guide/Text_formatting")}}
