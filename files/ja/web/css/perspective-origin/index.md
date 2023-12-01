---
title: perspective-origin
slug: Web/CSS/perspective-origin
---

{{CSSRef}}

[CSS](/ja/docs/Web/CSS) の **`perspective-origin`** プロパティは、閲覧者の視点の位置を決めます。これは {{cssxref("perspective")}} プロパティによって*消失点*として使われます。

{{EmbedInteractiveExample("pages/css/perspective-origin.html")}}

**`perspective-origin`** および {{cssxref('perspective')}} の各プロパティは、三次元空間で座標変換される子の親に設定するものであり、座標変換される要素に設定される [`perspective()`](</ja/docs/Web/CSS/transform-function/perspective()>) 変換関数とは異なります。

## 構文

```css
/* １値構文 */
perspective-origin: x-position;

/* ２値構文 */
perspective-origin: x-position y-position;

/* x-position と y-position がキーワードである場合は、
   以下の構文も有効 */
perspective-origin: y-position x-position;

/* グローバル値 */
perspective-origin: inherit;
perspective-origin: initial;
perspective-origin: revert;
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

<h3 id="Changing_the_perspective_origin">視点の変更</h3>

この例は主要な `perspective-origin` 値で立方体を表示します。

#### HTML

```html
<section>
  <figure>
    <figcaption><code>perspective-origin: top left;</code></figcaption>
    <div class="container">
      <div class="cube potl">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>

  <figure>
    <figcaption><code>perspective-origin: top;</code></figcaption>
    <div class="container">
      <div class="cube potm">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>

  <figure>
    <figcaption><code>perspective-origin: top right;</code></figcaption>
    <div class="container">
      <div class="cube potr">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>

  <figure>
    <figcaption><code>perspective-origin: left;</code></figcaption>
    <div class="container">
      <div class="cube poml">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>

  <figure>
    <figcaption><code>perspective-origin: 50% 50%;</code></figcaption>
    <div class="container">
      <div class="cube pomm">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>

  <figure>
    <figcaption><code>perspective-origin: right;</code></figcaption>
    <div class="container">
      <div class="cube pomr">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>

  <figure>
    <figcaption><code>perspective-origin: bottom left;</code></figcaption>
    <div class="container">
      <div class="cube pobl">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>

  <figure>
    <figcaption><code>perspective-origin: bottom;</code></figcaption>
    <div class="container">
      <div class="cube pobm">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>

  <figure>
    <figcaption><code>perspective-origin: bottom right;</code></figcaption>
    <div class="container">
      <div class="cube pobr">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>

  <figure>
    <figcaption><code>perspective-origin: -200% -200%;</code></figcaption>
    <div class="container">
      <div class="cube po200200neg">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>

  <figure>
    <figcaption><code>perspective-origin: 200% 200%;</code></figcaption>
    <div class="container">
      <div class="cube po200200pos">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>

  <figure>
    <figcaption><code>perspective-origin: 200% -200%;</code></figcaption>
    <div class="container">
      <div class="cube po200200">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>
</section>
```

#### CSS

```css
/* perspective-origin の値 (例ごとに異なる) */
.potl {
  perspective-origin: top left;
}
.potm {
  perspective-origin: top;
}
.potr {
  perspective-origin: top right;
}
.poml {
  perspective-origin: left;
}
.pomm {
  perspective-origin: 50% 50%;
}
.pomr {
  perspective-origin: right;
}
.pobl {
  perspective-origin: bottom left;
}
.pobm {
  perspective-origin: bottom;
}
.pobr {
  perspective-origin: bottom right;
}
.po200200neg {
  perspective-origin: -200% -200%;
}
.po200200pos {
  perspective-origin: 200% 200%;
}
.po200200 {
  perspective-origin: 200% -200%;
}

/* コンテナーの div、立方体の div、面の一般的な設定 */
.container {
  width: 100px;
  height: 100px;
  margin: 24px;
  border: none;
}

.cube {
  width: 100%;
  height: 100%;
  backface-visibility: visible;
  perspective: 300px;
  transform-style: preserve-3d;
}

.face {
  display: block;
  position: absolute;
  width: 100px;
  height: 100px;
  border: none;
  line-height: 100px;
  font-family: sans-serif;
  font-size: 60px;
  color: white;
  text-align: center;
}

/* 方向に基づいてそれぞれの面を設定 */
.front {
  background: rgba(0, 0, 0, 0.3);
  transform: translateZ(50px);
}
.back {
  background: rgba(0, 255, 0, 1);
  color: black;
  transform: rotateY(180deg) translateZ(50px);
}
.right {
  background: rgba(196, 0, 0, 0.7);
  transform: rotateY(90deg) translateZ(50px);
}
.left {
  background: rgba(0, 0, 196, 0.7);
  transform: rotateY(-90deg) translateZ(50px);
}
.top {
  background: rgba(196, 196, 0, 0.7);
  transform: rotateX(90deg) translateZ(50px);
}
.bottom {
  background: rgba(196, 0, 196, 0.7);
  transform: rotateX(-90deg) translateZ(50px);
}

/* レイアウトの見栄えをよくする */
section {
  background-color: #eee;
  padding: 10px;
  font-family: sans-serif;
  text-align: left;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

#### 結果

{{EmbedLiveSample('Changing_the_perspective_origin', '100%', 700)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 座標変換の使用](/ja/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)
- {{cssxref('transform-style')}}
- {{cssxref('transform-function')}}
- {{cssxref('perspective')}}
- [`transform: perspective()`](</ja/docs/Web/CSS/transform-function/perspective()>) 関数
