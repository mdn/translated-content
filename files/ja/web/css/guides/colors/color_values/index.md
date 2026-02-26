---
title: CSS 色値
short-title: 色値
slug: Web/CSS/Guides/Colors/Color_values
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

CSS で色を表現するには、アナログ的な「色」の概念を、コンピューターが扱えるデジタル形式に変換する方法を見つける必要があります。これは通常、色を構成要素（例えば、混ぜ合わせる各原色の量、あるいは明度や色相など）に分解することで実現されます。定義された色モデルにより、どこでレンダリングされても同じように色が表示されることが保証されます。

色モデルとは、数値を用いて色を表現する数学的モデルです。色モデルは、色空間内で利用可能な色を生成する方法を記述します。{{glossary("RGB")}} は、ウェブ向けの最初の色モデルでした。RGB 色モデルの `sRGB` 色空間（標準的な赤・緑・青の色空間）は、1996 年にコンピュータモニターとウェブ向けに作成されました。{{glossary("color space", "色空間")}}とは、任意の色を一貫して記述できるように色をグループ化するシステムです。異なる 2 つの色空間間で色を変換した場合、両方で同じように見えるべきです。

当初、モニターが表現できる色数は限られており、CSS の色もその制約に縛られていました。しかし技術の進歩に伴い、その範囲は拡大していきました。現代の端末では RGB に限定されなくなったため、人間の知覚に基づいたカラーモデルも採用され、はるかに広い{{glossary("gamut", "色域")}}が実現されています。現在では CSS で色を記述する方法が複数存在し、その選択肢は拡大し続けています。

このガイドでは、さまざまな {{cssxref("&lt;color&gt;")}} 値型を紹介します。より詳しい説明は、以下にあるリンクを参照してください。

## キーワード

ウェブでは、数値表現の代わりにキーワードを使用して色を記述できる標準的な色名のセットが定義されています。これはより簡便ではあるものの制限のある手法です。使用したい正確な色を表すキーワードが存在しない可能性があります。

色キーワードには、標準的な原色および二次色（`red`、`blue`、`orange` など）、グレーの濃淡（`black` から `white` まで、`darkgray` や `lightgrey` などの色を含む）、および `lightseagreen`、`cornflowerblue`、`rebeccapurple` など様々な混合色があります。名前付き色は [RGB](/ja/docs/Glossary/RGB) モデルを使用し、sRGB (`srgb`) 色空間に関連付けられています。

