---
title: scroll-margin-block
slug: Web/CSS/scroll-margin-block
tags:
  - CSS
  - recipe:css-shorthand-property
  - scroll-margin-block
browser-compat: css.properties.scroll-margin-block
---
{{CSSRef}}

`scroll-margin-block` は[一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)で、ブロック方向のスクロールマージンを設定します。

{{EmbedInteractiveExample("pages/css/scroll-margin-block.html")}}

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- [`scroll-margin-block-end`](/ja/docs/Web/CSS/scroll-margin-block-end)
- [`scroll-margin-block-start`](/ja/docs/Web/CSS/scroll-margin-block-start)

## 構文

```css
/* <length> 値 */
scroll-margin-block: 10px;
scroll-margin-block: 1em .5em ;

/* Global values */
scroll-margin-block: inherit;
scroll-margin-block: initial;
scroll-margin-block: revert;
scroll-margin-block: unset;
```

### 値

- `<length>`
  - : スクロールコンテナーの対応する辺からの距離です。

## 解説

`scroll-margin` の値はこのボックスをスナップポートに割り当てるために使用されるスクロールスナップ領域の定義の張り出し部分を表します。スクロールスナップ領域は、変換された境界ボックスを取り、その矩形の境界ボックス (スクロールコンテナーの座標空間内で軸方向に配置) を割り当てて、指定された張り出し部分を追加することによって決定されます。

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
