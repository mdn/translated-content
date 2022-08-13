---
title: Notification
slug: Web/API/notification
translation_of: Web/API/Notification
---
{{APIRef("Web Notifications")}} {{ SeeCompatTable() }}Das Notification interface wird zum konfigurieren und Anzeigen von desktop notifications verwendet.

### Permissions

Wenn Sie notifications in einer offenen web app verwenden, fügen sie die desktop-notification permission zu ihrem [manifest](/de/docs/Apps/Manifest) file hinzu. Notifications können für jedes permission level, hosted oder darüber verwendet werden.

```json
"permissions": {
    "desktop-notification":{}
}
```

## Konstruktor

```js
var notification = new Notification(title, options);
```

### Parameter

- `title`
  - : Titel der innerhalb der Notification angezeigt werden muss.
- `options` {{optional_inline}}
  - : Ein Objekt das optionale Konfigurationsparamter enthält. Es kann die folgenden Einträge enthalten:\* `dir` : Die Ausrichtung des Textes; Verfügbar sind `auto`, `ltr`, oder `rtl`.
    - `lang`: Spezifiziere die verwendete Sprache. Dieser String muss ein valides [BCP 47 language tag](http://tools.ietf.org/html/bcp47) sein.
    - `body`: Ein String, welcher jeglichen extra Inhalt einer notification beinhaltet.
    - `tag`: Die ID einer gegebene notification, um diese abzurufen, zu löschen, zu ersetzen oder zu löschen.
    - `icon`: Die Url für das verwendete Icon in einer notification.
    - `data`: Ein Benutzerdefiniertes Datenfeld.

## Properties

### Static properties

Diese Eigenschaften sind nur im Notification-Objekt selbst verfügbar.

- {{domxref("Notification.permission")}} {{readonlyinline}}
  - : Eine Zeichenkette, die die aktuell gesetzten Berechtigungen Notifications anzuzeigen darstellt. Mögliche Werte sind: denied (der Nutzer erlaubt keine Benachrichtigungen), granted (der Nutzer akzeptiert, dass Benachrichtigungen angezeigt werden) oder default (die Nutzerwahl ist unbekannt, daher verhält sich der Browser wie bei denied).

### Instance properties

Diese Eigenschaften sind nur in Instanzen des Notification-Objekts verfügbar.

- {{domxref("Notification.title")}} {{readonlyinline}}
  - : Der Titel der Benachrichtigung der in den Parametern des Konstruktors spezifiziert wurde.
- {{domxref("Notification.dir")}} {{readonlyinline}}
  - : Textausrichtung der Benachrichtung welche in den Parametern des Konstruktors spezifiziert wurde.
- {{domxref("Notification.lang")}} {{readonlyinline}}
  - : Sprachcode der Benachrichtung welche in den Parametern des Konstruktors spezifiziert wurde.
- {{domxref("Notification.body")}} {{readonlyinline}}
  - : Textinhalt der Benachrichtung welche in den Parametern des Konstruktors spezifiziert wurde.
- {{domxref("Notification.tag")}} {{readonlyinline}}
  - : ID der Benachrichtung (if any) welche in den Parametern des Konstruktors spezifiziert wurde.
- {{domxref("Notification.icon")}} {{readonlyinline}}
  - : URL des Bildes welches als Icon der Benachrichtgung verwendet wird, wie in den Parametern des Konstruktors spezifiziert wurde
- {{domxref("Notification.data")}} {{readonlyinline}}
  - : Returns a structured clone of the notification’s data.

#### Event handlers

- {{domxref("Notification.onclick")}}
  - : A handler for the {{event("click")}} event. It is triggered each time the user clicks on the notification.
- {{domxref("Notification.onshow")}}
  - : A handler for the {{event("show")}} event. It is triggered when the notification is displayed.
- {{domxref("Notification.onerror")}}
  - : A handler for the {{event("error")}} event. It is triggered each time the notification encounters an error.
- {{domxref("Notification.onclose")}}
  - : A handler for the {{event("close")}} event. It is triggered when the user closes the notification.

## Methods

### Static methods

These methods are available only on the `Notification` object itself.

- {{domxref("Notification.requestPermission()")}}
  - : Requests permission from the user to display notifications. This method must be called as the result of a user action (for example, an onclick event), and cannot be used without it.

### Instance methods

These properties are available only on an instance of the `Notification` object or through its [`prototype`](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain). The `Notification` objects also inherit from the {{domxref("EventTarget")}} interface.

- {{domxref("Notification.close()")}}
  - : Programmatically closes a notification.

{{page("/en-US/docs/Web/API/EventTarget","Methods")}}

## Example

Assume this basic HTML:

```html
<button onclick="notifyMe()">Notify me!</button>
```

It's possible to send a notification as follows:

```js
function notifyMe() {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have alredy been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification("Hi there!");
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== 'denied') {
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

### See the live result

{{ EmbedLiveSample('Example', '100%', 30) }}

## Specifications

| Specification                                | Status                                   | Comment                |
| -------------------------------------------- | ---------------------------------------- | ---------------------- |
| {{SpecName('Web Notifications')}} | {{Spec2('Web Notifications')}} | Initial specification. |

## Browser compatibility

{{Compat}}

### Gecko notes

- Prior to Firefox 22 (Firefox OS <1.2), the instantiation of a new notification must be done with the {{ domxref("window.navigator.mozNotification","navigator.mozNotification") }} object through its `createNotification` method.
- Prior to Firefox 22 (Firefox OS <1.2), the Notification was displayed when calling the `show` method and was supporting the `click` and `close` events only.
- Nick Desaulniers has written a [Notification shim](https://github.com/nickdesaulniers/fxos-irc/blob/master/js/notification.js) to cover both newer and older implementations.
- One particular Firefox OS issue is that you can [pass a path to an icon](https://github.com/nickdesaulniers/fxos-irc/blob/0160cf6c3a2b5c9fe33822aaf6bcba3b7e846da9/my.js#L171) to use in the notification, but if the app is packaged you cannot use a relative path like `/my_icon.png`. You also can't use `window.location.origin + "/my_icon.png"` because `window.location.origin` is null in packaged apps. The [manifest origin field](https://developer.mozilla.org/en-US/Apps/Developing/Manifest#origin) fixes this, but it is only available in Firefox OS 1.1+. A potential solution for supporting Firefox OS <1.1 is to [pass an absolute URL to an externally hosted version of the icon](https://github.com/nickdesaulniers/fxos-irc/blob/0160cf6c3a2b5c9fe33822aaf6bcba3b7e846da9/my.js#L168). This is less than ideal as the notification is displayed immediately with the icon missing, then the icon is fetched, but it works on all versions of Firefox OS.

### Chrome notes

- Prior to Chrome 22, the support for notification was following an [old prefixed version of the specification](http://www.chromium.org/developers/design-documents/desktop-notifications/api-specification) and was using the {{domxref("window.navigator.webkitNotifications","navigator.webkitNotifications")}} object to instantiate a new notification.
- Prior to Chrome 32, {{domxref("Notification.permission")}} was not supported.

### Android notes

- The Android browser has been deprecated since Android 4.0. Newer versions use Chrome.

### Safari notes

- Safari started supporting notification with Safari 6 but only on Mac OSX 10.8+ (Mountain Lion).

## Notes

Deprecated since Android 4.0.

## See also

- [Using Web Notifications](/de/docs/WebAPI/Using_Web_Notifications)
- [Firefox OS Image Uploader Sample App](https://github.com/soapdog/firefoxos-sample-app-image-uploader "Firefox OS Image Uploader Sample App")
