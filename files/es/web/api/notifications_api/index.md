---
title: API de Notificaciones
slug: Web/API/Notifications_API
l10n:
  sourceCommit: f3976b4130f066a6114aeb9617924cdcb0f994ce
---

{{DefaultAPISidebar("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

La API de notificaciones permite que las páginas web controlen la visualización de las notificaciones del sistema para el usuario final. Estos están fuera de la ventana de navegación de nivel superior, por lo que se pueden mostrar incluso cuando el usuario ha cambiado de pestaña o se ha movido a una aplicación diferente. La API está diseñada para ser compatible con los sistemas de notificación existentes, en diferentes plataformas.

## Conceptos y uso

En las plataformas compatibles, mostrar una notificación del sistema generalmente implica dos cosas. Primero, el usuario debe otorgar el permiso de origen actual para mostrar las notificaciones del sistema, lo que generalmente se hace cuando se inicializa la aplicación o el sitio, mediante el método {{domxref("Notification.requestPermission()")}}. Esto debe hacerse en respuesta a un gesto del usuario, como hacer clic en un botón, por ejemplo:

```js
btn.addEventListener("click", () => {
  let promise = Notification.requestPermission();
  // esperar por el permiso
});
```

Esta no es solo la mejor práctica: no debe enviar _spam_ a los usuarios con notificaciones que no aceptaron, sino que, en el futuro, los navegadores rechazarán explícitamente las notificaciones que no se activen en respuesta a un gesto del usuario. Firefox ya está haciendo esto desde la versión 72, por ejemplo.

Esto generará un cuadro de diálogo de solicitud, a lo largo de las siguientes líneas:

![Un cuadro de diálogo que le pide al usuario que permita notificaciones desde ese origen. Hay opciones para nunca permitir o permitir notificaciones.](screen_shot_2019-12-11_at_9.59.14_am.png)

Desde aquí el usuario puede optar por permitir las notificaciones de este origen, o bloquearlas. Una vez que se ha hecho una elección, la configuración generalmente persistirá durante la sesión actual.

> **Nota:** A partir de Firefox 44 se combinaron los permisos de Notificaciones y [Push](/es/docs/Web/API/Push_API). Si se otorga permiso para las notificaciones, también se habilitará el envío.

A continuación, se crea una nueva notificación usando el constructor {{domxref("Notification.Notification","Notification()")}}. A esto se le debe pasar un argumento de título y, opcionalmente, se le puede pasar un objeto de opciones para especificar opciones, como la dirección del texto, el cuerpo del texto, el icono para mostrar, el sonido de notificación para reproducir y más.

Además, la especificación de la API de notificaciones especifica una serie de adiciones a la [API ServiceWorker](/es/docs/Web/API/Service_Worker_API), para permitir que los _service workers_ activen las notificaciones.

> **Nota:** Para obtener más información sobre el uso de notificaciones en su propia aplicación, lea [Uso de la API de notificaciones](/es/docs/Web/API/Notifications_API/Using_the_Notifications_API).

## Interfaces de notificaciones

- {{domxref("Notification")}}
  - : Define un objeto de notificación.

### Adiciones de service worker

- {{domxref("ServiceWorkerRegistration")}}
  - : Incluye el método {{domxref("ServiceWorkerRegistration.showNotification()")}} y {{domxref("ServiceWorkerRegistration.getNotifications()")}}, para controlar la visualización de notificaciones.
- {{domxref("ServiceWorkerGlobalScope")}}
  - : Incluye el controlador {{domxref("ServiceWorkerGlobalScope.notificationclick_event", "onnotificationclick")}}, para activar funciones personalizadas cuando se hace clic en una notificación.
- {{domxref("NotificationEvent")}}
  - : Un tipo específico de objeto de evento, basado en {{domxref("ExtendableEvent")}}, que representa una notificación que se ha activado.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Veáse también

- [Uso de la API de notificaciones](/es/docs/Web/API/Notifications_API/Using_the_Notifications_API)
