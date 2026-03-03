---
title: corner-shape
slug: Web/CSS/Reference/Properties/corner-shape
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

**`corner-shape`** は[一括指定](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)の [CSS](/ja/docs/Web/CSS) プロパティで、{{cssxref("border-radius")}} プロパティ値で指定された領域内のボックスの角を指定します。

## 構成要素のプロパティ

`corner-shape` プロパティは、以下の物理的プロパティの一括指定です。

- {{cssxref("corner-top-left-shape")}}
- {{cssxref("corner-top-right-shape")}}
- {{cssxref("corner-bottom-left-shape")}}
- {{cssxref("corner-bottom-right-shape")}}

## 構文

```css
/* 4 つの角に設定する単一の値 */
corner-shape: bevel;

/* 左上と右下、右上と左下 */
corner-shape: notch superellipse(0.6);

/* 左上、右上と左下、右下 */
corner-shape: superellipse(-1.2) square squircle;

/* 左上、右上、右下、左下 */
corner-shape: scoop superellipse(-1.6) superellipse(-2.2) round;

/* グローバル値 */
corner-shape: inherit;
corner-shape: initial;
corner-shape: revert;
corner-shape: revert-layer;
corner-shape: unset;
```

`corner-shape` プロパティは、1 つ、2 つ、3 つ、4 つの {{cssxref("&lt;corner-shape-value>")}} 値を使用して指定します。

- **1 つ**の値が使用された場合、**4 つの角すべて**の形状を指定します。
- **2 つ**の値が使用された場合、1 つ目の形状は**左上と右下**の角形状、2 つ目の形状は**右上と左下の角**に適用されます。
- **3 つ**の値が使用された場合、1 つ目の形状は**左上の角**、2 つ目の形状は**右上と左下の角**、3 つ目の形状は**右下の角**の形状を指定します。
- 4 つの値が使用された場合、**左上**、**右上**、**右下**、**左下**の順（時計回り）に形状を指定します。

### 値

- {{cssxref("corner-shape-value")}}
  - : {{cssxref("superellipse()")}} またはキーワードで、角形状を表します。

## 解説

`corner-shape` プロパティは、{{cssxref("border-radius")}} プロパティおよび関連付けられた個別指定プロパティで生成される角丸の形状を修正するために使用されます。既に角丸化された角は、適用される丸みの度合いに関してさらにカスタマイズ可能であり、例えば面取りされた角、切り欠きのある角、スクイークル角などの作成をすることができます。コンテナーに適用される境界線、アウトライン、シャドウ、背景効果は、定義された角形状に従います。

`border-radius` がコンテナーに適用されていない場合、または `border-radius` が `0` に解決する場合、`corner-shape` は効果がありません。

