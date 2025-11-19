---
title: offset-path
slug: Web/CSS/Reference/Properties/offset-path
original_slug: Web/CSS/offset-path
l10n:
  sourceCommit: 874ad29df9150037acb8a4a3e7550a302c90a080
---

**`offset-path`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素がたどる経路（パス）を指定し、そのパス内の親コンテナーまたは SVG 座標系における要素の位置を決定します。パスは、要素が位置指定または移動される直線、曲線、または幾何学的形状です。

`offset-path` プロパティは、{{cssxref("offset-distance")}}、{{cssxref("offset-rotate")}}、{{cssxref("offset-anchor")}} プロパティと組み合わせて使用し、パスに沿った要素の位置と方向を制御します。

{{InteractiveExample("CSS デモ: offset-path")}}

```css interactive-example-choice
offset-path: path("M-70,-40 C-70,70 70,70 70,-40");
```

```css interactive-example-choice
offset-path: path("M0,0 L60,70 L-60,30z");
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element"></div>
  <button id="playback" type="button">再生</button>
</section>
```

```css interactive-example
#example-element {
  width: 24px;
  height: 24px;
  background: #2bc4a2;
  animation: distance 8000ms infinite linear;
  animation-play-state: paused;
  clip-path: polygon(0% 0%, 70% 0%, 100% 50%, 70% 100%, 0% 100%, 30% 50%);
}

#example-element.running {
  animation-play-state: running;
}

#playback {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1em;
}

@keyframes distance {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}

#default-example {
  position: relative;
}
```

```js interactive-example
window.addEventListener("load", () => {
  const example = document.getElementById("example-element");
  const button = document.getElementById("playback");

  button.addEventListener("click", () => {
    if (example.classList.contains("running")) {
      example.classList.remove("running");
      button.textContent = "再生";
    } else {
      example.classList.add("running");
      button.textContent = "停止";
    }
  });
});
```

## 構文

```css
/* 既定値 */
offset-path: none;

/* 線の区間 */
offset-path: ray(45deg closest-side contain);
offset-path: ray(contain 150deg at center center);
offset-path: ray(45deg);

/* URL */
offset-path: url(#myCircle);

/* 基本図形 */
offset-path: circle(50% at 25% 25%);
offset-path: ellipse(50% 50% at 25% 25%);
offset-path: inset(50% 50% 50% 50%);
offset-path: polygon(30% 0%, 70% 0%, 100% 50%, 30% 100%, 0% 70%, 0% 30%);
offset-path: path("M 0,200 Q 200,200 260,80 Q 290,20 400,0 Q 300,100 400,200");
offset-path: rect(5px 5px 160px 145px round 20%);
offset-path: xywh(0 5px 100% 75% round 15% 0);

/* 座標ボックス */
offset-path: content-box;
offset-path: padding-box;
offset-path: border-box;
offset-path: fill-box;
offset-path: stroke-box;
offset-path: view-box;

/* グローバル値 */
offset-path: inherit;
offset-path: initial;
offset-path: revert;
offset-path: revert-layer;
offset-path: unset;
```

### 値

