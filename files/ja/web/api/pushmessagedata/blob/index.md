---
title: "PushMessageData: blob() メソッド"
short-title: blob()
slug: Web/API/PushMessageData/blob
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Push API")}}

**`blob()`** は {{domxref("PushMessageData")}} インターフェイスのメソッドで、プッシュメッセージデータを {{domxref("Blob")}} オブジェクトとして抽出します。

## 構文

```js-nolint
blob()
```

### 引数

なし。

### 返値

{{domxref("Blob")}} です。

## 例

```js
self.addEventListener("push", (event) => {
  const blob = event.data.blob();

  // Blob を使用して何かを実行する。
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
