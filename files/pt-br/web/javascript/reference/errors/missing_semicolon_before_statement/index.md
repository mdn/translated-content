---
title: "SyntaxError: missing ; before statement"
slug: Web/JavaScript/Reference/Errors/Missing_semicolon_before_statement
---

{{jsSidebar("Errors")}}

## Messagem

```
SyntaxError: falta ; antes da declaração
```

## Tipo de erro

{{jsxref("SyntaxError")}}.

## O que deu errado?

Falta um ponto-e-vírgula (`;`) em algum lugar. [JavaScript statements](/pt-BR/docs/Web/JavaScript/Reference/Statements) must be terminated with semicolons. Some of them are affected by [automatic semicolon insertion (ASI)](/pt-BR/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion), but in this case you need to provide a semicolon, so that JavaScript can parse the source code correctly.

However, oftentimes, this error is only a consequence of another error, like not escaping strings properly, or using `var` wrongly. You might also have too many parenthesis somewhere. Carefully check the syntax when this error is thrown.

## Exemplos

### Unescaped strings

This error can occur easily when not escaping strings properly and the JavaScript engine is expecting the end of your string already. For example:

```js example-bad
var foo = 'Tom's bar';
// SyntaxError: missing ; before statement
```

You can use double quotes, or escape the apostrophe:

```js-nolint example-good
var foo = "Tom's bar";
var foo = 'Tom\'s bar';
```

### Declaring properties with var

You **cannot** declare properties of an object or array with a `var` declaration.

```js example-bad
var obj = {};
var obj.foo = 'hi'; // SyntaxError missing ; before statement

var array = [];
var array[0] = 'there'; // SyntaxError missing ; before statement
```

Instead, omit the `var` keyword:

```js example-good
var obj = {};
obj.foo = "hi";

var array = [];
array[0] = "there";
```

## Veja também

- [Automatic semicolon insertion (ASI)](/pt-BR/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion)
- [JavaScript statements](/pt-BR/docs/Web/JavaScript/Reference/Statements)
