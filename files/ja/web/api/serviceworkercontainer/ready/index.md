---
title: ServiceWorkerContainer.ready
slug: Web/API/ServiceWorkerContainer/ready
---

{{APIRef("Service Workers API")}}

{{domxref("ServiceWorkerContainer")}} インターフェイスの **`ready`** 読み取り専用プロパティは、サービスワーカーがアクティブになるまでコードの実行を遅らせる方法を提供します。 決して拒否しない {{jsxref("Promise")}} を返し、現在のページに関連する {{domxref("ServiceWorkerRegistration")}} がアクティブ（{{domxref("ServiceWorkerRegistration.active","active")}}）ワーカーを持つまで無期限に待機します。 その条件が満たされると、{{domxref("ServiceWorkerRegistration")}} で解決されます。

## 構文

```
navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) { ... });
```

### 値

決して拒否せず、最終的には {{domxref("ServiceWorkerRegistration")}} で解決される可能性がある {{jsxref("Promise")}}。

## 例

```js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.ready
  .then(function(registration) {
    console.log('サービスワーカーがアクティブ:', registration.active);

    // この時点で、registration.pushManager.subscribe() などの
    // アクティブなサービスワーカーを必要とするメソッドを呼び出すことができます
  });
} else {
  console.log('サービスワーカーをサポートしていません。');
}
```

## 仕様

| 仕様                                                                                                                                     | 状態                                 | コメント |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#navigator-service-worker-ready', 'ServiceWorkerRegistration.ready')}} | {{Spec2('Service Workers')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.ServiceWorkerContainer.ready")}}
