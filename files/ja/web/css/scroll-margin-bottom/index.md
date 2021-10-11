---
title: scroll-margin-bottom
slug: Web/CSS/scroll-margin-bottom
tags:
  - CSS
  - CSS プロパティ
  - Reference
  - Scroll margin bottom
  - Web
  - recipe:css-property
  - scroll-margin
  - scroll-margin-bottom
browser-compat: css.properties.scroll-margin-bottom
translation_of: Web/CSS/scroll-margin-bottom
---
{{CSSRef}}

`scroll-margin-bottom` プロパティは、スクロールスナップ領域の下側のマージンを定義し、このボックスをスナップポートにスナップするために使用されます。スクロールスナップ領域は変換された境界ボックスによって定義され、四角形の囲みボックスを探して (スクロールコンテナーの座標空間における軸に合わせられ)、それから指定された外部距離が追加されます。

{{EmbedInteractiveExample("pages/css/scroll-margin-bottom.html")}}

## 構文

```css
/* <length> 値 */
scroll-margin-bottom: 10px;
scroll-margin-bottom: 1em;

/* グローバル値 */
scroll-margin-bottom: inherit;
scroll-margin-bottom: initial;
scroll-margin-bottom: revert;
scroll-margin-bottom: unset;
```

### 値

- `<length>`
  - : スクロールコンテナーの下側の辺からみた外部の距離です。

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
