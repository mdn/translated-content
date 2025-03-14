---
title: Element.remove()
slug: Web/API/Element/remove
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("DOM")}}

El método **`Element.remove()`** elimina un elemento del DOM.

## Sintaxis

```js-nolint
remove()
```

### Parámetros

Ninguno.

### Valor de retorno

Ninguno ({{jsxref("undefined")}}).

## Ejemplos

### Utilizando `remove()`

```html
<div id="div-01">Aquí está el div-01</div>
<div id="div-02">Aquí está el div-02</div>
<div id="div-03">Aquí está el div-03</div>
```

```js
const element = document.getElementById("div-02");
element.remove(); // Elimina el div con el id 'div-02'
```

### `Element.remove()` no se puede recorrer

El método `remove()` no está incluido en la sentencia `with`.
Véase {{jsxref("Symbol.unscopables")}} para más información.

```js
with (node) {
  remove();
}
// ReferenceError: remove no está definido
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Polyfill](https://github.com/chenzhenxi/element-remove)
