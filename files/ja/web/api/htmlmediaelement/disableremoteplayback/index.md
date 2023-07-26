---
title: HTMLMediaElement.disableRemotePlayback
slug: Web/API/HTMLMediaElement/disableRemotePlayback
l10n:
  sourceCommit: 277e5969c63b97cfb55ab4a0e612e8040810f49b
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.disableRemotePlayback`** プロパティは、メディア要素がリモート再生 UI を持つことを許可するかどうかを決定します。

## 値

メディア要素がリモート再生 UI を持つことができるかどうかを示す論理値。（false は「無効ではない」、すなわち「有効」を意味します）

## 例

```js
const obj = document.createElement('audio');
obj.disableRemotePlayback = true;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 定義している {{domxref("HTMLMediaElement")}} インターフェイス
