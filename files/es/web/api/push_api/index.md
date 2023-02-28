---
title: Push API
slug: Web/API/Push_API
---

{{DefaultAPISidebar("Push API")}}{{SeeCompatTable}}

La **API Push** otorga a las aplicaciones web la habilidad de recibir mensajes enviados a ellas desde un servidor, sin importar si la aplicación está o no en primer plano o cargada. Esto permite a los desarrolladores enviar notificaciones asíncronas y actualizaciones para los usuarios que las aceptan.

> **Nota:** Esta documentación cubre la especificación del API Push de W3C; si estás buscando la documentación para el mecanismo push propio de Firefox OS, ve [Simple Push](/es/docs/Web/API/Simple_Push_API).

## Push conceptos y uso

Para que una aplicación recibá mensajes push, esta debe tener un _[service worker](/es/docs/Web/API/ServiceWorker_API)_. Cuando el service worker esta activo, se puede suscribir usando {{domxref("PushManager.subscribe()")}}.

El resultado de {{domxref("PushSubscription")}} incluye toda la información que la aplicación necesita para enviar un mensaje push: un _endpoint_ y la llave de cifrado necesaria para enviar los datos.

El service worker se iniciará cuando sea necesario manejar mensajes push entrantes, que se entregan al manejador de eventos. Esto permite a las aplicaciones reaccionar a los mensajes push recibidos, por ejemplo para mostrar una notiificación usando {{domxref("ServiceWorkerRegistration.showNotification()")}}.

Cada suscripción es unica para un service worker. El endpoint para la subscripción es una unica [capability URL](http://www.w3.org/TR/capability-urls/): el conocimiento del endpoint es todo lo se necesita para enviar un mensaje a tu aplicación. La URL del endpoint por lo tanto necesita ser mantenida secreta, u otras aplicaciones podrían ser capases de enviar mensajes push a tu aplicación.

Activar un Service-Worker para entregar un mensaje push puede resultar en el incremento de uso de recursos, especialmente de la batería. Los diferentes navegadores disponen de diferentes esquemas para manejar esto - en la actualidad no existe un mecanismo estándar para ello. Firefox permite un numero limitado (det. cuota) de mensajes push para enviar a una aplicación, aunque los mensajes push que generan una notificación estan exentos de este límite. Este límite se actualiza cada vez que se visita el sitio web. En comparación, Chrome no aplica límites, pero requiere que todo mensaje push muestre una notificación.

> **Nota:** Desde Gecko 44, la cuota permitida de Push-messages por aplicación no se ve incrementada cada vez que se emite una nueva notificación, cuando otra sigue visible, durante el periodo de 3 segundos. Esto ayuda al manejo de casos en los que se reciben rafagas de notificaciones y no todas ellas emiten una notificación visible.

> **Nota:** en Chrome las versiones anteriores a la 52, requieren la cnfiguración de un proyecto en [Google Cloud Messaging](https://developers.google.com/cloud-messaging/) para el envío de Push-Messages, así como el uso del numero de proyecto y la API key asociadas para el envío de notificaciones push. Tambien se requiere el detalle de algunos parametros especiales en el app manifest para el uso de este servicio.

## Interfaces

- {{domxref("PushEvent")}}
  - : Represena una acción push enviada al [alcance global](/es/docs/Web/API/ServiceWorkerGlobalScope) (global scope) de un {{domxref("ServiceWorker")}}. Contiene información enviada desde una aplicación a {{domxref("PushSubscription")}}.
- {{domxref("PushManager")}}
  - : Provides a way to receive notifications from third-party servers as well as request URLs for push notifications. This interface has replaced functionality offered by the obsolete {{domxref("PushRegistrationManager")}} interface.
- {{domxref("PushMessageData")}}
  - : Provee acceso a los datos push enviados por el servidor e incluye metodos para manipular los datos recibidos.
- {{domxref("PushSubscription")}}
  - : Provee el URL endpoint para una suscripción y permite la desuscripción de un servicio push.

## Service worker: Adiciones

Las siguientes adiciones al [Service Worker API](/es/docs/Web/API/Service_Worker_API) han sido especificadas en la Push API, para proveer un punto de entrada al uso de Push messages. Tambien monitorizan y responden a los cambios en los eventos Push y Subscription.

- {{domxref("ServiceWorkerRegistration.pushManager")}} {{readonlyinline}}
  - : Devuelve una referencia a la interfaz {{domxref("PushManager")}} para el manejo de las suscripciones incluyendo: la suscripción, obteniendo una suscripción activa y accediendo al estado de permiso de push. Este es el punto de inicio para el uso de Push messaging.
- {{domxref("ServiceWorkerGlobalScope.onpush")}}
  - : Manipulador de eventos activado, cada vez que ocurre un evento [`push`](/es/docs/Web/Reference/Events/push); Eto es, cada vez que se recibe un push-message del servidor.
- {{domxref("ServiceWorkerGlobalScope.onpushsubscriptionchange")}}
  - : Manipulador de eventos activado, cada vez que ocurre un evento [`pushsubscriptionchange`](/es/docs/Web/Reference/Events/pushsubscriptionchange); Por ejemplo, cuando una suscripción ha sido invalidada o esta apunto de serlo. (P.ej. cuando un push service determina un tiempo de expiración.)

## Ejemplos

Mozilla's [ServiceWorker Cookbook](https://github.com/mdn/serviceworker-cookbook/) contiene varios ejemplos Push muy utiles

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver tambien

- [¿Cómo usar la API Push?](/es/docs/Web/API/Push_API/Using_the_Push_API)
- [Push API Demo](https://github.com/chrisdavidmills/push-api-demo), on Github
- [Push Notifications on the Open Web](http://updates.html5rocks.com/2015/03/push-notificatons-on-the-open-web), Matt Gaunt
- [Service Worker API](/es/docs/Web/API/Service_Worker_API)
