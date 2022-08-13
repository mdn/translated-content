---
title: Push API
slug: Web/API/Push_API
translation_of: Web/API/Push_API
---
{{SeeCompatTable}}

Die **Push API** verleiht Web Applikationen die Fähigkeit, Benachrichtigungen zu empfangen, die von einem Server gesendet werden. Das funktioniert auch, wenn die Web Applikation selbst nicht im Vordergrund oder überhaupt aktuell geladen ist. Dies ermöglicht Entwicklern asynchrone Notizen und Updates an Benutzer zu senden, die sich dafür angemeldet haben. Das Ergebnis ist besseres Engagement mit aktuellem Inhalt.

## Push Konzepte und Anwendung

> **Warning:** When implementing PushManager subscriptions, it is vitally important that you protect against CSRF/XSRF issues in your app. See the following articles for more information:\* [Cross-Site Request Forgery (CSRF) Prevention Cheat Sheet](<https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)_Prevention_Cheat_Sheet>)
>
> - [Preventing CSRF and XSRF Attacks](https://blog.codinghorror.com/preventing-csrf-and-xsrf-attacks/)

Wenn eine App Push Nachrichten erhalten soll, muss sie ein [service worker](/de/docs/Web/API/ServiceWorker_API) sein. Wenn der _Service Worker_ aktiv ist, kann er Push Benachrichtigungen abonnieren wie folgt: {{domxref("PushManager.subscribe()")}}.

Das Resultat {{domxref("PushSubscription")}} enthält sämtliche Information, die die App braucht, um Push Nachrichten zu senden: einen Endpunkt und den Kodierungsschlüssel zum Datenversand.

Der _Service Worker_ startet bei Bedarf, um eintreffende Nachrichten zu verarbeiten, welche an den Event Handler {{domxref("ServiceWorkerGlobalScope.onpush")}} geliefert werden. Dies erlaubt der App auf einlaufende Push Nachrichten zu reagieren, beispielsweise mit der Darstellung einer Notiz (mit dem Befehl {{domxref("ServiceWorkerRegistration.showNotification()")}}.)

Jedes Abonnement ist eindeutig für einen _Service Worker_. Der Endpunkt des Abonnements ist eine eindeutige [capability URL](http://www.w3.org/TR/capability-urls/): Kenntnis des Endpunkts ist alles was nötig ist, um eine Nachricht an Ihre Applikation zu senden. Die Endpunkt URL ist daher geheim zu halten, da sonst andere Applikationen Nachrichten an Ihre Applikation senden könnten.

Die Aktivierung einen \_Service Worker_s kann eine erhöhte Ressourcennutzung begründen, besonders der Batterie. Die verschiedenen Browser behandeln dies verschieden. Es gibt aktuell keinen Standard dafür. Firefox erlaubt eine begrenzte Anzahlt (quota) Push Nachrichten, die an eine Applikation gesendet werden dürfen, wobei Push Nachrichten, die Notizen generieren, davon ausgenommen sind. Das Limit wird bei jedem Seitenbesuch erneuert. Zum Vergleich verwendet Chrome kein Limit, sondern erfordert, dass jede Push Nachricht mit einer Notiz angezeigt wird.

> **Note:** As of Gecko 44, the allowed quota of push messages per application is not incremented when a new notification fires, when another is still visible, for a period of three seconds. This handles cases where a burst of Push messages is received, and not all generate a visible notification.

> **Note:** Chrome versions earlier than 52 require you to set up a project on [Google Cloud Messaging](https://developers.google.com/cloud-messaging/) to send push messages, and use the associated project number and API key when sending push notifications. It also requires an app manifest, with some special parameters to use this service.

## Interfaces

- {{domxref("PushEvent")}}
  - : Represents a push action, sent to the [global scope](/de/docs/Web/API/ServiceWorkerGlobalScope) of a {{domxref("ServiceWorker")}}. It contains information sent from an application to a {{domxref("PushSubscription")}}.
- {{domxref("PushManager")}}
  - : Provides a way to receive notifications from third-party servers, as well as request URLs for push notifications. This interface has replaced the functionality offered by the obsolete {{domxref("PushRegistrationManager")}} interface.
- {{domxref("PushMessageData")}}
  - : Provides access to push data sent by a server, and includes methods to manipulate the received data.
- {{domxref("PushSubscription")}}
  - : Provides a subcription's URL endpoint, and allows unsubscription from a push service.

## Service worker additions

The following additions to the [Service Worker API](/de/docs/Web/API/Service_Worker_API) have been specified in the Push API spec to provide an entry point for using Push messages. They also monitor and respond to push and subscription change events.

- {{domxref("ServiceWorkerRegistration.pushManager")}} {{readonlyinline}}
  - : Returns a reference to the {{domxref("PushManager")}} interface for managing push subscriptions including subscribing, getting an active subscription, and accessing push permission status. This is the entry point into using Push messaging.
- {{domxref("ServiceWorkerGlobalScope.onpush")}}
  - : An event handler fired whenever a {{Event("push")}} event occurs; that is, whenever a server push message is received.
- {{domxref("ServiceWorkerGlobalScope.onpushsubscriptionchange")}}
  - : An event handler fired whenever a {{Event("pushsubscriptionchange")}} event occurs; for example, when a push subscription has been invalidated, or is about to be invalidated (e.g. when a push service sets an expiration time.)

## Examples

Mozilla's [ServiceWorker Cookbook](https://serviceworke.rs/) contains many useful Push examples.

## Specifications

| Specification                    | Status                       | Comment            |
| -------------------------------- | ---------------------------- | ------------------ |
| {{SpecName("Push API")}} | {{Spec2("Push API")}} | Initial definition |

## Browser compatibility

{{Compat}}

- \[1] Currently available only on desktop versions of Firefox; also, push messages are only delivered when Firefox is running.
- \[2] This is currently not implemented. See the [Microsoft Edge status information](https://developer.microsoft.com/en-us/microsoft-edge/platform/status/pushapi/).
- \[3] Push (and [Service Workers](/de/docs/Web/API/Service_Worker_API)) have been disabled in the [Firefox 45 and 52 Extended Support Releases](https://www.mozilla.org/en-US/firefox/organizations/) (ESR.)
- \[4] Push has been enabled by default on Firefox for Android version 48.

## See also

- [Sending VAPID identified WebPush Notifications via Mozilla’s Push Service](https://blog.mozilla.org/services/2016/08/23/sending-vapid-identified-webpush-notifications-via-mozillas-push-service/)
- [Web Push Notifications: Timely, Relevant, and Precise](https://developers.google.com/web/fundamentals/engage-and-retain/push-notifications/), Joseph Medley
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)

{{DefaultAPISidebar("Push API")}}
