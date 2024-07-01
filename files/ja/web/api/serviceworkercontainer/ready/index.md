---
title: ServiceWorkerContainer.ready
slug: Web/API/ServiceWorkerContainer/ready
l10n:
  sourceCommit: e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{APIRef("Service Workers API")}}

**`ready`** は {{domxref("ServiceWorkerContainer")}} インターフェイスの読み取り専用プロパティは、サービスワーカーがアクティブになるまでコードの実行を遅らせる方法を提供します。 決して拒否しない {{jsxref("Promise")}} を返し、現在のページに関連する {{domxref("ServiceWorkerRegistration")}} がアクティブ（{{domxref("ServiceWorkerRegistration.active","active")}}）ワーカーを持つまで無期限に待機します。 その条件が満たされると、{{domxref("ServiceWorkerRegistration")}} で解決されます。

## 値

{{jsxref("Promise")}} で、決して拒否されず、最終的には {{domxref("ServiceWorkerRegistration")}} で解決される可能性があります。

## 例

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.ready.then((registration) => {
    console.log("サービスワーカーがアクティブ:", registration.active);

    // この時点で、registration.pushManager.subscribe() などの
    // アクティブなサービスワーカーを必要とするメソッドを呼び出すことができます
  });
} else {
  console.error("サービスワーカーをサポートしていません。");
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
