---
title: CSS `border-shape` プロパティ
short-title: border-shape
slug: Web/CSS/Reference/Properties/border-shape
l10n:
  sourceCommit: 78291b4caa8c466d5e96480b7c0646f5f255952c
---

{{SeeCompatTable}}

**`border-shape`** は [CSS](/ja/docs/Web/CSS) のプロパティで、{{cssxref("basic-shape")}} 値を使用して、要素の境界線の形状を定義します。

## 構文

```css
/* キーワード */
border-shape: none;

/* 単一の <basic-shape> 値 */
border-shape: circle(50%);
border-shape: rect(10px 460px 130px 20px round 20px);
border-shape: shape(
  from 5% 0.5rem,
  arc to 80px 1pt of 10% ccw large rotate 25deg
);

/* 2 つの <basic-shape> 値 */
border-shape: circle(50%) ellipse(40% 30%);
border-shape: polygon(0% 0%, 0% 100%, 100% 0%)
  polygon(10% 10%, 10% 70%, 70% 10%);

/* <basic-shape> と <geometry-box> 値 */
border-shape: circle(50%) border-box ellipse(40% 30%) view-box;
border-shape: rect(5px 198px 189px 0px round 20px) view-box circle(50%);
border-shape: path(
    "M 35,95 C 35,50 60,15 100,20 C 120,5 160,5 180,22 C 200,5 250,5 270,22 C 295,5 340,5 360,22 C 395,10 440,35 440,75 C 455,90 450,120 430,128 C 400,145 360,145 330,130 C 300,145 260,145 230,130 C 200,145 160,145 130,130 C 80,142 35,120 35,95 Z"
  )
  view-box;

/* グローバル値 */
border-shape: inherit;
border-shape: initial;
border-shape: revert;
border-shape: revert-layer;
border-shape: unset;
```

`border-shape` プロパティは、キーワード `none`、または空白で区切られた 1 つまたは 2 つのシェイプ定義を指定して設定できます。それぞれのシェイプ定義は、`<basic-shape>` 値、または `<basic-shape>` 値と `<geometry-box>` 値の組み合わせで構成されます。

### 値

- `none`
  - : 境界線の形状が定義されていないことを指定します。これが初期値です。
- {{cssxref("basic-shape")}}
  - : `<basic-shape>` 関数のいずれかを使用して、境界線の形状を定義します。
