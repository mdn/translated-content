---
title: scroll-padding-inline
slug: Web/CSS/scroll-padding-inline
---

{{CSSRef}}

`scroll-padding-inline` プロパティは、インライン方向の scroll-padding の個別指定を設定する一括指定プロパティです。

{{EmbedInteractiveExample("pages/css/scroll-padding-inline.html")}}

scroll-padding 系のプロパティは、スクロールポートの*最適表示領域*のオフセットを定義します。ユーザーのビュー内でものを配置するためのターゲット領域として使用される領域です。これにより、他のコンテンツ (固定位置のツールバーやサイドバーなど) によって隠されているスクロールポートの領域を除外したり、単にターゲット要素とスクロールポートの端との間により多くの余裕を持たせたりすることができます。

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- [`scroll-padding-inline-end`](/ja/docs/Web/CSS/scroll-padding-inline-end)
- [`scroll-padding-inline-start`](/ja/docs/Web/CSS/scroll-padding-inline-start)

## 構文

```css
/* キーワード値 */
scroll-padding-inline: auto;

/* <length> 値 */
scroll-padding-inline: 10px;
scroll-padding-inline: 1em 0.5em;
scroll-padding-inline: 10%;

/* グローバル値 */
scroll-padding-inline: inherit;
scroll-padding-inline: initial;
scroll-padding-inline: revert;
scroll-padding-inline: unset;
```

### 値

- `<length-percentage>`
  - : スクロールポートの対応する辺からのオフセットで、有効な長さまたはパーセント値です。
- `auto`
  - : オフセットはユーザーエージェントによって特定されます。これは一般に 0px になりますが、ゼロ以外の値がもっと適切である場合を検出して他のことを行うことができます。

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
