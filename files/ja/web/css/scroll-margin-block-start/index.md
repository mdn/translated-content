---
title: scroll-margin-block-start
slug: Web/CSS/scroll-margin-block-start
tags:
  - 初心者
  - CSS
  - Example
  - recipe:css-property
  - scroll-margin-block-start
browser-compat: css.properties.scroll-margin-block-start
translation_of: Web/CSS/scroll-margin-block-start
---
{{CSSRef}}

`scroll-margin-block-start` プロパティは、スクロールスナップ領域のインライン方向における先頭側のマージンを定義し、このボックスをスナップポートにスナップするために使用されます。スクロールスナップ領域は変換された境界ボックスによって定義され、四角形の囲みボックスを探して (スクロールコンテナーの座標空間における軸に合わせられ)、それから指定された外部距離が追加されます。

{{EmbedInteractiveExample("pages/css/scroll-margin-block-start.html")}}

## 構文

```css
/* <length> 値 */
scroll-margin-block-start: 10px;
scroll-margin-block-start: 1em;

/* グローバル値 */
scroll-margin-block-start: inherit;
scroll-margin-block-start: initial;
scroll-margin-block-start: revert;
scroll-margin-block-start: unset;
```

### 値

- `<length>`
  - : スクロールコンテナーのブロック方向における先頭側の辺からみた外部の距離です。

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
