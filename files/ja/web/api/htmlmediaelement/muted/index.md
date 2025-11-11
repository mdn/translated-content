---
title: "HTMLMediaElement: muted プロパティ"
short-title: muted
slug: Web/API/HTMLMediaElement/muted
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.muted`** プロパティは、メディア要素がミュートされているかどうかを示します。

## 値

論理値です。 `true` はミュートされていることを意味し、`false` はミュートされていないことを意味します。

## 例

```js
const obj = document.createElement("video");
console.log(obj.muted); // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLMediaElement")}}: `HTMLMediaElement.muted` プロパティを定義しているインターフェイス
- {{domxref("HTMLMediaElement.defaultMuted")}}
- {{domxref("HTMLMediaElement.volume")}}