`corner-shape` 一括指定プロパティおよび関連付けられた [`corner-*-shape` 一括指定と個別指定](#corner--shape_shorthands_and_longhands) は、1 つから 4 つの {{cssxref("&lt;corner-shape-value>")}} 値を受け入れます。それぞれの値は、直接関数 {{cssxref("superellipse()")}} または一般的な図形を説明するキーワードとして指定されます。それぞれのキーワードは特定の `superellipse()` 値に相当します。

`corner-shape` のデフォルト値（初期値）は `round` であり、これは `corner-shape` を指定せずに `border-radius` のみを使用した場合と同じ効果になります。またキーワード値 `square` も存在し、これはデフォルトの直角の角と同じ効果となり、実質的に適用された `border-radius` を除去します。`bevel` 値は、`border-radius` の両端の間に直線を描画する効果です。

異なる `corner-shape` 値の間で滑らかにアニメーションできます。この場合、キーワード値には相当する `superellipse()` 値が使用されます。

`corner-shape` の一括指定は、4 つの境界をすべて同じ形状にしたい場合や、単一の宣言で異なる値を設定したい場合に特に有益です。一度に 1 つまたは 2 つの角形状のみを設定するには、`corner-*-shape` の一括指定と個別指定を使用します。

### `corner-*-shape` 一括指定と個別指定

`corner-shape` 一括指定は、一つの宣言で 4 つすべての角を定義します。

一度に 1 つの角形状のみを設定するには、角形状の個別指定を使用します。

- 物理的な角形状の個別指定プロパティ:
  - {{cssxref("corner-bottom-left-shape")}}
  - {{cssxref("corner-bottom-right-shape")}}
  - {{cssxref("corner-top-left-shape")}}
  - {{cssxref("corner-top-right-shape")}}
- 論理的な角形状の個別指定プロパティ:
  - {{cssxref("corner-start-start-shape")}}
  - {{cssxref("corner-start-end-shape")}}
  - {{cssxref("corner-end-start-shape")}}
  - {{cssxref("corner-end-end-shape")}}

2 つの角形状を同時に設定するには、辺の一括指定を使用します。

- 物理的な辺の一括指定プロパティ:
  - {{cssxref("corner-top-shape")}}
  - {{cssxref("corner-right-shape")}}
  - {{cssxref("corner-bottom-shape")}}
  - {{cssxref("corner-left-shape")}}
- 論理的な辺の一括指定プロパティ:
  - {{cssxref("corner-block-start-shape")}}
  - {{cssxref("corner-block-end-shape")}}
  - {{cssxref("corner-inline-start-shape")}}
  - {{cssxref("corner-inline-end-shape")}}

### 対角の形状の半径の制約

対角の角に設定された `border-radius` と `corner-shape` の値により、形状の重なりが発生する場合、ブラウザーは重なりを防ぐために値を制約します。

例えば、以下の値を設定すると左上角と右下角が重なってしまうため、ブラウザーはまず最初の `border-radius` 要素をこの重なりを避ける値に調整します。

```css
div {
  width: 480px;
  height: 200px;
  background-color: goldenrod;
  border-radius: 80% 20px;
  corner-shape: scoop;
}
```

### 角の形状に従うプロパティ

以下のプロパティはすべて、コンテナーに設定された際に角の形状に従います。

- {{cssxref("background-color")}}
- {{cssxref("background-image")}}
- {{cssxref("border")}}
- {{cssxref("outline")}}
- {{cssxref("box-shadow")}}
- {{cssxref("overflow")}}
- {{cssxref("backdrop-filter")}}

例については[`corner-shape` に従うプロパティのデモ](#corner-shape_に従うプロパティのデモ)を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な `corner-shape` の使用法

#### HTML

この例のマークアップには、単一の {{htmlelement("div")}} 要素があります。

```html live-sample___basic-corner-shape
<div>きれいに丸みを帯びた角</div>
```

#### CSS

固定の {{cssxref("height")}} と、{{cssxref("box-shadow")}} を設定し、`border-radius` を 30 ピクセルに、`corner-shape` を `scoop` にしています。その他のスタイルは簡単にするために省略しています。

```css hidden live-sample___basic-corner-shape
body {
  font-family: "Helvetica", "Arial", sans-serif;
  width: 240px;
  margin: 20px auto;
}

div {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: cyan;
  background-image: linear-gradient(
    to bottom,
    rgb(255 255 255 / 0),
    rgb(255 255 255 / 0.5)
  );
}

@supports not (corner-shape: scoop) {
  body {
    all: unset !important;
  }

  body::before {
    content: "このブラウザーは 'corner-shape' プロパティに対応していません。";
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
    padding: 1rem 0;
  }

  body > * {
    display: none;
  }
}
```

```css live-sample___basic-corner-shape
div {
  height: 180px;
  box-shadow: 1px 1px 3px gray;
  border-radius: 30px;
  corner-shape: scoop;
}
```

#### 結果

レンダリング結果は次のようになります。

{{EmbedLiveSample("basic-corner-shape", "100%", "240")}}

`corner-shape` の値を `scoop` にすると、コンテナーの角が凹型になる点に注目してください。この曲線はデフォルトの `border-radius` の曲線を反転させたものです。背景、境界線、ボックスシャドウが曲線の形状に沿う点にも注意してください。

### `corner-shape` に従うプロパティのデモ

#### HTML

この例のマークアップでは、単一の {{htmlelement("div")}} 要素の中にいくらかのコンテンツがあります。

```html-nolint live-sample___styles-following-corner-shape
<div>
  border、outline、box-shadow、 overflow、backdrop-filter など一部のスタイルは、角の形状に従います。これはデザインの様々な側面が衝突しないようにするのに役立ちます。ご覧の通り、興味深い視覚効果を生み出す可能性があるため、デザインを慎重にテストする必要があります。
</div>
```

#### CSS

コンテナーの角の形状に一部のスタイルが従う様子を示すため、文書の `<body>` に {{cssxref("background-image")}} を適用し、次に `<div>` に `border-radius` を `40px`、`corner-shape` を `scoop notch` と設定します。

次に、`<div>` 要素に次のものを適用します。

- 半透明の {{cssxref("background-color")}}。
- それぞれの角に異なる色とスタイルの {{cssxref("border")}}。
- {{cssxref("backdrop-filter")}} で `<body>` に設定された `background-image` を反転。
- `:hover` スタイルにより、クリック可能なコンテンツ領域が角の図形の外側にあることがわかるようにする。

簡潔にするため、それ以外のスタイル設定は省略しています。

```css hidden live-sample___styles-following-corner-shape
html {
  height: 100%;
}

body {
  font-family: "Helvetica", "Arial", sans-serif;
  height: inherit;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

div {
  width: 240px;
  height: 180px;
}

@supports not (corner-shape: scoop notch) {
  body {
    all: unset !important;
  }

  body::before {
    content: "このブラウザーは 'corner-shape' プロパティに対応していません。";
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
    padding: 1rem 0;
  }

  body > * {
    display: none;
  }
}
```

```css live-sample___styles-following-corner-shape
body {
  background: url("https://mdn.github.io/shared-assets/images/examples/leopard.jpg")
    no-repeat;
  background-size: cover;
}

div {
  border-radius: 40px;
  corner-shape: scoop notch;
  background-color: rgb(255 255 255 / 0.2);
  border-top: 3px solid blue;
  border-left: 6px dashed red;
  border-bottom: 9px solid yellow;
  border-right: 12px double green;
  backdrop-filter: invert(100%);
}

div:hover {
  background-color: white;
}
```

#### 結果

表示結果は次のようになります。

{{EmbedLiveSample("styles-following-corner-shape", "100%", "240")}}

設定されたスタイルのほとんどが、`corner-shape` スタイルによって生成された `<div>` の形状に従っていることに注目してください。ただし、すべてではありません。コンテンツは元となるボックスに対して相対的に表示され、左上隅と左下隅からはみ出したテキストの上にカーソルを合わせると、ホバー効果が適用されます。

### `corner-shape` の値の比較

このデモでは、異なる `corner-shape` 値を選択し、コンテナーに異なる {{cssxref("border-radius")}} 値を設定して、その効果を比較できます。

#### HTML

この例のマークアップには、様々な `corner-shape` 値を選択するための {{htmlelement("select")}} ピッカー、様々な `border-radius` 値を選択するための [`<input type="range">`](/ja/docs/Web/HTML/Reference/Elements/input/range) スライダー、これらの値を適用するためのコンテナーを生成する {{htmlelement("section")}} 要素があります。選択の {{htmlelement("option")}} 要素には複数のキーワードや {{cssxref("superellipse()")}} 値の選択肢を、{{htmlelement("optgroup")}} 要素によって 2 つのグループに分けています。 In the case of the keyword values, we've also included the `superellipse()` value equivalent for each one, separated by a pipe character.

```html live-sample___corner-shape-select
<form>
  <div>
    <label for="corner-shape-choice">corner-shape の値を選択:</label>
    <select id="corner-shape-choice">
      <optgroup label="Keywords">
        <option value="square">square | superellipse(infinity)</option>
        <option selected value="squircle">squircle | superellipse(2)</option>
        <option value="round">round | superellipse(1)</option>
        <option value="bevel">bevel | superellipse(0)</option>
        <option value="scoop">scoop | superellipse(-1)</option>
        <option value="notch">notch | superellipse(-infinity)</option>
      </optgroup>
      <optgroup label="Functions">
        <option>superellipse(3)</option>
        <option>superellipse(1.5)</option>
        <option>superellipse(0.5)</option>
        <option>superellipse(-0.5)</option>
        <option>superellipse(-1.5)</option>
        <option>superellipse(-3)</option>
      </optgroup>
    </select>
  </div>
  <div>
    <label for="radius-slider">border-radius の値を選択:</label>
    <input
      type="range"
      id="radius-slider"
      min="0"
      value="45"
      max="90"
      step="1" />
  </div>
</form>
<section></section>
```

#### CSS

{{cssxref("box-shadow")}} を `<section>` に適用します。`<section>` およびフォーム要素にいくらかの基本的なスタイルを設定していますが、簡略化のために省略しています。

```css hidden live-sample___corner-shape-select
html {
  font-family: "Helvetica", "Arial", sans-serif;
}

body {
  width: fit-content;
  margin: 20px auto;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

select {
  padding: 3px 5px;
}

form div:nth-of-type(2) {
  margin-top: 5px;
  display: flex;
}

section {
  width: 100%;
  height: 180px;
  background-color: gold;
  background-image: linear-gradient(
    to bottom,
    rgb(255 255 255 / 0),
    rgb(255 255 255 / 0.5)
  );
}

@supports not (corner-shape: scoop) {
  body {
    all: unset !important;
  }

  body::before {
    content: "このブラウザーは 'corner-shape' プロパティに対応していません。";
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
    padding: 1rem 0;
  }

  body > * {
    display: none;
  }
}
```

```css live-sample___corner-shape-select
section {
  box-shadow: 1px 1px 3px gray;
}
```

```js hidden live-sample___corner-shape-select
const rectangle = document.querySelector("section");
const select = document.querySelector("select");
const range = document.getElementById("radius-slider");

function setCorners() {
  rectangle.style.cornerShape = select.value;
  const brValue = `${range.value}px`;
  rectangle.style.borderRadius = brValue;
  rectangle.innerHTML = `<div><code>corner-shape: ${select.value};</code><br><code>border-radius: ${brValue};</code></div>`;
}

select.addEventListener("change", setCorners);
range.addEventListener("input", setCorners);
setCorners();
```

ユーザーが選択した値を `<section>` に適用する JavaScript は、簡略化のために省略しています。

#### 結果

表示結果は次のようになります。

{{EmbedLiveSample("corner-shape-select", "100%", "300")}}

様々な値を選択して、角の形状にどのような影響があるか試してみてください。

### `superellipse()` 値の比較

この例では、2 つの [`<input type="range">`](/ja/docs/Web/HTML/Reference/Elements/input/range) スライダーによって、様々な `corner-shape` の {{cssxref("superellipse()")}} 値や {{cssxref("border-radius")}} 値を切り替えながら、それぞれの値がコンテナーに与える効果を比較できます。

#### HTML

この例のマークアップには、様々な `corner-shape`、`superellipse()`、`border-radius` の値を選択できる 2 つの `<input type="range">` 要素と、それらの値を適用する {{htmlelement("section")}} 要素が含まれています。

```html live-sample___superellipse-slider
<form>
  <div>
    <label for="superellipse-slider">superellipse() 値を選択:</label>
    <input
      type="range"
      id="superellipse-slider"
      min="-5"
      value="0"
      max="5"
      step="0.1" />
  </div>
  <div>
    <label for="radius-slider">border-radius 値を選択:</label>
    <input
      type="range"
      id="radius-slider"
      min="0"
      value="45"
      max="90"
      step="1" />
  </div>
</form>
<section></section>
```

#### CSS

{{cssxref("box-shadow")}} を `<section>` 要素に適用します。それ以外の基本的なスタイルは、簡略化のため省略しています。

```css hidden live-sample___superellipse-slider
html {
  font-family: "Helvetica", "Arial", sans-serif;
}

body {
  width: fit-content;
  margin: 20px auto;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

form div {
  margin-top: 5px;
  display: flex;
}

section {
  width: 100%;
  height: 180px;
  background-color: orange;
  background-image: linear-gradient(
    to bottom,
    rgb(255 255 255 / 0),
    rgb(255 255 255 / 0.5)
  );
}

@supports not (corner-shape: superellipse(0)) {
  body {
    all: unset !important;
  }

  body::before {
    content: "このブラウザーは 'corner-shape' プロパティに対応していません。";
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
    padding: 1rem 0;
  }

  body > * {
    display: none;
  }
}
```

```css live-sample___superellipse-slider
section {
  box-shadow: 1px 1px 3px gray;
}
```

```js hidden live-sample___superellipse-slider
const rectangle = document.querySelector("section");
const superEllipseRange = document.getElementById("superellipse-slider");
const borderRadiusRange = document.getElementById("radius-slider");

function setCorners() {
  const seValue = `superellipse(${superEllipseRange.value})`;
  rectangle.style.cornerShape = seValue;
  const brValue = `${borderRadiusRange.value}px`;
  rectangle.style.borderRadius = brValue;
  rectangle.innerHTML = `<div><code>corner-shape: ${seValue};</code><br><code>border-radius: ${brValue};</code></div>`;
}

superEllipseRange.addEventListener("input", setCorners);
borderRadiusRange.addEventListener("input", setCorners);
setCorners();
```

JavaScript でユーザーが選択した値を `<section>` に適用していますが、簡略化のため省略しています。

#### 結果

表示結果は次のようになります。

{{EmbedLiveSample("superellipse-slider", "100%", "300")}}

様々な値を選択して、角の形状にどのような影響があるか試してみてください。

### `corner-shape` のアニメーション

この例では、`corner-shape` プロパティがどのようにアニメーションするかを実演します。

#### HTML

```html live-sample___corner-shape-animation
<div></div>
```

#### CSS

{{cssxref("@keyframes")}} で `corner-shape` の値を `square` と `notch` の間で円滑にアニメーションさせます。その後、その `@keyframes` に基づく {{cssxref("animation")}} を、親となる `<html>` 要素にホバーまたはフォーカスが当てられた際に `<div>` に適用します。簡潔化のため、追加の基本的な `<div>` スタイルは省略しています。

```css hidden live-sample___corner-shape-animation
body {
  width: 200px;
  margin: 20px auto;
}

div {
  width: 100%;
  height: 200px;
  background-color: green;
  background-image: linear-gradient(
    to bottom,
    rgb(255 255 255 / 0),
    rgb(255 255 255 / 0.5)
  );
  box-shadow: 1px 1px 3px gray;
  border-radius: 50%;
  corner-shape: square;
  outline: none;
}

@supports not (corner-shape: square) {
  body {
    all: unset !important;
  }

  body::before {
    content: "このブラウザーは 'corner-shape' プロパティに対応していません。";
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
    padding: 1rem 0;
  }

  body > * {
    display: none;
  }
}
```

```css live-sample___corner-shape-animation
@keyframes corner-pulse {
  0% {
    corner-shape: square;
  }

  /* 始点を明確にするため、しばらくの間は形状を同じに保ちます。 */
  20% {
    corner-shape: square;
  }

  100% {
    corner-shape: notch;
  }
}

div {
  animation: corner-pulse infinite alternate 4s linear;
}
```

#### 結果

表示結果は次のようになります。

{{EmbedLiveSample("corner-shape-animation", "100%", "270")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref("border-radius")}}
- [CSS 境界とボックス装飾](/ja/docs/Web/CSS/Guides/Borders_and_box_decorations)モジュール
- [CSS 背景と境界](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders)モジュール
- [CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations)モジュール
