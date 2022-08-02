---
title: Notification.onclick
slug: Web/API/Notification/click_event
tags:
  - API
  - DOM
  - Notifications
  - Propiedad
  - Referencia
  - onclick
translation_of: Web/API/Notification/onclick
original_slug: Web/API/Notification/onclick
browser-compat: api.Notification.onclick
---
{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

La propiedad `onclick` de la interfaz {{domxref("Notification")}} especifica un escuchador de eventos para recibir eventos {{event("click")}}. Estos eventos ocurren cuando el usuario hace click sobre el {{domxref("Notification")}} mostrado.

## Sintaxis

```js
Notification.onclick = function(event) { /* ... */ };
```

El comportamiento por defecto es mover el foco al viewport del [sitio de contexto](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context) de dicha notificación. Si no deseas este comportamiento, puedes llamar {{domxref("Event/preventDefault",
  "preventDefault()")}} en el objeto del evento.

## Ejemplos

En el siguiente ejemplo, utilizamos un manejador `onclick` para abrir un sitio web en una nueva pestaña (especificado con la inclusión del parámetro `'_blank'`) una vez que la notifación es cliqueada.

```js
notification.onclick = function(event) {
  event.preventDefault(); // Evita que el navegador enfoque la pestaña del Notification
  window.open('http://www.mozilla.org', '_blank');
}
```

## Especificaciones

{{Specifications}}

## Browser compatibility

{{Compat}}

## Véase también

- {{domxref("Notification")}}
- [Usando la API de Notificaciones](/es/docs/Web/API/Notifications_API/Using_the_Notifications_API)
