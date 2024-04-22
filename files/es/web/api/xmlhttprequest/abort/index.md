---
title: XMLHttpRequest.abort()
slug: Web/API/XMLHttpRequest/abort
---

{{APIRef('XMLHttpRequest')}}

El método **XMLHttpRequest.abort()** aborta la petición si ha sido enviada. Cuando una petición se aborta, readyState se asigna a 0 (UNSENT), pero el evento [readystatechange](/es/docs/Web/Events/readystatechange) no se lanza.

## Sintaxis

```
xhrInstance.abort();
```

### Parámetros

Ninguno.

### Valor de retorno

Vacío.

## Ejemplo

```js
var xhr = new XMLHttpRequest(),
  method = "GET",
  url = "https://developer.mozilla.org/";
xhr.open(method, url, true);

xhr.send();

xhr.abort();
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Uso de XMLHttpRequest](/es/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