- [`<geometry-box>`](/ja/docs/Web/CSS/Reference/Values/box-edge#geometry-box) {{optional_inline}}
  - : 境界線の形状が描画される参照ボックスを定義します。指定されていない場合、形状の参照ジオメトリボックスのデフォルトは次のとおりです。
    - 単一の基本シェイプが指定された場合、`half-border-box` が適用されます。これは、定義された境界線がシェイプのパスの上に描画され、パスがその中心を通るということです。
    - 2 つの基本シェイプが指定されている場合、まず最初の（外側の）シェイプに `border-box` を、2 つ目（内側の）シェイプに `padding-box` を適用します。これにより、境界線は 2 つのシェイプ間を占めます。

## 解説

`border-shape` プロパティを要素に適用することで、ここに示されているような吹き出しや、抽象的なツールチップのデザインなど、正確な形状のコンテナーを、特別な回避策を用いることなく作成することができます。

```html hidden live-sample___speech-bubble-demo
<img src="https://mdn.github.io/shared-assets/images/examples/leopard.jpg" />
<p>私はヒョウです</p>
```

```css hidden live-sample___speech-bubble-demo
html {
  height: 100%;
}

body {
  margin: 0;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  display: block;
  width: 300px;
  anchor-name: --leopard;
  position: relative;
  top: 45px;
}

p {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.3rem;
  padding: 15px 0;
  margin: 0 0 -30px -110px;
  background-color: chartreuse;
  border: 7px solid rgb(50 50 50);
  box-shadow: 5px 5px 10px rgb(0 0 0 / 0.75);

  width: 250px;
  height: 100px;
  border-shape: shape(
      from 50.08% 0%,
      curve to 97.71% 25.55% with 72.95% 0%/93.9% 8.76%,
      curve to 97.71% 62.04% with 100.76% 37.96%/100.76% 49.64%,
      curve to 50.08% 83.94% with 93.9% 75.18%/72.95% 83.94%,
      curve to 23.41% 82.48% with 36.75% 83.94%/27.22% 83.21%,
      curve to 17.7% 100% with 21.51% 87.59%/19.22% 94.16%,
      curve to 11.98% 82.48% with 16.17% 94.16%/13.89% 87.59%,
      curve to 1.31% 62.04% with 13.5% 81.75%/3.98% 76.64%,
      curve to 2.45% 25.55% with -0.59% 49.64%/-0.59% 37.96%,
      curve to 50.08% 0% with 6.26% 8.76%/27.22% 0%,
      close
    )
    content-box;

  text-align: center;
  line-height: 4;

  position: absolute;
  position-anchor: --leopard;
  bottom: anchor(top);
  left: anchor(right);
}
```

{{EmbedLiveSample("speech-bubble-demo", "100%", "240")}}

適用された `border-shape` が、要素に定義された {{cssxref("border")}} や {{cssxref("box-shadow")}} とどのように協調しているかに注目してください。これらは、境界線のシェイプに沿って表示されます。

### 対応しているシェイプ関数

要素の `border-shape`（インライン要素や擬似要素のものを含む）は、{{cssxref("basic-shape")}} の関数のいずれかを使用して定義できます。これらの関数には、次のようなものがあります。

- {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/rect","rect()")}}, {{cssxref("basic-shape/xywh","xywh()")}}: 基本的な矩形のシェイプを定義する様々な方法を提供します。
- {{cssxref("basic-shape/circle","circle()")}}: 円のシェイプを定義します。
- {{cssxref("basic-shape/ellipse","ellipse()")}}: 楕円のシェイプを定義します。
- {{cssxref("basic-shape/path","path()")}}: [SVG パス](/ja/docs/Web/SVG/Reference/Element/path)の文字列構文を使用して、あらゆる種類の図形を定義します。SVGパスの構文には制限があります。ピクセル値のみを使用することができますし、パスは単一の文字列として定義する必要がありますので、{{cssxref("var()")}} を通じて独自のプロパティを記載することはできません。代わりに `shape()` を使用することをお勧めします。
- {{cssxref("basic-shape/polygon","polygon()")}}: 頂点座標のペアを用いて、あらゆる種類の多角形を定義します。希望する図形に滑らかな曲線を組み込む場合は、`shape()` を使用することをお勧めします。
- {{cssxref("basic-shape/shape","shape()")}}: あらゆる種類の図形を定義します。`shape()` の構文は `path()` よりも CSS との互換性が高く、欠点を解消しています。

同時に、それぞれの `<basic-shape>` 値の後に、オプションの [`<geometry-box>`](/ja/docs/Web/CSS/Reference/Values/box-edge#geometry-box) キーワードを指定することで、図形が描画される際の基準となるボックスを指定することもできます。

### ストロークと塗りつぶしモード

`border-shape` プロパティには、以下の 2 つのモードがあります。

- 値に単一の `<basic-shape>` が指定された場合、そのシェイプが要素の境界線の形状を定義し、前の例に示したように、定義された境界線のスタイルがシェイプの周囲にストロークとして描画されます。これは**ストロークモード**と呼ばれます。
- 値に 2 つの `<basic-shape>` が指定されている場合、1 つ目のシェイプは境界線の外側の境界を定義し、2 つ目のシェイプは境界線の内側の境界を定義します。また、指定された境界線の色で、これら 2 つの境界の間の領域が塗りつぶされます。これは**塗りつぶしモード**と呼ばれます。

> [!NOTE]
> 内側の境界線の図形を、外側の境界線よりも大きく定義しないようにしてください。そうすると、境界領域が正しく描画されず、境界線の塗りつぶしが描画されないか、あるいは一方の図形がもう一方の背後に重なって描画されてしまう可能性があります。

### レイアウトとレンダリングへの影響

`border-shape` プロパティは、純粋に視覚的な効果を作成するものです。要素のレイアウトは、あくまで基底となる矩形ボックスの定義に基づいて計算され、コンテンツの流れには影響しません。

要素のコンテンツと背景は、`border-shape` プロパティ（塗りつぶしモードでは内側のシェイプ）によって切り取られます。指定した `border-shape` のサイズがコンテンツや背景と同じかそれより小さい場合、何らかのオフセット効果を作成したい場合を除き、参照ボックスを調整する必要はありません。しかし、指定された `border-shape` がコンテンツや背景よりも大きい場合、背景の端と図形の間に隙間が生じます。そのような場合、表示を修正するために別の参照ボックスを使用する必要があることがあります（情報については、[要素の背景よりも大きな border-shape の処理](#要素の背景よりも大きな境界線シェイプの処理)を参照してください）。

### 境界線のシェイプに適用される境界線のスタイルに関する制限

`border-shape` プロパティが設定されている要素には、すべての境界線のスタイルが適用されるわけではありません。以下のリストでは、それぞれのプロパティがどのように影響を受けるかを説明しています。

- {{cssxref("border-color")}}: このプロパティは適用されます。ただし、要素の複数の境界線に異なる色が設定されている場合、ブラウザーは以下の順序で、境界線の色が設定されている最初の辺を選択します。

  - ブロック先頭の辺
  - インライン先頭の辺
  - ブロック末尾の辺
  - インライン末尾の辺

  その後、ブラウザーはその辺の境界線の色を、レンダリングされた `border-shape` 全体に適用します。

- {{cssxref("border-image")}}: 適用されません。
- {{cssxref("border-style")}}: 適用されません。すべての境界は `solid` スタイルでレンダリングされます。
- {{cssxref("border-width")}}: ストロークモードでは、`border-width` はレンダリングされた `border-shape` に直接適用されます。複数の辺で枠線の幅が異なる場合、ブラウザーは `border-color` について解説したのと同じ処理を用いて、枠線全体に適用する幅を選択します。

  塗りつぶしモードでは、境界線の領域は外側のシェイプと内側のシェイプの間の領域によって定義されるため、`border-width` はレンダリングされる境界線の幅に直接的な効果を与えません。ただし、間接的な効果はあります。つまり、図形が描画される際の基準となるボックスのサイズには引き続き影響を与えます（その `<geometry-box>` を `content-box` または `padding-box` に設定していない限り）。したがって、塗りつぶしモードを使用する際も、基盤となる要素に設定された `border-width` に注意を払う必要があります。

例えば、ある要素に次のような宣言が適用されていたとします。

```css
border-shape: rect(5px 198px 189px 0px round 20px);
border-bottom: 30px dashed blue;
border-left: 40px dotted hotpink;
border-right: 50px double yellow;
```

レンダリングされたボックスには、角が丸い長方形の境界線が表示されます。他のスタイルは無視されるため、境界線のスタイルは `solid` になります。枠線の幅と色は、それぞれ `40px` と `hotpink` になります。これは、`border-left` プロパティがインライン先頭の辺（ページの {{cssxref("writing-mode")}} が水平方向であると想定）にスタイルを適用するためです。この辺は枠線スタイルが適用される最初の辺であり、前述の優先順位リストに従ってブラウザーによって選択されます。

### `border-radius` および `corner-shape` と操作

{{cssxref("border-radius")}} および {{cssxref("corner-shape")}} プロパティは、`border-shape` と互換性がありません。要素に `border-shape` が設定されている場合、設定された `border-radius` は無視されるため、`corner-shape` も効果を発揮しません。`border-shape` プロパティと `border-radius`/`corner-shape` プロパティは、それぞれ異なる効果を持ち、別々に使用されます。

`border-shape` で角の形状を指定したい場合は、そのシェイプの一部として直接描画する必要があります。

### `border-shape` と `clip-path`

{{cssxref("clip-path")}} プロパティは、`border-shape` と同様の値を取り、同様の効果をもたらします。どちらのプロパティも、要素の形状、ひいては要素のヒット領域を変更するために使用でき、それによって `:hover` 効果やポインター関連のイベントがトリガーされる範囲を調整することができます。

しかし、これら 2 つのプロパティの動作には根本的な違いがあります。

- `clip-path` は、指定されたシェイプによって定義された領域の外側にある要素の領域を非表示にします。
- `border-shape` は、指定されたシェイプによって定義された領域内に要素が収まるように、要素の視覚的な表示を変更します。

つまり、`border-shape` は要素のコンテンツを切り取る一方、{{cssxref("overflow")}} プロパティによる表示制御は引き続き可能ですが、`clip-path` は要素のコンテンツを完全に非表示にするため、オーバーフローの制御はできません。

さらに重要な点として、`box-shadow` や `outline` といったプロパティは、`clip-path` で生成された形状に沿って描画されません。つまり、要素の外側が切り取られてしまうため、こうした効果は不格好に切り詰められたり、完全に除去されたりしてしまいます。一方、`border-shape` プロパティを使用すると、異なる形状の境界線が作成され、こうした効果がきれいに沿うように適用されます。

### 要素の背景よりも大きな境界線シェイプの処理

前述したように、`border-shape` の問題の 1 つは、要素のコンテンツや背景よりも大きな図形を定義すると、背景と境界線の間に隙間が生じてしまうことがあるという点です。

この問題を修正するには、参照先 `<geometry-box>` を `content-box` に設定し、{{cssxref("padding")}} を使用してコンテンツと境界線の間の隙間を埋めることをお勧めします。例を示します。

```css
border-shape: shape(
    from 0% 0%,
    hline to 33%,
    arc by 33% 0% of 16% 20% small cw,
    hline to 100%,
    line to 100% 33%,
    arc by 0% 33% of 20% 16% small cw,
    line to 100% 100%,
    hline to 66%,
    arc by -33% 0% of 16% 20% small ccw,
    hline to 0%,
    line to 0% 66%,
    arc by 0% -33% of 20% 16% small ccw,
    close
  )
  content-box;
padding: 24px;
```

こうすることで、`padding` がシェイプの外部に設定され、シェイプが小さくなり、コンテンツ領域の外側に張り出した部分を背景色が埋めるようになります。この方法の実際の動作は、の[不規則なジグソーパズル風のナビゲーションメニュー](/ja/docs/Web/CSS/Guides/Borders_and_box_decorations/Border_shape_nav_menu)の例でご覧いただけます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な `border-shape` のストロークの使い方

この例では、ストロークモードでの `border-shape` の使用方法を示しています。

#### HTML

この例のマークアップには、{{htmlelement("p")}} 要素が 1 つ含まれています。

```html live-sample___basic-border-shape live-sample___basic-border-shape-fill
<p>円です</p>
```

#### CSS

```css hidden live-sample___basic-border-shape live-sample___basic-border-shape-fill live-sample___border-shape-select live-sample___animate-border-shape
html {
  height: 100%;
}

body {
  margin: 0;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.6rem;
  padding: 40px 50px;
  background-color: chartreuse;
  display: flex;
  align-items: center;
}
```

ボックスに {{cssxref("width")}} を `fit-content`、{{cssxref("aspect-ratio")}} を `1/1` に設定し、コンテンツが正方形の中にきれいに収まるようにします。同時に、太い黒の {{cssxref("border")}} と {{cssxref("box-shadow")}} を設定した後、{{cssxref("border-shape")}} を `circle(50%)` に設定して、コンテンツと背景にぴったりと合う円形の境界線を作成します。

```css live-sample___basic-border-shape
p {
  width: fit-content;
  aspect-ratio: 1/1;
  border: 15px solid black;
  box-shadow: 5px 5px 10px rgb(0 0 0 / 0.5);
  border-shape: circle(50%);
}
```

#### 結果

{{EmbedLiveSample("basic-border-shape", "100%", "240")}}

`border` と `box-shadow` が、定義された図形にきれいに沿っている点に注目してください。

### 基本的な `border-shape` の塗りつぶしの使い方

この例は前回の例を基にしており、塗りつぶしモードで `border-shape` を使用して、不規則な塗りつぶし枠を作成する方法を示しています。

HTML は前回の例と同じです。

#### CSS

CSS は前の例と同じですが、今回は境界線の色を `hotpink` に設定し、`border-shape` の値の中に 2 つの `<basic-shape>` 定義を指定しています。コンテンツの領域全体を覆う外側の矩形と、前回の例と同じ内側の円があります。

```css live-sample___basic-border-shape-fill
p {
  width: fit-content;
  aspect-ratio: 1/1;
  border: 15px solid hotpink;
  box-shadow: 5px 5px 10px rgb(0 0 0 / 0.5);
  border-shape: rect(0% 100% 100% 0% round 20px) circle(50%);
}
```

#### 結果

{{EmbedLiveSample("basic-border-shape-fill", "100%", "240")}}

今回は、境界線が矩形と円の間の領域を覆い、`border` 宣言で設定された色が適用されている点に注目してください。

### `border-shape` 値の比較

この例では、要素に適用するさまざまな `border-shape` の値から選択できるようにしていますので、それぞれの表示結果を比較・対照することが可能です。

#### HTML

HTML は前回の例と似ていますが、今回は `<p>` 要素に少し多くのテキストを記載しています。また、JavaScript で`<p>`に適用するクラスを変更できるように、{{htmlelement("select")}}要素も追加しています（簡潔にするため、`<select>` と JavaScript はどちらも非表示にしています）。

```html live-sample___border-shape-select
<p>チーズ職人たちは幸いである。</p>
```

```html hidden live-sample___border-shape-select
<form>
  <label for="shape-select">border-shape の種類の選択:</label>
  <br />
  <select id="shape-select">
    <option>circle</option>
    <option selected>ellipse</option>
    <option>inset</option>
    <option>path</option>
    <option>polygon</option>
    <option>rect</option>
    <option>shape</option>
    <option>two-polygons</option>
    <option>xywh</option>
  </select>
</form>
```

各クラスは、`<p>` 要素に異なる `border-shape` の値を設定します。まず、`<p>` 要素に `ellipse` という `class` が設定されるため、初期状態では `border-shape` の値は `ellipse()` になります。

```js hidden live-sample___border-shape-select
const box = document.querySelector("p");
const select = document.querySelector("select");

select.addEventListener("change", selectClass);

function selectClass() {
  box.className = select.value;
}

selectClass();
```

#### CSS

CSS では、このボックスに {{cssxref("width")}} を `550px` に設定し、太い黒の {{cssxref("border")}} と {{cssxref("box-shadow")}} を適用します。

```css live-sample___border-shape-select
p {
  width: 550px;
  border: 15px solid black;
  box-shadow: 5px 5px 10px rgb(0 0 0 / 0.5);
}
```

次に、`<select>` 要素でさまざまな選択肢を選択した際に適用される、それぞれのクラスのルールを定義します。

```css-nolint live-sample___border-shape-select
.circle {
  border-shape: circle(60%);
}

.ellipse {
  border-shape: ellipse(50% 40%);
}

.inset {
  border-shape: inset(10px 20px 10px 20px round 20px);
}

.path {
  border-shape: path(
      "M 35,95 C 35,50 60,15 100,20 C 120,5 160,5 180,22 C 200,5 250,5 270,22 C 295,5 340,5 360,22 C 460,10 477,35 496,75 C 515,157 450,120 430,128 C 400,145 360,145 330,130 C 300,145 260,145 230,130 C 200,145 160,145 130,130 C 80,142 35,120 35,95 Z"
    )
    view-box;
}

.polygon {
  border-shape: polygon(0% 60%, 0% 85%, 8% 100%, 18% 88%, 30% 100%, 42% 88%, 55% 100%, 68% 88%, 80% 100%, 86% 88%, 90% 75%, 100% 60%, 90% 30%, 85% 5%, 75% 18%, 65% 3%, 52% 16%, 40% 3%, 27% 16%, 15% 3%, 5% 18%) view-box;
}

.rect {
  border-shape: rect(10px 500px 130px 20px round 20px);
}

.shape {
  border-shape: shape(
    from 0% 64.5%,
    curve to 15.71% 8.26% with 0% 30.76%/6.04% 4.51%,
    curve to 35.05% 9.76% with 20.55% -2.99%/30.21% -2.99%,
    curve to 56.8% 9.76% with 39.88% -2.99%/51.97% -2.99%,
    curve to 78.56% 9.76% with 62.84% -2.99%/73.72% -2.99%,
    curve to 97.89% 49.5% with 87.02% 0.76%/97.89% 19.51%,
    curve to 95.47% 89.25% with 101.52% 60.75%/100.31% 83.25%,
    curve to 71.3% 90.75% with 88.22% 102%/78.56% 102%,
    curve to 47.13% 90.75% with 64.05% 102%/54.38% 102%,
    curve to 22.96% 90.75% with 39.88% 102%/30.21% 102%,
    curve to 0% 64.5% with 10.88% 99.75%/0% 83.25%,
    close
  );
}

.two-polygons {
  border-shape: polygon(0% 60%, 0% 85%, 8% 100%, 18% 88%, 30% 100%, 42% 88%, 55% 100%, 68% 88%, 80% 105%, 86% 88%, 91% 75%, 101% 60%, 93% 30%, 86% 5%, 75% 18%, 65% 3%, 52% 16%, 40% 3%, 27% 16%, 15% 3%, 5% 18%)
    polygon(0% 55%, 0% 90%, 6% 104%, 17% 93%, 30% 100%, 43% 93%, 56% 102%, 69% 93%, 81% 102%, 88% 93%, 94% 78%, 100% 58%, 94% 24%, 88% -2%, 76% 13%, 64% -4%, 51% 11%, 39% -4%, 26% 11%, 13% -4%, 3% 13%);
}

.xywh {
  border-shape: xywh(5% 5% 90% 90% round 20px);
}
```

```css hidden live-sample___border-shape-select
form {
  position: absolute;
  border: 2px solid black;
  background: white;
  padding: 5px;
  bottom: 0;
  right: 0;
}

form select {
  width: 100%;
  padding: 2px 5px;
  margin-top: 10px;
}
```

#### 結果

{{EmbedLiveSample("border-shape-select", "100%", "350")}}

ドロップダウンメニューからさまざまな選択肢を指定して、それぞれの枠線の形状がどのように表示されるかを確認してください。随時、ブラウザーの開発者ツールを使用して、`<p>` 要素に適用されている `border-shape` の値を確認し、編集して、その値がどのように機能するかを理解してみてください。

### `border-shape` のアニメーション

この例では、`border-shape` プロパティにアニメーションを適用する方法を示しています。

#### HTML

前回の例と同じ `<p>` 要素を使用していますが、今回はキーボードでフォーカスを合わせられるように、[`tabindex`](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex) 属性を設定しています。

```html live-sample___animate-border-shape
<p tabindex="0">チーズ職人たちは幸いである。</p>
```

#### CSS

この例では、`<p>` に `polygon()` の `border-shape` を適用します。

```css-nolint live-sample___animate-border-shape
p {
  width: 550px;
  border: 15px solid black;
  box-shadow: 5px 5px 10px rgb(0 0 0 / 0.5);
  border-shape: polygon(0% 60%, 0% 85%, 8% 100%, 18% 88%, 30% 100%, 42% 88%, 55% 100%, 68% 88%, 80% 100%, 86% 88%, 90% 75%, 100% 60%, 90% 30%, 85% 5%, 75% 18%, 65% 3%, 52% 16%, 40% 3%, 27% 16%, 15% 3%, 5% 18%) view-box;
}
```

また、`<p>` 要素の {{cssxref(":hover")}} および {{cssxref(":focus")}} 状態に対して {{cssxref("animation")}} を設定しました。これにより、要素にカーソルを合わせたりフォーカスが当たったりすると、2 つの多角形の境界線の形状の間を滑らかに行き来するアニメーションが、無限に繰り返されます。

```css-nolint live-sample___animate-border-shape
p:hover,
p:focus {
  animation: morph 1s ease-in-out infinite alternate;
}

@keyframes morph {
  from {
    border-shape: polygon(0% 60%, 0% 85%, 8% 100%, 18% 88%, 30% 100%, 42% 88%, 55% 100%, 68% 88%, 80% 100%, 86% 88%, 90% 75%, 100% 60%, 90% 30%, 85% 5%, 75% 18%, 65% 3%, 52% 16%, 40% 3%, 27% 16%, 15% 3%, 5% 18%) view-box;
  }
  to {
    border-shape: polygon(0% 55%, 0% 90%, 6% 104%, 17% 93%, 30% 100%, 43% 93%, 56% 102%, 69% 93%, 81% 102%, 88% 93%, 94% 78%, 100% 58%, 94% 24%, 88% -2%, 76% 13%, 64% -4%, 51% 11%, 39% -4%, 26% 11%, 13% -4%, 3% 13%) view-box;
  }
}
```

#### 結果

{{EmbedLiveSample("animate-border-shape", "100%", "240")}}

アニメーションを表示するには、この段落にカーソルを合わせたり、フォーカスを合わせたりしてください。

```css hidden live-sample___speech-bubble-demo live-sample___basic-border-shape live-sample___basic-border-shape-fill live-sample___border-shape-select live-sample___animate-border-shape
@supports not (border-shape: circle(50%)) {
  body::before {
    content: "このブラウザーは 'border-shape' プロパティに対応していません。";
    font-family: sans-serif;
    background-color: wheat;
    padding: 1rem 0;
    text-align: center;

    z-index: 1;
    position: fixed;
    inset: 40% 0 auto;
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("border")}}
- {{cssxref("corner-shape")}}
- [border-shape による不規則なナビメニューの作成](/ja/docs/Web/CSS/Guides/Borders_and_box_decorations/Border_shape_nav_menu)
- [CSS 境界とボックス装飾](/ja/docs/Web/CSS/Guides/Borders_and_box_decorations)モジュール
- [CSS 背景と境界](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders)モジュール
- [border-shape: the future of the non-rectangular web](https://una.im/border-shape) - Una Kravets (2026)
- [Get Ready For the Powerful CSS border-shape Property!](https://css-tricks.com/get-ready-for-the-powerful-css-border-shape-property/) - CSS Tricks (2026)
