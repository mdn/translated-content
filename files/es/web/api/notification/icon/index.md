---
title: Notification.icon
slug: Web/API/Notification/icon
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

La propiedad de solo lectura **`icon`** de la interfaz
[`Notification`](/es/docs/Web/API/Notification) contiene la URL de un ícono que
se mostrará como parte de la notificación, como se especifica en la opción
`icon` del constructor
[`Notification()`](/es/docs/Web/API/Notification/Notification).

## Sintaxis

```js
var icon = Notification.icon;
```

### Valor

Un [`USVString`](/es/docs/Web/JavaScript/Reference/Global_Objects/String).

## Ejemplos

En nuestra
[aplicación de lista de tareas pendientes](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)
([ver la aplicación ejecutándose en vivo](https://mdn.github.io/dom-examples/to-do-notifications/)),
usamos el constructor
[`Notification()`](/es/docs/Web/API/Notification/Notification) para disparar una
notificación, pasandole los argumentos que especifican el cuerpo, ícono y
título que queremos.

```js
var notification = new Notification("Lista de tareas pendientes", {
  body: text,
  icon: img,
});
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Usando la API de Notificaciones](/es/docs/Web/API/Notifications_API/Using_the_Notifications_API)
