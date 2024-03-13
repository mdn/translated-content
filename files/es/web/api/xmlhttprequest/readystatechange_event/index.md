---
title: XMLHttpRequest.onreadystatechange
slug: Web/API/XMLHttpRequest/readystatechange_event
---

{{APIRef}}

Un [`EventHandler`](/es/docs/Web/API/EventHandler) que es invocado cada vez que cambia el atributo `readyState`. La retrollamada (callback) es invocada desde el hilo (thread) perteneciente a la interfaz de usuario. La propiedad **`XMLHttpRequest.onreadystatechange`** contiene el manejador del evento que es invocado cuando se dispara el evento [`readystatechange`](/es/docs/Web/Reference/Events/readystatechange), lo cual sucede cada vez que cambia el valor de la propiedad {{domxref("XMLHttpRequest.readyState", "readyState")}} de {{domxref("XMLHttpRequest")}}. La retrollamada (callback) es invocada desde el hilo perteneciente a la interfaz de usuario.

> **Advertencia:** **Aviso:** No debería ser usado con peticiones síncronas ni tampoco en código nativo.

El evento `readystatechange` no se disparará cuando una petición `XMLHttpRequest` sea cancelada mediante el método [abort()](/es/docs/Web/API/XMLHttpRequest/abort).

## Sintaxis

```
XMLHttpRequest.onreadystatechange = callback;
```

### Valores

- `callback` es la función de retrollamada que será ejecutada (invocada) cuando cambie el valor de la propiedad `readyState`.

## Ejemplo

```js
var xhr = new XMLHttpRequest(),
  method = "GET",
  url = "https://developer.mozilla.org/";

xhr.open(method, url, true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
xhr.send();
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
