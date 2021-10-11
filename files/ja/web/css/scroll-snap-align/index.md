---
title: scroll-snap-align
slug: Web/CSS/scroll-snap-align
tags:
  - 上級者
  - CSS
  - Example
  - NeedsLiveSample
  - Reference
  - recipe:css-property
browser-compat: css.properties.scroll-snap-align
translation_of: Web/CSS/scroll-snap-align
---
{{CSSRef}}

`scroll-snap-align` プロパティは、ボックスのスナップ位置を、そのスナップコンテナーの (配置コンテナーとしての) スナップポート内における (配置主体としての) スナップ領域の配置として指定します。2つの値は、それぞれブロック軸とインライン軸内のスナップ位置合わせを指定します。値が1つだけ指定された場合、2番目の値は同じ値を既定値とします。

## 構文

```css
/* キーワード値 */
scroll-snap-align: none;
scroll-snap-align: start end; /* 2 つの値を指定すると、1 番目がブロック、2 番目がインラインとなる */
scroll-snap-align: center;

/* グローバル値 */
scroll-snap-align: inherit;
scroll-snap-align: initial;
scroll-snap-align: revert;
scroll-snap-align: unset;
```

### 値

- `none`
  - : このボックスでは、その軸のスナップ位置を定義しません。
- `start`
  - : このスクロールコンテナーのスナップポートの中で、このボックスのスクロールスナップ領域の先頭位置がこの軸のスナップ位置になります。
- `end`
  - : このスクロールコンテナーのスナップポートの中で、このボックスのスクロールスナップ領域の末尾位置がこの軸のスナップ位置になります。
- `center`
  - : このスクロールコンテナーのスナップポートの中で、このボックスのスクロールスナップ領域の中央位置がこの軸のスナップ位置になります。

Safari は現在のところ、2 つの値の構文を誤った順序で実装しており、最初の値がインラインで次の値がブロックになっています。[bug #191865](https://bugs.webkit.org/show_bug.cgi?id=191865) を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS スクロールスナップ](/ja/docs/Web/CSS/CSS_Scroll_Snap)
- [Well-Controlled Scrolling with CSS Scroll Snap](https://web.dev/css-scroll-snap/)
