---
title: HTMLMediaElement.paused
slug: Web/API/HTMLMediaElement/paused
---

{{APIRef("HTML DOM")}}

La propiedad **`HTMLMediaElement.paused`** es solo de lectura, indica si el elemento multimedia está en pausa.

## Sintaxis

```
var pausado = audioOVideo.paused
```

### Valor

Es un {{domxref("Boolean")}}. Mostrara **true** si está pausado y **false** en caso contrario.

## Ejemplo

```js
var obj = document.createElement("video");
console.log(obj.paused); // true
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- La interfaz que lo define, {{domxref("HTMLMediaElement")}}.