`offset-path` プロパティは、 `<offset-path>` 値、 [`<coord-box>`](/ja/docs/Web/CSS/Reference/Values/box-edge#値) 値、またはその両方、あるいは `none` キーワードを値として導きます。 `<offset-path>` 値は {{cssxref("ray","ray()")}} 関数、 {{cssxref("url_value", "&lt;url&gt;")}} 値、または [`<basic-shape>`](/ja/docs/Web/CSS/Reference/Values/basic-shape) 値です。

- `none`
  - : 要素がオフセットパスをたどらないことを指定します。値 `none` は、要素が[オフセット変換](/ja/docs/Web/CSS/Reference/Properties/offset)を持たないことと同じです。この場合、要素の動きは、オフセットパスではなく、 {{cssxref("top")}} や {{cssxref("left")}} などの既定の位置プロパティによって決まります。これは既定値です。

- `<offset-path>`
  - : `ray()` 関数、 `<url>` 値、または `<basic-shape>` 値で、幾何学的オフセットのパスを指定します。省略した場合、 `<coord-box>` 値のパス形状は `inset(0 round X)` となります。ここで `X` は、[包含ブロック](/ja/docs/Web/CSS/Guides/Display/Containing_block)を確立する要素の {{cssxref("border-radius")}} の値です。
    - {{cssxref("ray","ray()")}}
      - : 指定した位置から、指定した長さで、指定した角度で伸びる線を定義します。 `ray()` 関数は、最大 4 つの引数（{{CSSxRef("angle")}}、オプションのサイズ値、オプションのキーワード `contain`、およびオプションの `at <position>`）を受け取ります。

    - {{cssxref("url_value", "&lt;url&gt;")}}
      - : [SVG 図形要素](/ja/docs/Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes)の ID を指定します。パスは、 `url()` 関数で `id` によって参照される SVG {{SVGElement("circle")}}, {{SVGElement("ellipse")}}, {{SVGElement("line")}}, {{SVGElement("path")}}, {{SVGElement("polygon")}}, {{SVGElement("polyline")}}, {{SVGElement("rect")}} のいずれかの要素の形状です。 URL が図形要素を参照していない場合、または無効な場合、オフセットパスの解決値は `path("M0,0")` （これは有効な `<basic-shape>` 値です）になります。

    - {{cssxref("basic-shape")}}
      - : オフセットパスを、 [CSS 基本図形関数](/ja/docs/Web/CSS/Reference/Values/basic-shape)（ {{cssxref("basic-shape/circle","circle()")}}, {{cssxref("basic-shape/ellipse","ellipse()")}}, {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/path","path()")}}, {{cssxref("basic-shape/polygon","polygon()")}}, {{cssxref("basic-shape/rect","rect()")}}, {{cssxref("basic-shape/xywh","xywh()")}} など）と同等のパスとして指定します。例えば、 `<basic_shape>` が `ellipse()` 関数である場合、パスは、楕円の右端の点から時計回りに 1 回転した楕円の概要になります。 `at <position>` 引数を受け入れる `ellipse()` および `circle()` では、 `<position>` が省略された場合、要素に {{cssxref("offset-position")}} が指定されていない限り、位置は既定で `center` になります。この場合、 `offset-position` の値が `at <position>` 引数に使用されます。より複雑な形状は、 {{cssxref("basic-shape/shape","shape()")}} 関数を使用して定義することができます。

- [`<coord-box>`](/ja/docs/Web/CSS/Reference/Values/box-edge#値)
  - : パスを含む[参照ボックス](/ja/docs/Web/CSS/Guides/Shapes/Using_shape-outside#参照ボックス)のサイズ情報を指定します。参照ボックスは、この要素の包含ブロックを確立する要素から派生します。このパラメータはオプションです。指定しない場合、CSS コンテキストでは既定値は `border-box` です。 SVG のコンテキストでは、この値は `view-box` として扱われます。 `ray()` または `<basic-shape>` を使用してオフセットパスを定義する場合、 `<coord-box>` の値は、それぞれ、ray または `<basic-shape>` の参照ボックスを提供します。 `<url>` を使用してオフセットパスを定義する場合、 `<coord-box>` の値は、図形要素のビューポートおよびユーザー座標系を提供し、原点 (`0 0`) は左上隅、サイズは `1px` となります。

## 解説

このプロパティは、移動する要素がたどることができる経路を定義します。オフセットの経路は 1 つまたは複数のサブ経路で指定された経路か、スタイル付けされていない基本図形の形状で指定します。オフセット経路上の要素の正確な位置は、 {{cssxref("offset-distance")}} プロパティで決定されます。それぞれの図形または経路は、初期位置を {{cssxref("offset-distance")}} の `0` の計算値で定義し、オブジェクトの回転方向を指定する初期方向を初期位置にします。

仕様書の初期の版では、このプロパティを `motion-path` と呼んでいました。これが `offset-path` と変更されたのは、このプロパティが動きではなく静的な位置を記述するからです。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### offset-path を box-edge の位置指定を使用して作成

この例では、`offset-path` プロパティでさまざまな `<coord-box>` 値を使用しています。

```html hidden
<div class="box blueBox"></div>
<div class="box redBox"></div>
<div class="box greenBox"></div>
```

```css hidden
body {
  width: 300px;
  height: 200px;
  border-radius: 50px;
  border: dashed aqua;
  border-width: 25px;
  padding: 25px;
  margin: 50px;
}
```

```css
.box {
  width: 40px;
  height: 20px;
  animation: move 8000ms infinite ease-in-out;
}

.blueBox {
  background-color: blue;
  offset-path: border-box;
  offset-distance: 5%;
}

.greenBox {
  background-color: green;
  offset-path: padding-box;
  offset-distance: 8%;
}

.redBox {
  background-color: red;
  offset-path: content-box;
  offset-distance: 12%;
}

@keyframes move {
  0%,
  20% {
    offset-distance: 0%;
  }
  80%,
  100% {
    offset-distance: 100%;
  }
}
```

この例では、マージン、境界線、およびパディングに意図的に大きな値を指定して、青、緑、赤の長方形がそれぞれの `<coord-box>` の辺（border-box、padding-box、content-box）に配置される様子を示しています。

![青い長方形は境界線の外側の端にあり、緑色の長方形はパディングボックスの外側の端である境界線の内側の端にあり、赤い長方形はコンテンツボックスの外側の端にあります。](offset-path-coord-box.png)

#### 結果

{{EmbedLiveSample('Creating an offset-path using box-edge positioning', '100%', 400)}}

### offset-path を path() を使用して作成

この例では、 {{svgelement("svg")}} 要素を使用して、煙突のある家と、はさみの 2 つの部分を定義しています。家と煙突は長方形と多角形で構成されており、はさみの 2 つの部分は 2 つの異なる path 要素で表現されています。CSS コードでは、 `offset-path` プロパティを使用して、はさみの 2 つの部分をたどるパスを指定しています。この CSS で定義されたパスは、SVG の `<path>` 要素で表されるパスと同一であり、これは煙突を含む家の概要です。

```html live-sample___offset_path_path
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="700"
  height="450"
  viewBox="350 0 1400 900">
  <title>House and Scissors</title>
  <rect x="595" y="423" width="610" height="377" fill="blue" />
  <polygon points="506,423 900,190 1294,423" fill="yellow" />
  <polygon points="993,245 993,190 1086,190 1086,300" fill="red" />
  <path
    id="house"
    d="M900,190 L993,245 V201 A11,11 0 0,1 1004,190 H1075 A11,11 0 0,1 1086,201 V300 L1294,423 H1216 A11,11 0 0,0 1205,434 V789 A11,11 0 0,1 1194,800 H606 A11,11 0 0,1 595,789 V434 A11,11 0 0,0 584,423 H506 L900,190"
    fill="none"
    stroke="black"
    stroke-width="13"
    stroke-linejoin="round"
    stroke-linecap="round" />
  <path
    id="firstScissorHalf"
    class="scissorHalf"
    d="M30,0 H-10 A10,10 0 0,0 -20,10 A20,20 0 1,1 -40,-10 H20 A10,10 0 0,1 30,0 M-40,20 A10,10 1 0,0 -40,0 A10,10 1 0,0 -40,20 M0,0"
    transform="translate(0,0)"
    fill="green"
    stroke="black"
    stroke-width="5"
    stroke-linejoin="round"
    stroke-linecap="round"
    fill-rule="evenodd" />
  <path
    id="secondScissorHalf"
    class="scissorHalf"
    d="M30,0 H-10 A10,10 0 0,1 -20,-10 A20,20 0 1,0 -40,10 H20 A10,10 0 0,0 30,0 M-40,-20 A10,10 1 0,0 -40,0 A10,10 1 0,0 -40,-20 M0,0"
    transform="translate(0,0)"
    fill="forestgreen"
    stroke="black"
    stroke-width="5"
    stroke-linejoin="round"
    stroke-linecap="round"
    fill-rule="evenodd" />
</svg>
```

```css live-sample___offset_path_path
.scissorHalf {
  offset-path: path(
    "M900,190  L993,245 V201  A11,11 0 0,1 1004,190  H1075  A11,11 0 0,1 1086,201  V300  L1294,423 H1216  A11,11 0 0,0 1205,434  V789  A11,11 0 0,1 1194,800  H606  A11,11 0 0,1 595,789  V434  A11,11 0 0,0 584,423  H506 L900,190"
  );
  animation: follow-path 4s linear infinite;
}

@keyframes follow-path {
  to {
    offset-distance: 100%;
  }
}
```

#### 結果

`offset-path` プロパティがない場合、はさみの 2 つの半分は、既定ではキャンバスの左上隅に配置されます。しかし、 `offset-path` を使用すると、はさみの 2 つの半分は SVG パス開始点に配置され、パスに沿って移動できるようになります。

{{EmbedLiveSample('offset_path_path', '100%', '450')}}

### offset-path を url() を使用して作成

この例は、要素が辿ることができるパスの形状を定義するために SVG 形状を参照する方法を示しています。緑色の円（`.target` で定義）は、 SVG 形状の ID (`svgRect`) を `offset-path` プロパティに、 `url()` を使用して渡すことで定義された長方形のパスをたどります。

パス図形を定義する SVG 長方形は、緑色の円が実際にこの長方形によって定義されたパスに従っていることを視覚的に示すためだけにここに表示されています。

```html live-sample___offset_path_url
<div class="outer">
  <div class="target"></div>
</div>
<svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect id="svgRect" x="50" y="50" width="200" height="100" />
</svg>
```

```css hidden live-sample___offset_path_url
.outer {
  position: absolute;
}
```

```css live-sample___offset_path_url
.target {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: green;
  offset-path: url(#svgRect);
  offset-anchor: auto;
  animation: move 5s linear infinite;
}

#svgRect {
  fill: antiquewhite;
  stroke: black;
  stroke-width: 2;
}

@keyframes move {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}
```

{{EmbedLiveSample('live-sample___offset_path_url', '100%', '250')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("offset")}}
- {{cssxref("offset-distance")}}
- {{cssxref("offset-rotate")}}
- [SVG \<path>](/ja/docs/Web/SVG/Tutorials/SVG_from_scratch/Paths)
- {{cssxref("basic-shape/path","path()")}}
- その他のデモ:
  - [Examples using various shapes values](https://codepen.io/team/css-tricks/pen/WZdKMq) (CodePen, CSS-Tricks)
  - [Moving a triangle along a curved path](https://codepen.io/ericwilligers/pen/jMbJPp) (CodePen, Eric Willigers)
  - [Moving a pair of scissors along the shape of a house](https://codepen.io/ericwilligers/pen/bwVZNa) (CodePen, Eric Willigers)
  - [Moving multiple pairs of eyes](https://jsfiddle.net/ericwilligers/r1snqdan/) (JSFiddle, Eric Willigers)
