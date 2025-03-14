---
title: scroll-padding-block
slug: Web/CSS/scroll-padding-block
---

{{CSSRef}}

`scroll-padding-block` は[一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)で、要素のブロック軸のスクロールパディングを設定します。

{{InteractiveExample("CSS Demo: scroll-padding-block")}}

```css interactive-example-choice
scroll-padding-block: 0;
```

```css interactive-example-choice
scroll-padding-block: 20px;
```

```css interactive-example-choice
scroll-padding-block: 2em;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="scroller" id="example-element">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
  <div class="info">Scroll »</div>
</section>
```

```css interactive-example
.default-example .info {
  inline-size: 100%;
  padding: 0.5em 0;
  font-size: 90%;
  writing-mode: vertical-rl;
}

.scroller {
  text-align: left;
  height: 250px;
  width: 270px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid black;
  scroll-snap-type: y mandatory;
}

.scroller > div {
  flex: 0 0 250px;
  background-color: rebeccapurple;
  color: #fff;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
}

.scroller > div:nth-child(even) {
  background-color: #fff;
  color: rebeccapurple;
}
```

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
scroll-padding-block: 1em 0.5em;
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

- [CSS スクロールスナップ](/ja/docs/Web/CSS/CSS_scroll_snap)
- [Well-Controlled Scrolling with CSS Scroll Snap](https://web.dev/css-scroll-snap/)
