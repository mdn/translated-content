---
title: scroll-snap-align
slug: Web/CSS/Reference/Properties/scroll-snap-align
l10n:
  sourceCommit: a14f56b06eabf3b182ae4bc0e02634a8ccc01f20
---

`scroll-snap-align` プロパティは、ボックスのスナップ位置を、そのスナップコンテナーのスナップポート（つまり{{glossary("alignment container", "配置コンテナー")}}）の中における[スナップ領域](/ja/docs/Glossary/Scroll_snap#スナップ領域)（つまり {{glossary("alignment subject", "配置対象物")}}）の配置として指定します。

{{InteractiveExample("CSS デモ: scroll-snap-align")}}

```css interactive-example-choice
scroll-snap-align: start;
```

```css interactive-example-choice
scroll-snap-align: end;
```

```css interactive-example-choice
scroll-snap-align: center;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div id="example-parent">
    <div>1</div>
    <div id="example-element">2</div>
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

#example-parent {
  text-align: left;
  width: 250px;
  height: 250px;
  overflow-x: scroll;
  display: flex;
  box-sizing: border-box;
  border: 1px solid black;
  scroll-snap-type: x mandatory;
}

#example-parent > div {
  flex: 0 0 66%;
  width: 250px;
  background-color: rebeccapurple;
  color: white;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#example-parent > div:nth-child(even) {
  background-color: white;
  color: rebeccapurple;
}
```

## 構文

```css
/* 単一のキーワード値 */
scroll-snap-align: none;
scroll-snap-align: center;
scroll-snap-align: start;
scroll-snap-align: end;

/* 2 つのキーワード値 */
scroll-snap-align: start end;
scroll-snap-align: end center;
scroll-snap-align: center start;

/* グローバル値 */
scroll-snap-align: inherit;
scroll-snap-align: initial;
scroll-snap-align: revert;
scroll-snap-align: revert-layer;
scroll-snap-align: unset;
```

### 値

`scroll-snap-align` プロパティには、1 つまたは 2 つの値が指定できます。 1 つの値が設定されている場合、その値はブロック軸とインライン軸の両方に適用されます。 2 つの値が設定されている場合、 1 つ目の値はブロック軸を制御し、 2 つ目の値はインライン軸を制御します。

- `none`
  - : このボックスでは、その軸のスナップ位置を定義しません。
- `start`
  - : このスクロールコンテナーの[スナップポート](/ja/docs/Glossary/Scroll_snap#スナップポート)の中で、このボックスのスクロール[スナップ領域](/ja/docs/Glossary/Scroll_snap#スナップ領域)の先頭位置がこの軸のスナップ位置になります。
- `end`
  - : このスクロールコンテナーのスナップポートの中で、このボックスのスクロールスナップ領域の末尾位置がこの軸のスナップ位置になります。
- `center`
  - : このスクロールコンテナーのスナップポートの中で、このボックスのスクロールスナップ領域の中央位置がこの軸のスナップ位置になります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("scroll-snap-stop")}}
- {{cssxref("scroll-initial-target")}}
- [CSS スクロールスナップ](/ja/docs/Web/CSS/Guides/Scroll_snap)モジュール
- [Well-controlled scrolling with CSS scroll snap](https://web.dev/articles/css-scroll-snap) - web.dev (2018)
