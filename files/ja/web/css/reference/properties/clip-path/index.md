---
title: clip-path
slug: Web/CSS/Reference/Properties/clip-path
original_slug: Web/CSS/clip-path
l10n:
  sourceCommit: 611edf6335e4a833a6f394d0d98b117e7b0a36bf
---

**`clip-path`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素のどの部分を表示するかを設定するクリッピング領域を作ります。具体的には、領域の内部の部分は表示され、外側の部分は非表示になります。

{{InteractiveExample("CSS デモ: clip-path")}}

```css interactive-example-choice
clip-path: circle(40%);
```

```css interactive-example-choice
clip-path: ellipse(130px 140px at 10% 20%);
```

```css interactive-example-choice
clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
```

```css interactive-example-choice
clip-path: path("M 0 200 L 0,75 A 5,5 0,0,1 150,75 L 200 200 z");
```

```css interactive-example-choice
clip-path: rect(5px 145px 160px 5px round 20%);
```

```css interactive-example-choice
clip-path: xywh(0 5px 100% 75% round 15% 0);
```

```html-nolint interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <img
      class="transition-all"
      id="example-element"
      src="/shared-assets/images/examples/balloon-small.jpg"
      width="150" />
    私の仲間と私は、夕食の後、11時までに彼の家に電話して迎えに行くことを決めていました。この運動神経の優れた若いフランス人は、パリのスポーツマンたちの小さなグループに所属しており、彼らは「気球」を趣味としています。通常のスポーツで得られるすべてのスリル、さらには猛スピードで走る「自動車」のスリルさえも尽くした後、この「エアロクラブ」のメンバーたちは、今では空で、あらゆる大胆な技に挑戦し、地上ではもはや得られない、神経を刺激する興奮を求めています。
  </div>
</section>
```

```css interactive-example
section {
  align-items: flex-start;
}

.example-container {
  text-align: left;
  padding: 20px;
}

#example-element {
  float: left;
  width: 150px;
  margin: 20px;
}
```

## 構文

```css
/* キーワード値 */
clip-path: none;

/* <clip-source> 値 */
clip-path: url(resources.svg#c1);

/* <geometry-box> 値 */
clip-path: margin-box;
clip-path: border-box;
clip-path: padding-box;
clip-path: content-box;
clip-path: fill-box;
clip-path: stroke-box;
clip-path: view-box;

/* <basic-shape> 値 */
clip-path: inset(100px 50px);
clip-path: circle(50px at 0 100px);
clip-path: ellipse(50px 60px at 10% 20%);
clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
clip-path: path(
  "M0.5,1 C0.5,1,0,0.7,0,0.3 A0.25,0.25,1,1,1,0.5,0.3 A0.25,0.25,1,1,1,1,0.3 C1,0.7,0.5,1,0.5,1 Z"
);
clip-path: rect(5px 5px 160px 145px round 20%);
clip-path: shape(from 0% 0%, line to 100% 0%, line to 50% 100%, close);
clip-path: xywh(0 5px 100% 75% round 15% 0);

/* ボックスおよびシェイプ値の組み合わせ */
clip-path: padding-box circle(50px at 0 100px);

/* グローバル値 */
clip-path: inherit;
clip-path: initial;
clip-path: revert;
clip-path: revert-layer;
clip-path: unset;
```

`clip-path` プロパティは、以下に挙げた値のうちの一つまたは組み合わせで指定します。

### 値

- `<clip-source>`
  - : {{cssxref("url_value", "&lt;url&gt;")}} で、[SVG](/ja/docs/Web/SVG) の {{SVGElement("clipPath")}} 要素を参照します。
- {{cssxref("&lt;basic-shape&gt;")}}
  - : `<geometry-box>` 値で寸法と位置が定義されるシェイプです。ジオメトリーボックスが指定されない場合、参照ボックスとして `border-box` が使用されます。以下のいずれかです。
    - {{cssxref("basic-shape/inset","inset()")}}
      - : 内部の長方形を定義します。
    - {{cssxref("basic-shape/circle","circle()")}}
      - : 半径と中心位置を使用して円を定義します。
    - {{cssxref("basic-shape/ellipse","ellipse()")}}
      - : 2 つの半径と位置を指定して楕円を定義します。
    - {{cssxref("basic-shape/polygon","polygon()")}}
      - : SVG の塗りつぶし規則と頂点のセットを用いて多角形を定義します。
    - {{cssxref("basic-shape/path","path()")}}
      - : SVG の塗りつぶし規則と SVG のパス定義を用いてシェイプを定義します。
    - {{cssxref("basic-shape/rect","rect()")}}
      - : 参照ボックスの縁からの指定距離を使用して長方形を定義します。
    - {{cssxref("basic-shape/shape","shape()")}}
      - : オプションの SVG 塗りつぶしルールと、行、曲線、円弧用の図形コマンドを使用して図形を定義します。
    - {{cssxref("basic-shape/xywh","xywh()")}}
      - : 参照ボックスの上端と左端からの指定距離、および長方形の幅と高さを指定して、長方形を定義します。

