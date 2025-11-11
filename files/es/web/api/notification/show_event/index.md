---
title: "Notification: evento show"
slug: Web/API/Notification/show_event
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

El evento **`show`** de la interfaz de {{domxref("Notification")}} se activa cuando se muestra una {{domxref("Notification")}}.

## Sintaxis

Use el nombre del evento en métodos como {{domxref("EventTarget.addEventListener", "addEventListener()")}}, o establezca una propiedad de manejador de eventos.

```js
addEventListener("show", (event) => {});

onshow = (event) => {};
```

## Tipo de evento

Un {{domxref("Event")}} genérico.

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{domxref("Notification")}}
- [Uso de la API de Notificaciones](/es/docs/Web/API/Notifications_API/Using_the_Notifications_API)
