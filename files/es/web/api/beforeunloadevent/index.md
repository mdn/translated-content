---
title: BeforeUnloadEvent
slug: Web/API/BeforeUnloadEvent
translation_of: Web/API/BeforeUnloadEvent
---
{{APIRef}}

El evento **`beforeunload`** se diapara cuando la ventana, el documento y sus recursos están a punto de ser cerrados.

Cuando una cadena no vacía es asignada a la propiedad `returnValue` del Evento, un cuadro de diálogo aparece, pidiendo a los usuarios la confirmación para la página (ver ejemplo a continuación). Cuando no es asignado un valor, el evento se procesa en silencio. Algunas implementaciones muestran solamente el cuadro de diálogo si el marco o cualquier marco embebido recibe un gesto o interacción del usuario. Ver [Compatibilidad del navegador](#compatibilidad_del_navegador) para más información.

| Burbujas           | No                           |
| ------------------ | ---------------------------- |
| Cancelable         | Sí                           |
| Objetos de destino | defaultView                  |
| Interface          | {{domxref("Event")}} |

## Ejemplos

```js
window.addEventListener("beforeunload", function( event ) {
  event.returnValue = "\o/";
});

//is equivalent to
window.addEventListener("beforeunload", function( event ) {
  event.preventDefault();
});
```

Los navegadores basado en Webkit no se basan en las especificaciones del cuadro de diálogo. Un ejemplo compatible con la mayoria de los navegadores seria algo parecido al siguiente ejemplo.

```js
window.addEventListener("beforeunload", function (e) {
  var confirmationMessage = "\o/";

  (e || window.event).returnValue = confirmationMessage;     //Gecko + IE
  return confirmationMessage;                                //Webkit, Safari, Chrome etc.
});
```

## Compatibilidad del navegador

{{Compat("api.BeforeUnloadEvent")}}

## Ver también

- {{Event("DOMContentLoaded")}}
- {{Event("readystatechange")}}
- {{Event("load")}}
- {{Event("beforeunload")}}
- {{Event("unload")}}
- [Descargas de documentos — Solicitud para descargar un documento](http://www.whatwg.org/specs/web-apps/current-work/#prompt-to-unload-a-document)