- `<geometry-box>`
  - : `<basic-shape>` と共に指定された場合、この値は基本シェイプの参照ボックスを定義します。単独で指定された場合、指定のボックスの辺を、角の形（{{cssxref("border-radius")}} など）を含めてクリッピングパスにします。ジオメトリーボックスは以下の値のうちの一つが指定できます。
    - `margin-box`
      - : [マージンボックス](/ja/docs/Web/CSS/Guides/Shapes/From_box_values#margin-box)を参照ボックスとして使用します。
    - `border-box`
      - : [境界ボックス](/ja/docs/Web/CSS/Guides/Shapes/From_box_values#border-box)を参照ボックスとして使用します。
    - `padding-box`
      - : [パディングボックス](/ja/docs/Web/CSS/Guides/Shapes/From_box_values#padding-box)を参照ボックスとして使用します。
    - `content-box`
      - : [コンテンボックス](/ja/docs/Web/CSS/Guides/Shapes/From_box_values#content-box)を参照ボックスとして使用します。
    - `fill-box`
      - : オブジェクトの境界ボックスを参照ボックスとして使用します。
    - `stroke-box`
      - : ストロークの境界ボックスを参照ボックスとして使用します。
    - `view-box`
      - : 最も近い SVG のビューポートを参照ボックスとして使用します。 SVG のビューポートを作成する要素に {{SVGAttr("viewBox")}} 属性が指定されている場合、参照ボックスは `viewBox` 属性で指定された座標系の原点に位置し、参照ボックスの寸法は `viewBox` 属性の width および height 値に設定されます。

- `none`
  - : クリッピングパスは作成されません。

> [!NOTE]
> 計算値が **`none`** 以外の場合は、新しい[重ね合わせコンテキスト](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)を生成します。これは、 {{cssxref("opacity")}} が `1` 以外の値の場合と同様です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### シェイプと形状ボックス

この例では、 `polygon()` をクリップパスとして {{htmlelement("div")}} 要素に定義して、 2 つの三角形を作成しています。それぞれの三角形は、単色の背景と太い境界線を持っています。 2 番目の `<div>` 要素は、その参照ボックスを `content-box` に設定しています。

#### HTML

```html live-sample___shapes1 live-sample___shapes2 live-sample___shapes3
<div></div>
<div></div>
```

#### CSS

```css hidden live-sample___shapes1 live-sample___shapes2 live-sample___shapes3
body {
  display: flex;
  gap: 20px;
  flex-flow: row wrap;
}
```

```css live-sample___shapes1 live-sample___shapes2 live-sample___shapes3
div {
  height: 200px;
  width: 200px;
  box-sizing: border-box;
  background-color: rebeccapurple;
  border: 20px solid magenta;

  clip-path: polygon(50% 0, 100% 100%, 0 100%);
}

div:last-of-type {
  clip-path: content-box polygon(50% 0, 100% 100%, 0 100%);
}
```

#### 結果

{{EmbedLiveSample("shapes1", "", "230")}}

最初の三角形では、参照ボックスを指定していないため、既定では `border-box` となり、 0% および 100% の位置は境界線の外側の端になります。 2 つ目の例では、 `<geometry-box>` を `content-box` に設定しました。これは、基本シェイプの参照ボックスが、パディングボックスの内側にあるコンテンツ領域の外側の境界線であるということになります。この例には `padding` がないため、これは境界線の内側の辺になります。

### `shape()` 関数と `path()` 関数

前回の例を拡張して、異なる `<basic-shape>` 値を持つ同じ三角形を作成し、{{cssxref("basic-shape/shape", "shape()")}} および {{cssxref("basic-shape/path", "path()")}} 関数を使用してクリップパスを作成する方法、および `shape()` がより柔軟なソリューションである点を示します。

最初の要素のクリップパスを定義するには `path()` を使用し、2 つ目の要素のクリップパスを定義するには `shape()` を使用します。どちらも、既定の `border-box` を参照ボックスとして使用します。

```css live-sample___shapes2 live-sample___shapes3
div {
  clip-path: path("M100 0 L200 200 L0 200 Z");
}

div:last-of-type {
  clip-path: shape(from 50% 0, line to 100% 100%, line to 0 100%, close);
}
```

その結果、shape() 関数で定義されたパスは要素とともに伸長しますが、path() バージョンでは伸長しません。

{{EmbedLiveSample("shapes2", "", "230")}}

`shape()` 関数は {{cssxref("percentage")}} 値（および[カスタムプロパティ](/ja/docs/Web/CSS/Reference/Properties/--*)）が使用できるため、より堅牢です。

基盤となる要素のサイズを大きくして、これを示します。

```css live-sample___shapes3
div {
  width: 250px;
  height: 250px;
}
```

{{EmbedLiveSample("shapes3", "", "280")}}

`shape()` 関数で定義されたクリップパスの 4 つの境界線の可視性、あるいは少なくとも部分的な可視性は、パーセント値によってパスが要素とともに伸長するためです。 `path()` バージョンでは、要素は伸長しましたが、シェイプは伸長しませんでした。その結果、上と左の境界線は部分的に表示され、右と下の境界線は切り取られています。

### クリップソースとしての SVG

この例では、 SVG の {{svgElement("clipPath")}} 要素を定義して `clip-path` のソースとして使用しています。

#### HTML

ここでは 2 つの {{htmlElement("div")}} 要素と、2 つの `<clipPath>` 要素を含む `<svg>` 要素があります。1 つの `<clipPath>` には、ウィンドウペインを定義する 4 つの {{svgElement("rect")}} 要素が含まれており、中央に空白の空間が残っています。もう 1 つには、2 つの交差する `<rect>` 要素が含まれています。

```html
<svg height="0" width="0">
  <defs>
    <clipPath id="window">
      <rect y="0" x="0" width="80" height="80" />
      <rect y="0" x="120" width="80" height="80" />
      <rect y="120" x="0" width="80" height="80" />
      <rect y="120" x="120" width="80" height="80" />
    </clipPath>
    <clipPath id="cross">
      <rect y="0" x="80" width="40" height="200" />
      <rect y="80" x="0" width="200" height="40" />
    </clipPath>
  </defs>
</svg>

<div class="window">Window</div>
<div class="cross">Cross</div>
```

#### CSS

[フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)を使用して、利用可能な空間がある場合に、要素を隙間を空けて横に並べるようにしています。 `<div>` 要素の両方に {{cssxref("gradient/conic-gradient", "conic-gradient()")}} 背景画像を定義し、 {{cssxref("border")}} とともに、クリップしたときの興味深い視覚効果を提供しています。

```css
body {
  display: flex;
  gap: 20px;
  flex-flow: row wrap;
  font: 2em sans-serif;
}

div {
  width: 200px;
  height: 200px;
  background-image: conic-gradient(
    at center,
    rebeccapurple,
    green,
    lightblue,
    rebeccapurple
  );

  border: 5px solid;
  box-sizing: border-box;
}
```

次に、`<clipPath>` の `id` を `<clip-source>` として設定します。 `cross` の例では、 {{cssxref("align-content")}} を使用してテキストを垂直方向に中央に配置しています。そうしないと、 `window` の例のようにテキストがクリップされてしまいます。

```css
.window {
  clip-path: url(#window);
}

.cross {
  clip-path: url(#cross);
  align-content: center;
}
```

#### 結果

{{EmbedLiveSample("SVG as clip source", "", "230")}}

境界線やテキストを含む要素はクリップされ、`<clipPath>` 要素と重なる部分のみがページに描画されます。

### 様々な値の型

この例では、 HTML の {{htmlelement("img")}} をクリップする `clip-path` プロパティのさまざまな値を示しています。

#### HTML

HTML には、クリップされる `<img>`、星形の `<clipPath>`、および `clip-path` プロパティの値を選択するための {{htmlelement("select")}} 要素が含まれます。

```html
<img
  id="clipped"
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<svg height="0" width="0">
  <defs>
    <clipPath id="star">
      <path d="M100,0 42,180 196,70 4,70 158,180z" />
    </clipPath>
  </defs>
</svg>

<select id="clipPath">
  <option value="none">none</option>
  <option value="circle(100px at 110px 100px)">circle</option>
  <option value="url(#star)" selected>star</option>
  <option value="inset(20px round 20px)">inset</option>
  <option value="rect(20px 150px 200px 20px round 10%)">rect</option>
  <option value="xywh(0 20% 90% 67% round 0 0 5% 5px)">xywh</option>
  <option value="path('M 0 200 L 0,110 A 110,90 0,0,1 240,100 L 200 340 z')">
    path
  </option>
</select>
```

```html hidden
<pre id="log"></pre>
```

#### CSS

初期レンダリングには、`clip-path` ソースとして星が含まれます。

```css
#clipped {
  margin-bottom: 20px;
  clip-path: url(#star);
}
```

#### JavaScript

`<select>` メニューから新しいオプションを選択すると、イベントハンドラーが `<img>` に設定されている `clip-path` の値を更新します。

```js
const clipPathSelect = document.getElementById("clipPath");
clipPathSelect.addEventListener("change", (evt) => {
  const path = evt.target.value;
  document.getElementById("clipped").style.clipPath = path;
  log(`clip-path: ${path};`);
});
```

```js hidden
function log(text) {
  const logElement = document.querySelector("#log");
  logElement.innerText = `${text}`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### 結果

{{EmbedLiveSample("Complete_example", 230, 300)}}

`clip-path` の値を変更するには、別のオプションを選択してください。

> [!NOTE]
> テキストのパスを定義することは可能ですが、背景画像を形状ではなくテキストにクリップしたい場合は、 {{cssxref("background-clip")}} プロパティを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("clip-rule")}}
- {{CSSxRef("mask")}}
- {{CSSxRef("filter")}}
- {{cssxref("background-clip")}}
- [CSS クリップ入門](/ja/docs/Web/CSS/Guides/Masking/Clipping)
- [CSS マスク](/ja/docs/Web/CSS/Guides/Masking)モジュール
- SVG の {{SVGAttr("clip-path")}} 属性
- [SVG 効果の HTML コンテンツへの適用](/ja/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
