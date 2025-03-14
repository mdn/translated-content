---
title: ServiceWorker.scriptURL
slug: Web/API/ServiceWorker/scriptURL
l10n:
  sourceCommit: 4ba12fec878a1f941492ada3edd467bfd76532cf
---

{{APIRef("Service Workers API")}}

[`ServiceWorkerRegistration`](/ja/docs/Web/API/ServiceWorkerRegistration) の一部として定義された `ServiceWorker` シリアライズスクリプトの URL を返します。
`ServiceWorker` を登録した文書と同じオリジンである必要があります。

## 値

文字列です。

## 例

```js
const sw = navigator.serviceWorker.controller;
console.log(sw.scriptURL);
// https://example.com/scripts/service-worker.js
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
