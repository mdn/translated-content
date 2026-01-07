---
title: scroll-padding
slug: Web/CSS/Reference/Properties/scroll-padding
original_slug: Web/CSS/scroll-padding
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

**`scroll-padding`** は[一括指定プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)で、要素のすべての辺に一度にスクロールパディングを設定します。 {{cssxref("padding")}} プロパティで要素のパディングを設定するのとよく似ています。

{{InteractiveExample("CSS デモ: scroll-padding")}}

```css interactive-example-choice
scroll-padding: 0;
```

```css interactive-example-choice
scroll-padding: 20px;
```

```css interactive-example-choice
scroll-padding: 2em;
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
scroll-padding: 1em 0.5em 1em 1em;
scroll-padding: 10%;

/* グローバル値 */
scroll-padding: inherit;
scroll-padding: initial;
scroll-padding: revert;
scroll-padding: revert-layer;
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

- [CSS スクロールスナップ](/ja/docs/Web/CSS/Guides/Scroll_snap)
- [Well-controlled scrolling with CSS scroll snap](https://web.dev/articles/css-scroll-snap)
