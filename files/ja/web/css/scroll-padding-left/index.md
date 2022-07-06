---
title: scroll-padding-left
slug: Web/CSS/scroll-padding-left
tags:
  - CSS
  - CSS プロパティ
  - Reference
  - recipe:css-property
  - scroll-padding
  - scroll-padding-left
browser-compat: css.properties.scroll-padding-left
translation_of: Web/CSS/scroll-padding-left
---
{{CSSRef}}

`scroll-padding-left` プロパティは、スクロールポートの*最適表示領域*の左のオフセットを定義します。ユーザーのビュー内でものを配置するためのターゲット領域として使用される領域です。これにより、他のコンテンツ (固定位置のツールバーやサイドバーなど) によって隠されているスクロールポートの領域を除外したり、単にターゲット要素とスクロールポートの端との間により多くの余裕を持たせたりすることができます。

{{EmbedInteractiveExample("pages/css/scroll-padding-left.html")}}

## 構文

```css
/* キーワード値 */
scroll-padding-left: auto;

/* <length> 値 */
scroll-padding-left: 10px;
scroll-padding-left: 1em;
scroll-padding-left: 10%;

/* グローバル値 */
scroll-padding-left: inherit;
scroll-padding-left: initial;
scroll-padding-left: revert;
scroll-padding-left: unset;
```

### 値

- `<length-percentage>`
  - : スクロールポートの左辺からの内側のオフセットで、有効な長さまたはパーセント値です。
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
