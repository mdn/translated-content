---
title: 'TypeError: can''t define property "x": "obj" is not extensible'
slug: Web/JavaScript/Reference/Errors/Cant_define_property_object_not_extensible
---

{{jsSidebar("Errors")}}

A exceção de modo strict do Javascript "can't define property "x": "obj" is not extensible" ocorre
quando {{jsxref("Object.preventExtensions()")}} marcou um objeto como não extensível,
de modo que ele não terá propriedades além das que ele tinha no momento em que foi marcado
como não extensível.

## Mensagem

```js
TypeError: Cannot create property for a non-extensible object (Edge)
TypeError: can't define property "x": "obj" is not extensible (Firefox)
TypeError: Cannot define property: "x", object is not extensible. (Chrome)
```

## Tipo de Erro

{{jsxref("TypeError")}}

## O que deu errado?

Geralmente, um objeto é extensível e novas propriedades podem ser adicionadas a ele. Contudo,
neste caso {{jsxref("Object.preventExtensions()")}} marcou o objeto como não extensível,
de modo que ele não terá propriedades além das que ele tinha no momento em que foi marcado
como não extensível.

## Exemplos

### Adicionando uma nova propriedade para um objeto não extensível

No [modo strict](/pt-BR/docs/Web/JavaScript/Reference/Strict_mode),
a tentativa de adicionar uma nova propriedade em um objeto não extensível
lança um `TypeError`. No [modo sloppy](/pt-BR/docs/Glossary/Sloppy_mode), a adição da propriedade "x" é
silenciosamente ignorada.

```js example-bad
"use strict";

var obj = {};
Object.preventExtensions(obj);

obj.x = "foo";
// TypeError: can't define property "x": "obj" is not extensible
```

Em ambos os casos, [modo strict](/pt-BR/docs/Web/JavaScript/Reference/Strict_mode) e
[modo sloppy](/pt-BR/docs/Glossary/Sloppy_mode), chamar {{jsxref("Object.defineProperty()")}}
lança uma exceção quando é adicionada uma nova propriedade em um objeto não extensível.

```js example-bad
var obj = {};
Object.preventExtensions(obj);

Object.defineProperty(obj, "x", { value: "foo" });
// TypeError: can't define property "x": "obj" is not extensible
```

Para corrigir este erro, você precisa remover todas as chamadas para {{jsxref("Object.preventExtensions()")}},
ou movê-las para uma posição para que a propriedade seja adicionada antes e apenas depois o objeto seja marcado
como não extensível. Naturalmente, você pode remover a tentativa de adicionar a propriedade, se você não
precisar dela.

```js example-good
"use strict";

var obj = {};
obj.x = "foo"; // adiciona a propriedade antes e só então previne extensões

Object.preventExtensions(obj);
```

## Veja também

- {{jsxref("Object.preventExtensions()")}}
