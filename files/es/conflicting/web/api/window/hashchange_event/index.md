---
title: WindowEventHandlers.onhashchange
slug: conflicting/Web/API/Window/hashchange_event
tags:
  - HTML-DOM
  - JavaScript
  - Propiedades
  - Referencia
  - WindowEventHandlers
  - eventos
translation_of: Web/API/WindowEventHandlers/onhashchange
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
| `newURL` {{gecko_minversion_inline("6.0")}} | `DOMString` | La URL nueva hacia la cual la ventana está navegando. |
| `oldURL` {{gecko_minversion_inline("6.0")}} | `DOMString` | La URL anterior desde la cual la ventana navegó.      |

## Especificaciones

| Especificacion                                                                                       | Estado                           | Comentario |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | ---------- |
| {{SpecName('HTML WHATWG', '#windoweventhandlers', 'GlobalEventHandlers')}} | {{Spec2('HTML WHATWG')}} |            |
| {{SpecName('HTML5.1', '#windoweventhandlers', 'GlobalEventHandlers')}}         | {{Spec2('HTML5.1')}}     |            |
| {{SpecName("HTML5 W3C", "#windoweventhandlers", "GlobalEventHandlers")}}     | {{Spec2('HTML5 W3C')}}     |            |

## Compatibilidad en navegadores

{{Compat("api.WindowEventHandlers.onhashchange")}}
