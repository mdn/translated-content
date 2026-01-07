---
title: scroll-margin-block
slug: Web/CSS/Reference/Properties/scroll-margin-block
original_slug: Web/CSS/scroll-margin-block
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

`scroll-margin-block` は[一括指定プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)で、ブロック方向のスクロールマージンを設定します。

{{InteractiveExample("CSS デモ: scroll-margin-block")}}

```css interactive-example-choice
scroll-margin-block: 0;
```

```css interactive-example-choice
scroll-margin-block: 20px;
```

```css interactive-example-choice
scroll-margin-block: 2em;
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
  scroll-snap-align: start;
}

.scroller > div:nth-child(even) {
  background-color: #fff;
  color: rebeccapurple;
}
```

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- [`scroll-margin-block-end`](/ja/docs/Web/CSS/Reference/Properties/scroll-margin-block-end)
- [`scroll-margin-block-start`](/ja/docs/Web/CSS/Reference/Properties/scroll-margin-block-start)

## 構文

```css
/* <length> 値 */
scroll-margin-block: 10px;
scroll-margin-block: 1em 0.5em;

/* グローバル値 */
scroll-margin-block: inherit;
scroll-margin-block: initial;
scroll-margin-block: revert;
scroll-margin-block: revert-layer;
scroll-margin-block: unset;
```

### 値

- {{CSSXref("&lt;length&gt;")}}
  - : スクロールコンテナーの対応する辺からの距離です。

## 解説

scroll-margin 系のプロパティは、このボックスを[スナップポート](/ja/docs/Glossary/Scroll_snap#スナップポート)にスナップするために使用されます。スクロールスナップ領域は変換された境界ボックスによって定義され、四角形の囲みボックスを探して（スクロールコンテナーの座標空間における軸に合わせられ）、それから指定された外部距離が追加されます。

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
