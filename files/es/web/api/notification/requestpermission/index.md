---
title: Notification.requestPermission()
slug: Web/API/Notification/requestPermission
tags:
  - API
  - Method
  - Notification
  - Notifications
  - Notifications API
  - Reference
translation_of: Web/API/Notification/requestPermission
browser-compat: api.Notification.requestPermission
---
{{APIRef("Web Notifications")}}{{securecontext_header}}

> **Nota:** Safari aún usa la sintaxis callback para obtener el permiso. Lee [Usando la API de Notificaciones](/es/docs/Web/API/Notifications_API/Using_the_Notifications_API) para un buen ejemplo de como detectar esto y ejecutar el código de forma apropiada.

El método **`requestPermission`** de la interfaz {{domxref("Notification")}} solicita un permiso del usuario al origen actual para mostrar notificaciones.

## Sintaxis

La ultima especificación ha actualizado este método a una sintaxis de tipo promesa que funciona así:

```js
Notification.requestPermission().then(function(permission) { /* ... */ });
```

Anteriormente, la sintaxis se basaba en un simple callback; esta versión ahora está obsoleta:

```js
Notification.requestPermission(callback);
```

### Parámetros

- `callback` {{optional_inline}} {{deprecated_inline}}
  - : Una callback opcional que es ejecutado con el valor del permiso. Obsoleto y reemplazado por el valor de retorno de la promesa.

### Valor de retorno

Una {{jsxref("Promise")}} que se convierte en una {{domxref("DOMString")}} con el permiso elegido por el usuario. Los valores posibles para este son:

- `granted`
- `denied`
- `default`

## Ejemplos

Asume este HTML básico:

```html
<button onclick="notifyMe()">¡Notifícame!</button>
```

Es posible enviar una notificación de la siguiente forma: aquí presentamos un conjunto de código bastante detallado y completo que podrías usar si quisieras primero comprobar si las notificaciones son soportadas, luego comprobar si el permiso ha sido concedido para el origen actual para enviar notificaciones y luego solicitar permiso de ser requerido, antes de enviar una notificación.

```js
function notifyMe() {
  // Comprobamos si el navegador soporta las notificaciones
  if (!("Notification" in window)) {
    alert("Este navegador no es compatible con las notificaciones de escritorio");
  }

  // Comprobamos si los permisos han sido concedidos anteriormente
  else if (Notification.permission === "granted") {
    // Si es correcto, lanzamos una notificación
    var notification = new Notification("¡Hola!");
  }

  // Si no, pedimos permiso para la notificación
  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      // Si el usuario nos lo concede, creamos la notificación
      if (permission === "granted") {
        var notification = new Notification("¡Hola!");
      }
    });
  }

  // Por último, si el usuario ha denegado el permiso,
  // y quiere ser respetuoso, no hay necesidad de molestarlo.
}
```

Ya no mostramos ejemplos corriendo en tiempo real en esta página, ya que Chrome y Firefox ya no conceden permisos de notificación para ser solicitados desde el origen {{htmlelement("iframe")}}, para seguir con otros navegadores. Para ver un ejemplo en acción, revisa nuestro [Ejemplo de lista de Todos](https://github.com/mdn/to-do-notifications/tree/gh-pages) (véase también [la app corriendo en vivo](https://mdn.github.io/to-do-notifications/).)

> **Nota:** En el ejemplo de arriba generamos notificaciones en respuesta a una acción del usuario (hacer click en un botón). Esta no es la única mejor práctica — no deberias molestar a los usuarios con notificaciones que ellos no aceptaron — pero pronto los navegadores explicitamente deshabilitaran las notificaciones que no son ejecutadas en respuesta a una acción del usuario. Firefox ya está haciendo esto desde la versión 72, por ejemplo.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Usando la API de Notificaciones](/es/docs/Web/API/Notifications_API/Using_the_Notifications_API)

