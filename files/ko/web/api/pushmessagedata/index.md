---
title: PushMessageData
slug: Web/API/PushMessageData
---

{{APIRef("Push API")}}{{SeeCompatTable()}}

The **`PushMessageData`** interface of the [Push API](/ko/docs/Web/API/Push_API) provides methods which let you retrieve the push data sent by a server in various formats.

Unlike the similar methods in the [Fetch API](/ko/docs/Web/API/Fetch_API), which only allow the method to be invoked once, these methods can be called multiple times.

Messages received through the Push API are sent encrypted by push services and then automatically decrypted by browsers before they are made accessible through the methods of the `PushMessageData` interface.

## Properties

None.

## Methods

- {{domxref("PushMessageData.arrayBuffer()")}}
  - : Extracts the data as an {{domxref("ArrayBuffer")}} object.
- {{domxref("PushMessageData.blob()")}}
  - : Extracts the data as a {{domxref("Blob")}} object.
- {{domxref("PushMessageData.json()")}}
  - : Extracts the data as a [JSON](/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON) object.
- {{domxref("PushMessageData.text()")}}
  - : Extracts the data as a plain text string.

## Examples

```js
self.addEventListener('push', function(event) {
  var obj = event.data.json();

  if(obj.action === 'subscribe' || obj.action === 'unsubscribe') {
    fireNotification(obj, event);
    port.postMessage(obj);
  } else if(obj.action === 'init' || obj.action === 'chatMsg') {
    port.postMessage(obj);
  }
});
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
