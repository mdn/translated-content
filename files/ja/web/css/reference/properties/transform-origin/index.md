---
title: transform-origin
slug: Web/CSS/Reference/Properties/transform-origin
original_slug: Web/CSS/transform-origin
l10n:
  sourceCommit: fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

**`transform-origin`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の座標変換 (transform) における原点を設定します。

{{InteractiveExample("CSS デモ: transform-origin")}}

```css interactive-example-choice
transform-origin: center;
```

```css interactive-example-choice
transform-origin: top left;
```

```css interactive-example-choice
transform-origin: 50px 50px;
```

```css interactive-example-choice
/* 3D rotation with z-axis origin */
transform-origin: bottom right 60px;
```

```html interactive-example
<section id="default-example">
  <div id="example-container">
    <div id="example-element">Rotate me!</div>
    <img
      alt=""
      id="crosshair"
      src="/shared-assets/images/examples/crosshair.svg"
      width="24px" />
    <div id="static-element"></div>
  </div>
</section>
```

```css interactive-example
@keyframes rotate {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(30deg);
  }
}

@keyframes rotate3d {
  from {
    transform: rotate3d(0);
  }

  to {
    transform: rotate3d(1, 2, 0, 60deg);
  }
}

#example-container {
  width: 160px;
  height: 160px;
  position: relative;
}

#example-element {
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  background: #f7ebee;
  color: #000000;
  font-size: 1.2rem;
  text-transform: uppercase;
}

#example-element.rotate {
  animation: rotate 1s forwards;
}

#example-element.rotate3d {
  animation: rotate3d 1s forwards;
}

#crosshair {
  width: 24px;
  height: 24px;
  opacity: 0;
  position: absolute;
}

#static-element {
  width: 100%;
  height: 100%;
  position: absolute;
  border: dotted 3px #ff1100;
}
```

```js interactive-example
"use strict";

window.addEventListener("load", () => {
  function update() {
    const selected = document.querySelector(".selected");

    /* Restart the animation
           https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Tips */
    el.className = "";
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        el.className =
          el.style.transformOrigin.split(" ")[2] === "60px"
            ? "rotate3d"
            : "rotate";
      });
    });

    const transformOrigin = getComputedStyle(el).transformOrigin;
    const pos = transformOrigin.split(/\s+/);
    crosshair.style.left = `calc(${pos[0]} - 12px)`;
    crosshair.style.top = `calc(${pos[1]} - 12px)`;
  }

  const crosshair = document.getElementById("crosshair");
  const el = document.getElementById("example-element");

  const observer = new MutationObserver(() => {
    update();
  });

  observer.observe(el, {
    attributes: true,
    attributeFilter: ["style"],
  });

  update();
  crosshair.style.opacity = "1";
});
```

座標変換の原点とは、それを中心に座標変換が適用される点です。例えば、 [`rotate()`](/ja/docs/Web/CSS/Reference/Values/transform-function/rotate) 関数における座標変換の原点は、回転の中心です。

実際には、このプロパティは一対の座標変換で、その要素の他の座標変換の周りを囲みます。最初の座標変換は、原点を真の原点である <math><mrow><mo stretchy="false">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy="false">)</mo></mrow></math> に移動させます。その後、他の座標変換が適用されますが、座標変換の原点は <math><mrow><mo stretchy="false">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy="false">)</mo></mrow></math> にあるので、これらの座標変換はその原点の周りで作用します。最後に逆方向の変換を行い，座標変換の原点を元の位置に戻します。したがって，この定義は 次のようになります。

```css
transform-origin: -100% 50%;
transform: rotate(45deg);
```

この定義は以下の座標変換と同じです。

```css
transform-origin: 0 0;
transform: translate(-100%, 50%) rotate(45deg) translate(100%, -50%);
```

右から左に読むと、`translate(100%, -50%)` は変換の原点を進の原点に移動するもので、`rotate(45deg)` は本来の座標変換であり、`translate(-100%, 50%)` は変換の原点をもとの場所に戻す変換です。

既定で、座標変換の原点は `center` です。

## 構文

```css
/* 値１つの構文 */
transform-origin: 2px;
transform-origin: bottom;

/* x-offset | y-offset */
transform-origin: 3cm 2px;

/* x-offset-keyword | y-offset */
transform-origin: left 2px;

/* x-offset-keyword | y-offset-keyword */
transform-origin: right top;

/* y-offset-keyword | x-offset-keyword */
transform-origin: top right;

/* x-offset | y-offset | z-offset */
transform-origin: 2px 30% 10px;

/* x-offset-keyword | y-offset | z-offset */
transform-origin: left 5px -3px;

/* x-offset-keyword | y-offset-keyword | z-offset */
transform-origin: right bottom 2cm;

/* y-offset-keyword | x-offset-keyword | z-offset */
transform-origin: bottom right 2cm;

/* グローバル値 */
transform-origin: inherit;
transform-origin: initial;
transform-origin: revert;
transform-origin: revert-layer;
transform-origin: unset;
```

