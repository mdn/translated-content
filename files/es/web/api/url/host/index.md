---
title: "URL: propiedad host"
short-title: host
slug: Web/API/URL/host
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{ApiRef("URL API")}}

La propiedad **`host`** de la interfaz {{domxref("URL")}} es una cadena que contiene el host, es decir, {{domxref("URL.hostname", "hostname")}}, y luego, si el {{glossary("port","puerto")}} de la URL no está vacío, un `':'`, seguido del {{domxref("URL.port", "puerto")}} de la URL.

{{AvailableInWorkers}}

## Valor

Una cadena.

## Ejemplos

```js
let url = new URL("https://developer.mozilla.org/en-US/docs/Web/API/URL/host");
console.log(url.host); // "developer.mozilla.org"

url = new URL("https://developer.mozilla.org:443/en-US/docs/Web/API/URL/host");
console.log(url.host); // "developer.mozilla.org"
// El número de puerto no está incluido porque 443 es el puerto predeterminado del esquema.

url = new URL("https://developer.mozilla.org:4097/en-US/docs/Web/API/URL/host");
console.log(url.host); // "developer.mozilla.org:4097"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- La interfaz {{domxref("URL")}} a la que pertenece.
