---
title: CSS `<blend-mode>` データ型
short-title: <blend-mode>
slug: Web/CSS/Reference/Values/blend-mode
l10n:
  sourceCommit: c88e03530319b73272fd4f9a9f6ebe878f026004
---

**`<blend-mode>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/Reference/Values/Data_types)で、要素が重なったときにどのように色が現れるかを記述します。{{cssxref("background-blend-mode")}} および {{cssxref("mix-blend-mode")}} プロパティで使用されます。

## 構文

`<blend-mode>` データ型は、以下に挙げたキーワードのうちの一つで定義します。

### 値

- `normal`
  - : 下の色が何であるかに関わらず、上の色が最終的な色になります。
    この効果は 2 枚の不透明の紙が重なっているようなものです。
- `multiply`
  - : 上の色と下の色を掛け合わせた結果が最終的な色になります。
    黒いレイヤーは最終的に黒いレイヤーになり、白いレイヤーは変化をもたらしません。
    この効果は 2 枚の透明なフィルムに印刷された画像を重ね合わせたようなものです。
- `screen`
  - : 色を反転して乗算を行い、さらに色を反転した結果が最終的な色になります。
    黒いレイヤーは変化をもたらしません。白いレイヤーは、最終的に白いのレイヤーへ近づけます。
    この効果は 2 枚の画像が画面に投影された状況に似ています。
- `overlay`
  - : 下の色が暗ければ `multiply`、下の色が明るければ `screen` の結果が最終的な色になります。
    この混合モードは `hard-light` と同等ですが、レイヤーは逆です。
- `darken`
  - : 色成分ごとに最も暗い値が最終的な値になります。
- `lighten`
  - : 色成分ごとに最も明るい値が最終的な値になります。
- `color-dodge`
  - : 下の色を、反転した上の色で除算した結果が、最終的な色になります。
    黒い前景は変化をもたらしません。背景色を反転した色を持つ前景は、完全に明るい色に導きます。
    この混合モードは `screen` に似ていますが、明るさが最大の色を生成するには、背景色を背景色を反転した色と同程度の明るさの前景色が必要です。
- `color-burn`
  - : 反転した下の色を上の色で除算して、さらに反転した結果が最終的な色になります。
    白い背景は変化をもたらしません。背景色を反転した色を持つ前景は、最終的に黒い画像へ近づけます。
    この混合モードは `multiply` に似ていますが、最終的に画像を黒くするためには、背景色を反転した色と同程度の暗さの前景色が必要です。
- `hard-light`
  - : 上の色が暗い色であれば `multiply` 、明るい色であれば `screen` の結果が最終的な色になります。
    この混合モードは `overlay` と同じですが、レイヤーが入れ替わっています。
    この効果は、背景に*強烈な*スポットライトを当てた状況に似ています。
- `soft-light`
  - : 最終的な色は `hard-light` に似ていますが、よりソフトになります。
    この混合モードは `hard-light` に似ています。
    この効果は、背景に*拡散光の*スポットライトを当てた状況に似ています。
- `difference`
  - : 2 つの色のうち明るい色から、暗い色を減算した結果が最終的な色になります。
    黒いレイヤーは変化をもたらしません。白いレイヤーは、もうひとつのレイヤーの色を反転します。
- `exclusion`
  - : 最終的な色は `difference` に似ていますが、コントラストが低くなります。
    `difference` と同様に、黒いレイヤーは変化をもたらしません。白いレイヤーは、もうひとつのレイヤーの色を反転します。
- `hue`
  - : 最終的な色は上の色の*色相*を持ちますが、*彩度*および*明度*は下の色の値を使用します。
- `saturation`
  - : 最終的な色は上の色の*彩度*を持ちますが、*色相*および*明度*は下の色の値を使用します。
    彩度を持たない純粋なグレーの背景は、効果がありません。
- `color`
  - : 最終的な色は上の色の*色相*および*彩度*を持ちますが、*明度*は下の色の値を使用します。
    この効果はグレーレベルを保持しており、前景に色をつけるために使用できます。
- `luminosity`
  - : 最終的な色は上の色の*明度*を持ちますが、*色相*および *彩度*は下の色の値を使用します。
    この混合モードは `color` と同じですが、レイヤーが入れ替わっています。

## 解説

混合モードは、適用されるレイヤー間のそれぞれのピクセルにおいて前景色と背景色を取り、計算を行い、新しい色の値を返します。

混合モード同士の変化は補完されません。すべての変更が直接反映されます。

## 形式文法

{{csssyntax}}

## 例

### "normal" の使用例

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 150px;
  height: 150px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: normal;
}
```

`background-blend-mode` に他の値を設定すると、異なる結果が得られます。

{{ EmbedLiveSample('Example using "normal"', "100%", "300") }}

### `background-blend-mode` の様々な値の比較

```html hidden
<div class="container"></div>
```

```css
.container {
  width: 720px;
  height: 760px;
  display: grid;
  grid: auto-flow 190px / repeat(4, 180px);
  border-top: 1px solid #d8d8d8;
  border-left: 1px solid #d8d8d8;
}

.container > div {
  border-right: 1px solid #d8d8d8;
  border-bottom: 1px solid #d8d8d8;
}

.container div div {
  margin-left: 15px;
  width: 150px;
  height: 150px;
  background: url("br.png"), url("tr.png");
}

.container div p {
  line-height: 30px;
  margin: 0;
  color: #a33333;
  text-align: center;
}
```

