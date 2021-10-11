---
title: scroll-padding-block-start
slug: Web/CSS/scroll-padding-block-start
tags:
  - CSS
  - CSS プロパティ
  - Reference
  - Web
  - recipe:css-property
  - scroll-padding-block
  - scroll-padding-block-start
browser-compat: css.properties.scroll-padding-block-start
translation_of: Web/CSS/scroll-padding-block-start
---
{{CSSRef}}

`scroll-padding-block-start` プロパティは、スクロールポートの*最適表示領域*のブロック方向における先頭側のオフセットを定義します。ユーザーのビュー内でものを配置するためのターゲット領域として使用される領域です。これにより、他のコンテンツ (固定位置のツールバーやサイドバーなど) によって隠されているスクロールポートの領域を除外したり、単にターゲット要素とスクロールポートの端との間により多くの余裕を持たせたりすることができます。

{{EmbedInteractiveExample("pages/css/scroll-padding-block-start.html")}}

## 構文

```css
/* キーワード値 */
scroll-padding-block-start: auto;

/* <length> 値 */
scroll-padding-block-start: 10px;
scroll-padding-block-start: 1em;
scroll-padding-block-start: 10%;

/* グローバル値 */
scroll-padding-block-start: inherit;
scroll-padding-block-start: initial;
scroll-padding-block-start: unset;
```

### 値

- `<length-percentage>`
  - : スクロールポートのブロック方向の先頭側からの内側のオフセットで、有効な長さまたはパーセント値です。
- `auto`
  - : オフセットはユーザーエージェントが決定します。これは一般に 0px になりますが、ゼロ以外の値がもっと適切である場合をユーザーエージェントが検出して、他の値を採用することもできます。

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
