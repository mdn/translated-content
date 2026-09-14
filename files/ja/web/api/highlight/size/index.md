---
title: "Highlight: size プロパティ"
short-title: size
slug: Web/API/Highlight/size
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

**`size`** プロパティは、 {{domxref("Highlight")}} オブジェクト内にある {{domxref("Range")}} オブジェクトの数を返します。

## 値

`size` の値は、ハイライトオブジェクトが持っている項目数を表す読み取り専用の整数です。

## 例

### size の使用

```js
const highlight = new Highlight();
highlight.add(range1);
highlight.add(range2);
highlight.add(range3);

console.log(highlight.size); // 3
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("css_custom_highlight_api", "CSS カスタムハイライト API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
