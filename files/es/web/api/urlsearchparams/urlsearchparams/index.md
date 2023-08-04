---
title: URLSearchParams()
slug: Web/API/URLSearchParams/URLSearchParams
---

{{ApiRef("URL API")}}

El constructor **`URLSearchParams()`** crea y retorna un nuevo objeto {{domxref("URLSearchParams")}}. Si se incluye el caracter `'?'` al comienzo, éste es ignorado.

{{availableinworkers}}

## Sintaxis

```
var URLSearchParams = new URLSearchParams(init);
```

### Parámetros

- _`init`_ {{optional_inline}}
  - : Una instancia de {{domxref("USVString")}}, una secuencia de {{domxref("USVString")}}s, o un registro conteniendo dos {{domxref("USVString")}}s.

### Valor retornado

Un objeto instancia de {{domxref("URLSearchParams")}}.

## Ejemplos

El siguiente ejemplo muestra cómo crear un objeto {{domxref("URLSearchParams")}} desde un string que representa una URL.

```js
// Pasar un literal string
var url = new URL("https://example.com?foo=1&bar=2");
// Obtener la URL actual desde window.location
var url2 = new URL(window.location);

// Obtener parámetros de url.search y pasarlos al constructor
var params = new URLSearchParams(url.search);
var params2 = new URLSearchParams(url2.search);

// Pasar una secuencia
var params3 = new URLSearchParams([
  ["foo", 1],
  ["bar", 2],
]);

// Pasar un registro
var params4 = new URLSearchParams({ foo: 1, bar: 2 });
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
