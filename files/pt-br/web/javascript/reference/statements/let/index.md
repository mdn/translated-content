---
title: let
slug: Web/JavaScript/Reference/Statements/let
l10n:
  sourceCommit: e1cbace7254a0e71dc46b1255de007f0f8508280
---

{{jsSidebar("Statements")}}

**`let`** declara uma variável local no escopo do bloco atual, opcionalmente iniciando-a com um valor.

{{InteractiveExample("Demonstração JavaScript: declaração let")}}

```js interactive-example
let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);
  // Resultado esperado: 2
}

console.log(x);
// Resultado esperado: 1
```

## Sintaxe

```js-nolint
let nome1;
let nome1 = valor1;
let nome1 = valor1, nome2 = valor2;
let nome1, nome2 = valor2;
let nome1 = valor1, nome2, /* ..., */ nomeN = valorN;
```

### Parâmetros

- `nomeN`
  - : O nome da variável a ser declarada. Deve ser um [identificador](/pt-BR/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) Javascript válido ou uma [atribuição por desestruturação](/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring).
- `valorN` {{optional_inline}}
  - : Valor inicial da variável. Pode ser qualquer expressão válida. O valor padrão é `undefined`.

## Descrição

O escopo de uma variável declarada com `let` é aquele encapsulado por chaves que mais se aproxima da sua declaração, podendo ser:

