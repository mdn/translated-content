---
title: Symbol.toStringTag
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag
l10n:
  sourceCommit: d5d9a70d1f8bc041c4ff226c3ff7e02382c5efef
---

{{JSRef}}

El símbolo conocido como **`Symbol.toStringTag`** es una propiedad con valor de cadena que se utiliza en la creación de la descripción de cadena por defecto de un objeto. Se accede a ella internamente mediante el método {{jsxref("Object.prototype.toString()")}}.

{{EmbedInteractiveExample("pages/js/symbol-tostringtag.html")}}{{js_property_attributes(0,0,0)}}

## Ejemplos

### Etiquetas por defecto

```js
Object.prototype.toString.call("foo"); // "[object String]"
Object.prototype.toString.call([1, 2]); // "[object Array]"
Object.prototype.toString.call(3); // "[object Number]"
Object.prototype.toString.call(true); // "[object Boolean]"
Object.prototype.toString.call(undefined); // "[object Undefined]"
Object.prototype.toString.call(null); // "[object Null]"
// ... and more
```

### Símbolos toStringTag integrados

```js
Object.prototype.toString.call(new Map()); // "[object Map]"
Object.prototype.toString.call(function* () {}); // "[object GeneratorFunction]"
Object.prototype.toString.call(Promise.resolve()); // "[object Promise]"
// ... and more
```

### Clases personalizadas por defecto en la etiqueta objeto

Al crear su propia clase, JavaScript utiliza por defecto la etiqueta "Object":

```js
class ValidatorClass {}

Object.prototype.toString.call(new ValidatorClass()); // "[object Object]"
```

### Etiqueta personalizada con toStringTag

Ahora, con la ayuda de `toStringTag`, puede establecer su propia etiqueta personalizada:

```js
class ValidatorClass {
  get [Symbol.toStringTag]() {
    return "Validator";
  }
}

Object.prototype.toString.call(new ValidatorClass()); // "[object Validator]"
```

### toStringTag disponible en todos los objetos del prototipo DOM

Debido a un [cambio en las especificaciones de WebIDL](https://github.com/whatwg/webidl/pull/357) a mediados de 2020, los navegadores están añadiendo una propiedad `Symbol.toStringTag` a todos los objetos prototipo del DOM. Por ejemplo, para acceder a la propiedad `Symbol.toStringTag` de {{domxref("HTMLButtonElement")}}:

```js
let test = document.createElement("button");
test.toString(); // Devuelve [object HTMLButtonElement]
test[Symbol.toStringTag]; // Devuelve HTMLButtonElement
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Polyfill de `Symbol.toStringTag` en `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("Object.prototype.toString()")}}
