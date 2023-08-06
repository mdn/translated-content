---
title: Operador de coalescência nula
slug: Web/JavaScript/Reference/Operators/Nullish_coalescing
---

{{JSSidebar("Operators")}}

O **operador de coalescência nula (`??`)** é um operador lógico que retorna o seu operando do lado direito quando o seu operador do lado esquerdo é {{jsxref("null")}} ou {{jsxref("undefined")}}. Caso contrário, ele retorna o seu operando do lado esquerdo.

Ao contrário do [operador lógico OR (`||`)](</pt-BR/docs/Web/JavaScript/Reference/Operators/Operadores_Logicos#OR_Lógico_()>), o operando esquerdo é retornado se houver um valor _[falsy](/pt-BR/docs/Web/JavaScript/Reference/Operators/Operadores_Logicos#Short-Circuit_Evaluation)_ (falso) que não seja `null` ou `undefined`. Em outras palavras, se você usar `||` para obter algum valor padrão para outra variável `foo`, você pode enfrentar comportamentos inesperados se você considerar algum valor falseável como utilizável (eg. `''` ou `0`). Veja abaixo alguns exemplos:

{{EmbedInteractiveExample("pages/js/expressions-nullishcoalescingoperator.html")}}

## Sintaxe

```
exprEsq ?? exprDir
```

## Descrição

O operador de coalescência nula retorna os resultados da expressão de seu lado direito se a expressão de seu lado esquerdo for {{jsxref("null")}} ou {{jsxref("undefined")}}.

### Endereçando um valor padrão à variável

Inicialmente, quando se deseja endereçar um valor padrão à variável, um padrão comum é utilizar o operador lógico OR ([`||`](</pt-BR/docs/Web/JavaScript/Reference/Operators/Operadores_Logicos#OR_Lógico_()>)):

```js
let foo;

//  foo nunca é endereçado a nenhum valor, portanto, ainda está indefinido
let someDummyText = foo || "Hello!";
```

Entretanto, devido ao `||` ser um operador lógico booleano, o operando do lado esquerdo é coagido para um valor booleano para sua avaliação e qualquer valor _falseável_ (`0`, `''`, `NaN`, `null`, `undefined`) não é retornado. Este comportamento pode causar consequencias inesperadas se você considerar `0`, `''`, ou `NaN` como valores válidos.

```js
let count = 0;
let text = "";

let qty = count || 42;
let message = text || "Olá!";
console.log(qty); // 42 e não 0
console.log(message); // "Olá!" e não ""
```

O operador de coalescência nula evita esta cilada pois retorna o segundo operando apenas quando o primeiro é avaliado entre os valores `null` ou `undefined` (mas nehum outro valor falseável):

```js
let myText = ""; // Uma string vazia (que também é um valor falseável)

let notFalsyText = myText || "Olá mundo";
console.log(notFalsyText); // Olá mundo

let preservingFalsy = myText ?? "Olá vizinhança";
console.log(preservingFalsy); // '' (Pois myText não é undefined e nem null)
```

### Curto-circuito

Assim como os operadores lógicos OR e AND, a expressão do lado direito não é avaliada se o lado esquerdo não for avaliado entre `null` e nem `undefined`.

```js
function A() {
  console.log("A foi chamado");
  return undefined;
}
function B() {
  console.log("B foi chamado");
  return false;
}
function C() {
  console.log("C foi chamado");
  return "foo";
}

console.log(A() ?? C());
// Imprime "A foi chamado" então "C foi chamado" e por fim "foo"
// Como A() retornou undefined então ambas expressões foram avaliadas

console.log(B() ?? C());
// Imprime "B foi chamado" então "false"
// Como B() retornou false (e não null ou undefined), a expressão
// do lado direito não foi avaliada.
```

### Sem encadeamento com os operadores AND e OR

Não é possível encadear ambos operadores AND (`&&`) e OR (`||`) diretamente com o `??`. Um [`SyntaxError`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError) será disparado nesse tipo de caso.

```js example-bad
null || undefined ?? "foo"; // Dispara um SyntaxError
true || undefined ?? "foo"; // Dispara um SyntaxError
```

Entretanto, explicitar diretamente a precedência por meio de parênteses resulta no comportamento correto:

```js example-good
(null || undefined) ?? "foo"; // retorna "foo"
```

### Relacionamento com o operador de encadeamento opcional (`?.`)

O operador de coalescêcia nula trata `undefined` e `null` como valores específicos e então executa o [operador de encadeamento opcional (`?.`)](/pt-BR/docs/Web/JavaScript/Reference/Operators/Optional_chaining) o qual é útil para acessar uma propriedade de um objeto, o qual pode ser `null` ou `undefined`.

```js
let foo = { someFooProp: "oi" };

console.log(foo.someFooProp?.toUpperCase()); // "OI"
console.log(foo.someBarProp?.toUpperCase()); // undefined
```

## Exemplo

Neste exemplo, nós iremos prover valores padrão, mas manter valores que não sejam (advinha???) `null` ou `undefined`.

```js
const nullValue = null;
const emptyText = ""; // falseável (falsy)
const someNumber = 42;

const valA = nullValue ?? "padrão para A";
const valB = emptyText ?? "padrão para B";
const valC = someNumber ?? 0;

console.log(valA); // "padrão para A"
console.log(valB); // "" (pois a string vazia não é null ou undefined)
console.log(valC); // 42
```

## Especificações

| Especificação                                                                                      | Status  | comentário |
| -------------------------------------------------------------------------------------------------- | ------- | ---------- |
| [Proposal for the "nullish coalescing" operator](https://tc39.es/proposal-nullish-coalescing/#top) | Stage 4 |            |

## Compatibilidade com navegadores

{{Compat("javascript.operators.nullish_coalescing")}}

## Veja também

- [The optional chaining operator](/pt-BR/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [The logical OR (`||`) operator](</pt-BR/docs/Web/JavaScript/Reference/Operators/Operadores_Logicos#OR_Lógico_()>)
- [Default parameters in functions](/pt-BR/docs/Web/JavaScript/Reference/Functions/Parametros_Predefinidos)
