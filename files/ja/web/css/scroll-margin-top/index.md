---
title: scroll-margin-top
slug: Web/CSS/scroll-margin-top
tags:
  - CSS
  - CSS プロパティ
  - Reference
  - Web
  - recipe:css-property
  - scroll-margin
  - scroll-margin-top
browser-compat: css.properties.scroll-margin-top
translation_of: Web/CSS/scroll-margin-top
---
{{CSSRef}}

`scroll-margin-top` プロパティは、スクロールスナップ領域の上側のマージンを定義し、このボックスをスナップポートにスナップするために使用されます。スクロールスナップ領域は変換された境界ボックスによって定義され、四角形の囲みボックスを探して (スクロールコンテナーの座標空間における軸に合わせられ)、それから指定された外部距離が追加されます。

{{EmbedInteractiveExample("pages/css/scroll-margin-top.html")}}

## 構文

```css
/* <length> 値 */
scroll-margin-top: 10px;
scroll-margin-top: 1em;

/* グローバル値 */
scroll-margin-top: inherit;
scroll-margin-top: initial;
scroll-margin-top: revert;
scroll-margin-top: unset;
```

### 値

- `<length>`
  - : スクロールコンテナーの上側の辺からみた外部の距離です。

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
