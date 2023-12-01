---
title: API del portapapeles
slug: Web/API/Clipboard_API
---

{{DefaultAPISidebar("Clipboard API")}}

La **API del portapapeles** permite acceder los comandos del portapapeles (cortar, copiar y pegar), así como leer y escribir de manera asíncrona el portapapeles del sistema. Acceder al contenido del portapapeles está sujeta a la [API de permisos](/es/docs/Web/API/Permissions_API): El permiso `clipboard-write` es concedido automáticamente a las páginas cuando están en la pestaña activa. El permiso `clipboard-read` debe ser solicitado, lo que se puede hacer intentando leer directamente el portapapeles.

Esta API está diseñada para reemplazar el acceso al portapapeles usando {{domxref("document.execCommand()")}}.

## Accediendo al portapapeles

En vez de instanciar un objeto `Clipboard`, se puede acceder al portapapeles del sistema a través de la variable global {{domxref("Navigator.clipboard")}}:

```js
navigator.clipboard
  .readText()
  .then(
    (clipText) => (document.querySelector(".editor").innerText += clipText),
  );
```

Esta pieza de código lee el texto que hay en el portapapeles y lo añade al primer elemento que tenga la clase `editor`. Desde que {{domxref("Clipboard.readText", "readText()")}} (y también {{domxref("Clipboard.read", "read()")}}, de hecho) devuelve una cadena de texto vacía si el contenido del portapapeles no es texto, este código es seguro.

## Interfaces

- {{domxref("Clipboard")}} {{securecontext_inline}}
  - : Proporciona una interfaz para leer y escribir texto y datos. La especificación se refiere a esto como 'Async Clipboard API.'
- {{domxref("ClipboardEvent")}} {{securecontext_inline}}
  - : Representa la información del evento que se ha disparado. Los eventos que se pueden disparar son: {{domxref("Element/cut_event", "cortar")}}, {{domxref("Element/copy_event", "copiar")}}, y {{domxref("Element/paste_event", "pegar")}}. La especificación se refiere a esto como 'Clipboard Event API'.
- {{domxref("ClipboardItem")}} {{securecontext_inline}}
  - : Representa uno de los objetos del portapapeles, usado en la lectura y escritura de datos.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Permissions API](/es/docs/Web/API/Permissions)
- [Using the Permissions API](/es/docs/Web/API/Permissions_API/Using_the_Permissions_API)
