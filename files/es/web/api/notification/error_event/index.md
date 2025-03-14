---
title: "Notification: evento error"
slug: Web/API/Notification/error_event
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

El evento **`error`** de la interfaz de {{domxref("Notification")}} se activa cuando algo sale mal con una {{domxref("Notification")}} (en muchos casos, un error que impide que se muestre la notificación).

## Sintaxis

Use el nombre del evento en métodos como {{domxref("EventTarget.addEventListener", "addEventListener()")}}, o establezca una propiedad de manejador de eventos.

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## Tipo de evento

Un {{domxref("Event")}} genérico.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{domxref("Notification")}}
- [Uso de la API de Notificaciones](/es/docs/Web/API/Notifications_API/Using_the_Notifications_API)
