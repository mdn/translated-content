---
title: object-view-box
slug: Web/CSS/Reference/Properties/object-view-box
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{CSSRef}}{{SeeCompatTable}}

**`object-view-box`** は [CSS](/ja/docs/Web/CSS) のプロパティで、{{glossary("replaced elements", "置換要素")}}内の表示可能な領域 (viewbox) として矩形を定義し、置換要素のコンテンツを変倍したりパンしたりできるようにします。これは SVG の {{SVGAttr("viewBox")}} 属性と似た動作をします。

{{InteractiveExample("CSS デモ: object-view-box")}}

```css interactive-example-choice
object-view-box: inset(0 0);
```

```css interactive-example-choice
object-view-box: inset(20%);
```

```css interactive-example-choice
object-view-box: xywh(95px 20px 60px 60px);
```

```css interactive-example-choice
object-view-box: rect(110px 120px 200px 45px);
```

```css interactive-example-choice
object-view-box: none;
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/plumeria-146x200.jpg"
    alt="枝に咲く赤い花とつぼみのクローズアップ。" />
</section>
```

```css interactive-example
#example-element {
  height: 100%;
  width: 100%;
  border: 2px dotted #888888;
}

@supports not (object-view-box: none) {
  body::before {
    content: "このブラウザーは 'object-view-box' プロパティに対応していません。";
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
  }
}
```

## 構文

```css
/* キーワード */
object-view-box: none;

/* <basic-shape-rect> 関数 */
object-view-box: inset(20%);
object-view-box: inset(20% 30%);
object-view-box: inset(10px 0 25px 33px);
object-view-box: xywh(95px 20px 60px 60px);
object-view-box: rect(10px 30px 30px 10px);

/* グローバル値 */
object-view-box: inherit;
object-view-box: initial;
object-view-box: revert;
object-view-box: revert-layer;
object-view-box: unset;
```

### 値

- `none`
  - : この要素にはビューボックスがありません。これがデフォルトです。