`transform-origin` プロパティは、オフセットを表す 1 ～ 3 つの値を使用して指定することができます。明示的に定義されなかったオフセットは、それぞれの対応する[初期値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#初期値)にリセットされます。

単一の {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} が定義された場合、これは水平方向のオフセットを表します。

2 つ以上の値が定義され、どちらもの値もキーワードでない場合、または使われているキーワードが `center` だけであった場合、最初の値は水平方向のオフセットであり、二番目の値は垂直方向のオフセットです。

- 値 1 つの構文:
  - 値は {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, または `left`, `center`, `right`, `top`, `bottom` のいずれかでなければなりません。

- 値 2 つの構文:
  - 一方の値は {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, またはキーワードの `left`, `center`, `right` のいずれかでなければなりません。
  - もう一方の値は、 {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, またはキーワードの `top`, `center`, `bottom` のいずれかでなければなりません。

- 値 3 つの構文:
  - 1 番目と 2 番目の値は、値 2 つの構文と同じです。
  - 3 番目の値は {{cssxref("&lt;length&gt;")}} でなければなりません。これは常に Z オフセットを表します。

### 値

- _x-offset_
  - : {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} の、ボックスの左端から座標変換の原点までの距離を示す値です。
- _offset-keyword_
  - : `left`, `right`, `top`, `bottom`, `center` のいずれかのキーワードで、対応するオフセットを表します。
- _y-offset_
  - : {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} の、ボックスの右端から座標変換の原点までの距離を示す値です。
- _x-offset-keyword_
  - : `left`, `right`, `center` のいずれかのキーワードで、ボックスの左端から座標変換の原点までの距離を示します。
- _y-offset-keyword_
  - : `top`, `bottom`, `center` のいずれかのキーワードで、ボックスの上端から座標変換の原点までの距離を示します。
- _z-offset_
  - : {{cssxref("&lt;length&gt;")}} 値 ({{cssxref("&lt;percentage&gt;")}} を指定すると文が無効になります) で、ユーザーの視点と z=0 原点の距離を示します。

キーワードは便利な速記形であり、次の {{cssxref("&lt;percentage&gt;")}} 値に相当します。

| Keyword  | Value  |
| -------- | ------ |
| `left`   | `0%`   |
| `center` | `50%`  |
| `right`  | `100%` |
| `top`    | `0%`   |
| `bottom` | `100%` |

## 公式定義

{{CSSInfo}}

> [!NOTE]
> `transform-origin` の初期値は、ルートの `<svg>` 要素と [foreignObject](/ja/docs/Web/SVG/Reference/Element/foreignObject) の直接の子である `<svg>` 要素を除いたすべての SVG 要素では `0 0` です。また、 `transform-origin` は他の CSS 要素と同様に `50% 50%` です。詳しくは [SVG の transform-origin](/ja/docs/Web/SVG/Reference/Attribute/transform-origin) 属性を参照してください。

## 形式文法

{{csssyntax}}

## 例

### 様々な座標変換値のデモ

この例は、様々な変換関数で様々なt `transform-origin` の値を選択した場合の効果を表します。

```html hidden
<div class="container">
  <div class="example">
    <div class="box box1">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: none;
  </pre>

  <div class="example">
    <div class="box box2">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: rotate(30deg);
  </pre>

  <div class="example">
    <div class="box box3">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: rotate(30deg);
transform-origin: 0 0;
  </pre>

  <div class="example">
    <div class="box box4">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: rotate(30deg);
transform-origin: 100% 100%;
  </pre>

  <div class="example">
    <div class="box box5">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: rotate(30deg);
transform-origin: -1em -3em;
  </pre>

  <div class="example">
    <div class="box box6">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: scale(1.7);
  </pre>

  <div class="example">
    <div class="box box7">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: scale(1.7);
transform-origin: 0 0;
  </pre>

  <div class="example">
    <div class="box box8">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: scale(1.7);
transform-origin: 100% -30%;
  </pre>

  <div class="example">
    <div class="box box9">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: skewX(50deg);
transform-origin: 100% -30%;
  </pre>

  <div class="example">
    <div class="box box10">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: skewY(50deg);
transform-origin: 100% -30%;
  </pre>
</div>
```

```css hidden
.container {
  display: grid;
  grid-template-columns: 200px 100px;
  gap: 20px;
}

.example {
  position: relative;
  margin: 0 2em 4em 5em;
}

.box {
  display: inline-block;
  width: 3em;
  height: 3em;
  border: solid 1px;
  background-color: palegreen;
}

.original {
  position: absolute;
  left: 0;
  opacity: 20%;
}

.box1 {
  transform: none;
}

.box2 {
  transform: rotate(30deg);
}

.box3 {
  transform: rotate(30deg);
  transform-origin: 0 0;
}

.box4 {
  transform: rotate(30deg);
  transform-origin: 100% 100%;
}

.box5 {
  transform: rotate(30deg);
  transform-origin: -1em -3em;
}

.box6 {
  transform: scale(1.7);
}

.box7 {
  transform: scale(1.7);
  transform-origin: 0 0;
}

.box8 {
  transform: scale(1.7);
  transform-origin: 100% -30%;
}

.box9 {
  transform: skewX(50deg);
  transform-origin: 100% -30%;
}

.box10 {
  transform: skewY(50deg);
  transform-origin: 100% -30%;
}
```

{{EmbedLiveSample('A_demonstration_of_various_transform_values', '', 1350) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 座標変換の使用](/ja/docs/Web/CSS/Guides/Transforms/Using)
- <https://css-tricks.com/almanac/properties/t/transform-origin/>
