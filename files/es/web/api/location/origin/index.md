---
title: "Location: origin"
slug: Web/API/Location/origin
---

{{APIRef("Location")}}

La propiedad de sólo-lectura **`origin`** de la interfaz {{domxref("Location")}} es una {{domxref("USVString")}} que contiene la serialización Unicode del origen de la URL que representa; que es:

- para una URL que usa `http` o `https`, el esquema seguido de `'://'`, seguido del dominio, seguido de `':'`, seguido del puerto (el puerto por defecto, `80` y `443` respectivamente, si se indica de forma explícita);
- para una URL que usa `file:` esquema, el valor es independiente del navegador;
- para una URL que usa `blob:` esquema, el origen de la URL seguido de `blob:`. Ej. `"blob:https://mozilla.org"` tendrá `"https://mozilla.org".`

{{AvailableInWorkers}}

## Sintaxis

```
string = object.origin;
```

## Ejemplos

```js
// En esta página, devuelve el origen
var result = window.location.origin; // Devuelve:'https://developer.mozilla.org'
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
