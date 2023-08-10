---
title: Symbol.prototype.description
slug: Web/JavaScript/Reference/Global_Objects/Symbol/description
l10n:
  sourceCommit: 88508ebe5c73264be2cf03f1a949d8099d68d1ea
---

{{JSRef}}

La propiedad **`description`** de sólo lectura es una cadena que devuelve la descripción opcional de los objetos {{JSxRef("Symbol")}}.

{{EmbedInteractiveExample("pages/js/symbol-prototype-description.html")}}

## Descripción

Los objetos {{JSxRef("Symbol")}} pueden ser creados con una descripción opcional que puede ser usada para depuración pero no para acceder al símbolo en sí. La propiedad `Symbol.prototype.description` puede utilizarse para leer esa descripción. Es diferente a `Symbol.prototype.toString()` ya que no contiene la cadena "`Symbol()`" que la rodea. Vea los ejemplos.

## Ejemplos

### Uso de description

```js
Symbol("desc").toString(); // "Symbol(desc)"
Symbol("desc").description; // "desc"
Symbol("").description; // ""
Symbol().description; // undefined

// well-known symbols
Symbol.iterator.toString(); // "Symbol(Symbol.iterator)"
Symbol.iterator.description; // "Symbol.iterator"

// global symbols
Symbol.for("foo").toString(); // "Symbol(foo)"
Symbol.for("foo").description; // "foo"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Polyfill de `Symbol.prototype.description` en `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{JSxRef("Symbol.prototype.toString()")}}
- Polyfill: <https://npmjs.com/symbol.prototype.description>
