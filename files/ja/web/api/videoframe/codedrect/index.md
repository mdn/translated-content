---
title: "VideoFrame: codedRect プロパティ"
short-title: codedRect
slug: Web/API/VideoFrame/codedRect
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("Web Codecs API")}}

**`codedRect`** は {{domxref("VideoFrame")}} インターフェイスのプロパティで、幅と高さが {{domxref("VideoFrame.codedWidth")}} と {{domxref("VideoFrame.codedHeight")}} に一致する {{domxref("DOMRectReadOnly")}} を返します。

## 値

{{domxref("DOMRectReadOnly")}} です。

## 例

次の例は `codedRect` をコンソールに出力します。

```js
console.log(VideoFrame.codedRect);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
