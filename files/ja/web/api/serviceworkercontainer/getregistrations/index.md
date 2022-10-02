---
title: ServiceWorkerContainer.getRegistrations()
slug: Web/API/ServiceWorkerContainer/getRegistrations
---

{{APIRef("Service Workers API")}}

{{domxref("ServiceWorkerContainer")}} インターフェイスの **`getRegistrations()`** メソッドは、`ServiceWorkerContainer` に関するすべての {{domxref("ServiceWorkerRegistration")}} を配列で取得します。 このメソッドは、{{domxref("ServiceWorkerRegistration")}} の配列に解決される {{jsxref("Promise")}} を返します。

## 構文

```
serviceWorkerContainer.getRegistrations().then(function(serviceWorkerRegistrations) { ... });
```

### 引数

なし。

### 返値

{{domxref("ServiceWorkerRegistration")}} オブジェクトの配列に解決される {{jsxref("Promise")}}。

## 例

```js
navigator.serviceWorker.getRegistrations().then(function(registrations) {
  document.querySelector('#status').textContent = 'ServiceWorkerRegistrations が見つかりました。';
});
```

## 仕様

| 仕様                                                                                                                                 | 状態                                 | コメント |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#navigator-service-worker-getRegistrations', 'getRegistrations()')}} | {{Spec2('Service Workers')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.ServiceWorkerContainer.getRegistrations")}}