160以上の名前付き色が存在します。特に興味深い名前付き色があります。[`transparent`](/ja/docs/Web/CSS/Reference/Values/named-color#transparent) は透明な色値を設定し、`currentColor` は CSS の {{cssxref("color")}} プロパティの現在の値を設定します。また、`accentcolortext` や `buttonface` などの名前付きシステム色 ({{cssxref("system-color")}}) もあり、これらはユーザー、ブラウザー、オペレーティングシステムによって選択されたデフォルトの色を反映します。

すべての色キーワードは大文字小文字を区別しません。色キーワードの詳細については、{{cssxref("named-color")}} データ型を参照してください。

## RGB 値

CSSでは、{{glossary("RGB")}} 色を赤・緑・青の成分で定義する主な方法が 2 つあります。16 進数と `rgb()` 値です。名前付き色と同様、これらの方法は [RGB](/ja/docs/Glossary/RGB) モデルを使用し、sRGB (`srgb`) 色空間に関連付けられています。ただし、これらははるかに広い範囲の色を指定することが可能です。

### 16 進数文字列記法

16 進数 (hex) 文字列記法は、RGB カラーの各成分（赤、緑、青）を 16 進数値で表します。また、4 つ目の成分であるアルファチャンネル（または不透明度）を含む場合もあります。

16 進数文字列記法の色は、常に文字 `"#"` で始まります。その後ろに色コードの 16 進数が続きます。文字列の大文字小文字は区別されません。

- `"#rrggbb"`
  - : 完全に不透明な色を指定します。赤成分は 16 進数 `0xrr`、緑成分は `0xgg`、青成分は `0xbb` です。

- `"#rrggbbaa"`
  - : 赤成分は 16 進数 `0xrr`、緑成分は `0xgg`、青成分は `0xbb` で指定します。アルファチャンネルは `0xaa` で指定され、この値が低いほど色はより半透明になります。

- `"#rgb"`
  - : 赤の成分が 16 進数 `0xrr`、緑の成分が `0xgg`、青の成分が `0xbb` である色を指定します。

- `"#rgba"`
  - : 赤の成分が 16 進数 `0xrr`、緑の成分が `0xgg`、青の成分が `0xbb` である色を指定します。アルファチャンネルは `0xaa` で指定され、この値が低いほど色はより半透明になります。

上記のように、赤、緑、青の各色成分は、0 (`00`) から 255 (`FF`) までの数値を表す 2 桁の 16 進数、または 0 (`0`) から (`F`)までの数値を表す 1 桁の 16 進数でそれぞれ表現できます。

> [!NOTE]
> 上記の値の先頭にある `0x` は、16 進数の整数リテラルを示します。16 進数の整数には、数字（`0` ～ `9`）と文字 `a` ～ `f` および `A` ～ `F` を含めることができます。文字の大文字小文字は値に影響しません。したがって `0xa` = `0xA` = `10` であり、`0xf` = `0xF` = `15` となります。

これらの 2 つの 16 進色は同等の色値です。どちらも赤です：

```css
color: #ff0000;
color: #f00;
```

すべての色成分は、同じ桁数で指定しなければなりません。1桁記法を使用する場合、最終的な色は各色成分の桁を2回使用して計算されます。つまり、描画時には `"#D"` が `"#DD"` となります。

値を 25% 不透明にするには、以下に示すようにアルファチャンネル値を追加します。

```css
color: #ff000044;
color: #f004;
```

色の16進数文字列記法に関する詳細は、{{cssxref("hex-color")}} データ型を参照してください。

#### HTML の色入力型

ウェブサイトでは、ユーザーに色を選択させる必要がある場面が数多く存在します。カスタマイズ可能なユーザーインターフェイスがある場合や、描画アプリを実装している場合などが考えられます。編集可能なテキストがあり、ユーザーに文字色を選ばせる必要があるかもしれません。あるいは、アプリでフォルダーやアイテムに色を割り当てさせる場合もあるでしょう。このような用途のために、{{HTMLElement("input")}} 要素には `"color"` [`type`](/ja/docs/Web/HTML/Reference/Elements/input#type) という属性があり、カラーピッカーコントロールを表示します。

この例では色を選択することができ、選択すると {{cssxref("border-color")}} がその色に設定され、値が表示されます。

```html
<div id="box">
  <label for="colorPicker">境界色:</label>
  <input type="color" value="#8888ff" id="colorPicker" />
  <output></output>
</div>
```

HTML は、カラーピッカーコントロール（{{HTMLElement("label")}} 要素で作成されたラベル付き）と、JavaScript を使用して色の値を出力する空の {{HTMLElement("output")}} 要素を含むボックスを作成します。カラー入力の値は常に 16 進数文字列です。

{{EmbedLiveSample("HTML color input type", 525, 120)}}

```css hidden
#box {
  width: 500px;
  height: 100px;
  border: 5px solid rgb(245 220 225);
  padding: 4px 6px;
  font:
    16px "Lucida Grande",
    "Helvetica",
    "Arial",
    sans-serif;
}
```

以下の JavaScript は、境界線の色をカラーピッカーの初期値に合わせて更新し、その後 [`<input type="color">`](/ja/docs/Web/HTML/Reference/Elements/input/color) 要素に 2 つのイベントハンドラーを登録して、その値の変更に対応します。

```js
const colorPicker = document.querySelector("#colorPicker");
const box = document.querySelector("#box");
const output = document.querySelector("output");

box.style.borderColor = colorPicker.value;

colorPicker.addEventListener("input", (event) => {
  box.style.borderColor = event.target.value;
});

colorPicker.addEventListener("change", (event) => {
  output.innerText = `${colorPicker.value}`;
});
```

{{domxref("Element/input_event", "input")}} イベントは、要素の値が変更されるたびに送信されます。つまり、ユーザーがカラーピッカーで色を調整するたびに送信されます。このイベントが到着するたびに、ボックスの境界線の色をカラーピッカーの現在の値に合わせて設定します。

{{domxref("HTMLElement/change_event", "change")}} イベントは、カラーピッカーの値が確定したときに受信されます。これに対応して、`<output>` の内容を、選択された色の文字列値に設定します。

### RGB 関数記法

RGB（赤/緑/青）関数記法は、16 進数文字列記法と同様に、色を赤、緑、青の成分（およびオプションで不透明度を表すアルファチャンネル成分）を用いて表現します。ただし、文字列ではなく、CSS 関数 {{cssxref("color_value/rgb", "rgb()")}} を用いて色を定義します。この関数は 3 つまたは 4 つの入力引数（赤、緑、青の成分値とオプションのアルファチャンネル値）を受け付けます。

それぞれの引数の値の規則は次のとおりです。

- `red`, `green`, `blue`
  - : それぞれの値は、{{cssxref("&lt;number&gt;")}} で 0 から 255（両端を含む）、または {{cssxref("&lt;percentage&gt;")}} で 0% から 100%、キーワード `none`（この場合 `0` に等しい）のいずれかでなければなりません。

- `alpha`
  - : アルファチャンネルは、パーセント値で `0%`（完全な透明）から `100%`（完全な不透明）の間、または数値で `0.0`（`0%` に相当）から `1.0`（`100%` に相当）の間で指定されます。

例えば、不透明度 50% の鮮やかな赤は、`rgb(255 0 0 / 50%)` または `rgb(100% 0 0 / 0.5)` と表現できます。

RGB関数記法の詳細については、{{cssxref("color_value/rgb", "rgb()")}} 色関数を参照してください。

## 色相成分のある色関数

[`<hue>`](/ja/docs/Web/CSS/Reference/Values/hue) 成分、すなわち{{glossary("color wheel", "色相環")}}の角度 ([`<angle>`](/ja/docs/Web/CSS/Reference/Values/angle)) を持つ色関数には、`srgb` の色関数である `hsl()` と `hwb()`、CIElab の `lch()` 関数、OKLab の `oklch()` 色関数があります。これらの色関数はより直感的であり、色相によって赤、オレンジ、黄、緑、青などの色の差異や類似性を判別できます。

### HSL 関数記法

CSS の `hsl()` 色関数は、ブラウザーが初めて対応した色相ベースの色関数です。`hsl()` は `rgb()` よりも直感的であり、赤・緑・青の各チャンネル値で特定の色を宣言するよりも、色相(`h`)、彩度 (`s`)、明度 (`l`) の値を変化させた際の効果を把握しやすい特徴があります。さらに、HSL は Photoshop の HSB（色相、彩度、明度）カラーピッカーと類似しているため、初めて対応された際、多くの人々が直感的に理解することができました。

`hsl()` および `hwb()` の sRGB 色関数はどちらも円筒座標系です。色相 (Hue) は、円形の{{glossary("color wheel", "色相環")}}上での角度 ([`<angle>`](/ja/docs/Web/CSS/Reference/Values/angle)) として色を定義します。下図は HSL 色円柱を示しています。彩度 (Saturation) はパーセントで表され、完全なグレースケールから、その色相で可能な最大量までのスケール上で、色がどこにあるかを定義します。
明度の値が大きくなるにつれて、色は最も暗い色から最も明るい色（黒から白）へと変化します。

![HSL 色円柱](640px-hsl_color_solid_cylinder.png)

画像提供：[Wikipedia](https://en.wikipedia.org/) ユーザー [SharkD](https://commons.wikimedia.org/wiki/User:SharkD)、[CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) ライセンスに基づき配布。

HSL（または HWB）色の色相 (`H`) 成分の値は角度であり、0° で赤から始まり、黄色、緑、シアン、青、マゼンタを経て、360° で再び赤に戻ります。この値は、CSS がサポートする任意の {{cssxref("&lt;angle&gt;")}} 単位（度 (`deg`)、ラジアン (`rad`)、グラディアン (`grad`)、回転 (`turn`) など）で指定できます。色相値は色の基本となる色調を特定しますが、色の鮮やかさや鈍さ、明暗は制御しません。

彩度 (`S`) は、指定された色相が最終的な色に占める割合をパーセント値で指定します。100% は再度が最高であり、0% は色が完全に欠如した状態（グレースケール）です。明度 (`L`) は、完全に黒 (`0%`) から完全に白 (`100%`) までのスライディングスケールで、色の明るさを指定します。オプションでアルファチャンネルを含めることも可能です。スラッシュ (`/`) を前に付けることで、色の不透明度を 100% 未満に設定できます。

HSL 記法によるサンプル色を以下に示します。

```css hidden
table {
  border: 1px solid black;
  font:
    16px "Open Sans",
    "Helvetica",
    "Arial",
    sans-serif;
  border-spacing: 0;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid black;
  padding: 4px 6px;
  text-align: left;
}

th {
  background-color: hsl(0 0% 75%);
}
```

```html hidden
<table>
  <thead>
    <tr>
      <th scope="col">HSL 記法での色</th>
      <th scope="col">例</th>
    </tr>
  </thead>
  <tbody></tbody>
</table>
```

```js hidden
const colors = [
  "hsl(90deg 0% 50%)",
  "hsl(90 100% 50%)",
  "hsl(0.15turn 50% 75%)",
  "hsl(0.15turn 90% 75%)",
  "hsl(0.15turn 90% 50%)",
  "hsl(270deg 90% 50% / 50%)",
];

const tbody = document.querySelector("tbody");
for (const color of colors) {
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  td1.appendChild(document.createElement("code")).textContent = color;
  const td2 = document.createElement("td");
  td2.style.backgroundColor = color;
  tr.appendChild(td1);
  tr.appendChild(td2);
  tbody.appendChild(tr);
}
```

{{EmbedLiveSample("HSL_functional_notation", 300, 200)}}

最後の値は半透明です。オプションのアルファ値を含み、その前にスラッシュが付きます。

> [!NOTE]
> 色相の単位を省略した場合、度 (`deg`) 単位とみなされます。

### HWB 関数記法

[`hwb()`](/ja/docs/Web/CSS/Reference/Values/color_value/hwb) 色関数は、`hsl()` と同じ色相座標系を使用し、`0deg` が赤を表します。ただし、`hsl()` の明度と彩度とは異なり、`hwb()` 関数は白度 (`W`) と黒度 (`B`) を指定します。この関数はとても直感的で、色相を選び、白や黒を混ぜることで目的の色を実現できます。

`W` と `B` の値は `0%` から `100%`（または `0` から `1`）の範囲です。`W` と `B` の合計値が 100%（または `1`）以上の場合、色はグレーになります。これは `hsl()` で `s` を `0%` に設定した場合と同様です。`hsl()` と同様に、スラッシュ `/` を先頭に付けることで、オプションのアルファ値を含めることができます。

HWB 記法の使用例をいくつか示します。

```css
/* これらの例はすべて、ライムグリーンの様々な濃淡を指定しています。 */
hwb(90 10% 10%)
hwb(90 50% 10%)
hwb(90deg 10% 10%)
hwb(1.5708rad 60% 0%)
hwb(.25turn 0% 40%)

/* 同じライムグリーンだが、アルファ値付き */
hwb(90 10% 10% / 0.5)
hwb(90 10% 10% / 50%)
```

以下の例では、`hsl()` の例と同じ色相を設定しますが、彩度と明度ではなく `hwb()` を用いて各色相に白みと黒みを加えています。

```css hidden live-sample___hwb_functional_notation
table {
  border: 1px solid black;
  font:
    16px "Open Sans",
    "Helvetica",
    "Arial",
    sans-serif;
  border-spacing: 0;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid black;
  padding: 4px 6px;
  text-align: left;
}

th {
  background-color: hwb(0 75% 25%);
}
```

```html hidden live-sample___hwb_functional_notation
<table>
  <thead>
    <tr>
      <th scope="col">HWB 記法での色</th>
      <th scope="col">例</th>
    </tr>
  </thead>
  <tbody></tbody>
</table>
```

```js hidden live-sample___hwb_functional_notation
const colors = [
  "hwb(90deg 50% 50%)",
  "hwb(90 0% 0%)",
  "hwb(0.15turn 25% 0%)",
  "hwb(0.15turn 10% 25%)",
  "hwb(1turn 10% 65%)",
  "hwb(270deg 75% 10%)",
];

const tbody = document.querySelector("tbody");
for (const color of colors) {
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  td1.appendChild(document.createElement("code")).textContent = color;
  const td2 = document.createElement("td");
  td2.style.backgroundColor = color;
  tr.appendChild(td1);
  tr.appendChild(td2);
  tbody.appendChild(tr);
}
```

{{EmbedLiveSample("HWB_functional_notation", 300, 200)}}

### LCH と OkLCh: CIELAB および Oklab 色空間

`hsl()` と `hwb()` は直感的ですが、重大な欠点があります。これらの関数では、完全に飽和した色相角（`hsl(<angle> 100% 50%)` または `hwb(<angle> 0% 0%)`）はすべて同じ明度を持ちますが、人間の視覚やモニターはそうは機能しません。完全に飽和した青（`hsl(240deg 100% 50%)`）に白文字を配置すると可読性がありますが、同じ文字を完全に飽和した黄色（`hsl(60deg 100% 50%)`）に配置すると、可読性が失われるだけでなく、ユーザーの目に負担をかける可能性があります。これらの色関数では、色の明度は人間の知覚ではなく、他の色との相対的な関係で決定されるのです。実際には、すべての色相が同じ最大彩度を持つわけではありません。

サイト上の色の色相チャンネルを、文字が読めなくなることなく簡単に変更できたら素晴らしいと思いませんか？CIELAB および Oklab 色空間の色関数を使えば可能です。

CIELAB および Oklab 色空間は、人間が認識可能な全色域を表現します。CIE Lab 色関数には [`lch()`](/ja/docs/Web/CSS/Reference/Values/color_value/lch) と [`lab()`](/ja/docs/Web/CSS/Reference/Values/color_value/lab) があります。Oklab 色関数には [`oklch()`](/ja/docs/Web/CSS/Reference/Values/color_value/oklch) と [`oklab()`](/ja/docs/Web/CSS/Reference/Values/color_value/oklab) があります。これらのモデルの主な目的は、色空間内の任意の 2 点間の距離が、観察者にとって均等に異なるように見えるように均一化されていることです。Oklab は CIELAB と同じモデルタイプを使用する色空間ですが、追加の数値最適化ステップを用いて構築されているため、値は CIELAB よりも正確であると考えられています。この最適化により、色相は知覚的により均一になります。

`lch()` および `oklch() `関数は明度 (`L`)、彩度 (`C`)、色相 (`H`) を使用し、この節でさらに詳しく説明します。[`lab()` および `oklab()`](#lab_および_oklab) 関数は異なる仕組みで動作し、明度 (`L`)、赤/緑成分（`a` 軸方向）、黄/青成分（`b` 軸方向）を使用します。これらの軸は直交座標と呼ばれます。これらの色関数の主な利点は、「明度」が知覚明度であることです。これは他の色との比較による明度ではなく、人間の目で知覚される色の明るさです。

sRGB の色相関数と同様に、`lch()` および `oklch()` における色相 (`h`) 値は、数値、角度、または色の `<hue>` 角度を表すキーワード `none`（`0deg` と同等）です。ただし、各角度値における色は同一ではありません。特定の色相に対応する角度は、sRGB、CIELAB（`lch()` で使用）、Oklab（`oklch()` で使用）の色空間同士で異なります。

以下のグラデーションは、sRGB、CIE Lab、OKlab の色空間において、`0deg` から `360deg` までの全角度における色相の色を示しています。

```html hidden live-sample___hues
<p>sRGB (<code>hsl()</code> および <code>hwb()</code>)</p>
<div id="srgb"></div>
<p>CIE Lab (<code>lch()</code>)</p>
<div id="lch"></div>
<p>OKLab (<code>oklch()</code>)</p>
<div id="oklch"></div>
<p>
  <label><input type="checkbox" /> グレースケール切り替え</label>
</p>
```

```css hidden live-sample___hues
div:has(~ p input:checked) {
  filter: grayscale(100%);
}
p {
  margin: 0;
}
div {
  height: 50px;
  margin-bottom: 10px;
}
#srgb {
  background: linear-gradient(
    to right,
    hsl(0deg 100% 50%),
    hsl(90deg 100% 50%),
    hsl(180deg 100% 50%),
    hsl(270deg 100% 50%),
    hsl(360deg 100% 50%)
  );
}
#lch {
  background: linear-gradient(
    to right,
    lch(50% 100% 0deg),
    lch(50% 100% 90deg),
    lch(50% 100% 180deg),
    lch(50% 100% 270deg),
    lch(50% 100% 360deg)
  );
}
#oklch {
  background: linear-gradient(
    to right,
    oklch(50% 100% 0deg),
    oklch(50% 100% 90deg),
    oklch(50% 100% 180deg),
    oklch(50% 100% 270deg),
    oklch(50% 100% 360deg)
  );
}
```

{{embedlivesample("hues", '100', '260') }}

後者のグラデーションは、sRGB グラデーションよりも色相スペクトル全体で明るさが均一であることに気付くかもしれません。上記の例でチェックボックスを選択すると、色相グラデーションがグレースケールに変換され、この点がより明確になります。

また、CIE Lab における青の値の広がりが他の 2 つよりも長い点にも注目してください。これが `lch()` と `oklch()` の違いです。`lch()` の青の広がりは、色相値の彩度と明度が `270deg` から `330deg` の間でシフトするバグによるものです。これは oklab 色空間、すなわち `oklch()` 色表記において解決されました。

前述の通り、`lch()` および `oklch()` における色相 (`H`) は、`<angle>`、`number`、またはキーワード `none` のいずれかです。明度　(`lightness`) は、{{cssxref("percentage")}} であるか、`lch()` では `0` から `100` の間の数値、`oklch()` では `0` から `1` の間の数値であり、`0` または `0%` は明度が完全に欠如した状態、つまり黒を表します。

`C` は `<number>`、`<percentage>`、またはキーワード`none`（`0%`と同等）のいずれかであり、色の彩度（色味）を表します。これは `hsl()` 色関数の `S`（彩度）値に似ています。値 `0` は彩度（または飽和度）が完全に欠如した状態を示し、明度値に応じて白から黒までの間の灰色を生成します。数値は理論上無制限で、`lch()` では `100%` が `150` に、`oklch()` では `0.4` に相当します。

他の色関数と同様に、スラッシュ（`/`）で始まるオプションのアルファ透過値も存在します。

以下の例は、`lch()` および `oklch()` 関数における明度値の変更効果を示しています。

```css hidden live-sample___lch-colors
/* 様々なピンクの色合い */
.container {
  display: grid;
  font-family: sans-serif;
  font-size: 14px;
  color: white;
  grid-template-columns: repeat(6, 1fr);
  gap: 4px;
}

.dark-text {
  color: lch(1% 40 0deg);
}

.container div {
  border-radius: 8px;
  padding: 8px 4px;
}
```

```html hidden live-sample___lch-colors
<div class="container"></div>
```

```js hidden live-sample___lch-colors
const container = document.querySelector(".container");
for (let l = 0; l <= 100; l += 10) {
  const div = document.createElement("div");
  const usedL = l === 0 ? 1 : l === 100 ? 99 : l;
  div.textContent = div.style.backgroundColor = `lch(${usedL}% 40 0)`;
  if (usedL >= 80) div.classList.add("dark-text");
  container.appendChild(div);
}
container.appendChild(document.createElement("div"));
for (let l = 0; l <= 100; l += 10) {
  const div = document.createElement("div");
  const usedL = l === 0 ? 1 : l === 100 ? 99 : l;
  div.textContent = div.style.backgroundColor = `oklch(${usedL}% 0.12 0)`;
  if (usedL >= 80) div.classList.add("dark-text");
  container.appendChild(div);
}
```

{{embedlivesample("lch-colors", '100', '200') }}

## Lab および OKLab

[`lab()`](/ja/docs/Web/CSS/Reference/Values/color_value/lab) 関数表記は、CIE L\*a\*b\* 色空間における指定された色を表現します。[`oklab()`](/ja/docs/Web/CSS/Reference/Values/color_value/oklab) 関数は OKLab 色空間で色を定義します。これらの関数は、色の明度 (`L`)、赤/緑軸の値 (`a`)、青/黄軸の値 (`b`)、およびオプションのアルファ透過度値を指定することで、人間が認識可能な全色域を表現します。

`lch()` および `oklch()` と同様に、`lightness` は次のどちらかです。

- {{cssxref("percentage")}}。`0%` は完全な黒、`100%` は完全な白を表します。
- `lab()` では `0` から `100` の間の数値、`oklab()` では `0` から `1` の間の数値。ここで `0` は完全な黒、`1`/`100` は完全な白を表します

`a` の値は、`lab()` では `-125` から `125` の間、`oklab()` では `-0.4` から `0.4` の間、`-100%` から `100%` の間の `<percentage>`、またはキーワード `none`（この場合 `0%` に相当）です。この値は、色空間におけるa軸に沿った色の距離を指定し、色がどの程度緑（-100% 方向へ移動）または赤（+100% 方向へ移動）であるかを定義します。

これらの値は符号付き（正負両方の値を許容）であり、理論上は制限がないため、±125 または ±0.4 (±100%) の限界を超える値を設定できます。ただし実際には、値はそれぞれ ±160 または ±0.5 を超えることはできません。

`b` 値にも同様の制約があります。これは色空間における b 軸方向の色距離を指定し、色が青（-100% 方向）か黄色（+100% 方向）かを定義します。

次の例は、`lab()` 関数で `a` 軸を、`oklab()` 関数で `b` 軸を変更した場合の効果を示しています。

```html hidden live-sample___lab-colors
<div class="container"></div>
```

```css hidden live-sample___lab-colors
/* 様々なピンクの色合い */
.container {
  display: grid;
  font-family: sans-serif;
  font-size: 14px;
  color: white;
  grid-template-columns: repeat(5, 1fr);
  gap: 4px;
}
.container div {
  border-radius: 8px;
  padding: 8px 4px;
}
```

```js hidden live-sample___lab-colors
const container = document.querySelector(".container");

for (let a = -100; a <= 100; a += 25) {
  const div = document.createElement("div");
  div.textContent = div.style.backgroundColor = `lab(50% ${a}% 0)`;
  container.appendChild(div);
}
container.appendChild(document.createElement("div"));
for (let b = -4; b <= 4; b++) {
  const div = document.createElement("div");
  div.textContent = div.style.backgroundColor = `oklab(50% 0 ${b / 10})`;
  container.appendChild(div);
}
```

{{embedlivesample("lab-colors", '100', '150') }}

## その他の色関数記法

### `color()` 関数

色を定義する際に色空間を明示的に制御したい場合は、[`color()`](/ja/docs/Web/CSS/Reference/Values/color_value/color) 関数を使用できます。

これは、より広い色域を持つ高精細端末向けに色を記述するのに有用です。
例えば、sRGB 色域外の色である `display-p3 0 0 1` を表示したい場合、`@media` [`color-gamut`](/ja/docs/Web/CSS/Reference/At-rules/@media/color-gamut) アットルールを使用して、クライアントのハードウェアがこの範囲の色に対応しているかどうかを検出することができます。その後、その色を使用しようと試みます。

```css
.vibrant {
  background-color: color(srgb 0 0 1);
}

@media (color-gamut: p3) {
  .vibrant {
    background-color: color(display-p3 0 0 1);
    /* Equivalent to out-of-gamut color(srgb 0 0 1.042) */
  }
}
```

相対的な色について次に説明する際に、`color()` を理解することは重要です。前述の古い sRGB の色表記法——`hsl()`、`hwb()`、`rgb()`——では可視色の全スペクトルを表現できませんが、`color()` 関数ははるかに広い色域に対応します。結果として、古い関数型で相対色を定義する場合、{{domxref("HTMLElement.style")}} プロパティまたは {{domxref("CSSStyleDeclaration.getPropertyValue()")}} メソッドで取得される出力色は `color(srgb ...)` 値となります。

`rgb()`、`hsl()`、`hwb()`、その他の[色形式](/ja/docs/Web/CSS/Reference/Values/color_value)を変換する例は、[色形式コンバーター](/ja/docs/Web/CSS/Guides/Colors/Color_format_converter)を参照してください。

### 相対色

上記のすべての色関数を使用して、[**相対色**](/ja/docs/Web/CSS/Guides/Colors/Using_relative_colors) を定義することができます。これにより、{{cssxref("&lt;color&gt;")}} の値を毎回一から定義する代わりに、既存の色を基準にして相対的に定義することが可能になります。この強力な機能により、既存色の補色（元の色の明るい色・暗い色・彩度の高い色・半透明のバリエーション・反転色など）を作成できます。相対色はパレット作成や色調整の定義に効果的な仕組みを提供します。各色関数のページで相対構文の詳細を確認してください。

前述の通り、`rgb()`、`hsl()`、`hwb()` を使用して相対色を出力する場合、出力される色は `srgb` 色空間における `color()` 関数となります。

### color-mix() 関数

{{cssxref("color_value/color-mix", "color-mix()")}} 関数は、上記のいずれかの構文で指定された 2 つの色値（各色に対する割合のパーセント値をオプションで含む）を受け取り、指定された色空間において指定された割合でそれらを混合した結果を返します。

### light-dark() 関数

{{cssxref("color_value/light-dark", "light-dark()")}} 関数を使用すると、明るい色調と暗い色調のそれぞれで使用されるプロパティに対して、2 つの色値を指定できます。どちらが設定されるかは、開発者が明るい色調または暗い色調を設定したか、ユーザーが明るい色調または暗い色調をリクエストしたかによって決まります。これはショートカット関数であり、 {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} メディア特性クエリと同等の結果を、より少ないコードで実現できます。

## 関連情報

- [CSS を使った HTML の要素への色の適用](/ja/docs/Web/CSS/Guides/Colors/Applying_color)
- [賢い色の使用](/ja/docs/Web/CSS/Guides/Colors/Using_color_wisely)
- [相対色の使用](/ja/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- [色と輝度を理解する](/ja/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [WCAG 1.4.1: 色のコントラスト](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [CSS 色モジュール](/ja/docs/Web/CSS/Guides/Colors)
