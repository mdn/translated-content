---
title: scroll-padding
slug: Web/CSS/scroll-padding
tags:
  - CSS
  - CSS プロパティ
  - recipe:css-shorthand-property
  - scroll-snap
browser-compat: css.properties.scroll-padding
translation_of: Web/CSS/scroll-padding
---
{{CSSRef}}

**`scroll-padding`** は[一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)で、要素のすべての辺にに一度にスクロールパディングを設定します。 {{cssxref("padding")}} プロパティで要素のパディングを設定するのとよく似ています。

{{EmbedInteractiveExample("pages/css/scroll-padding.html")}}

`scroll-padding-*` プロパティは、スクロールポートの*最適な表示領域*のオフセットを定義します。これにより、スクロールポートの中で他のコンテンツ (固定配置されたツールバーやサイドバーなど) に隠れてしまう領域を除外したり、ターゲット要素とスクロールポートの縁の間に余裕を持たせたりすることができます。

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- {{CSSXref("scroll-padding-bottom")}}
- {{CSSXref("scroll-padding-left")}}
- {{CSSXref("scroll-padding-right")}}
- {{CSSXref("scroll-padding-top")}}

## 構文

```css
/* キーワード値 */
scroll-padding: auto;

/* <length> 値 */
scroll-padding: 10px;
scroll-padding: 1em .5em 1em 1em;
scroll-padding: 10%;

/* グローバル値 */
scroll-padding: inherit;
scroll-padding: initial;
scroll-padding: revert;
scroll-padding: unset;
```

### 値

- {{cssxref("&lt;length-percentage&gt;")}}
  - : スクロールポートの対応する縁からの内側へのオフセットを、有効な {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} として指定します。
- `auto`
  - : オフセットがユーザーエージェントによって決定されます。これは一般的には `0px` になりますが、ゼロ以外の値がより適切であれば、ユーザエージェントは自由に検出して他の値を取ることができます。

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
