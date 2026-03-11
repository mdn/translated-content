---
title: scroll-padding-inline
slug: Web/CSS/Reference/Properties/scroll-padding-inline
l10n:
  sourceCommit: a14f56b06eabf3b182ae4bc0e02634a8ccc01f20
---

`scroll-padding-inline` は[一括指定プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)で、要素のインライン方向のスクロールパディングを設定します。

{{InteractiveExample("CSS デモ: scroll-padding-inline")}}

```css interactive-example-choice
scroll-padding-inline: 0;
```

```css interactive-example-choice
scroll-padding-inline: 20px;
```

```css interactive-example-choice
scroll-padding-inline: 2em;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="scroller" id="example-element">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
  <div class="info">スクロール »</div>
</section>
```

```css interactive-example
.default-example {
  flex-wrap: wrap;
}

.default-example .info {
  width: 100%;
  padding: 0.5em 0;
  font-size: 90%;
}

.scroller {
  text-align: left;
  width: 250px;
  height: 250px;
  overflow-x: scroll;
  display: flex;
  box-sizing: border-box;
  border: 1px solid black;
  scroll-snap-type: x mandatory;
}

.scroller > div {
  flex: 0 0 250px;
  width: 250px;
  background-color: rebeccapurple;
  color: white;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
}

.scroller > div:nth-child(even) {
  background-color: white;
  color: rebeccapurple;
}
```

scroll-padding 系のプロパティは、スクロールポートの*最適表示領域*のオフセットを定義します。ユーザーのビュー内でものを配置するためのターゲット領域として使用される領域です。これにより、他のコンテンツ（固定位置のツールバーやサイドバーなど）によって隠されているスクロールポートの領域を除外したり、単にターゲット要素とスクロールポートの端との間により多くの余裕を持たせたりすることができます。

## 構成要素のプロパティ

このプロパティは次の CSS プロパティの一括指定です。

- {{cssxref("scroll-padding-inline-end")}}
- {{cssxref("scroll-padding-inline-start")}}

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
scroll-padding-inline: revert-layer;
scroll-padding-inline: unset;
```

### 値

- `<length-percentage>`
  - : スクロールポートの対応する辺からのオフセットで、有効な長さまたはパーセント値です。
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

- [CSS スクロールスナップ](/ja/docs/Web/CSS/Guides/Scroll_snap)モジュール
- [Well-controlled scrolling with CSS scroll snap](https://web.dev/articles/css-scroll-snap) - web.dev (2018)
