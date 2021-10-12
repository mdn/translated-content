---
title: Map.prototype.size
slug: Web/JavaScript/Reference/Global_Objects/Map/size
tags:
  - ECMAScript 2015
  - JavaScript
  - Map
  - Property
browser-compat: javascript.builtins.Map.size
---
{{JSRef}}

A propriedade acessora **`size`** retorna o número de elementos que estão dentro do objeto {{jsxref("Map")}}

{{EmbedInteractiveExample("pages/js/map-prototype-size.html")}}

## Descrição

O valor de `size` é um inteiro que representa a quantidade de entradas que o objeto `Map` possui.
A função acessora set para `size` é `undefined`; você não poderá alterar essa propriedade.

## Exemplos

### Usando o size

```js
var myMap = new Map();
myMap.set('a', 'alpha');
myMap.set('b', 'beta');
myMap.set('g', 'gamma');

myMap.size // 3
```

## Especificações

{{Specifications}}

## Compatibilidade com browsers

{{Compat}}

## Veja também

- {{jsxref("Map")}}
