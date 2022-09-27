---
title: ServiceWorkerContainer.getRegistration()
slug: Web/API/ServiceWorkerContainer/getRegistration
---

{{APIRef("Service Workers API")}}

{{domxref("ServiceWorkerContainer")}} インターフェイスの **`getRegistration()`** メソッドは、スコープ URL が指定されたドキュメント URL と一致する {{domxref("ServiceWorkerRegistration")}} オブジェクトを取得します。 このメソッドは、{{domxref("ServiceWorkerRegistration")}} または `undefined` に解決される {{jsxref("Promise")}} を返します。

## 構文

```
serviceWorkerContainer.getRegistration(scope).then(function(serviceWorkerRegistration) { ... });
```

### 引数

- `scope` {{optional_inline}}
  - : サービスワーカー登録の一意の識別子 — 取得する登録オブジェクトのスコープ URL。 これは通常、相対 URL です。

### 返値

{{domxref("ServiceWorkerRegistration")}} オブジェクトまたは `undefined` に解決される {{jsxref("Promise")}}。

## 例

```js
navigator.serviceWorker.getRegistration('/app').then(function(registration) {
  if(registration){
    document.querySelector('#status').textContent = 'ServiceWorkerRegistration が見つかりました。';
  }
});
```

## 仕様

| 仕様                                                                                                                                                             | 状態                                 | コメント |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#dom-serviceworkercontainer-getregistration', 'ServiceWorkerContainer: getRegistration')}} | {{Spec2('Service Workers')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.ServiceWorkerContainer.getRegistration")}}
