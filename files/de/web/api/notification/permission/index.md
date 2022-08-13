---
title: Notification.permission
slug: Web/API/notification/permission
tags:
  - API
  - DOM
  - Notifications
  - Property
  - Reference
translation_of: Web/API/Notification/permission
---
{{APIRef("Web Notifications")}}

Die schreibgeschützte Berechtigungseigenschaft der Schnittstelle {{domxref ("Notificaton")}} gibt die aktuelle Berechtigung an, die der Benutzer für den aktuellen Ursprung zur Anzeige von Web-Benachrichtigungen erteilt hat.

{{AvailableInWorkers}}

## Syntax

    var permission = Notification.permission;

### Value

Ein {{domxref ("DOMString")}} repräsentiert die aktuelle Berechtigung. Der Wert kann sein:

- `granted`: Der Benutzer hat explizit die Berechtigung für den aktuellen Ursprung zur Anzeige von Systembenachrichtigungen erteilt.
- `denied`: Der Benutzer hat die Berechtigung für den aktuellen Ursprung explizit abgelehnt, um Systembenachrichtigungen anzuzeigen.
- `default`: Die Benutzerentscheidung ist unbekannt; In diesem Fall wird die Anwendung so tun, als ob die Erlaubnis verweigert wurde.

## Beispiele

Das folgende ziemlich ausführliche Snippet könnte verwendet werden, wenn Sie zuerst überprüfen möchten, ob Benachrichtigungen unterstützt werden, und prüfen Sie dann, ob für den aktuellen Ursprung die Erlaubnis für das Senden von Benachrichtigungen gewährt wurde, und fordern Sie dann bei Bedarf eine Genehmigung an, bevor Sie eine Benachrichtigung senden.

```js
function notifyMe() {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    console.log("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have alredy been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification("Hi there!");
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== 'denied' || Notification.permission === "default") {
    Notification.requestPermission(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification("Hi there!");
      }
    });
  }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them any more.
}
```

## Spezifikationen

| Spezifikation                                                                                            | Status                                   | Kommentar      |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------------- |
| {{SpecName("Web Notifications","#dom-notification-permission","permission")}} | {{Spec2('Web Notifications')}} | Lebensstandard |

## Browserkombatibilität

{{Compat}}

### Firefox OS Notizen

{{Page("/en-US/docs/Web/API/Notifications_API", "Firefox OS notes")}}

### Chrome Notizen

{{Page("/en-US/docs/Web/API/Notifications_API", "Chrome notes")}}

### Safari Notizen

{{Page("/en-US/docs/Web/API/Notifications_API", "Safari notes")}}

## Siehe auch

- [Verwenden der Benachrichtigungs-API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
- {{domxref("Permissions_API","Permissions API")}}
