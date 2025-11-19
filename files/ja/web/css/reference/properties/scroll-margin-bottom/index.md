---
title: scroll-margin-bottom
slug: Web/CSS/Reference/Properties/scroll-margin-bottom
original_slug: Web/CSS/scroll-margin-bottom
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

`scroll-margin-bottom` プロパティは、スクロールスナップ領域の下側のマージンを定義し、このボックスを[スナップポート](/ja/docs/Glossary/Scroll_snap#スナップポート)にスナップするために使用されます。スクロールスナップ領域は変換された境界ボックスによって定義され、四角形の囲みボックスを探して（スクロールコンテナーの座標空間における軸に合わせられ）、それから指定された外部距離が追加されます。

{{InteractiveExample("CSS デモ: scroll-margin-bottom")}}

```css interactive-example-choice
scroll-margin-bottom: 0;
```

```css interactive-example-choice
scroll-margin-bottom: 20px;
```

```css interactive-example-choice
scroll-margin-bottom: 2em;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="scroller">
    <div>1</div>
    <div id="example-element">2</div>
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
  scroll-snap-align: end;
}

.scroller > div:nth-child(even) {
  background-color: #fff;
  color: rebeccapurple;
}
```

## 構文

```css
/* <length> 値 */
scroll-margin-bottom: 10px;
scroll-margin-bottom: 1em;

/* グローバル値 */
scroll-margin-bottom: inherit;
scroll-margin-bottom: initial;
scroll-margin-bottom: revert;
scroll-margin-bottom: revert-layer;
scroll-margin-bottom: unset;
```

### 値

- {{CSSXref("&lt;length&gt;")}}
  - : スクロールコンテナーの下側の辺からみた外部の距離です。

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
