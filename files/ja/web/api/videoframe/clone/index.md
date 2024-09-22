---
title: "VideoFrame: clone() メソッド"
short-title: clone()
slug: Web/API/VideoFrame/clone
l10n:
  sourceCommit: 99f9cb2379675f3ee891373371d9f69283b2a060
---

{{APIRef("Web Codecs API")}}

**`clone()`** は {{domxref("VideoFrame")}} インターフェイスのメソッドで、原本と同じメディアリソースを参照する新しい `VideoFrame` オブジェクトを作成します。

## 構文

```js-nolint
clone()
```

### 引数

なし。

### 返値

新しく複製された {{domxref("VideoFrame")}} オブジェクトです。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : `VideoFrame` オブジェクトが[移譲された](/ja/docs/Web/API/Web_Workers_API/Transferable_objects)場合に発生します。

## 例

次の例では、`VideoFrame` のコピーを `videoFrame2` として複製します。

```js
let videoFrame2 = VideoFrame.clone();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
