---
title: Gramática léxica
slug: Web/JavaScript/Reference/Lexical_grammar
---

{{JsSidebar("More")}}

Esta página descreve a gramática léxica da linguagem JavaScript. O código fonte de um script ECMAScript é lido da esquerda para direita e traduzido em uma sequência de elementos de entrada, como símbolos, caracteres de controle, finalizadores de linha, comentários ou espaços em branco. ECMAScript também define certas palavras-chave e literais e possui regras para inserção automática de ponto e vírgula ao final de declarações.

## Caracteres de controle

Caracteres de controle não possuem representação visual, mas são usados para controlar a interpretação do código.

| Código   | Nome                  | Abreviação | Descrição                                                                                                                                                                                                                        |
| -------- | --------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `U+200C` | Zero width non-joiner | \<ZWNJ>    | Colocado entre caracteres para evitar que sejam visualmente ligados (fundidos) em algumas linguagens ([Wikipedia](http://en.wikipedia.org/wiki/Zero-width_non-joiner)).                                                          |
| `U+200D` | Zero width joiner     | \<ZWJ>     | Colocado entre caracteres que podem não estar normalmente conectados, para que estes caracteres sejam renderizados com suas devidas ligações em certas linguagens ([Wikipedia](http://en.wikipedia.org/wiki/Zero-width_joiner)). |
| `U+FEFF` | Byte order mark       | \<BOM>     | Usado no início do script para marcá-lo como Unicode e especificar a ordem de bytes do código ([Wikipedia](http://en.wikipedia.org/wiki/Byte_order_mark)).                                                                       |

## Espaço em branco

Espaços em branco ajudam na legibilidade do código e separam os símbolos um do outro. Estes caracteres normalmente não são funcionais no código. [Ferramentas de minificação](https://en.wikipedia.org/wiki/Minification_%28programming%29) podem ser usadas para remover espaços em branco do código reduzindo, assim, a quantidade de dados que precisam ser transferidos.

| Código | Nome                           | Abreviação | Descrição                                                                                                            | Sequência de escape |
| ------ | ------------------------------ | ---------- | -------------------------------------------------------------------------------------------------------------------- | ------------------- |
| U+0009 | Character tabulation           | \<HT>      | Tabulação horizontal                                                                                                 | \t                  |
| U+000B | Line tabulation                | \<VT>      | Tabulação vertical                                                                                                   | \v                  |
| U+000C | Form feed                      | \<FF>      | Pular para próxima página ([Wikipedia](http://en.wikipedia.org/wiki/Page_break#Form_feed)).                          | \f                  |
| U+0020 | Space                          | \<SP>      | Espaço normal                                                                                                        |                     |
| U+00A0 | No-break space                 | \<NBSP>    | Espaço normal, sem marcar quebra de linha                                                                            |                     |
| Others | Other Unicode space characters | \<USP>     | [Outros tipos de espaço. Veja na Wikipedia](https://en.wikipedia.org/wiki/Space_%28punctuation%29#Spaces_in_Unicode) |                     |

## Finalizadores de linha

Além dos caracteres de espaço em branco, caracteres finalizadores de linha são usados para melhorar a legibilidade do código. Contudo, em alguns casos, finalizadores de linha podem influenciar a execução do código JavaScript, por isso você não poderá usá-los em alguns casos. Eles também afetam o [processo automático de inserção de ponto e vírgula](#automatic_semicolon_insertion). Em [expressões regulares](/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions) os finalizadores de linha podem ser indicados com a classe **\s**.

Apenas os seguintes códigos Unicode são tratados como finalizadores de linha no ECMAScript, outros caracteres de quebra de linha são tratados apenas como espaço em branco (por exemplo, Next Line, NEL, U+0085 são considerados espaço em branco).

| Código | Nome                | Abreviação | Descrião                                                              | Sequência de escape |
| ------ | ------------------- | ---------- | --------------------------------------------------------------------- | ------------------- |
| U+000A | Line Feed           | \<LF>      | Caractere de nova linha em sistemas UNIX.                             | \n                  |
| U+000D | Carriage Return     | \<CR>      | Caractere de nova linha nos sistemas Commodore e nos primeiros Mac's. | \r                  |
| U+2028 | Line Separator      | \<LS>      | [Wikipedia](http://en.wikipedia.org/wiki/Newline)                     |                     |
| U+2029 | Paragraph Separator | \<PS>      | [Wikipedia](http://en.wikipedia.org/wiki/Newline)                     |                     |

## Comentários

Comentários são usados para inserir dicas, notas, sugestões ou alertas no código JavaScript. Isto pode tornar mais fácil ler ou entender o que o código faz. Também pode ser usado para desabilitar código, evitando sua execução; isto pode ser uma valiosa ferramenta na hora de debugar seu código.

JavaScript possui duas formas de inserir comentário no código.

O primeiro é com o uso de duas barras `//`; isso faz com que qualquer coisa escrita a seguir, e na mesma linha, se torne comentário. Por exemplo:

```js
function comment() {
  // Isto é um comentário de uma linha em JavaScript
  console.log("Hello world!");
}
comment();
```

A segunda forma é com o uso de `/* */`, que é muito mais flexível.

Por exemplo, você pode usá-lo em uma única linha:

```js
function comment() {
  /* Isto é um comentário de uma linha em JavaScript */
  console.log("Hello world!");
}
comment();
```

Ou pode fazer um comentário de várias linhas, desta forma:

```js
function comment() {
  /* Este é um comentário de várias linhas. Observe que
 não precisamos encerrar o comentário até terminar. */
  console.log("Hello world!");
}
comment();
```

Você também pode usá-lo no meio de uma linha, se quiser, porém isto pode tornar seu código mais difícil de ler, portanto use com cautela:

```js
function comment(x) {
  console.log("Hello " + x /* insira o valor de x */ + " !");
}
comment("world");
```

Além disso, você pode usá-lo para desativar algum código para evitar que seja executado, envolvendo o código em um comentário, assim:

```js
function comment() {
  /* console.log('Hello world!'); */
}
comment();
```

Neste caso, a função `console.log()` nunca será invocada, pois está comentada. Qualquer quantidade de linhas de código podem ser desabilitadas desta forma.

## Palavras-chave

### Palavras-chave reservadas do ECMAScript 2015

- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/switch", "case")}}
- {{jsxref("Statements/try...catch", "catch")}}
- {{jsxref("Statements/class", "class")}}
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/continue", "continue")}}
- {{jsxref("Statements/debugger", "debugger")}}
- {{jsxref("Statements/default", "default")}}
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Statements/do...while", "do")}}
- {{jsxref("Statements/if...else", "else")}}
- {{jsxref("Statements/export", "export")}}
- {{jsxref("Statements/class", "extends")}}
- {{jsxref("Statements/try...catch", "finally")}}
- {{jsxref("Statements/for", "for")}}
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/if...else", "if")}}
- {{jsxref("Statements/import", "import")}}
- {{jsxref("Operators/in", "in")}}
- {{jsxref("Operators/instanceof", "instanceof")}}
- {{jsxref("Operators/new", "new")}}
- {{jsxref("Statements/return", "return")}}
- {{jsxref("Operators/super", "super")}}
- {{jsxref("Statements/switch", "switch")}}
- {{jsxref("Operators/this", "this")}}
- {{jsxref("Statements/throw", "throw")}}
- {{jsxref("Statements/try...catch", "try")}}
- {{jsxref("Operators/typeof", "typeof")}}
- {{jsxref("Statements/var", "var")}}
- {{jsxref("Operators/void", "void")}}
- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/with", "with")}}
- {{jsxref("Operators/yield", "yield")}}

### Palavras-chave reservadas para uso futuro

As seguintes palavras-chave estão reservadas para uso futuro na especificação ECMAScript. Atualmente elas não tem funcionalidade, mas poderão ter no futuro, portanto elas também não podem ser usadas como identificadores.

Estes sempre são reservados:

- `enum`

Os seguintes são reservados apenas quando o código está em modo estrito (_strict mode_):

- `implements`
- `interface`
- {{jsxref("Statements/let", "let")}}
- `package`
- `private`
- `protected`
- `public`
- `static`

Os seguintes são reservados apenas quando são encontrados no código do módulo:

- `await`

#### Palavras-chave reservadas para uso futuro em versões antigas

As seguintes palavras-chave foram reservadas para uso futuro em especificações antigas do ECMAScript (ECMAScript 1 até 3).

- `abstract`
- `boolean`
- `byte`
- `char`
- `double`
- `final`
- `float`
- `goto`
- `int`
- `long`
- `native`
- `short`
- `synchronized`
- `throws`
- `transient`
- `volatile`

Além disso, os literais `null`, `true`, e `false` não podem ser usados como identificadores em ECMAScript.

### Uso de palavras-chave reservadas

Palavras reservadas atualmente só não podem ser usadas como identificadores . Como descrito em [es5.github.com/#A.1](http://es5.github.com/#A.1), não há problema em usar palavras reservadas desta forma.

```js
a.import
a['import']
a = { import: 'test' }.
```

Por outro lado, o seguinte é ilegal por quê a palavra reservada "_import_" está sendo usada como identificador. Identificadores podem ser usados em declaração de expressões e funções.

```js
function import() {} // Proibido.
```

## Literais

### Null

Veja também [`null`](/pt-BR/docs/Web/JavaScript/Reference/Operators/null) para mais informações.

```js
null;
```

### Booleanos

Veja também [`Boolean`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Boolean) para mais informações.

```js
true;
false;
```

### Números

#### Decimal

```js
1234567890;
42;

// Cuidado com o uso precedido de zero:
0888; // 888 convertido como decimal
0777; // Convertido como octal, 511 em decimal
```

Veja que números decimais podem começar com zero (`0`) seguido de outro dígito decimal, porém se todos dígitos após o zero inicial forem menores que 8, o número é interpretado como um número octal. Isso não vai disparar um erro em JavaScript, veja [Erro do Firefox 957513](https://bugzil.la/957513). Veja também esta página sobre conversão de tipo [`parseInt()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt#octal_interpretations_with_no_radix).

#### Binário

Números binários em JavaScript são iniciados em zero seguido da letra "B" em maiúsculo ou minúsculo (`0b` ou `0B`). Esta sintaxe é nova no ECMAScript 2015, por isso verifique a compatibilidade do navegador. Se o dígito seguinte ao `0b` não for 0 ou 1, o seguinte [erro de sintaxe](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError) é disparado: "Missing binary digits after 0b".

```js
var FLT_SIGNBIT = 0b10000000000000000000000000000000; // 2147483648
var FLT_EXPONENT = 0b01111111100000000000000000000000; // 2139095040
var FLT_MANTISSA = 0b00000000011111111111111111111111; // 8388607
```

#### Octal

Números octais em JavaScript são escritos com zero inicial seguido da letra "O" em maiúsculo ou minúsculo (`0o` ou `0O)`. Esta sintaxe é nova no ECMAScript 2015, por isso verifique a compatibilidade do navegador. Se os dígitos após o `0o não forem octais válidos` (01234567), o seguinte [erro de sintaxe](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError) será disparado: "Missing octal digits after 0o".

```js
var n = 0o755; // 493
var m = 0o644; // 420

// Também é possível com apenas um zero no início (veja sobre decimais acima)
0755;
0644;
```

#### Hexadecimal

Números hexadecimais em JavaScript são iniciados com zero seguido da letra "X" em maiúsculo ou minúsculo (`0x` ou `0X)`. Se os dígitos após o 0x não forem hexadecimais válidos (0123456789ABCDEF), o seguinte [erro de sintaxe](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError) será disparado: "Identifier starts immediately after numeric literal".

```js
0xfffffffffffffffff; // 295147905179352830000
0x123456789abcdef; // 81985529216486900
0xa; // 10
```

### Objetos

Veja também {{jsxref("Object")}} e [Object initializer](/pt-BR/docs/Web/JavaScript/Reference/Operators/Object_initializer) para mais informações.

```js
var o = { a: "foo", b: "bar", c: 42 };

// Notação curta. Novidade no ES2015
var a = "foo",
  b = "bar",
  c = 42;
var o = { a, b, c };

// instead of
var o = { a: a, b: b, c: c };
```

### Arrays

Veja também {{jsxref("Array")}} para mais informações.

```js
[1954, 1974, 1990, 2014];
```

### Strings

```js-nolint
'foo';
"bar";
```

#### Caracteres de escape em hexadecimal

```js
"\xA9"; // "©"
```

#### Caracteres de escape em Unicode

A representação de caracteres de escape em Unicode requer ao menos quatro caracteres após o `\u`.

```js
"\u00A9"; // "©"
```

#### Codificação de caracteres Unicode

Novidade no ECMAScript 2015. Com a codificação de caracteres Unicode qualquer caractere pode ser representado usando sequência hexadecimal, desta forma podemos representar caracteres Unicode com sequência hexadecimal até `0x10FFFF`. Usando apenas Unicode, muitas vezes pode ser necessário utilizar mais de uma sequência para conseguir o mesmo resultado.

Veja também {{jsxref("String.fromCodePoint()")}} ou {{jsxref("String.prototype.codePointAt()")}}.

```js
"\u{2F804}";

// O mesmo usando apenas Unicode
"\uD87E\uDC04";
```

### Expressões regulares

Veja também [`RegExp`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp) para mais informações.

```js
/ab+c/g

// Um "espaço vazio" em expressão regular
// Para evitar confusão com comentário de linha única
// faça o seguinte:
/(?:)/
```

### Templates

Veja também [template strings](/pt-BR/docs/Web/JavaScript/Reference/Template_literals) para mais informações .

```js
`texto`;

`linha de texto 1
 linha de texto 2`;

`texto ${expressão} texto`;

tag`texto ${expressão} texto`;
```

## Inserção automática de ponto e vírgula

Algumas [declarações](/pt-BR/docs/Web/JavaScript/Reference/Statements) JavaScript precisam ser finalizadas com ponto e vírgula e, por isso, são afetadas pelo mecanismo automático de inserção de ponto evírgula (na silga ASI, em inglês):

- Declaração vazia
- `let`, `const`, declaração de variável
- `import`, `export`, declaração module
- Expressões
- `debugger`
- `continue`, `break`, `throw`
- `return`

A especificação ECMAScript menciona [três regras para inserção de ponto e vírgula](https://tc39.github.io/ecma262/#sec-rules-of-automatic-semicolon-insertion).

1\. Um ponto e vírgula é inserido antes, quando um [finalizador de linha](#line_terminators) ou um "}" é encontrado em local não permitido pela sintaxe.

```js
{ 1 2 } 3

// É transformado pelo ASI em

{ 1 2 ;} 3;
```

2\. Um ponto e vírgula é inserido ao final, quando o sinal de final de linha é detectado e o conversor não é capaz de unir a linha seguinte em um único comando.

Aqui o `++ não é interpretado como operador de incremento aplicado à variável b por que há um finalizador de linha entre o b e ++` .

```js-nolint
a = b
++c

// É transformado pelo ASI em

a = b;
++c;
```

3\. Um ponto e vírgula é inserido ao final quando uma declaração com regra léxica restrita é encontrada seguida de um finalizador de linha. As declaraçõs sem regra específica de finalizador de linha são:

- Operadores de incremento ou decremento (`++` and `--`)
- `continue`
- `break`
- `return`
- `yield`, `yield*`
- `module`

```js-nolint
return
a + b

// É transformado pelo ASI em

return;
a + b;
```

## Especificações

| Specification                                                                          | Status               | Comment                                                              |
| -------------------------------------------------------------------------------------- | -------------------- | -------------------------------------------------------------------- |
| {{SpecName('ES1')}}                                                                    | {{Spec2("ES1")}}     | Definição inicial.                                                   |
| {{SpecName('ES5.1', '#sec-7', 'Lexical Conventions')}}                                 | {{Spec2('ES5.1')}}   |                                                                      |
| {{SpecName('ES6', '#sec-ecmascript-language-lexical-grammar', 'Lexical Grammar')}}     | {{Spec2('ES6')}}     | Adicionado: números Binarios e Octais, Unicode code point, Templates |
| {{SpecName('ESDraft', '#sec-ecmascript-language-lexical-grammar', 'Lexical Grammar')}} | {{Spec2('ESDraft')}} |                                                                      |

## Compatibilidade com navegadores

{{Compat}}

## Firefox-notas específicas

- Em versões anteriores ao Firefox 5 (JavaScript 1.8.6) palavras reservadas para uso futuro não pdem ser usadas em strict mode. Essa falha de ECMAScript foi corrigida no Firefox 5.

## Veja também

- [Jeff Walden: Binary and octal numbers](https://whereswalden.com/2013/08/12/micro-feature-from-es6-now-in-firefox-aurora-and-nightly-binary-and-octal-numbers/)
- [Mathias Bynens: JavaScript character escape sequences](https://mathiasbynens.be/notes/javascript-escapes)
- {{jsxref("Boolean")}}
- {{jsxref("Number")}}
- {{jsxref("RegExp")}}
- {{jsxref("String")}}
