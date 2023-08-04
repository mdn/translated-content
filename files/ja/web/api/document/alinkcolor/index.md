---
title: Document.alinkColor
slug: Web/API/Document/alinkColor
---

{{APIRef("DOM")}}{{Deprecated_header}}

文書本文のアクティブなリンクの色を取得または設定します。リンクは `mousedown` と `mouseup` イベントの間にアクティブになります。

## 構文

```
var color = document.alinkColor;
document.alinkColor = color;
```

_color_ は文字列で、色の名前 (`blue`, `darkblue`, など) または色の 16 進値 (`#0000FF` など) が入ります。

## メモ

Mozilla Firefox では、このプロパティの既定値は赤 (16 進で `#ee0000`) です。

`document.alinkColor` は [DOM Level 2 HTML で非推奨](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268)となっています。代替方法の一つは CSS セレクターの {{Cssxref(":active")}} です。

他の代替手段として `document.body.alink` がありますが、上記の CSS による代替手段が設置されたため [HTML 4.01 で非推奨](http://www.w3.org/TR/html401/struct/global.html#adef-text)となっています。

[Gecko](/ja/docs/Mozilla/Gecko) は `alinkColor`/`:active` および {{Cssxref(":focus")}} の両方に対応しています。 Internet Explorer 6 および 7 は [HTML アンカー (\<a>) リンク](/ja/docs/Web/HTML/Element/a)には `alinkColor`/`:active` のみに対応しており、 `:focus` は Gecko と同様に動作します。 IE は `:focus` には対応していません。

## ブラウザーの互換性

{{Compat}}
