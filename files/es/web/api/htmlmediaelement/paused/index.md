---
title: HTMLMediaElement.paused
slug: Web/API/HTMLMediaElement/paused
translation_of: Web/API/HTMLMediaElement/paused
---
{{APIRef("HTML DOM")}}

La propiedad **`HTMLMediaElement.paused`** es solo de lectura, indica si el elemento multimedia está en pausa.

## Sintaxis

    var pausado = audioOVideo.paused

### Valor

Es un {{domxref("Boolean")}}. Mostrara **true** si está pausado y **false** en caso contrario.

## Ejemplo

```js
var obj = document.createElement('video');
console.log(obj.paused); // true
```

## Especificaciones

| Especificación                                                                                                                   | Estado                           | Comentario |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---------- |
| {{SpecName('HTML WHATWG', "#dom-media-paused", "HTMLMediaElement.paused")}}                             | {{Spec2('HTML WHATWG')}} |            |
| {{SpecName('HTML5 W3C', "embedded-content-0.html#htmlmediaelement", "HTMLMediaElement.paused")}} | {{Spec2('HTML5 W3C')}}     |            |

## Compatibilidad con navegadores

{{Compat("api.HTMLMediaElement.paused")}}

## Ver también

- La interfaz que lo define, {{domxref("HTMLMediaElement")}}.
