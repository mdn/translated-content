---
title: XMLHttpRequest.abort()
slug: Web/API/XMLHttpRequest/abort
tags:
  - AJAX
  - API
  - HTTP
  - HttpRequest
  - Referencia
  - XHR
  - XMLHttpRequest
  - abortar
  - metodo
translation_of: Web/API/XMLHttpRequest/abort
---
{{APIRef('XMLHttpRequest')}}

El método **XMLHttpRequest.abort()** aborta la petición si ha sido enviada. Cuando una petición se aborta, readyState se asigna a 0 (UNSENT), pero el evento [readystatechange](/es/docs/Web/Events/readystatechange) no se lanza.

## Sintaxis

    xhrInstance.abort();

### Parámetros

Ninguno.

### Valor de retorno

Vacío.

## Ejemplo

```js
var xhr = new XMLHttpRequest(),
    method = "GET",
    url = "https://developer.mozilla.org/";
xhr.open(method,url,true);

xhr.send();

xhr.abort();
```

## Especificaciones

| Especificación                                                           | Estado                               | Comentario             |
| ------------------------------------------------------------------------ | ------------------------------------ | ---------------------- |
| {{SpecName('XMLHttpRequest', '#the-abort()-method')}} | {{Spec2('XMLHttpRequest')}} | WHATWG living standard |

## Compatibilidad con navegadores

{{Compat("api.XMLHttpRequest.abort")}}

## Ver también

- [Uso de XMLHttpRequest](/es/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
