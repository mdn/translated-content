---
title: CSS クリップ入門
slug: Web/CSS/Guides/Masking/Clipping
original_slug: Web/CSS/CSS_masking/Clipping
l10n:
  sourceCommit: 611edf6335e4a833a6f394d0d98b117e7b0a36bf
---

CSS クリップを使用すると、要素の表示部分を定義し、他の部分を非表示にして、コンテンツを特定の形状や領域内に「切り取る」ことができます。クリップを使用すると、要素は長方形に表示されることに制限されず、視覚的に興味深いデザインにすることができます。このガイドでは、 {{cssxref("clip-path")}} プロパティについて、いくつかの例を挙げて説明します。

## CSS クリップ

クリップは、要素のセクションをクリップ（非表示）して、開発者が定義したパス内に位置する要素の領域のみを表示するために使用する CSS の技術です。クリップ領域は、ベクトルパスによって作成されます。パス内の何らかの要素は表示され、パス外の領域は非表示になります。

### `clip-path` プロパティ

clip-pathプロパティは、クリップを適用します。このプロパティが受け入れる値は、表示したままにする要素の領域を定義するベクトルパスです。パスは、ボックス、 [SVG `<clipPath>`](#ソースとしての_svg)への参照、または [CSS シェイプとパス](#シェイプ関数)を使用して定義できます。次の例では、青い正方形の {{htmlelement("div")}} を、クリップパスとして {{cssxref("basic-shape/polygon","polygon()")}} 関数を使用してクリップし、ひし形を作成しています。

```html hidden live-sample__clip-path
<div class="diamond"></div>
```

```css live-sample__clip-path
.diamond {
  height: 200px;
  width: 200px;
  background-color: blue;

  clip-path: polygon(0 50%, 50% 100%, 100% 50%, 50% 0);
}
```

{{ EmbedLiveSample('clip-path', 230, 230) }}

`clip-path` プロパティを使用すると、要素を `<basic-shape>` または [SVG ソース](#ソースとしての_svg)にクリップして、複雑な形状を作成することができます。宣言された状態が同じ数のベクトル点を持つ場合、 [`clip-path` の形状をアニメーションおよびトランジション](#アニメーション)させることができます。

### `clip-path` プロパティの値

要素を視覚的にクリップするには、 `clip-path` プロパティを {{cssxref("geometry-box")}}、{{cssxref("url_value", "url")}}、{{svgElement("clipPath")}} クリップソース、[shape 関数](/ja/docs/Web/CSS/Reference/Values/Functions#shape_functions)で作成した {{cssxref("basic-shape")}} のいずれかに設定します。

### 形状ボックス

`clip-path` は、クリップされた領域の外側をすべて非表示にします。最も基本的なクリップは、形状ボックスを使用して行います。要素は、そのマージン、境界線、パディング、コンテンツに基づいてクリップすることができます。これらの視覚的なボックスの値の効果は、 {{cssxref("border-color")}} を透明に設定したり、 {{cssxref("background-origin")}} を目的の視覚的なボックスに設定したりするなど、他の CSS プロパティを使用して実現できます。これらの値を見ていくのは、主に、これらの値が、後で説明するシェイプ関数と組み合わせて、シェイプクリップパスの原点を定義するために使用されているためです。

CSS シェイプで使用されている[参照ボックスを理解する](/ja/docs/Web/CSS/Guides/Shapes/Using_shape-outside#the_reference_box)ことは、 `clip-path` を使用する場合、特に[基本シェイプ](#基本シェイプへのクリップ)を使用する場合に重要です。参照ボックスは、シェイプの座標系を定義するからです。

#### 視覚的ボックス値

このライブ例では、要素に対する `clip-path` プロパティのさまざまな視覚的なボックスの値を、CSS の `background-origin` プロパティと比較しながら示しています。{{cssxref("border")}}、{{cssxref("background-color")}}、{{cssxref("background-image")}}、{{cssxref("padding")}} を {{htmlelement("blockquote")}} に適用しています。ラジオボタンを選択して、 `--value` を別の `<geometry-box>` 値に更新すると、 {{cssxref("background-origin")}} および {{cssxref("clip-path")}} の解決値が更新されます。

```css hidden
body {
  display: flex;
  flex-flow: row wrap;
  place-content: center;
}
blockquote {
  float: left;
  font-size: 1.2rem;
}
q {
  color: white;
  font-family: sans-serif;
  display: block;
  margin-bottom: 0.5em;
}
p {
  margin: 0;
  line-height: 1.6;
}

body {
  --value: initial;
}
body:has([value="border-box"]:checked) {
  --value: border-box;
}
body:has([value="padding-box"]:checked) {
  --value: padding-box;
}
body:has([value="content-box"]:checked) {
  --value: content-box;
}
body:has([type="checkbox"]:checked) blockquote {
  border-radius: 70px;
}
```

```css
blockquote {
  width: 210px;
  padding: 20px;
  margin: 20px;
  border: 20px dashed #dedede;
  background-color: #ededed;
  background-image: linear-gradient(rebeccapurple, magenta);
  background-repeat: no-repeat;
}

.clippath {
  background-origin: var(--value);
  clip-path: var(--value);
}

.box-model {
  background-origin: var(--value);
}
```

```html-nolint hidden
<blockquote class="clippath">
  <q
    >私は、人はあなたの言ったことは忘れてしまい、あなたのしたことも忘れてしまいますが、あなたが彼らに与えた感情は決して忘れないことを学びました。</q
  >
  <cite>&mdash; マヤ・アンジェロウ</cite>
</blockquote>
<blockquote class="box-model">
  <q
    >私は、人はあなたの言ったことは忘れてしまい、あなたのしたことも忘れてしまいますが、あなたが彼らに与えた感情は決して忘れないことを学びました。</q
  >
  <cite>&mdash; マヤ・アンジェロウ</cite>
</blockquote>

<fieldset>
  <legend>形状ボックスの値を選択してください</legend>
  <p>
    <label
      ><input type="radio" name="gb" value="border-box" /> border-box</label
    >
  </p>
  <p>
    <label
      ><input type="radio" name="gb" value="padding-box" /> padding-box</label
    >
  </p>
  <p>
    <label
      ><input type="radio" name="gb" value="content-box" /> content-box</label
    >
  </p>
  <p>
    <label
      ><input type="radio" name="gb" value="initial" checked /> initial</label
    >
  </p>
</fieldset>
<p>
  <label><input type="checkbox" /> 境界線の半径を変更</label>
</p>
```

{{ EmbedLiveSample('視覚的ボックス値', 230, 430) }}

`<geometry>` ボックスが `<basic-shape>` と組み合わせて指定された場合、その値は基本形状の参照ボックスを定義します。単独で指定された場合、指定されたボックスの角の形状（`border-radius` など）を含む、そのボックスの辺がクリップパスになります。

#### シェイプの原点

前の例では、`<geometry-box>` の値は役に立たないと思うかもしれません。代わりに `background-origin` が使用できるからです。しかし、基本的なシェイプを使用してクリップする場合、 `<geometry-box>` が `<basic-shape>` とともに `clip-path` 値として指定されると、そのシェイプの参照ボックス、つまり原点を定義します。このことを示すために、2 つの前回の例を組み合わせることができます。

```html hidden
<blockquote class="clippath">
  <q
    >私は、人はあなたの言ったことは忘れてしまい、あなたのしたことも忘れてしまいますが、あなたが彼らに与えた感情は決して忘れないことを学びました。</q
  >
  <cite>&mdash; マヤ・アンジェロウ</cite>
</blockquote>
<fieldset>
  <legend>クリップパスのシェイプの原点を選択してください。</legend>
  <p>
    <label
      ><input type="radio" name="gb" value="border-box" checked />
      border-box</label
    >
  </p>
  <p>
    <label
      ><input type="radio" name="gb" value="padding-box" /> padding-box</label
    >
  </p>
  <p>
    <label
      ><input type="radio" name="gb" value="content-box" /> content-box</label
    >
  </p>
</fieldset>
```

```css
blockquote {
  width: 210px;
  padding: 20px;
  margin: 20px;
  border: 20px dashed #dedede;
  background-color: #ededed;
  background-image: linear-gradient(rebeccapurple, magenta);
  background-repeat: no-repeat;
  background-origin: border-box;
  clip-path: var(--value) polygon(0 50%, 50% 100%, 100% 50%, 50% 0);
}
```

```css hidden
blockquote {
  font-size: 1.2rem;
}
q {
  color: white;
  font-family: sans-serif;
  display: block;
  margin-bottom: 0.5em;
}
p {
  margin: 0;
  line-height: 1.6;
}

body {
  --value: "";
}
body:has([value="border-box"]:checked) {
  --value: border-box;
}
body:has([value="padding-box"]:checked) {
  --value: padding-box;
}
body:has([value="content-box"]:checked) {
  --value: content-box;
}
```

{{ EmbedLiveSample('シェイプの原点', 230, 420) }}

その他の例は、 [`clip-path` のシェイプと形状ボックス](/ja/docs/Web/CSS/Reference/Properties/clip-path#シェイプと形状ボックス)を参照してください。

`clip-path: margin-box` のような値も同様に有用です。クリップパスの縁をマージンボックスの縁に配置して創造的なビジュアルを作成できるほか、 `clip-path` の計算値が `none` 以外である場合、 CSS の `opacity` が `1` 以外の値であった場合と同じように、新しい[重ね合わせコンテキスト](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)を作成します。

## 基本シェイプへのクリップ

`clip-path` プロパティが {{cssxref("basic-shape")}} 値に対応していることで、要素を形作る強力な方法が提供されています。さまざまなシェイプ関数を使用すると、正確なクリップ領域を定義して、要素を独自の形に効果的に成形することができます。基本的なシェイプ関数には、次のようなものがあります。

- {{cssxref("basic-shape/circle","circle()")}}
- {{cssxref("basic-shape/ellipse","ellipse()")}}
- {{cssxref("basic-shape/inset","inset()")}}
- {{cssxref("basic-shape/path","path()")}}
- {{cssxref("basic-shape/polygon","polygon()")}}
- {{cssxref("basic-shape/rect","rect()")}}
- {{cssxref("basic-shape/shape","shape()")}}
- {{cssxref("basic-shape/xywh","xywh()")}}

これらのシェイプのサイズと位置は、`<geometry-box>` 値によって定義されます。この値は、`clip-path` 値に `<geometry-box>` 要素値を含まないシェイプが含まれている場合、既定では境界ボックスが参照ボックスとして使用されます。

これらの関数のいくつかは、基本的な定義済みのクリップオプションしか提供していないように見えます。これらは、 {{cssxref("border-radius")}} で作成できる効果を再現しているだけに見えるかもしれませんが、前回の例で [`border-radius` プロパティを切り替えた](#視覚的ボックス値)場合、CSS クリップの威力を実感できたと思います。シェイプを使用すると、さらに詳細な制御が可能になります。例えば、 `inset()` を使用すると、正確なマージンで長方形をクリップすることができます。真のパワーと制御は、`path()`、`shape()`、さらには独自の任意の多角形を作成できる `polygon()` によって実現されます。

### 多角形の作成

`polygon()` を使用すると、シェイプの頂点を表す座標のペアを定義することで、星や抽象的な図形などの複雑な形状を作成することができます。座標は、直線で結ばれたベクトル点を定義します。

ここでは、`polygon()` 関数を使用して星を作成します。

```html hidden
<div class="star"></div>
```

```css
.star {
  width: 200px;
  height: 200px;
  background: linear-gradient(rebeccapurple, magenta) blue;
  clip-path: polygon(
    50% 0%,
    61% 35%,
    100% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    0% 35%,
    39% 35%,
    50% 0%
  );
}
```

{{ EmbedLiveSample('Creating polygons', 230, 230) }}

### アニメーション

クリップされたシェイプは、同じ数のベクトル点を異なる状態に対して宣言することで、アニメーションやトランジションを適用することができます。

```html hidden
<div class="star"></div>
```

```css hidden
.star {
  width: 200px;
  height: 200px;
  background: linear-gradient(rebeccapurple, magenta) blue;
  clip-path: polygon(
    50% 0%,
    61% 35%,
    100% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    0% 35%,
    39% 35%,
    50% 0%
  );
}
```

```css
@keyframes morphStar {
  from {
    clip-path: polygon(
      50% 0%,
      61% 35%,
      100% 35%,
      68% 57%,
      79% 91%,
      50% 70%,
      21% 91%,
      32% 57%,
      0% 35%,
      39% 35%,
      50% 0%
    );
  }
  to {
    clip-path: polygon(
      50% 10%,
      65% 30%,
      90% 20%,
      75% 60%,
      85% 95%,
      50% 80%,
      15% 95%,
      25% 60%,
      10% 20%,
      35% 30%,
      50% 10%
    );
  }
}

.star {
  animation: morphStar alternate 3s infinite ease-in-out;
}
```

{{ EmbedLiveSample('Animation', 230, 230) }}

### `path()` 関数

`path()` 関数を使用すると、SVG コマンドを使用して図形を描画することができます。この関数は、SVG の {{svgattr("d")}} 属性と同等のものを引数として受け入れます。

前回の例で作成した星は、`path()` を使用して作成することができます。

```html hidden
<div class="star"></div>
```

```css
.star {
  width: 200px;
  height: 200px;
  background: linear-gradient(rebeccapurple, magenta) blue;
  clip-path: path(
    "M100,0 L122,70 L200,70 L136,114 L158,182 L100,140 L42,182 L64,114 L0,70 L78,70 L100,0 Z"
  );
}
```

{{ EmbedLiveSample('The path function', 230, 230) }}

### 曲線

`path()` を使用すると、直線だけにとどまりません。この例では、`path()` 関数を使用してハートを作成しています。

```html hidden
<div class="heart"></div>
```

```css
.heart {
  width: 200px;
  height: 200px;
  background: linear-gradient(rebeccapurple, magenta) blue;
  clip-path: path(
    "M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
  );
}
```

{{ EmbedLiveSample('Curved lines', 230, 230) }}

### ソースとしての SVG

SVG の {{svgattr("d")}} 属性の文字列を `path()` 関数の引数として渡す代わりに、`clip-path` プロパティの値で SVG の {{svgElement("clipPath")}} 要素を直接参照することができます。

```html
<div class="heart"></div>
<svg height="0" width="0">
  <clipPath id="heart">
    <path
      d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z" />
  </clipPath>
</svg>
```

`<clipPath>` の `id` は、 {{cssxref("url_function", "url()")}} 関数の引数です。

```css
.heart {
  width: 200px;
  height: 200px;
  background: linear-gradient(rebeccapurple, magenta) blue;
  clip-path: url(#heart);
}
```

{{ EmbedLiveSample('svg as source', 230, 230) }}

### シェイプ関数

SVG のパス構文は、あまり直感的ではありません。このため、CSS では `shape()` 関数も提供されています。`shape()` 関数もパス描画ディレクティブを引数に取りますが、より人間にとって読み取りやすい構文になっています。より宣言的な CSS を使用して、ハートを再現することができます。

```css
.heart {
  clip-path: shape(
    from 20px 70px,
    arc to 100px 70px of 1% cw,
    arc to 180px 70px of 1% cw,
    curve to 100px 190px with 180px 130px,
    curve to 20px 70px with 20px 130px
  );
}
```

`shape()` 関数は、 CSS の値および単位を受け入れる点でより堅牢であり（`path()` は座標に制限されています）、 `calc()` などの CSS 数学関数も使用することができます。変数を使用することで、さまざまなサイズのシェイプ（およびボックス）を作成することができます。

```css
:root {
  --m: 10;
}
.heart {
  width: calc(20px * var(--m));
  height: calc(20px * var(--m));
  display: inline-block;
  background: linear-gradient(rebeccapurple, magenta) blue;
  clip-path: border-box
    shape(
      from calc(2px * var(--m)) calc(7px * var(--m)),
      arc to calc(10px * var(--m)) calc(7px * var(--m)) of 1% cw,
      arc to calc(18px * var(--m)) calc(7px * var(--m)) of 1% cw,
      curve to calc(10px * var(--m)) calc(19px * var(--m)) with
        calc(18px * var(--m)) calc(13px * var(--m)),
      curve to calc(2px * var(--m)) calc(7px * var(--m)) with
        calc(2px * var(--m)) calc(13px * var(--m))
    );
}
.small {
  --m: 4;
}

.medium {
  --m: 8;
}

.large {
  --m: 12;
}
```

```html
<div class="heart small"></div>
<div class="heart medium"></div>
<div class="heart large"></div>
```

{{ EmbedLiveSample('shape function', 230, 270) }}

### クリップした形状に沿ってテキストを折り返す

クリップされた要素は、まだ長方形のボックスのままです。クリップとは、要素がボックスのように見えなくなることを意味しますが、実際にはボックスのままです。定義した長方形以外の（または長方形の）形状にインラインコンテンツを折り返すには、{{cssxref("shape-outside")}} プロパティを使用します。既定では、インラインコンテンツはマージンボックスの周囲に折り返されます。 `shape-outside` を使用すると、この折り返しをカスタマイズして、要素の矩形ボックスではなく、複製したクリップパスに従って、クリップした要素の周囲にテキストを折り返すことができます。

コンテンツには、クリップされる 2 つの要素と、それらの周囲に成形されるコンテンツが含まれます。

```html
<div class="leftTriangle"></div>
<div class="rightTriangle"></div>
<blockquote>
  <q>
    私は、人はあなたの言ったことは忘れてしまい、あなたのしたことも忘れてしまいますが、あなたが彼らに与えた感情は決して忘れないことを学びました。</q
  >
  <cite>&mdash; マヤ・アンジェロウ</cite>
</blockquote>
```

```css hidden
:root {
  --m: 10;
  font-size: calc(3px * var(--m));
}
div {
  width: calc(0.75em * var(--m));
  height: calc(0.75em * var(--m));
  display: inline-block;
  background: linear-gradient(rebeccapurple, magenta) blue;
}
cite {
  display: block;
  text-align: right;
}
```

`clip-shape` プロパティと `shape-outside` プロパティに同じ形状を適用するだけでなく、クリップされた要素は、クリップされた要素がコンテンツと同じ行にくるように浮動ボックスで指定する必要があります。

```css
.leftTriangle {
  clip-path: polygon(0 0, 0 100%, 100% 0);
  shape-outside: polygon(0 0, 0 100%, 100% 0);
  float: left;
}
.rightTriangle {
  clip-path: polygon(100% 0, 100% 100%, 0 100%);
  shape-outside: polygon(100% 0, 100% 100%, 0 100%);
  float: right;
}
```

{{ EmbedLiveSample('Wrapping text around your clipped shapes', 230, 290) }}

## 関連情報

- {{cssxref("basic-shape")}}
- {{cssxref("shape-image-threshold")}}
- {{cssxref("shape-margin")}}
- [シェイプの概要](/ja/docs/Web/CSS/Guides/Shapes/Overview)
- [CSS マスク入門](/ja/docs/Web/CSS/Guides/Masking/Introduction)
- [CSS マスク](/ja/docs/Web/CSS/Guides/Masking)モジュール
- [CSS シェイプ](/ja/docs/Web/CSS/Guides/Shapes)モジュール
