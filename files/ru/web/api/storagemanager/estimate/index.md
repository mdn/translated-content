---
title: StorageManager.estimate()
slug: Web/API/StorageManager/estimate
---

{{securecontext_header}}{{APIRef("Storage")}}

The **`estimate()`** method of the {{domxref("StorageManager")}} interface asks the Storage Manager to obtain quota and usage information for the current origin. This method operates asynchronously, so it returns a {{jsxref("Promise")}} which resolves once the information is available. The promise's fulfillment handler receives as an input a {{domxref("StorageEstimate")}} with the usage and quota data.

## Синтаксис

```
var estimatePromise = StorageManager.estimate();
```

### Параметры

None.

### Возвращаемый результат

A {{jsxref('Promise')}} that resolves to an object which conforms to the {{domxref('StorageEstimate')}} dictionary. This dictionary contains estimates of how much space is available to the origin or app (in {{domxref("StorageEstimate.quota")}}, as well as how much is currently used (in {{domxref("StorageEstimate.usage")}}). These are not exact numbers; between compression, deduplication, and obfuscation for security reasons, they will not be precise.

You may find that the `quota` varies from app to app based on factors such as the frequency with which the user visits it, commonly-known site popularity data, and so forth.

## Примеры

In this example, we obtain the usage estimates and present the percentage of storage capacity currently used to the user.

### HTML content

```html
<p>
  You're currently using about <span id="percent"> </span>% of your available
  storage.
</p>
```

### JavaScript content

```js
navigator.storage.estimate().then(function (estimate) {
  document.getElementById("percent").innerHTML = (
    estimate.usage / estimate.quota
  ).toFixed(2);
});
```

### Результат

{{ EmbedLiveSample('Example', 600, 40) }}

## Спецификация

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Storage API
- {{domxref("Storage")}}, the object returned by {{domxref("Window.localStorage")}}
- {{domxref("StorageManager")}}
- {{domxref("navigator.storage")}}
