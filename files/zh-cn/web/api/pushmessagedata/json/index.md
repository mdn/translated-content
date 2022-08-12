---
title: PushMessageData.json()
slug: Web/API/PushMessageData/json
---
{{APIRef("Push API")}}{{SeeCompatTable()}}

{{domxref("PushMessageData")}} 接口的 **`json()`**方法将推送消息数据提取为 一个 [JSON](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) 对象。

## Syntax

```js
let massage_Json = PushEvent.data.json();
```

### Parameters

None.

### Returns

A [JSON](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) object.

## Examples

```js
self.addEventListener('push', function(event) {
  var jsonObj = event.data.json();

  // do something with your JSON
});
```

## Specifications

{{Specifications}}

## Browser Compatibility

{{Compat("api.PushMessageData.json")}}

## See also

- [Using the Push API](/en-US/docs/Web/API/Push_API/Using_the_Push_API)
