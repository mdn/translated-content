---
title: HTMLMediaElement.muted
slug: Web/API/HTMLMediaElement/muted
l10n:
  sourceCommit: 5e10a2aab4ec9ecbcf8cf79f589f9b7ece88ef60
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.muted`** プロパティは、メディア要素がミュートされているかどうかを示します。

## 値

論理値です。 `true` はミュートされていることを意味し、`false` はミュートされていないことを意味します。

## 例

```js
const obj = document.createElement('video');
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
