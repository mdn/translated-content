---
title: SharedWorkerGlobalScope.applicationCache
slug: Web/API/SharedWorkerGlobalScope/applicationCache
l10n:
  sourceCommit: 06105598d11001e9f12d80ad05087f1df3c0634b
---

{{APIRef("Web Workers API")}}{{SecureContext_Header}}{{Deprecated_Header}}{{Non-standard_Header}}

**`applicationCache`** は {{domxref("SharedWorkerGlobalScope")}} インターフェイスの読み取り専用プロパティで、このワーカーの {{domxref("ApplicationCache")}} オブジェクトを返します。

## 値

{{domxref("ApplicationCache")}} です。

## 例

共有ワーカーに AppCache が関連付けられている場合、以下を使用してキャッシュの参照を返すことができます。

```js
self.applicationCache
```

共有ワーカーの内部から実行してください。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SharedWorkerGlobalScope")}}
