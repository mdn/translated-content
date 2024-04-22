---
title: uneval()
slug: conflicting/Web/JavaScript/Reference/Global_Objects
---

{{jsSidebar("Objects")}}{{Non-standard_header}}

O método **`uneval()`** cria uma representação do código fonte de um Objeto.

## Sintaxe

```
uneval(object)
```

### Parâmetros

- `object`
  - : A JavaScript expression or statement.

> **Nota:** Você não obterá uma representação em JSON válida para o Objeto..

## Descrição

`uneval()` é uma função top-level e não é associada a nenhum objeto.

## Examples

```js
var a = 1;
uneval(a); // retorna uma String contendo 1

var b = "1";
uneval(b) // retorna uma String contendo "1"

uneval(function foo(){}); // retorna"(function foo(){})"


var a = uneval(function foo(){return 'hi'});
var foo = eval(a);
foo(); // retorna "hi"
```

## Especificações

Not part of any specifications.

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Global_Objects/eval", "eval()")}}
- {{jsxref("JSON.stringify")}}
- {{jsxref("JSON.parse")}}
- {{jsxref("Object.toSource")}}