- Instrução em [Bloco](/pt-BR/docs/Web/JavaScript/Reference/Statements/block)
- Corpo de uma instrução [`switch`](/pt-BR/docs/Web/JavaScript/Reference/Statements/switch)
- Corpo de uma instrução [`try...catch`](/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch)
- Corpo de [uma das instruções `for`](/pt-BR/docs/Web/JavaScript/Reference/Statements#iterações), se `let` estiver presente no cabeçalho da declaração
- Corpo da função
- [Bloco de inicialização estática](/en-US/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)

Ou, se nenhum dos anteriores for aplicável:

- O [módulo](/pt-BR/docs/Web/JavaScript/Guide/Modules) atual, para código sendo executado em modo de módulo
- Escopo global, para código sendo executado em modo de script

Em comparação a declaração [`var`](/pt-BR/docs/Web/JavaScript/Reference/Statements/var), `let` possui as seguintes diferenças:

- Variáveis `let` são delimitadas por blocos assim como por funções.
- Variáveis `let` só podem ser acessadas após sua declaração (consulte [zona morta temporal](#zona_morta_temporal_zmt)). Por esse motivo, declarações `let` são comumente referidas como [não-içadas](/pt-BR/docs/Glossary/Hoisting) (hoisting).
- Variáveis `let` não criam propriedades na propriedade global [globalThis](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/globalThis) quando declaradas no nível superior de um script.
- Variáveis `let` não podem ser [redeclaradas](#redeclarações) por qualquer outra declaração no mesmo escopo.
- `let` inicia [_declarações_, não _instruções_](/pt-BR/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations). Isso significa que não é possível utilizar `let` sozinho como corpo de um bloco (o que faz sentido já que não há nenhuma maneira de acessar a variável).

```js-nolint example-bad
if (true) let a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
// (Declarações lexicas não podem aparecer em contextos de instrução unica.)
```

Note que `let` pode ser utilizado como identificador de uma declaração `var` ou `function` quando em modo [non-strict](/pt-BR/docs/Web/JavaScript/Reference/Strict_mode), mas você deve evitar utilizar `let` como um identificador para previnir ambiguidades sintáticas inesperadas.

Diversas guias de estilo (incluindo a [MDN](/pt-BR/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript#variable_declarations)) recomenda o uso de [`const`](/pt-BR/docs/Web/JavaScript/Reference/Statements/const) no lugar de `let` em qualquer ocasião onde a variável não é reatribuída dentro do seu escopo. Isso torna clara a intenção de que o tipo da variável (ou seu valor, no caso de um primitivo) nunca deve mudar. Outros podem preferir `let` para não primitivos que são mutados.

A lista que segue a palavra-chave `let` é chamada de [_lista de vinculação_](/pt-BR/docs/Glossary/Binding) e é separada por vírgulas, sendo que as vírgulas _não são_ [operadores de vírgula](/pt-BR/docs/Web/JavaScript/Reference/Operators/Comma_operator) e os sinais `=` _não são_ [operadores de atribuição](/pt-BR/docs/Web/JavaScript/Reference/Operators/Assignment). Os inicializadores de variáveis posteriores podem se referir a variáveis anteriores na lista.

### Zona morta temporal (ZMT)

Diz-se que uma variável declarada com `let`, `const` ou `class` está em uma "zona morta temporal" (ZMT) desde o início do bloco até que a execução do código chegue ao local em que a variável é declarada e inicializada.

Dentro da ZMT, a variável não foi inicializada com um valor, e qualquer tentativa de acessá-la resultará em um [`ReferenceError`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError). A variável é inicializada com um valor quando a execução atinge o local no código em que ela foi declarada. Se nenhum valor inicial tiver sido especificado com a declaração da variável, ela será inicializada com o valor de `undefined`.

Isso difere das variáveis [`var`](/pt-BR/docs/Web/JavaScript/Reference/Statements/var#var_hoisting), que retornarão um valor `undefined` se forem acessadas antes de serem declaradas. O código abaixo demonstra o resultado diferente quando `let` e `var` são acessadas no código antes do local onde foram declaradas.

```js example-bad
{
  // A ZMT começa no início do escopo
  console.log(bar); // "undefined"
  console.log(foo); // RefenreceError: Cannot access 'foo' before initialization
  var bar = 1;
  let foo = 2; // Fim da ZMT (para foo)
}
```

O termo "temporal" é usado porque a zona depende da ordem de execução (tempo) em vez da ordem em que o código é escrito (posição). Por exemplo, o código abaixo funciona porque, embora a função que usa a variável `let` apareça antes de a variável ser declarada, a função é _chamada_ fora da ZMT.

```js
{
  // A ZMT começa no início do escopo
  const func = () => console.log(letVar); // OK

  // Dentro da ZMT, o acesso a letVar resultará em um `ReferenceError`

  let letVar = 3; // Fim da ZMT (para letVar)
  func(); // Chamada fora da ZMT!
}
```

Utilizar o operador `typeof` em uma variável dentro de sua ZMT resultará em um [`ReferenceError`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError):

```js example-bad
{
  typeof i; // ReferenceError: Cannot access 'i' before initialization
  let i = 10;
}
```

Isso difere do uso de `typeof` para variáveis não declaradas e variáveis que contêm um valor de `undefined`:

```js
console.log(typeof undeclaredVariable); // "undefined"
```

> **Nota:** As declarações `let` e `const` são processadas somente quando o script atual é processado. Se você tiver dois elementos `<script>` em execução no modo script em um HTML, o primeiro script não estará sujeito às restrições ZMT para variáveis `let` ou `const` de nível superior declaradas no segundo script, embora se você declarar uma variável `let` ou `const` no primeiro script, declará-la novamente no segundo script causará um [erro de redeclaração](#redeclarações).

### Redeclarações

As declarações `let` não podem estar no mesmo escopo de qualquer outra declaração, incluindo `let`, [`const`](/pt-BR/docs/Web/JavaScript/Reference/Statements/const), [`class`](/pt-BR/docs/Web/JavaScript/Reference/Statements/class), [`function`](/pt-BR/docs/Web/JavaScript/Reference/Statements/function), [`var`](/pt-BR/docs/Web/JavaScript/Reference/Statements/var) e [`import`](/pt-BR/docs/Web/JavaScript/Reference/Statements/import).

```js-nolint example-bad
{
  let foo;
  let foo; // SyntaxError: Identifier 'foo' has already been declared
}
```

Uma declaração `let` dentro do corpo de uma função não pode ter o mesmo nome de um parâmetro. Uma declaração `let` dentro de um bloco `catch` não pode ter o mesmo nome que o identificador vinculado ao `catch`.

```js-nolint example-bad
function foo(a) {
  let a = 1; // SyntaxError: Identifier 'a' has already been declared
}
try {
} catch (e) {
  let e; // SyntaxError: Identifier 'e' has already been declared
}
```

Se você estiver fazendo experiências e testes em um REPL, como o console da Web do Firefox (**Ferramentas** > **Desenvolvedor da Web** > **Console da Web**), e executar duas declarações `let` com o mesmo nome em duas entradas separadas, poderá receber o mesmo erro de redeclaração. Veja mais discussões sobre esse problema no [bug 1580891 do Firefox](https://bugzil.la/1580891). O console do Chrome permite redeclarações de `let` entre diferentes entradas REPL.

Você pode encontrar erros em instruções [`switch`](/pt-BR/docs/Web/JavaScript/Reference/Statements/switch) porque existe apenas um bloco subjacente.

```js-nolint example-bad
let x = 1;

switch (x) {
  case 0:
    let foo;
    break;
  case 1:
    let foo; // SyntaxError: Identifier 'foo' has already been declared
    break;
}
```

Para evitar o erro, envolva cada `case` em uma nova instrução de bloco.

```js
let x = 1;

switch (x) {
  case 0: {
    let foo;
    break;
  }
  case 1: {
    let foo;
    break;
  }
}
```

## Exemplos

### Escopo de bloco

As variáveis declaradas por `let` têm seu escopo no bloco para o qual foram declaradas, bem como em quaisquer sub-blocos contidos. Dessa forma, `let` funciona de forma muito semelhante a `var`. A principal diferença é que o escopo de uma variável `var` é toda a função envolvente:

```js
function varTeste() {
  var x = 1;
  {
    var x = 2; // mesma variável!
    console.log(x); // 2
  }
  console.log(x); // 2
}

function letTeste() {
  let x = 1;
  {
    let x = 2; // variável diferente!
    console.log(x); // 2
  }
  console.log(x); // 1
}
```

No nível superior de programas e funções, `let`, ao contrário de `var`, não cria uma propriedade no objeto global. Por exemplo:

```js
var x = "global";
let y = "global";
console.log(this.x); // "global"
console.log(this.y); // "undefined"
```

### ZMT combinada com escopo léxico

O código a seguir resulta em um `ReferenceError` na linha mostrada:

```js example-bad
function teste() {
  var foo = 33;
  if (foo) {
    let foo = foo + 55; // ReferenceError
  }
}
teste();
```

O bloco `if` é avaliado porque a `var foo` externa tem um valor. Entretanto, devido ao escopo lexical, esse valor não está disponível dentro do bloco: o identificador `foo` _dentro_ do bloco `if` é o `let foo`. A expressão `foo + 55` gera um `ReferenceError` porque a inicialização de `let foo` não foi concluída - ela ainda está na zona morta temporal.

Esse fenômeno pode ser confuso em uma situação como a seguinte. A instrução `let n of n.a` já está dentro do escopo do bloco do loop `for...of`. Portanto, o identificador `n.a` é resolvido para a propriedade `a` do objeto `n` localizado na primeira parte da própria instrução (`let n`). Isso ainda está na zona morta temporal, pois sua declaração ainda não foi alcançada e encerrada.

```js example-bad
function go(n) {
  // n aqui é definido!
  console.log(n); // { a: [1, 2, 3] }

  for (let n of n.a) {
    //          ^ ReferenceError
    console.log(n);
  }
}

go({ a: [1, 2, 3] });
```

### Outras situações

Quando usado dentro de um bloco, `let` limita o escopo da variável a esse bloco. Observe a diferença entre `var`, cujo escopo está dentro da função em que é declarada.

```js
var a = 1;
var b = 2;

{
  var a = 11; // o escopo é global
  let b = 22; // o escopo está dentro do bloco

  console.log(a); // 11
  console.log(b); // 22
}

console.log(a); // 11
console.log(b); // 2
```

No entanto, essa combinação de declarações `var` e `let` abaixo resulta em um {{jsxref("SyntaxError")}} porque `var` não está sendo limitada ao escopo de bloco, o que faz com que elas estejam no mesmo escopo. Isso resulta em uma redeclaração implícita da variável.

```js-nolint example-bad
let x = 1;

{
  var x = 2; // resulta em um SyntaxError pela redeclaração
}
```

### Declaração com desestruturação

O lado esquerdo de cada `=` também pode ser um padrão de associação. Isso permite criar várias variáveis de uma só vez.

```js
const resultado = /(a+)(b+)(c+)/.exec("aaabcc");
let [, a, b, c] = resultado;
console.log(a, b, c); // "aaa" "b" "cc"
```

Para mais informações, consulte [Atribuição via desestruturação](/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring)

## Especificações

{{Specifications}}

## Compatibilidade do navegador

{{Compat}}

## Veja também

- [`var`](/pt-BR/docs/Web/JavaScript/Reference/Statements/var)
- [`const`](/pt-BR/docs/Web/JavaScript/Reference/Statements/const)
- [Hoisting](/pt-BR/docs/Glossary/Hoisting)