```js
const list = [
  "normal",
  "multiply",
  "screen",
  "overlay",
  "darken",
  "lighten",
  "color-dodge",
  "color-burn",
  "hard-light",
  "soft-light",
  "difference",
  "exclusion",
  "hue",
  "saturation",
  "color",
  "luminosity",
];

const containerElem = document.querySelector(".container");

list.forEach((item) => {
  const innerElem = document.createElement("div");
  innerElem.style.backgroundBlendMode = item;

  const textElem = document.createElement("p");
  textElem.innerText = item;

  const outerElem = document.createElement("div");
  outerElem.appendChild(textElem);
  outerElem.appendChild(innerElem);

  containerElem.appendChild(outerElem);
});
```

リストを走査して複数の `div` 要素を生成し、それぞれの `backgroundBlendMode` の値を異なる値に設定します。

{{ EmbedLiveSample('Comparison between different values with `background-blend-mode`', "100%", "780") }}

### `mix-blend-mode` の様々な値の比較

```html hidden
<div class="container"></div>
```

```css hidden
.container {
  width: 640px;
  height: 800px;
  display: grid;
  grid: auto-flow 160px / repeat(4, 160px);
  border-top: 1px solid #d8d8d8;
  border-left: 1px solid #d8d8d8;
}

.container > div {
  border-right: 1px solid #d8d8d8;
  border-bottom: 1px solid #d8d8d8;
}

.container > div > div {
  position: relative;
  margin-left: 20px;
  width: 120px;
  height: 120px;
}

.container div p {
  margin: 0;
  line-height: 30px;
  color: #a33333;
  text-align: center;
}
.circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  mix-blend-mode: screen;
  position: absolute;
}

.circle-1 {
  background: red;
}

.circle-2 {
  background: lightgreen;
  left: 40px;
}

.circle-3 {
  background: blue;
  left: 20px;
  top: 40px;
}

.isolate {
  isolation: isolate; /* Without isolation, the background color will be taken into account */
  position: relative;
}
```

```js hidden
const list = [
  "normal",
  "multiply",
  "screen",
  "overlay",
  "darken",
  "lighten",
  "color-dodge",
  "color-burn",
  "hard-light",
  "soft-light",
  "difference",
  "exclusion",
  "hue",
  "saturation",
  "color",
  "luminosity",
  "plus-darker",
  "plus-lighter",
];

const containerElem = document.querySelector(".container");

list.forEach((item) => {
  const innerElem = document.createElement("div");
  innerElem.innerHTML = `
    <div class="circle circle-1"></div>
    <div class="circle circle-2"></div>
    <div class="circle circle-3"></div>
  `;

  innerElem.querySelectorAll(".circle").forEach((circle) => {
    circle.style.mixBlendMode = item;
  });

  const textElem = document.createElement("p");
  textElem.innerText = item;

  const outerElem = document.createElement("div");
  outerElem.appendChild(textElem);
  outerElem.appendChild(innerElem);

  containerElem.appendChild(outerElem);
});
```

次の例では、リストを走査して複数の `<div>` 要素を作成し、それぞれの `mixBlendMode` の値を異なる値で設定します。

{{ EmbedLiveSample('Comparison between different values with `mix-blend-mode`', "100%", "820") }}

### 混合モードの比較

次の例の `<div>` には、 Firefox のロゴと線形グラデーションの 2 つの背景画像を設定してあります。その下に `<select>` メニューがあって `background-blend-mode` を変更することができ、それが `<div>` に適用されますので、様々な混合モードの効果を比較することができます。

#### HTML

```html
<div></div>
<p>混合モードを選択してください。</p>
<select>
  <option selected>normal</option>
  <option>multiply</option>
  <option>screen</option>
  <option>overlay</option>
  <option>darken</option>
  <option>lighten</option>
  <option>color-dodge</option>
  <option>color-burn</option>
  <option>hard-light</option>
  <option>soft-light</option>
  <option>difference</option>
  <option>exclusion</option>
  <option>hue</option>
  <option>saturation</option>
  <option>color</option>
  <option>luminosity</option>
</select>
```

#### CSS

```css
div {
  width: 300px;
  height: 300px;
  background:
    url("https://mdn.dev/archives/media/attachments/2020/07/29/17350/3b4892b7e820122ac6dd7678891d4507/firefox.png")
      no-repeat center,
    linear-gradient(to bottom, blue, orange);
}
```

#### JavaScript

```js
const selectElem = document.querySelector("select");
const divElem = document.querySelector("div");

selectElem.addEventListener("change", () => {
  divElem.style.backgroundBlendMode = selectElem.value;
});
```

#### 結果

{{EmbedLiveSample('Blend_mode_comparison', '100%', 400)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 合成と混合](/ja/docs/Web/CSS/Guides/Compositing_and_blending)モジュールで、 `<blend-mode>` の値を定義しています。
- このデータ型を使用するプロパティ: {{cssxref("background-blend-mode")}}, {{cssxref("mix-blend-mode")}}

様々な混合モードの他のウェブサイトにおける解説:

- [ブレンドモード](https://ja.wikipedia.org/wiki/ブレンドモード)（ウィキペディア）
- [Adobe Photoshop における描画モード](https://helpx.adobe.com/jp/photoshop/desktop/repair-retouch/adjust-light-tone/blending-mode-descriptions.html) (Adobe)
