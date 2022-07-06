---
title: scroll-padding-block-end
slug: Web/CSS/scroll-padding-block-end
tags:
  - CSS
  - CSS プロパティ
  - Reference
  - Web
  - recipe:css-property
  - scroll-padding-block
  - scroll-padding-block-end
browser-compat: css.properties.scroll-padding-block-end
translation_of: Web/CSS/scroll-padding-block-end
---
{{CSSRef}}

`scroll-padding-block-end` プロパティは、スクロールポートの*最適表示領域*のブロック方向における末尾側のオフセットを定義します。ユーザーのビュー内でものを配置するためのターゲット領域として使用される領域です。これにより、他のコンテンツ (固定位置のツールバーやサイドバーなど) によって隠されているスクロールポートの領域を除外したり、単にターゲット要素とスクロールポートの端との間により多くの余裕を持たせたりすることができます。

{{EmbedInteractiveExample("pages/css/scroll-padding-block-end.html")}}

## 構文

```css
/* キーワード値 */
scroll-padding-block-end: auto;

/* <length> 値 */
scroll-padding-block-end: 10px;
scroll-padding-block-end: 1em;
scroll-padding-block-end: 10%;

/* グローバル値 */
scroll-padding-block-end: inherit;
scroll-padding-block-end: initial;
scroll-padding-block-end: revert;
scroll-padding-block-end: unset;
```

### 値

- `<length-percentage>`
  - : スクロールポートのブロック方向の末尾側からの内側のオフセットで、有効な長さまたはパーセント値です。
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
