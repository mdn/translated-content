---
title: Map.prototype.get()
slug: Web/JavaScript/Reference/Global_Objects/Map/get
tags:
  - ECMAScript 2015
  - JavaScript
  - Map
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Map.get
---
{{JSRef}}

O método **`get()`** retorna um elemento específico do objeto `Map`. Se o valor 
associado à chave for um objeto, será retornado a referência do objeto e qualquer mudança no mesmo 
irá afetar o valor que está dentro do objeto `Map`.

{{EmbedInteractiveExample("pages/js/map-prototype-get.html")}}

## Sintaxe

```js
get(key)
```

### Parâmetros

- `key`
  - : A chave do elemento que será retornado do objeto `Map`.

### Valor retornado

O elemento associado à chave especificada, ou {{jsxref("undefined")}} se 
a chave não puder ser encontrada no objeto `Map`.

## Exemplos

### Usando o get()

```js
let myMap = new Map();
myMap.set('bar', 'foo');

myMap.get('bar');   // Returns "foo"
myMap.get('baz');   // Returns undefined
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Map")}}
- {{jsxref("Map.prototype.set()")}}
- {{jsxref("Map.prototype.has()")}}
