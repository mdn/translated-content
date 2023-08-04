---
title: class expression
slug: Web/JavaScript/Reference/Operators/class
---

{{jsSidebar("Operators")}}

A **expressão class** é uma das formas de definir uma classe no ECMAScript 2015. Parecido com as [expressões function](/pt-BR/docs/Web/JavaScript/Reference/Operators/function), expressões class poder ser nomeadas ou não. Se nomeada, o nome da classe é local para apenas o corpo da classe. Classes no JavaScript usam herança com base no prototype

## Sintaxe

```
var MinhaClasse = class [nomeDaClass] [extends] {
  // corpo da classe
};
```

## Descrição

Uma expressão de classe tem uma sintaxe similar a uma [declaração de classe](/pt-BR/docs/Web/JavaScript/Reference/Statements/class). No entanto, com expressões de classe, você poderá omitir o nome da classe ("ligação de identificadores"), que você não pode se usar declarações. Adicionalmente, expressões de classe permitem que você redefina/redeclare classes e **não invocar** nenhum tipo de erros como [declaração de classe](/pt-BR/docs/Web/JavaScript/Reference/Statements/class). A propriedade construtora é opcional. E o _typeof_ de classes geradas usando essa palavra-chave sempre será "function".

Assim como declarações de classes, o corpo das expressões de classe são executados em [strict mode](/pt-BR/docs/Web/JavaScript/Reference/Strict_mode).

```js
"use strict";
var Foo = class {}; // propriedade de construtor é opcional
var Foo = class {}; // Re-declaração é permitida

typeof Foo; //retorna "function"
typeof class {}; //retorna "function"

Foo instanceof Object; // true
Foo instanceof Function; // true
class Foo {} // Throws TypeError, não permite re-declaração
```

## Exemplos

### Uma simples expressão de classe

Isso é apenas uma simples classe anônima que você pode referir usando a variável "Foo".

```js
var Foo = class {
  constructor() {}
  bar() {
    return "Olá mundo!";
  }
};

var instance = new Foo();
instance.bar(); // "Olá mundo!"
Foo.name; // "Foo"
```

### Expressões de classes nomeadas

Se você quiser referir a classe atual dentro do corpo da classe, você pode criar uma expressão de classe nomeada. Esse nome é visível apenas no escopo da expressão classe sozinha.

```js
var Foo = class NamedFoo {
  constructor() {}
  whoIsThere() {
    return NamedFoo.name;
  }
};
var bar = new Foo();
bar.whoIsThere(); // "NamedFoo"
NamedFoo.name; // ReferenceError: NamedFoo is not defined
Foo.name; // "NamedFoo"
```

## Especificações

| Especificação                                                          | Situação             | Comentário         |
| ---------------------------------------------------------------------- | -------------------- | ------------------ |
| {{SpecName('ES2015', '#sec-class-definitions', 'Class definitions')}}  | {{Spec2('ES2015')}}  | Definição inicial. |
| {{SpecName('ES2016', '#sec-class-definitions', 'Class definitions')}}  | {{Spec2('ES2016')}}  |                    |
| {{SpecName('ES2017', '#sec-class-definitions', 'Class definitions')}}  | {{Spec2('ES2017')}}  |                    |
| {{SpecName('ESDraft', '#sec-class-definitions', 'Class definitions')}} | {{Spec2('ESDraft')}} |                    |

## Compatibilidade com navegadores

{{Compat("javascript.operators.class")}}

## Veja também

- [Expressão `function`](/pt-BR/docs/Web/JavaScript/Reference/Operators/function)
- [Declaração `class`](/pt-BR/docs/Web/JavaScript/Reference/Statements/class)
- [Classes](/pt-BR/docs/Web/JavaScript/Reference/Classes)
