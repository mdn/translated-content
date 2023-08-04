---
title: ServiceWorkerRegistration.showNotification()
slug: Web/API/ServiceWorkerRegistration/showNotification
---

{{SeeCompatTable}}{{APIRef("Service Workers API")}}

The `showNotification()` method of the {{domxref("ServiceWorkerRegistration")}} interface creates a notification on an active service worker.

> **Примечание:** This feature is available in [Web Workers](/ru/docs/Web/API/Web_Workers_API).

## Syntax

```
ServiceWorkerRegistration.showNotification(title, [options]).then(function(NotificationEvent) { ... });
```

### Returns

A {{jsxref('Promise')}} that resolves to a {{domxref('NotificationEvent')}}.

### Parameters

- `title`
  - : The title that must be shown within the notification
- `options` {{optional_inline}}

  - : An object that allows to configure the notification. It can have the following properties:

    - `actions`: An array of actions to display in the notification. The members of the array should be an object literal. It may contain the following values:

      - action: A {{domxref("DOMString")}} identifying a user action to be displayed on the notification.
      - title: A {{domxref("DOMString")}} containing action text to be shown to the user.
      - icon: A {{domxref("USVString")}} containg the URL of an icon to display with the action.

      Appropriate responses are built using `event.action` within the {{event("notificationclick")}} event.

    - `badge`: The URL of an image to represent the notification when there is not enough space to display the notification itself such as, for example, the Android Notification Bar. On Android devices, the badge should accommodate devices up to 4x resolution, about 96 by 96 px, and the image will be automatically masked.
    - `body`: Строка с дополнительным контентом уведомления.
    - `dir` : The direction of the notification; it can be `auto`, `ltr`, or `rtl`
    - `icon`: URL или base64 версия картинки, которая отображается рядом с уведомлением.
    - `image`: URL {{domxref("USVSTring")}} картинки, которая отображается внутри уведомления.
    - `lang`: Specify the lang used within the notification. This string must be a valid [BCP 47 language tag](http://tools.ietf.org/html/bcp47).
    - `renotify`: A boolean that indicates whether to supress vibrations and audible alerts when resusing a `tag` value. The default is false.
    - `requireInteraction`: Indicates that on devices with sufficiently large screens, a notification should remain active until the user clicks or dismisses it. If this value is absent or false, the desktop version of Chrome will auto-minimize notifications after approximately twenty seconds. The default value is `false`.
    - `tag`: An ID for a given notification that allows you to find, replace, or remove the notification using script if necessary.
    - `vibrate`: Шаблон вибрации, которая будет воспроизведена вместе с уведомлением. Шаблон может быть массивом из как минимум одного элемента. Значения элементов это время в миллисекундах, при этом чётные элементы (0, 2, 4, и т.д.) отражают периоды вибрации, а нечётные периоды пауз. Например, `[300, 100, 400]` будет означать вибрацию 300ms, паузу 100ms, затем вибрацию 400ms.
    - `data`: Arbitrary data that you want associated with the notification. This can be of any data type.

## Examples

```js
navigator.serviceWorker.register("sw.js");

function showNotification() {
  Notification.requestPermission(function (result) {
    if (result === "granted") {
      navigator.serviceWorker.ready.then(function (registration) {
        registration.showNotification("Vibration Sample", {
          body: "Buzz! Buzz!",
          icon: "../images/touch/chrome-touch-icon-192x192.png",
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: "vibration-sample",
        });
      });
    }
  });
}
```

To invoke the above function at an appropriate time, you could use the {{domxref("ServiceWorkerGlobalScope.onnotificationclick")}} event handler.

You can also retrieve details of the {{domxref("Notification")}}s have have been fired from the current service worker using {{domxref("ServiceWorkerRegistration.getNotifications()")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
