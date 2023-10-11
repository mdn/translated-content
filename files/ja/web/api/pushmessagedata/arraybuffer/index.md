---
title: "PushMessageData: arrayBuffer() メソッド"
short-title: arrayBuffer()
slug: Web/API/PushMessageData/arrayBuffer
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Push API")}}

**`arrayBuffer()`** は {{domxref("PushMessageData")}} インターフェイスのメソッドで、プッシュメッセージデータを {{jsxref("ArrayBuffer")}} オブジェクトとして抽出します。

## 構文

```js-nolint
arrayBuffer()
```

### 引数

なし。

### 返値

{{jsxref("ArrayBuffer")}} です。

## 例

```js
self.addEventListener("push", (event) => {
  const buffer = event.data.arrayBuffer();

  // 配列バッファーを使用して何かを実行する。
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
