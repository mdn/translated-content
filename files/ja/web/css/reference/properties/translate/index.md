---
title: translate
slug: Web/CSS/Reference/Properties/translate
original_slug: Web/CSS/translate
l10n:
  sourceCommit: b82ff59aab7883b7bb2222cf9f9f9b6eed818e08
---

**`translate`** は [CSS](/ja/docs/Web/CSS) のプロパティで、平行移動の座標変換を独自に、 {{CSSxRef("transform")}} プロパティから独立して指定することができます。これは一般的なユーザーインターフェイスの用途に適しており、 `transform` の値で指定する変換関数を正確に思い出す必要がなくなります。

{{InteractiveExample("CSS デモ: translate")}}

```css interactive-example-choice
translate: none;
```

```css interactive-example-choice
translate: 40px;
```

```css interactive-example-choice
translate: 50% -40%;
```

```css interactive-example-choice
translate: 20px 4rem;
```

```css interactive-example-choice
translate: 20px 4rem 150px;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <div class="face front">1</div>
    <div class="face back">2</div>
    <div class="face right">3</div>
    <div class="face left">4</div>
    <div class="face top">5</div>
    <div class="face bottom">6</div>
  </div>
</section>
```

```css interactive-example
#default-example {
  background: linear-gradient(skyblue, khaki);
  perspective: 800px;
  perspective-origin: 150% 150%;
}

#example-element {
  width: 100px;
  height: 100px;
  perspective: 550px;
  transform-style: preserve-3d;
}

.face {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: inherit;
  font-size: 60px;
  color: white;
}

.front {
  background: rgba(90, 90, 90, 0.7);
  transform: translateZ(50px);
}

.back {
  background: rgba(0, 210, 0, 0.7);
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgba(210, 0, 0, 0.7);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgba(0, 0, 210, 0.7);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgba(210, 210, 0, 0.7);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgba(210, 0, 210, 0.7);
  transform: rotateX(-90deg) translateZ(50px);
}
```

## 構文

```css
/* キーワード値 */
translate: none;

/* 単一の値 */
translate: 100px;
translate: 50%;

/* 二つの値 */
translate: 100px 200px;
translate: 50% 105px;

/* 三つの値 */
translate: 50% 105px 5rem;

/* グローバル値 */
translate: inherit;
translate: initial;
translate: revert;
translate: unset;
```

### 値

- 単一の {{cssxref("&lt;length-percentage&gt;")}} 値
  - : 単一の {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} 値で、 X 軸方向の平行移動を指定します。 `translate()` （2D の平行移動）関数に単一の値を指定したものと同等です。
- 2 つの {{cssxref("&lt;length-percentage&gt;")}} 値
  - : 2 つの {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} 値で、 2D の平行移動における X および Y 軸方向の移動量を (それぞれ) 指定します。 `translate()` （2D の平行移動）関数に 2 つの値を指定したものと同等です。
- 3 つの値
  - : 2 つの {{cssxref("&lt;length-percentage&gt;")}} 値と 1 つの {{cssxref("&lt;length&gt;")}} 値で、 3D の平行移動における X, Y, Z 軸の移動量を（それぞれ）指定します。 `translate3d()` （3D の平行移動）関数と同等です。
- `none`
  - : 平行移動が適用されないことを指定します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

## 例

### ホバー時に要素を移動

この例では、 `translate` プロパティを使用して要素を 3 軸で移動させる方法を示します。
1 つ目のボックスは X 軸に沿って移動され、 2 つ目のボックスは X 軸と Y 軸に沿って移動されます。
3 つ目のボックスは X 軸、Y 軸、Z 軸に沿って移動し、親要素に {{cssxref('perspective')}} が追加されているため、閲覧者に向かって移動しているように見えます。

#### HTML

```html
<div class="wrapper">
  <div id="box1">translate X</div>
  <div id="box2">translate X,Y</div>
  <div id="box3">translate X,Y,Z</div>
</div>
```

#### CSS

```css
.wrapper {
  perspective: 100px;
  display: inline-flex;
  gap: 1em;
}
.wrapper > div {
  width: 7em;
  line-height: 7em;
  text-align: center;
  transition: 0.5s ease-in-out;
  border: 3px dotted;
}
#box1:hover {
  translate: 20px;
}

#box2:hover {
  translate: 20px 20px;
}

#box3:hover {
  translate: 5px 5px 30px;
}
```

#### 結果

{{EmbedLiveSample("Translating_an_element_on_hover", "100%", 175)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref('scale')}}
- {{cssxref('rotate')}}
- {{cssxref('transform')}}

メモ: `skew` には独立した `transform` の値はありません
