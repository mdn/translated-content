---
title: "VideoFrame: colorSpace プロパティ"
short-title: colorSpace
slug: Web/API/VideoFrame/colorSpace
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("Web Codecs API")}}

**`colorSpace`** は {{domxref("VideoFrame")}} インターフェイスのプロパティで、動画のいろっ空間を表す {{domxref("VideoColorSpace")}} オブジェクトを返します。

## 値

{{domxref("VideoColorSpace")}} オブジェクトです。

## 例

次の例は `colorSpace` をコンソールに出力します。

```js
const cnv = document.createElement("canvas");
// キャンバスに何か描く
// ...
const videoFrame = new VideoFrame(cnv, { timestamp: 0 });
console.log(videoFrame.colorSpace);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
