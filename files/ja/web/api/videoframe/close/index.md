---
title: "VideoFrame: close() メソッド"
short-title: close()
slug: Web/API/VideoFrame/close
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("Web Codecs API")}}

**`close()`** は {{domxref("VideoFrame")}} インターフェイスのメソッドで、すべての状態をクリアし、メディアリソースへの参照を解放します。

## 構文

```js-nolint
close()
```

### 引数

なし。

### 返値

未定義。

## 例

次の例では `VideoFrame` オブジェクトが閉じられます。

```js
VideoFrame.close();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
