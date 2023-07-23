---
title: Element.hasAttribute()
slug: Web/API/Element/hasAttribute
---

{{APIRef}}

El método `Elemento.hasAttribute()` devuelve un valor **Booleano** indicando si el elemento tiene el atributo especificado o no.

## Sintaxis

```js
var resultado = elemento.hasAttribute(nombre);
```

- `resultado`
  - : contendrá el valor devuelto (`true` o `false)`.
- `nombre`
  - : consiste en una cadena de caracteres que representa el nombre del atributo a chequear.

## Ejemplo

```js
var foo = document.getElementById("foo");
if (foo.hasAttribute("bar")) {
  // hacer algo
}
```

## Polyfill

```js
(function (prototype) {
  prototype.hasAttribute =
    prototype.hasAttribute ||
    function (name) {
      return !!(this.attributes[name] && this.attributes[name].specified);
    };
})(Element.prototype);
```

## Notas

{{DOMAttributeMethods}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
