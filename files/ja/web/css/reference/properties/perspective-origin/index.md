---
title: perspective-origin
slug: Web/CSS/Reference/Properties/perspective-origin
original_slug: Web/CSS/perspective-origin
l10n:
  sourceCommit: fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

**`perspective-origin`** は [CSS](/ja/docs/Web/CSS) のプロパティで、閲覧者の視点の位置を決めます。これは {{cssxref("perspective")}} プロパティによって*消点*として使われます。

{{InteractiveExample("CSS デモ: perspective-origin")}}

```css interactive-example-choice
perspective-origin: center;
```

```css interactive-example-choice
perspective-origin: top;
```

```css interactive-example-choice
perspective-origin: bottom right;
```

```css interactive-example-choice
perspective-origin: -170%;
```

```css interactive-example-choice
perspective-origin: 500% 200%;
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
  perspective: 550px;
}

#example-element {
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
  perspective: 250px;
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

**`perspective-origin`** および {{cssxref('perspective')}} の各プロパティは、三次元空間で座標変換される子の親に設定するものであり、座標変換される要素に設定される [`perspective()`](/ja/docs/Web/CSS/Reference/Values/transform-function/perspective) 変換関数とは異なります。

## 構文

```css
/* 1 値構文 */
perspective-origin: x-position;

/* 2 値構文 */
perspective-origin: x-position y-position;

/* x-position と y-position がキーワードである場合は、
   以下の構文も有効 */
perspective-origin: y-position x-position;

/* グローバル値 */
perspective-origin: inherit;
perspective-origin: initial;
perspective-origin: revert;
perspective-origin: revert-layer;
perspective-origin: unset;
```

### 値

- _x-position_
  - : *消失点*の横座標上の位置を示します。次のいずれかの値です。
    - {{cssxref("&lt;length-percentage&gt;")}} は、絶対的な length 値、または要素の幅に対する相対値で位置を示します。負の数も使えます。
    - `left` キーワードは、length 値 `0` を示すショートカットです。
    - `center` キーワードは、パーセント値 `50%` を示すショートカットです。
    - `right` キーワードは、パーセント値 `100%` を示すショートカットです。

- _y-position_
  - : *消失点*の縦座標上の位置を示します。次のいずれかの値です。
    - {{cssxref("&lt;length-percentage&gt;")}} は、絶対的な length 値、または要素の高さに対する相対値で位置を示します。負の数も使えます。
    - `top` キーワードは、 length 値 `0` を示すショートカットです。
    - `center` キーワードは、パーセント値 `50%` を示すショートカットです。
    - `bottom` キーワードは、パーセント値 `100%` を示すキーワードです。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 視点の原点の変更

`perspective-origin` の変更方法を示す例は、 [CSS 座標変換の使用 > 視点の変更](/ja/docs/Web/CSS/Guides/Transforms/Using#視点の変更)にあります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 座標変換の使用](/ja/docs/Web/CSS/Guides/Transforms/Using)
- {{cssxref('transform-style')}}
- {{cssxref('transform-function')}}
- {{cssxref('perspective')}}
- [`transform: perspective()`](/ja/docs/Web/CSS/Reference/Values/transform-function/perspective) 関数
