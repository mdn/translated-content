---
title: HTMLMediaElement.disableRemotePlayback
slug: Web/API/HTMLMediaElement/disableRemotePlayback
page-type: web-api-instance-property
tags:
- Property
browser-compat: api.HTMLMediaElement.disableRemotePlayback
translation_of: Web/API/HTMLMediaElement/disableRemotePlayback
---
{{APIRef("HTML DOM")}}

**`HTMLMediaElement.disableRemotePlayback`** プロパティは、メディア要素がリモート再生 UI を持つことを許可するかどうかを決定します。

## 値

メディア要素がリモート再生 UI を持つことができるかどうかを示す論理値。（false は「無効ではない」、すなわち「有効」を意味します）

## 例

```js
var obj = document.createElement('audio');
obj.disableRemotePlayback = true;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 定義している {{domxref("HTMLMediaElement")}} インターフェイス
