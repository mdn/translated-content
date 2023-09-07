---
title: beforeunload
slug: Web/API/Window/beforeunload_event
---

{{APIRef}}

El evento **beforeunload** es disparado cuando la ventana, el documento y sus recursos estan a punto de ser descargados. El documento todavia es visible y el evento todavia es cancelable en este punto.

Si es asignado un string a la propiedad del objeto Evento returnValue, una caja de dialogo aparece, preguntando al usuario que confirme que dejara la pagina(mirar el ejemplo de abajo). Algunos navegadores muestran el string devuelto en una caja de dialogos, otros muestran un mensaje fijo. Si no se provee ningun valor, el evento procede silenciosamente.

> **Nota:** Para combatir pop-ups indeseados, los navegadores pueden no mostrar mensajes creados en manejadores del evento beforeunload a menos que se haya interactuado con la pagina, o incluso sin que se haya interactuado en nada con esta.

<table class="properties">
  <tbody>
    <tr>
      <td>Burbujas</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Cancelable</td>
      <td>Si</td>
    </tr>
    <tr>
      <td>Objetos de destino</td>
      <td>defaultView</td>
    </tr>
    <tr>
      <td>Interfaz</td>
      <td>{{domxref("Event")}}</td>
    </tr>
  </tbody>
</table>

## Propiedades

| Propiedad                       | Tipo                       | Descripcion                                                                        |
| ------------------------------- | -------------------------- | ---------------------------------------------------------------------------------- |
| `target` {{readOnlyInline}}     | {{domxref("EventTarget")}} | El evento objetivo(el objetivo superior en el arbol del DOM).                      |
| `type` {{readOnlyInline}}       | {{domxref("DOMString")}}   | El tipo de evento.                                                                 |
| `bubbles` {{readOnlyInline}}    | {{jsxref("Boolean")}}      | El evento normalmente burbujea?                                                    |
| `cancelable` {{readOnlyInline}} | {{jsxref("Boolean")}}      | Es posible cancelar el evento?                                                     |
| `returnValue`                   | {{domxref("DOMString")}}   | El valor actual devuelto por el evento (el mensaje que se le mostrara al usuario). |

## Ejemplos

```js
window.addEventListener("beforeunload", function (event) {
  event.returnValue = "\\o/";
});

// es equivalente a
window.addEventListener("beforeunload", function (event) {
  event.preventDefault();
});
```

Navegadores basados en WebKit no siguen las especificaciones para la caja de dialogos. Un ejemplo que funcione con distintos navegadores seria similar al siguiente:

```js
window.addEventListener("beforeunload", function (e) {
  var confirmationMessage = "\\o/";

  e.returnValue = confirmationMessage; // Gecko, Trident, Chrome 34+
  return confirmationMessage; // Gecko, WebKit, Chrome <34
});
```

## Notas

A partir del 25 de Mayo del 2011, la especificion HTML5 establece que llamadas a los metodos {{domxref("window.alert()")}}, {{domxref("window.confirm()")}}, y {{domxref("window.prompt()")}}pueden ser ignoradas durante este evento.Mire las [especificaciones de HTML5](http://www.w3.org/TR/html5/webappapis.html#user-prompts) para mas detalles.

Varios navegadores ignoran el resultado del evento y no le preguntan al usuario por confirmacion en absoluto. El documento siempre se descargara automaticamente. Firefox tiene un switch llamado dom.disable_beforeunload en about:config para habilitar este comportamiento.

Usando este manejador de evento tu pagina previene que Firefox cambie el cache de la pagina a uno en memoria bfcache. Mire [Usando el almacenamiento en cache Firefox 1.5](/en/Using_Firefox_1.5_caching) para detalles.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Mire tambien

- [`DOMContentLoaded`](/es/docs/Web/Reference/Events/DOMContentLoaded)
- [`readystatechange`](/es/docs/Web/Reference/Events/readystatechange)
- [`load`](/es/docs/Web/Reference/Events/load)
- [`unload`](/es/docs/Web/Reference/Events/unload)
- [Unloading Documents — Confirmacion para descargar un documento](http://www.whatwg.org/specs/web-apps/current-work/#prompt-to-unload-a-document)
- [Remover mensajes personalizados en dialogos onbeforeload despues de Chrome 51](https://developers.google.com/web/updates/2016/04/chrome-51-deprecations?hl=en#remove_custom_messages_in_onbeforeload_dialogs)
