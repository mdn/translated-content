---
title: scroll-padding-inline-end
slug: Web/CSS/scroll-padding-inline-end
tags:
  - CSS
  - CSS プロパティ
  - Web
  - recipe:css-property
  - scroll-padding-inline
  - scroll-padding-inline-end
browser-compat: css.properties.scroll-padding-inline-end
translation_of: Web/CSS/scroll-padding-inline-end
---
{{CSSRef}}

`scroll-padding-inline-end` プロパティは、スクロールポートの*最適表示領域*のインライン方向における末尾側のオフセットを定義します。ユーザーのビュー内でものを配置するためのターゲット領域として使用される領域です。これにより、他のコンテンツ (固定位置のツールバーやサイドバーなど) によって隠されているスクロールポートの領域を除外したり、単にターゲット要素とスクロールポートの端との間により多くの余裕を持たせたりすることができます。

{{EmbedInteractiveExample("pages/css/scroll-padding-inline-end.html")}}

## 構文

```css
/* キーワード値 */
scroll-padding-inline-end: auto;

/* <length> 値 */
scroll-padding-inline-end: 10px;
scroll-padding-inline-end: 1em;
scroll-padding-inline-end: 10%;

/* グローバル値 */
scroll-padding-inline-end: inherit;
scroll-padding-inline-end: initial;
scroll-padding-inline-end: revert;
scroll-padding-inline-end: unset;
```

### 値

- `<length-percentage>`
  - : スクロールポートのインライン方向の末尾側からの内側のオフセットで、有効な長さまたはパーセント値です。
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
