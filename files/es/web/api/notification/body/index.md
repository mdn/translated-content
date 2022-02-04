---
title: Notification.body
slug: Web/API/notification/body
tags:
  - API
  - API Notificaciones
  - Javascript Notificador
  - Notificaciones
translation_of: Web/API/Notification/body
---
{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

La propiedad **`body`** de solo lectura de la interfaz
{{domxref("Notification")}} indica la cadena del cuerpo de la notificación, como
se especifica en la opción `body` del constructor
{{domxref("Notification.Notification","Notification()")}}.

## Sintaxis

```js
var body = Notification.body;
```

### Valor

Un {{domxref("DOMString")}}.

## Ejemplos

```js
function spawnNotification(theBody, theIcon, theTitle) {
  var options = {
    body: theBody,
    icon: theIcon,
  };
  var n = new Notification(theTitle, options);

  console.log(n.body);
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad del navegador

{{Compat}}

## See also

- [Usando la API de notificaciones](/es/docs/Web/API/Notifications_API/Using_the_Notifications_API)

