---
title: "HighlightRegistry: size プロパティ"
short-title: size
slug: Web/API/HighlightRegistry/size
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

**`size`** プロパティは、 {{domxref("HighlightRegistry")}} の中にある {{domxref("Highlight")}} オブジェクトの数を返します。

## 値

レジストリーにある `Highlight` オブジェクトの数を示す読み取り専用の整数。

## 例

### size の使用

```js
const highlight1 = new Highlight();
const highlight2 = new Highlight();

CSS.highlights.set("highlight-1", highlight1);
CSS.highlights.set("highlight-2", highlight2);

console.log(CSS.highlights.size); // 2
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("css_custom_highlight_api", "CSS カスタムハイライト API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
