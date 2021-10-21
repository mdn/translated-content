---
title: 'TypeError: can''t redefine non-configurable property "x"'
slug: Web/JavaScript/Reference/Errors/Cant_redefine_property
tags:
  - Error
  - Errors
  - JavaScript
  - TypeError
---
{{jsSidebar("Errors")}}

A exceção do Javascript "can't redefine non-configurable property" ocorre quando é
feita a tentativa de redefinir uma propriedade, mas essa propriedade [não é configurável](/pt-BR/docs/Web/JavaScript/Data_structures#properties).

## Mensagem

```js
TypeError: Cannot modify non-writable property {x} (Edge)
TypeError: can't redefine non-configurable property "x" (Firefox)
TypeError: Cannot redefine property: "x" (Chrome)
```

## Tipo de Erro

{{jsxref("TypeError")}}

## O que deu errado?

Foi feita a tentativa de redefinir uma propriedade, mas essa propriedade [não é configurável](/pt-BR/docs/Web/JavaScript/Data_structures#properties). O
atributo `configurable` controla se a propriedade pode ser deletada do 
objeto e se seus atributos (Exceto `writable`) podem ser alterados.
Geralmente, propriedades de um objeto criado por um [inicializador de objeto](/pt-BR/docs/Web/JavaScript/Reference/Operators/Object_initializer)
são configuráveis. Contudo, por exemplo, ao usar {{jsxref("Object.defineProperty()")}}, a propriedade não é configurável por padrão.

## Exemplos

### Propriedades não configuráveis criadas por `Object.defineProperty`

{{jsxref("Object.defineProperty()")}} cria uma propriedade não configurável se você
não especificá-las como configurável.

```js example-bad
var obj = Object.create({});
Object.defineProperty(obj, "foo", {value: "bar"});

Object.defineProperty(obj, "foo", {value: "baz"});
// TypeError: can't redefine non-configurable property "foo"
```

Você vai precisar alterar a propriedade "foo" para configurável, se você pretende redefini-la
posteriormente no código.

```js example-good
var obj = Object.create({});
Object.defineProperty(obj, "foo", {value: "bar", configurable: true});
Object.defineProperty(obj, "foo", {value: "baz", configurable: true});
```

## Veja também

- [\[\[Configurable\]\]](/pt-BR/docs/Web/JavaScript/Data_structures#properties)
- {{jsxref("Object.defineProperty()")}}
