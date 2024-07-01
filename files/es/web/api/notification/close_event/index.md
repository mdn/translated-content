---
title: "Notification: evento close"
slug: Web/API/Notification/close_event
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

El evento **`close`** de la interfaz de {{domxref("Notification")}} se activa cuando se cierra una {{domxref("Notification")}}.

## Sintaxis

Use el nombre del evento en métodos como {{domxref("EventTarget.addEventListener", "addEventListener()")}}, o establezca una propiedad de manejador de eventos.

```js
addEventListener("close", (event) => {});

onclose = (event) => {};
```

## Tipo de evento

Un {{domxref("Event")}} genérico.

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{domxref("Notification")}}
- [Uso de la API de Notificaciones](/es/docs/Web/API/Notifications_API/Using_the_Notifications_API)
