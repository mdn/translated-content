---
title: PushMessageData
slug: Web/API/PushMessageData
---

{{APIRef("Push API")}}{{SeeCompatTable()}}

The **`PushMessageData`** interface of the [Push API](/zh-CN/docs/Web/API/Push_API) provides methods which let you retrieve the push data sent by a server in various formats.

Unlike the similar methods in the [Fetch API](/zh-CN/docs/Web/API/Fetch_API), which only allow the method to be invoked once, these methods can be called multiple times.

## Properties

None.

## Methods

- {{domxref("PushMessageData.arrayBuffer()")}}
  - : Extracts the data as an {{domxref("ArrayBuffer")}} object.
- {{domxref("PushMessageData.blob()")}}
  - : Extracts the data as a {{domxref("Blob")}} object.
- {{domxref("PushMessageData.json()")}}
  - : Extracts the data as a [JSON](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON) object.
- {{domxref("PushMessageData.text()")}}
  - : Extracts the data as a plain text string.

## Examples

In our [Push API Demo](https://github.com/chrisdavidmills/push-api-demo), we send JSON objects via push messages from our server by first converting them to strings via {{jsxref("JSON.stringify()")}} ([see server.js example](https://github.com/chrisdavidmills/push-api-demo/blob/gh-pages/server.js#L30-L34)):

```js
webPush.sendNotification(subscriber[2], 200, obj.key, JSON.stringify({
  action: 'chatMsg',
  name: obj.name,
  msg: obj.msg
}));
```

When the message reaches the [service worker](https://github.com/chrisdavidmills/push-api-demo/blob/gh-pages/sw.js), we [convert the data back to a JSON object](https://github.com/chrisdavidmills/push-api-demo/blob/gh-pages/sw.js#L4) using {{domxref("PushMessageData.json()")}} before working out what to do with it next:

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Push API](/zh-CN/docs/Web/API/Push_API/Using_the_Push_API)
