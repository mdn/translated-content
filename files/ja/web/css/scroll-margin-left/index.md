---
title: scroll-margin-left
slug: Web/CSS/scroll-margin-left
tags:
  - CSS
  - CSS プロパティ
  - Reference
  - Scroll margin left
  - Web
  - recipe:css-property
  - scroll-margin
  - scroll-margin-left
browser-compat: css.properties.scroll-margin-left
translation_of: Web/CSS/scroll-margin-left
---
{{CSSRef}}

`scroll-margin-left` プロパティは、スクロールスナップ領域の左側のマージンを定義し、このボックスをスナップポートにスナップするために使用されます。スクロールスナップ領域は変換された境界ボックスによって定義され、四角形の囲みボックスを探して (スクロールコンテナーの座標空間における軸に合わせられ)、それから指定された外部距離が追加されます。

{{EmbedInteractiveExample("pages/css/scroll-margin-left.html")}}

## 構文

```css
/* <length> 値 */
scroll-margin-left: 10px;
scroll-margin-left: 1em;

/* グローバル値 */
scroll-margin-left: inherit;
scroll-margin-left: initial;
scroll-margin-left: revert;
scroll-margin-left: unset;
```

### 値

- `<length>`
  - : スクロールコンテナーの左側の辺からみた外部の距離です。

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
