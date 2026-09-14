---
title: "HTMLMediaElement: disableRemotePlayback プロパティ"
short-title: disableRemotePlayback
slug: Web/API/HTMLMediaElement/disableRemotePlayback
l10n:
  sourceCommit: 0b6bfb8a3a03de5956dd1cec4b47e5e37078149d
---

{{APIRef("Remote Playback API")}}

**`disableRemotePlayback`** は {{domxref("HTMLMediaElement")}} インターフェイスのプロパティで、このメディア要素がリモート再生 UI を持つことを許可するかどうかを決定します。

## 値

論理値で、このメディア要素がリモート再生 UI を持つことができるかどうかを示します。（`false` は「無効ではない」、すなわち「有効」を意味します）

## 例

```js
const obj = document.createElement("audio");
obj.disableRemotePlayback = true;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`<audio>` 要素の `disableremoteplayback` 属性](/ja/docs/Web/HTML/Reference/Elements/audio#disableremoteplayback)
- [`<video>` 要素の `disableremoteplayback` 属性](/ja/docs/Web/HTML/Reference/Elements/video#disableremoteplayback)
