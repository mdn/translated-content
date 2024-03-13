---
title: XMLHttpRequest.timeout
slug: Web/API/XMLHttpRequest/timeout
---

{{APIRef('XMLHttpRequest')}}

La propiedad **`XMLHttpRequest.timeout`** es un `unsigned long` que representa el número de milisegundos que puede tomar una solicitud antes de que se finalice automáticamente. El valor por defecto es 0, lo que significa que no hay tiempo de espera (_timeout_). _Timeout_ no debe utilizarse para solicitudes XMLHttpRequests sincrónicas usadas en un {{Glossary('document environment')}}, pues generará una excepción `InvalidAccessError`. Cuando ocurre un tiempo de espera, se dispara un evento [timeout](/es/docs/Web/Events/timeout).

> **Nota:** No puede usar un _timeout_ para solicitudes sincrónicas con una ventana propietaria (_owning window_).

[Uso de _timeout_ con una solicitud asincrónica](/es/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests#Example_using_a_timeout)

En Internet Explorer, la propiedad _timeout_ se puede establecer solo después de llamar al método [open()](/es/docs/Web/API/XMLHttpRequest/open) y antes de llamar al método [send()](/es/docs/Web/API/XMLHttpRequest/send).

## Ejemplo

```js
var xhr = new XMLHttpRequest();
xhr.open("GET", "/server", true);

xhr.timeout = 2000; // tiempo en milisegundos

xhr.onload = function () {
  // Solicitud finalizada. Haz el procesamiento aquí.
};

xhr.ontimeout = function (e) {
  // Tiempo de espera del XMLHttpRequest agotado. Haz algo aquí.
};

xhr.send(null);
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
