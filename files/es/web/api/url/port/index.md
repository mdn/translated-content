---
title: URL.port
slug: Web/API/URL/port
---

{{ApiRef("URL API")}}

La propiedad **`port`** de la interfaz {{domxref("URL")}} es un {{domxref("USVString")}} que contiene el número de puerto de la URL. Si la URL no contiene un número de puerto explícito, se establecerá `''`.

{{AvailableInWorkers}}

## Sintaxis

```
string = object.port;
object.port = string;
```

### Valor

Un {{domxref("USVString")}}.

## Ejemplos

```js
var url = new URL("https://mydomain.com:80/svn/Repos/");
var result = url.port; // Devuelve:'80'
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- La interfaz {{domxref("URL")}} a la que pertenece.
