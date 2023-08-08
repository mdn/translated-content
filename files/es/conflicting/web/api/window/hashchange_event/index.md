---
title: WindowEventHandlers.onhashchange
slug: conflicting/Web/API/Window/hashchange_event
original_slug: Web/API/WindowEventHandlers/onhashchange
---

{{APIRef("HTML DOM")}}

El evento **hashchange** se dispara cuando la almohadilla ha cambiado (ver {{domxref("Window.location", "location.hash")}}).

## Sintaxis

```js
window.onhashchange = funcRef;
```

**ó**

```html
<body onhashchange="funcRef();">
```

**ó**

```js
window.addEventListener("hashchange", funcRef, false);
```

### Parámetros

- `funcRef`
  - : Una referencia a una función.

## Ejemplo

```js
if ("onhashchange" in window) {
    alert("¡El navegador soporta el evento hashchange!");
}

function locationHashChanged() {
    if (location.hash === "#somecoolfeature") {
        somecoolfeature();
    }
}

window.onhashchange = locationHashChanged;
```

## El evento hashchange

El evento `hashchange` enviado, tiene los siguientes campos:

| Campo                                                 | Tipo        | Descripción                                           |
| ----------------------------------------------------- | ----------- | ----------------------------------------------------- |
| `newURL` | `DOMString` | La URL nueva hacia la cual la ventana está navegando. |
| `oldURL` | `DOMString` | La URL anterior desde la cual la ventana navegó.      |
