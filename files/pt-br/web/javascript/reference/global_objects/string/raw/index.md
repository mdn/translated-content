---
title: String.raw()
slug: Web/JavaScript/Reference/Global_Objects/String/raw
---

{{JSRef}}

O método estático `String.raw()` é uma função tag de [modelos literais](/pt-BR/docs/Web/JavaScript/Reference/Template_literals), similar ao prefixo `r` no Python ou o prefixo `@` no C# para string literais (Mas não é _idêntico_, existe uma diferença, veja explicações nessa [discussão](https://bugs.chromium.org/p/v8/issues/detail?id=5016)). Ele é usado para pegar as strings no formato "cru" de modelos literais, isto é, substituições (ex: `${foo}`) são processados, mas "escapes" (ex:. `\n`) não são.

{{InteractiveExample("JavaScript Demo: String.raw()")}}

```js interactive-example
// Create a variable that uses a Windows
// path without escaping the backslashes:
const filePath = String.raw`C:\Development\profile\aboutme.html`;

console.log(`The file was uploaded from: ${filePath}`);
// Expected output: "The file was uploaded from: C:\Development\profile\aboutme.html"
```

## Sintaxe

```
String.raw(callSite, ...sub)

String.raw`templateString`
```

### Parâmetros

- `callSite`
  - : Modelo bem-formatado de objeto de local de chamada, como `{ raw: ['foo', 'bar', 'baz'] }`.
- `...substitutions`
  - : Contém os valores das substituições.
- `templateString`
  - : Um [modelo string](/pt-BR/docs/Web/JavaScript/Reference/Template_literals), opcionalmente com substituições (`${...}`).

### Valor retornado

A forma crua de uma string de um modelo string dado.

### Exceções

- {{jsxref("TypeError")}}
  - : Um {{jsxref("TypeError")}} é jogado se o primeiro argumento não é um Objeto bem formado.

## Descrição

Na maioria dos casos, `String.raw()` é usado com modelos de strings. A primeira sintaxe mencionada acima raramente é usada, porque o mecanismo JavaScript a chamará com os argumentos apropriados para você, assim como com outras [funções de tag](/pt-BR/docs/Web/JavaScript/Reference/Template_literals).

`String.raw()` é a única função de tag embutida de strings de template; ele funciona exatamente como a função de modelo padrão e executa a concatenação. Você pode até reimplementá-lo com o código JavaScript normal.

## Exemplos

### Usando `String.raw()`

```js
String.raw`Hi\n${2 + 3}!`;
// 'Hi\n5!', o caractere após 'Hi'
// não é um caractere de quebra de linha,
// '\' e 'n' são dois caracteres.

String.raw`Hi\u000A!`;
// 'Hi\u000A!', o mesmo aqui, agora nós teremos os caracteres
//  \, u, 0, 0, 0, A, 6.
// Todos as formas de quebra de linha serão ineficazes
// e as contra barras estarão inclusas no valor retornado.
// Você pode confirmar isso verificando a propriedade .length
// da string.

let name = "Bob";
String.raw`Hi\n${name}!`;
// 'Hi\nBob!', substituições são processadas.

// Normalmente você não chamaria String.raw() como uma função,
// mas para simular `t${0}e${1}s${2}t` você pode fazer:
String.raw({ raw: "test" }, 0, 1, 2); // 't0e1s2t'
// Note que 'test', uma string, é um objeto array-like
// O código abaixo é equivalente a:
// `foo${2 + 3}bar${'Java' + 'Script'}baz`
String.raw(
  {
    raw: ["foo", "bar", "baz"],
  },
  2 + 3,
  "Java" + "Script",
); // 'foo5barJavaScriptbaz'
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Modelos de strings](/pt-BR/docs/Web/JavaScript/Reference/Template_literals)
- {{jsxref("String")}}
- [Gramática lexical](/pt-BR/docs/Web/JavaScript/Reference/Lexical_grammar)