- [`<basic-shape-rect>`](/ja/docs/Web/CSS/Reference/Values/basic-shape#syntax_for_rectangles_basic-shape-rect)
  - : {{cssxref("basic-shape/inset","inset()")}}、{{cssxref("basic-shape/xywh","xywh()")}}、{{cssxref("basic-shape/rect","rect()")}} のいずれかの関数で、要素を（置換要素の）自然な寸法でビューボックスを指定します。それ以外の場合は `none` に解決します。

## 解説

`object-view-box` プロパティは、画像や動画を含む{{glossary("replaced elements", "置換要素")}}の切り抜きやサイズ変更に使用できます。これは、置換要素用に確保された有効領域内で、その要素のコンテンツの一部を表示させることで機能します。表示される置換要素の領域は、このプロパティの値によって定義されます。利用できる予約領域は、要素のデフォルトの{{glossary("extrinsic size", "外在サイズ")}}によって決定されます。表示されるコンテンツの一部は、コンテンツの内在的な{{glossary("aspect ratio", "アスペクト比")}}を維持しながら、ズームイン、パンアウト、元のサイズなどで表示できます。

このプロパティの値は `<basic-shape-rect>` であり、{{cssxref("basic-shape")}} 関数のうち矩形の図形を定義するものに限られたものです。例えば、この値は {{cssxref("basic-shape/xywh","xywh()")}} 関数で指定することができます。

```css
img {
  object-view-box: xywh(410px 0 400px 150px);
}
```

この場合、画像の表示される部分の左上隅は、左端から `410px`、上端から `0` であり、これは引数の x と y で定義されている通りです。元画像の表示される部分のサイズは幅 `410px`、高さ `150px` であり、この関数の `w` と `h` の成分です。この画像の 400x150 ピクセルの領域は、ページレイアウト時には画像自体 のために確保された空間に表示されます。表示されるコンテンツ領域が元の内在サイズのままか、拡大表示されるか、縮小表示されるかは、ビューボックスが画像要素のサイズより 400px x 150px であるか、小さいか、大きいかに応じてそれぞれ決まります。

![ヒョウの画像で、object-view-box プロパティを使用してトリミングされた画像。 400px × 150px のビューボックスに縮小されていない画像の部分を表示させます。](https://mdn.github.io/shared-assets/images/diagrams/css/object-view-box/object-view-box_xywh.jpg)

この場合、`object-view-box` プロパティで定義する矩形ビューボックスと `<img>` 要素の矩形領域が同じサイズ（400 × 150 ピクセル）であるため、置換要素は変倍されません。

`w` と `h` の値を小さくして、拡大表示効果を生み出します。画像の一部が縮小されるため、拡大表示された状態になります。

`w` および `h` 引数の値を大きくすると、ズームアウト効果を生成します。画像のより大きな節が縮小されるため、ズームアウト効果を保持します。

`x` 座標と `y` 座標をアニメーションさせることで、要素自体は元の位置に留まったまま、要素のビューボックスを移動させることでパン効果を作成します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な使い方

この例は、`object-view-box` プロパティの基本的な使い方と効果を示しています。3 つの異なる `<basic-shape-rect>` 関数を使用して示されています。

#### HTML

3 つのほぼ同じ {{htmlelement("img")}} 要素が {{htmlelement("figure")}} 要素に囲まれています。違いはクラス名だけです。

```html
<figure>
  <img
    class="intrinsic"
    src="https://mdn.github.io/shared-assets/images/examples/painted-hand.jpg"
    alt="色を塗った手の部分の元の倍率" />
  <figcaption>intrinsic</figcaption>
</figure>
<figure>
  <img
    class="zoom-in"
    src="https://mdn.github.io/shared-assets/images/examples/painted-hand.jpg"
    alt="色を塗った手の部分のズームインしたもの" />
  <figcaption>zoomed in</figcaption>
</figure>
<figure>
  <img
    class="zoom-out"
    src="https://mdn.github.io/shared-assets/images/examples/painted-hand.jpg"
    alt="色を塗った手の部分のズームアウトしたもの" />
  <figcaption>zoomed out</figcaption>
</figure>
```

#### CSS

すべての画像の幅と高さを同じにスタイル設定した後、それぞれのクラス（つまりそれぞれの画像）に異なる `object-view-box` 値を設定します。描画された手の画像の内在サイズは `298px`× `332px` です。{{cssxref("height")}} と {{cssxref("width")}} を設定し、外在的なサイズを `200px` × `200px` に設定します。

```css
img {
  width: 200px;
  height: 200px;
  border: 1px solid red;
}
```

3 つの異なるシェイプ関数を使用して、 `object-view-box` プロパティに 3 つの異なる値を設定しています。`intrinsic` 要素の {{cssxref("basic-shape/xywh","xywh()")}} 関数の値は、画像コンテンツの左から `70px`、上から `90px` の位置から始まる `200px` 角の正方形領域を表示します。 `zoom-in` の要素の {{cssxref("basic-shape/rect","rect()")}} 関数は、元の要素の上端から `110px`～`270px`、左端から `90px`～`250px` の範囲の `160px` 角の正方形領域を表示します。 `zoom-out` の置換要素の {{cssxref("basic-shape/inset","inset()")}} 関数は、元の要素の `298px` 角の正方形領域を表示します。これは画像の全幅を表示しつつ、上下を 17px ずつ切り取るものです。

```css
.intrinsic {
  object-view-box: xywh(70px 90px 200px 200px);
}

.zoom-in {
  object-view-box: rect(110px 250px 270px 90px);
}

.zoom-out {
  object-view-box: inset(17px 0 17px 0);
}
```

```css hidden
@supports not (object-view-box: none) {
  body::before {
    content: "このブラウザーは 'object-view-box' プロパティに対応していません。";
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
  }
}

figure {
  display: inline-block;
  margin: 0;
}

figcaption {
  text-align: center;
}
```

#### 結果

{{ EmbedLiveSample("Basic usage", "", "300") }}

`intrinsic` バージョンは、画像の変倍されていない領域を表示させています。`zoom-in` バージョンは、画像のより小さな節（`160px` 四方）を表示させ、`200px` 四方のビューボックスに収まるよう変倍しています。節が引き伸ばされるため、ズームインしたように見ていきます。`zoom-out` バージョンは、画像のより大きな領域（`298px` 四方の領域）を表示させ、 `200px` 四方のビューボックスに収まるよう変倍しています。領域が縮小されるため、ズームアウトしたように見ていきます。

### object-view-box プロパティを使用したライブズームイン

この例では、静的なサイズの HTML 要素内で置換要素の一部を拡大・縮小表示するために `object-view-box` プロパティを使用する方法を示しています。この場合、非常に大きな画像内のヒョウの目が、ズーム効果の焦点として機能します。

#### HTML

{{htmlelement("img")}} 要素と [`range`](/ja/docs/Web/HTML/Reference/Elements/input/range) 型の {{htmlelement("input")}} 要素、それに関連付けられた {{htmlelement("label")}} を設置しました。元のヒョウの画像の自然な寸法、または内在サイズは幅 `1244px`、高さ `416px` であり、{{glossary("aspect ratio", "アスペクト比")}}は `3:1` です。

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/leopard.jpg"
  alt="leopard" />
<p>
  <label for="box-size">Zoom-in: </label>
  <input type="range" id="box-size" min="115" max="380" value="150" />
</p>
<output></output>
```

#### CSS

`--box-size` カスタムプロパティを定義し、これを {{cssxref("basic-shape/xywh", "xywh()")}} 関数における高さおよび幅として使用することで、アスペクト比 `1:1` の正方形のビューボックスを生成します。ビューボックスのオフセット点（ズーム効果における焦点）は、`x` 座標に `500px`、`y` 座標に `30px` を設定し、これはヒョウの右目の左上角に対応します。

```css hidden
input {
  width: 350px;
}

output {
  text-align: center;
  background-color: #dedede;
  font-family: monospace;
  padding: 5px;
  display: block;
}

@supports not (object-view-box: none) {
  body::before {
    content: "このブラウザーは 'object-view-box' プロパティに対応していません。";
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
  }
}
```

```css
img {
  width: 350px;
  height: 350px;
  border: 2px solid red;

  --box-size: 150px;
  object-view-box: xywh(500px 30px var(--box-size) var(--box-size));
}
```

#### JavaScript

スライダーにイベントリスナーを追加し、ユーザーが操作した際にカスタムプロパティ `--box-size` の値を更新します。スライダーが右に移動される際のズームイン効果を高めるため、ビューボックスサイズを縮小するとズームイン効果が強まる特性を利用し、スライダーの値を `500px` から差し引くことで反転させます。

```js
const img = document.querySelector("img");
const zoom = document.getElementById("box-size");
const output = document.querySelector("output");

function update() {
  const size = 500 - zoom.value;
  img.style.setProperty("--box-size", `${size}px`);
  output.innerText = `object-view-box: xywh(500px 30px ${size}px ${size}px);`;
}

zoom.addEventListener("input", update);
update();
```

#### 結果

{{ EmbedLiveSample("Live zoom in using object-view-box property", "", 480) }}

スライダーを右に移動するとズームイン効果が強まり、左に移動されると縮小する。スライダーはビューボックスのサイズのみに影響し、ビューボックスの原点となる x 値と y 値は変化しません。`<img>` 要素のサイズも変わりません。

### オブジェクトのビューボックスプロパティを使用したパン操作

この例は、`object-view-box` プロパティの値をアニメーション化することで画像をパンする方法を示しています。

#### HTML

この HTML には単一の画像があります。

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/leopard.jpg"
  alt="leopard" />
```

#### CSS

画像サイズを定義し、ビューボックスのサイズ（`xywh()` 関数の `w` および `h` 要素）を一定に保ちながら、5 秒間にわたって `x` および `y` 引数の上部と左上の位置を変更し、アニメーションさせます。

```css
img {
  width: 350px;
  height: 350px;

  object-view-box: xywh(0 30px 400px 400px);

  animation: panning 5s linear infinite alternate;
}

@keyframes panning {
  from {
    object-view-box: xywh(0 -50px 400px 400px);
  }
  to {
    object-view-box: xywh(800px 68px 400px 400px);
  }
}
```

```css hidden
@supports not (object-view-box: none) {
  body::before {
    content: "このブラウザーは 'object-view-box' プロパティに対応していません。";
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
  }
}
```

#### 結果

{{ EmbedLiveSample("Panning using the object-view-box property", "", 400) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS の `object-view-box` プロパティの使用](/ja/docs/Web/CSS/Guides/Images/Using_object-view-box)
- {{cssxref("object-fit")}}
- {{cssxref("object-position")}}
- {{cssxref("background-size")}}
- [アスペクト比の理解](/ja/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
- [CSS 画像](/ja/docs/Web/CSS/Guides/Images)モジュール
