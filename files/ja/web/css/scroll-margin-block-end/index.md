---
title: scroll-margin-block-end
slug: Web/CSS/scroll-margin-block-end
tags:
  - CSS
  - recipe:css-property
  - scroll-margin-block-end
browser-compat: css.properties.scroll-margin-block-end
translation_of: Web/CSS/scroll-margin-block-end
---
{{CSSRef}}

`scroll-margin-block-end` プロパティは、スクロールスナップ領域のインライン方向における末尾側のマージンを定義し、このボックスをスナップポートにスナップするために使用されます。スクロールスナップ領域は変換された境界ボックスによって定義され、四角形の囲みボックスを探して (スクロールコンテナーの座標空間における軸に合わせられ)、それから指定された外部距離が追加されます。

{{EmbedInteractiveExample("pages/css/scroll-margin-block-end.html")}}

## 構文

```css
/* <length> 値 */
scroll-margin-block-end: 10px;
scroll-margin-block-end: 1em;

/* グローバル値 */
scroll-margin-block-end: inherit;
scroll-margin-block-end: initial;
scroll-margin-block-end: revert;
scroll-margin-block-end: unset;
```

### 値

- `<length>`
  - : スクロールコンテナーのブロック方向における末尾側の辺からみた外部の距離です。

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
