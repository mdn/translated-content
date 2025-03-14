---
title: Notification.permission
slug: Web/API/Notification/permission_static
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

La propiedad de solo lectura `permission` de la interfaz {{domxref("Notification")}} indica el permiso concedido por el usuario al origen actual para mostrar notificaciones web.

## Sintaxis

```js
var permission = Notification.permission;
```

### Valor

Una {{domxref("DOMString")}} representa el permiso actual. El valor puede ser:

- `granted`: El usuario ha concedido el permiso explicitamente al origen actual para mostrar notificaciones del sistema.
- `denied`: El usuario ha denegado el permiso explicitamente al origen actual para mostrar notificaciones del sistema.
- `default`: La decisión del usuario es deconocida; en este caso la aplicación actuará como si el permiso fuese `denied`

## Ejemplos

El siguiente código podría ser usado si quisieras primero comprobar si las notificaciones son soportadas, luego comprobar si los permisos han sido concedidos al origen actual para enviar notificaciones, y luego solicitar permiso de ser requerido, antes de enviar una notificación.

```js
function notifyMe() {
  // Comprobamos si el navegador soporta las notificaciones
  if (!("Notification" in window)) {
    console.log(
      "Este navegador no es compatible con las notificaciones de escritorio",
    );
  }

  // Comprobamos si los permisos han sido concedidos anteriormente
  else if (Notification.permission === "granted") {
    // Si es correcto, lanzamos una notificación
    var notification = new Notification("Hola!");
  }

  // Si no, pedimos permiso para la notificación
  else if (
    Notification.permission !== "denied" ||
    Notification.permission === "default"
  ) {
    Notification.requestPermission(function (permission) {
      // Si el usuario nos lo concede, creamos la notificación
      if (permission === "granted") {
        var notification = new Notification("Hola!");
      }
    });
  }

  // Por último, si el usuario ha denegado el permiso, y quieres ser respetuoso, no hay necesidad de molestarlo.
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con Navegadores

{{Compat}}

## Véase también

- [API de Notificaciones](/es/docs/Web/API/Notifications_API)
- [Usando la API de Notificaciones](/es/docs/Web/API/Notifications_API/Using_the_Notifications_API)
- [API de Permisos](/es/docs/Web/API/Permissions_API)
- [Usando la API de Permisos](/es/docs/Web/API/Permissions_API/Using_the_Permissions_API)
