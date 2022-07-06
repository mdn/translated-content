---
title: scroll-padding-top
slug: Web/CSS/scroll-padding-top
tags:
  - CSS
  - Reference
  - Web
  - recipe:css-property
  - scroll-padding
  - scroll-padding-top
browser-compat: css.properties.scroll-padding-top
translation_of: Web/CSS/scroll-padding-top
---
{{CSSRef}}

`scroll-padding-top` プロパティは、スクロールポートの*最適表示領域*のオフセットを定義します。ユーザーのビュー内でものを配置するためのターゲット領域として使用される領域です。これにより、他のコンテンツ (固定位置のツールバーやサイドバーなど) によって隠されているスクロールポートの領域を除外したり、単にターゲット要素とスクロールポートの端との間により多くの余裕を持たせたりすることができます。

{{EmbedInteractiveExample("pages/css/scroll-padding-top.html")}}

## 構文

```css
/* キーワード値 */
scroll-padding-top: auto;

/* <length> 値 */
scroll-padding-top: 10px;
scroll-padding-top: 1em;
scroll-padding-top: 10%;

/* グローバル値 */
scroll-padding-top: inherit;
scroll-padding-top: initial;
scroll-padding-top: revert;
scroll-padding-top: unset;
```

### 値

- `{{cssxref("&lt;length-percentage&gt;")}}`
  - : スクロールポートの上辺からの内側のオフセットで、有効な長さまたはパーセント値です。
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
