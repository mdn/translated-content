---
title: Notification.close()
slug: Web/API/Notification/close
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

El método `close()` de la interfaz {{domxref("Notification")}} se utiliza para
cerrar/eliminar una notificación mostrada anteriormente.

> **Nota:** Esta API no debe usarse solo para tener la notificación
> eliminada de la pantalla después de un retraso fijo ya que este método también eliminará la
> notificación de cualquier bandeja de notificación, evitando que los usuarios interactúen con ella
> después de que se mostró inicialmente. Un uso válido para esta API sería eliminar una
> notificación que ya no es relevante (por ejemplo, el usuario ya leyó la notificación
> en la página web en el caso de una aplicación de mensajería o si ya se está reproduciendo la siguiente canción
> en una aplicación de música).

## Sintaxis

```js
close();
```

### Parámetros

Ninguno.

### Valor retornado

Ninguno ({{jsxref("undefined")}}).

## Ejemplos

En el siguiente fragmento, tenemos una función simple que, cuando se llama, crea un
objeto `options` y luego una nueva notificación. Al final de la función, se
llama también a `close()` dentro de la
función {{domxref("EventTarget.addEventListener","addEventListener()")}} para eliminar la
notificación cuando el contenido relevante ha sido leído en la página web.

```js
function spawnNotification(theBody, theIcon, theTitle) {
  var options = {
    body: theBody,
    icon: theIcon,
  };

  var n = new Notification(theTitle, options);
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") {
      // La pestaña es ahora visible, así que cierro/elimino la notificación obsoleta.
      n.close();
    }
  });
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Uso de la API de Notificaciones](/es/docs/Web/API/Notifications_API/Using_the_Notifications_API)
