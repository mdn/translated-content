---
title: scroll-padding-block
slug: Web/CSS/scroll-padding-block
tags:
  - CSS
  - CSS スクロールスナップ
  - Reference
  - Web
  - recipe:css-shorthand-property
  - scroll-padding
  - scroll-padding-block
browser-compat: css.properties.scroll-padding-block
translation_of: Web/CSS/scroll-padding-block
---
{{CSSRef}}

`scroll-padding-block` は[一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)で、要素のブロック軸のスクロールパディングを設定します。

{{EmbedInteractiveExample("pages/css/scroll-padding-block.html")}}

scroll-padding 系のプロパティは、スクロールポートの*最適表示領域*のオフセットを定義します。ユーザーのビュー内でものを配置するためのターゲット領域として使用される領域です。これにより、作者は他のコンテンツ (固定位置のツールバーやサイドバーなど) によって隠されているスクロールポートの領域を除外したり、単にターゲット要素とスクロールポートの端との間により多くの余裕を持たせたりすることができます。

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- [`scroll-padding-block-end`](/ja/docs/Web/CSS/scroll-padding-block-end)
- [`scroll-padding-block-start`](/ja/docs/Web/CSS/scroll-padding-block-start)

## 構文

```css
/* キーワード値 */
scroll-padding-block: auto;

/* <length> 値 */
scroll-padding-block: 10px;
scroll-padding-block: 1em .5em;
scroll-padding-block: 10%;

/* グローバル値 */
scroll-padding-block: inherit;
scroll-padding-block: initial;
scroll-padding-block: revert;
scroll-padding-block: unset;
```

### 値

- `<length-percentage>`
  - : スクロールポートの対応する辺からの内側のオフセットで、有効な長さまたはパーセント値です。
- `auto`
  - : オフセットはユーザーエージェントによって特定されます。これは一般に 0px になりますが、ユーザーエージェントはゼロ以外の値がもっと適切である場合を検出して他のことを行うことができます。

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
