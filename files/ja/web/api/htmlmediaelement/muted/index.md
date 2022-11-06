---
title: HTMLMediaElement.muted
slug: Web/API/HTMLMediaElement/muted
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.muted`** は、メディア要素がミュートされているかどうかを示します。

## 値

論理値です。 `true` はミュートされていることを意味し、`false` はミュートされていないことを意味します。

## 例

```js
var obj = document.createElement('video');
console.log(obj.muted); // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 定義している {{domxref("HTMLMediaElement")}} インターフェイス
- {{domxref("HTMLMediaElement.defaultMuted")}}
- {{domxref("HTMLMediaElement.volume")}}
