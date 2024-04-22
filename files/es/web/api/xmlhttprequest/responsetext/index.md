---
title: XMLHttpRequest.responseText
slug: Web/API/XMLHttpRequest/responseText
---

{{APIRef('XMLHttpRequest')}}

La propiedad **`XMLHttpRequest.responseText`** devuelve un **`DOMString`** que contiene la respuesta a la consulta como un texto o null si la consulta no tuvo exito o aun no ha sido completada. la propiedad **`responseText`** tendra una respuesta parcial como retorno aunque la consulta no haya sido completada. si **responseType** contiene algo que no sea un string vacio o un "text", el acceso a **responseText** sera **`throw InvalidStateError exception`**.

## Ejemplo. Lanza una excepción `InvalidStateError`

```js
var xhr = new XMLHttpRequest();
xhr.open("GET", "/server", true);

// If specified, responseType must be empty string or "text"
xhr.responseType = "text";

xhr.onload = function () {
  if (xhr.readyState === xhr.DONE) {
    if (xhr.status === 200) {
      console.log(xhr.response);
      console.log(xhr.responseText);
    }
  }
};

xhr.send(null);
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
