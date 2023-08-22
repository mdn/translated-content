---
title: <color>
slug: Web/CSS/color_value
l10n:
  sourceCommit: 8daba6d316e3b68f45e09c44da9b6942307ca555
---

{{CSSRef}}

**`<color>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/CSS_Types)で、一つの色を表します。
`<color>` は[アルファチャネル](https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%AB%E3%83%95%E3%82%A1%E3%83%81%E3%83%A3%E3%83%B3%E3%83%8D%E3%83%AB)の*透過値*を含むことがあり、この色を背景とどれだけ[合成](https://www.w3.org/TR/compositing-1/#simplealphacompositing)するかを示すこともできます。

`<color>` は以下の何れかの方法で定義することができます。

- [sRGB 色空間](https://ja.wikipedia.org/wiki/%E8%89%B2%E7%A9%BA%E9%96%93#RGB) の場合:

  - 定義済みのキーワード（`blue` や `pink` など）（[`<named-color>` ページ](/ja/docs/Web/CSS/named-color)で説明しています）

  - {{cssxref("color_value/rgb","rgb()")}} 関数記法または [`#` + 16 進数](/ja/docs/Web/CSS/hex-color)（[RGB 立方体座標](https://en.wikipedia.org/wiki/RGB_color_model#Geometric_representation)系を使用）

  - {{cssxref("color_value/hsl","hsl()")}} 関数記法（[HSL 円筒座標系](https://ja.wikipedia.org/wiki/HSV%E8%89%B2%E7%A9%BA%E9%96%93)を使用）

  - {{cssxref("color_value/hwb","hwb()")}} 関数記法（[HWB 円筒座標系](https://en.wikipedia.org/wiki/HWB_color_model)を使用）

- 以下の方法による任意の視覚可能な色:

  - {{cssxref("color_value/lch","lch()")}} 関数記法（[LCH 円筒座標系](<https://ja.wikipedia.org/wiki/CIE_Luv%E8%89%B2%E7%A9%BA%E9%96%93#%E5%86%86%E7%AD%92%E5%BA%A7%E6%A8%99%E7%B3%BB%E3%81%AB%E3%82%88%E3%82%8B%E8%A1%A8%E7%8F%BE_(CIELCH)>)を使用）

  - {{cssxref("color_value/oklch","oklch()")}} 関数記法（[Oklch 円筒座標系](https://bottosson.github.io/posts/oklab/)を使用）

  - {{cssxref("color_value/lab","lab()")}} 関数記法（[CIELAB](https://ja.wikipedia.org/wiki/Lab%E8%89%B2%E7%A9%BA%E9%96%93)を使用）

  - {{cssxref("color_value/oklab","oklab()")}} 関数記法（[Oklab](https://bottosson.github.io/posts/oklab/) 色空間を使用）

- {{cssxref("color_value/color","color()")}} 関数記法を使用して、様々な定義済みまたは独自の色空間で色を指定することができます。

> **メモ:** これらの色の値は [CSS を使用した HTML 要素への色の適用](/ja/docs/Web/CSS/CSS_colors/Applying_color)のために使用することができます。

## 構文

`<color>` データ型は以下のいずれか 1 つの方法を使って指定されます。

> **メモ:** `<color>` の色は詳細に定義されていますが、出力機器によって (時には著しく) 違って見えるかもしれません。出力機器の大半は色補正がされておらず、ブラウザーによっては出力機器の[色プロファイル](https://ja.wikipedia.org/wiki/ICC%E3%83%97%E3%83%AD%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB)に対応していないからです。

### 色名

色名は大文字と小文字の区別をしない識別子で、特定の色を表します。例えば `red`, `blue`, `black`, `lightseagreen` といったものです。色名は多少なりとそれぞれの色を説明していますが、ほとんどは基本的に人工的であり、名前の仕様について強い根拠はありません。

このようなキーワードの完全なリストは [`<named-color>` ページ](/ja/docs/Web/CSS/named-color)にあります。

### currentcolor キーワード

`currentcolor` キーワードは、要素の {{Cssxref("color")}} プロパティの値を表します。これで `color` の値をプロパティが既定で受け取らなくても利用することができます。

`currentcolor` が `color` プロパティの値として使用された場合、 `color` プロパティが継承した値が使用されます。

```html
<div style="color: blue; border: 1px dashed currentcolor;">
  この文字列の色は青です。
  <div style="background: currentcolor; height:9px;"></div>
  このブロックは青い境界線で囲まれています。
</div>
```

{{EmbedLiveSample('currentcolor_keyword', 600, 80)}}

### RGB 色モデル

RGB 色モデルは赤、緑、青の成分によって指定された[sRGB 色空間](https://ja.wikipedia.org/wiki/%E8%89%B2%E7%A9%BA%E9%96%93#RGB)内の色を定義します。アルファ成分は任意で、色の透過性を表します。

RGB 色は 16 進表記（`#` の接頭辞つき）と関数記法 (`rgb()`, `rgba()`) の両方で表現することができます。

- [16 進記法](/ja/docs/Web/CSS/hex-color): `#RGB[A]` または `#RRGGBB[AA]`
  - : `R`（赤）、`G`（緑）、`B`（青）と `A`（アルファ） は 16 進数の文字 (0–9, A–F) です。`A` は任意です。例えば、`#ff0000` は `#ff0000ff` と同等です。 3 桁記法 (`#RGB`) は 6 桁形式 (`#RRGGBB`) を短縮したものです。例えば、`#f09` は `#ff0099` と同じ色です。同様に、4 桁の RGB 記法 (`#RGBA`) は 8 桁形式 (`#RRGGBBAA`) を短縮したものです。例えば、`#0f38` は `#00ff3388` と同じ色です。
- [`rgb()`](/ja/docs/Web/CSS/color_value/rgb)（または古い `rgba()`）: `rgb(R G B[ / A])` （または `rgb[a](R, G, B[, A])`）
  - : `R`（赤）、`G`（緑）、`B`（青）は {{cssxref("&lt;number&gt;")}} または {{cssxref("&lt;percentage&gt;")}} のどちらかで、`255` が `100%` に対応します。 `A`（アルファ） は `0` と `1` の間の {{cssxref("&lt;number&gt;")}} 、または {{cssxref("&lt;percentage&gt;")}} で、数値 `1` が `100%`（不透明）です。

### HSL 色モデル

HSL 色モデルは色相 (H)、彩度 (S)、明度 (L) の各成分によって与えられた [sRGB 色空間](https://ja.wikipedia.org/wiki/%E8%89%B2%E7%A9%BA%E9%96%93#RGB)内の色を定義します。アルファ成分は任意で、色の透過性を表します。

- {{cssxref("color_value/hsl","hsl()")}}: `hsl(H S L [ / A])`（または古い `hsl(H, S, L [, A])`）
  - : `H` は色相で、[色相環](/ja/docs/Web/CSS/color_value/hsl#値)の角度 ({{cssxref("&lt;angle&gt;")}}) を `deg`、 `rad`、 `grad`、 `turn` の単位で取ります。定義上は、赤は `0deg`、黄色は `60deg`、緑は `120deg`、青は `240deg`、マゼンタは `300deg` となります。単位のない {{cssxref("&lt;number&gt;")}} として書かれた場合、角度として解釈されます。`S` は彩度で `<percentage>` 値で表し、100% は完全に鮮やかな色で、0% は完全な無彩色（灰色）です。`L` は明度で `<percentage>` 値で表し、100% は白、0% は黒、50% は「普通」です。オプションの `A` はアルファ透過性で `<percentage>` 値または 0 と 1 の間の `<number>` で表し、数値 1 または 100% が完全に不透明、0 または 0% が完全に透過を表します。

HSL は、色相、彩度、明度をそれぞれ独立して調整できるため、RGB よりも直感的であると感じるデザイナーが多いようです。また、HSL を使用することで、同じ色のセットを簡単に作成することができます （同じ色相で複数の影を作成する場合など）。
しかし、HSL を使用して色のバリエーションを作成すると、[知覚的に均一ではない](https://ja.wikipedia.org/wiki/%E8%89%B2%E5%B7%AE#%E8%A8%B1%E5%AE%B9%E5%80%A4)ため、驚くような結果になることがあります。たとえば、 `hsl(240 100% 50%)` と `hsl(60 100% 50%)` は、明度が同じであるにもかかわらず、前者が後者よりもはるかに暗くなります。

HSL 色は関数記法の {{cssxref("color_value/hsl", "hsl()")}} を通して表現されます。

> **メモ:** 古い `hsla()` 構文は {{cssxref("color_value/hsl","hsl()")}} の別名であり、同じ引数を受け取り同じように動作します。

### HWB 色モデル

HSL 色モデルと同様に、 HWB 色モデルは [sRGB 色空間](https://ja.wikipedia.org/wiki/%E8%89%B2%E7%A9%BA%E9%96%93#RGB)の指定された色を、その色相、白色度、黒色度成分によって定義します。

HSL と同様に、 HWB は RGB よりも直感的に使用することができます。色相は同じように指定され，以下，白色度と黒色度がそれぞれパーセント値で続きます。この関数では、アルファ値も受け入れられます。

> **メモ:** HSL のように別個の `hwba()` 関数は**ありません**。アルファ値はオプションの引数で、指定しない場合はアルファ値 1 （または 100%）が使用されます。この値を指定するためには、アルファ値を指定する前に、スラッシュ (`/`) を黒さの値の後に続けなければなりません。

HWB 色は、関数 `hwb()` 記法で表現されます。

> **メモ:** HWB 関数は、前回の色関数のようにカンマで値を区切ることは **しません**。

- [`hwb()`](/ja/docs/Web/CSS/color_value/hwb): `hwb(H W B[ / A])`

  - : HSL と同じです。 `H` （色相）は、CSS Color 仕様で `deg`, `rad`, `grad`, `turn` で指定された色相環の {{cssxref("&lt;angle&gt;")}} です。単位を持たない {{cssxref("&lt;number&gt;")}} として書かれた場合は、 [CSS Color Level 3](https://drafts.csswg.org/css-color-3/#hsl-color) 仕様で指定されているように、度数として解釈されます。定義上、 赤=0deg=360deg で、他の色は円周上に広がるので、緑=120deg、青=240deg などとなります。 `<angle>` としては、-120deg=240deg, 480deg=120deg, -1turn=1turn などのように暗黙のうちに回り込みます。

    `W` （白さ）と `B` （黒さ）はパーセント値です。この 2 つの色は混合するので、黒という色を作るには、**白さ** `0%`、**黒さ** `100%` が必要です。逆に、白を表現するには、白さ `100%`、黒さ `0%` が必要です。どちらの値も `50%` にすると中間色の灰色になり、他にも指定した色相の濃淡が現れます。

    `A` （アルファ値、オプション）は、 `0` から `1` までの {{cssxref("&lt;number&gt;")}}、または {{cssxref("&lt;percentage&gt;")}} で、数値 `1` は `100%` （完全な不透明）に対応します。アルファ値を指定するときは、その前にスラッシュ (`/`) を付けなければなりません。

### システム色

_色強制モード_ （[forced-colors](/ja/docs/Web/CSS/@media/forced-colors) メディアクエリーで検出可能）では、多くの色がユーザーまたはブラウザーが定義したパレットに制約されます。これらのシステム色は以下のキーワードで公開されており、ページの残りの部分が制限されたパレットにうまく合わせられることを保証するために使用することができます。これらの値は他のコンテキストでも使用できますが、ブラウザーの対応は限定的です。

CSS Color Module Level 4 仕様書で定義されているキーワードは、 `AccentColor`, `AccentColorText`, `ActiveText`, `ButtonBorder`, `ButtonFace`, `ButtonText`, `Canvas`, `CanvasText`, `Field`, `FieldText`, `GrayText`, `Highlight`, `HighlightText`, `LinkText`, `Mark`, `MarkText`, `SelectedItem`, `SelectedItemText`, `VisitedText` です。

> **メモ:** これらのキーワードは大文字小文字を区別しませんが、ここでは読みやすくするために大文字小文字を交ぜて掲載していることに注意してください。

### Lab 色

CSS Color 4 で Lab 色が導入されました。
Lab 色は、{{cssxref("color_value/lab","lab()")}} 関数記法で指定します。
Lab 色は、特定の色空間に限定されず、人間の視覚の全領域を表現することができます。

### LCH 色モデル

CSS Color 4 で LCH 色が導入されました。
LCH 色は、{{cssxref("color_value/lch","lch()")}} という関数記法で指定します。
特定の色空間に限定されず、人間の視覚の全領域を表現することができます。

実は、LCH は Lab の極致です。彩度と色相の構成要素が、混合ではなく、目的の色の質を指定する点で、Lab よりも人間に優しいものです。
この点では HSL と似ていますが、知覚的な均一性ははるかに高いと言えます。
HSL が `hsl(60 100% 50%)` と `hsl(240 100% 50%)` の両方を同じ明るさと表現するのに対し、LCH (および Lab) は、前者 (黄) の L は 97.6、後者 (青) の L は 29.6 と、それぞれ異なる明るさを正しく表現します。
そのため、LCH を使ってまったく異なる色のパレットを作成しても、予測可能な結果になります。
なお、LCH の色相は HSL の色相とは異なり、LCH の彩度は HSL の彩度とは異なりますが、概念的には類似していますのでご注意ください。

### color() 色

CSS Color 4 でこの表記が導入されました。
{{cssxref("color_value/color","color()")}} 関数で指定された色は、定義済みの色空間のほか、[`@color-profile`](/ja/docs/Web/CSS/@color-profile) ルールで定義されたカスタム色空間でも色を指定できます。

## 補間

アニメーションや[グラデーション](/ja/docs/Web/CSS/CSS_images/Using_CSS_gradients)において、 `<color>` の値は赤、緑、青の成分ごとに{{Glossary("interpolation", "補間")}}されます。既定では、アニメーションは RGBA 色空間で行われ、CSS のトランジションやアニメーションでは[タイミング関数](/ja/docs/Web/CSS/easing-function)で補間の速度が決定されます。予期せぬ色が現れるのを防ぐために、[`color-mix()`](/ja/docs/Web/CSS/color_value/color-mix) 関数記法を使用することを検討してください。

色相角を受け入れる関数で 2 色の {{cssxref("&lt;hue&gt;")}} を補間することも可能です。詳しくは [`color-mix()`](/ja/docs/Web/CSS/color_value/color-mix) 関数記法の記事で記述されています。

## アクセシビリティの考慮

色を見分けることが難しい人がいます。[WCAG 2.0](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Use_of_color) 勧告では、色を特定のメッセージ、動作、結果を伝える唯一の手段として使用することを避けるよう強く勧告しています。詳しくは[色と色のコントラスト](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)をご覧ください。

## 形式文法

{{csssyntax}}

## 例

### 色の値のテスター

この例では、`<div>` とテキスト入力を用意しています。入力欄に有効な色を入力すると、`<div>` にその色が採用され、色の値をテストすることができます。

#### HTML

```html
<div></div>
<hr />
<label for="color">有効な色の値を入力してください:</label>
<input type="text" id="color" />
```

#### CSS

```css
div {
  width: 100%;
  height: 200px;
}
```

```js hidden
const inputElem = document.querySelector("input");
const divElem = document.querySelector("div");

function validTextColor(stringToTest) {
  if (stringToTest === "") {
    return false;
  }
  if (stringToTest === "inherit") {
    return false;
  }
  if (stringToTest === "transparent") {
    return false;
  }

  const image = document.createElement("img");
  image.style.color = "rgb(0, 0, 0)";
  image.style.color = stringToTest;
  if (image.style.color !== "rgb(0, 0, 0)") {
    return true;
  }
  image.style.color = "rgb(255, 255, 255)";
  image.style.color = stringToTest;
  return image.style.color !== "rgb(255, 255, 255)";
}

inputElem.addEventListener("change", () => {
  if (validTextColor(inputElem.value)) {
    divElem.style.backgroundColor = inputElem.value;
    divElem.textContent = "";
  } else {
    divElem.style.backgroundColor = "white";
    divElem.textContent = "Invalid color value";
  }
});
```

#### 結果

{{EmbedLiveSample('Color_value_tester','100%', 300)}}

### 様々な RGB 構文

この例は、一つの色を RGB 色構文で生成することができる様々な方法を示しています。

```css-nolint
/* これらの様々な構文は、すべて同じ色、不透明な濃いピンク色を指定します。 */

/* 16進表記 */
#f09
#F09
#ff0099
#FF0099

/* 関数記法 */
rgb(255,0,153)
rgb(255, 0, 153)
rgb(255, 0, 153.0)
rgb(100%,0%,60%)
rgb(100%, 0%, 60%)
rgb(100%, 0, 60%) /* ERROR! 数値とパーセントを混ぜないでください */
rgb(255 0 153)

/* アルファ値付き16進表記 */
#f09f
#F09F
#ff0099ff
#FF0099FF

/* アルファ値付き関数記法 */
rgb(255, 0, 153, 1)
rgb(255, 0, 153, .5)
rgb(255, 0, 153, 0.5)
rgb(255, 0, 153, 100%)

/* 空白区切りの構文 */
rgb(255 0 153 / 1)
rgb(255 0 153 / 100%)

/* 浮動小数点値による実数表記 */
rgb(255, 0, 153.6, 1)
rgb(2.55e2, 0e0, 1.53e2, 1e2%)
```

### RGB の様々な透過性

```css
/* 16進表記 */
#3a30                    /* 完全に透明な緑   */
#3a3f                    /* 完全に不透明な緑 */
#33aa3300                /* 完全に透明な緑   */
#33aa3380                /* 50% 半透明な緑   */

/* 関数記法 */
rgba(51, 170, 51, 0.1)    /*  10% 半透明の緑 */
rgba(51, 170, 51, 0.4)    /*  40% 半透明の緑 */
rgba(51, 170, 51, 0.7)    /*  70% 半透明の緑 */
rgba(51, 170, 51,   1)    /* 完全に不透明の緑 */

/* ホワイトスペース区切りの構文 */
rgba(51 170 51 / 0.4)    /*  40% 半透明の緑 */
rgba(51 170 51 / 40%)    /*  40% 半透明の緑 */

/* 実数値の関数構文 */
rgba(51,    170,   51.6,  1)
rgba(5.1e1, 1.7e2, 5.1e1, 1e2%)
```

### 様々な HSL の構文

```css-nolint
/* これらの例はすべて同じ色、ラベンダーを指定します。 */
hsl(270,60%,70%)
hsl(270, 60%, 70%)
hsl(270 60% 70%)
hsl(270deg, 60%, 70%)
hsl(4.71239rad, 60%, 70%)
hsl(0.75turn, 60%, 70%)

/* これらの例はすべて同じ色、15%半透明のラベンダーを指定します。 */
hsl(270, 60%, 50%, 0.15)
hsl(270, 60%, 50%, 0.15)
hsl(270, 60%, 50%, 15%)
hsl(270 60% 50% / 0.15)
hsl(270 60% 50% / 15%)
```

### HWB syntax variations

```css-nolint
/* These examples all specify varying shades of a lime green. */
hwb(90 10% 10%)
hwb(90 50% 10%)
hwb(90deg 10% 10%)
hwb(1.5708rad 60% 0%)
hwb(0.25turn 0% 40%)

/* Same lime green but with an alpha value */
hwb(90 10% 10% / 0.5)
hwb(90 10% 10% / 50%)
```

### 彩度 100% の色

<table>
  <thead>
    <tr>
      <th scope="col">表記</th>
      <th scope="col">説明</th>
      <th scope="col">例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>hsl(0, 100%, 50%)</code></td>
      <td>red</td>
      <td style="background: hsl(0, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(30, 100%, 50%)</code></td>
      <td>orange</td>
      <td style="background: hsl(30, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(60, 100%, 50%)</code></td>
      <td>yellow</td>
      <td style="background: hsl(60, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(90, 100%, 50%)</code></td>
      <td>lime green</td>
      <td style="background: hsl(90, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 100%, 50%)</code></td>
      <td>green</td>
      <td style="background: hsl(120, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(150, 100%, 50%)</code></td>
      <td>blue-green</td>
      <td style="background: hsl(150, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(180, 100%, 50%)</code></td>
      <td>cyan</td>
      <td style="background: hsl(180, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(210, 100%, 50%)</code></td>
      <td>sky blue</td>
      <td style="background: hsl(210, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(240, 100%, 50%)</code></td>
      <td>blue</td>
      <td style="background: hsl(240, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(270, 100%, 50%)</code></td>
      <td>purple</td>
      <td style="background: hsl(270, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(300, 100%, 50%)</code></td>
      <td>magenta</td>
      <td style="background: hsl(300, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(330, 100%, 50%)</code></td>
      <td>pink</td>
      <td style="background: hsl(330, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(360, 100%, 50%)</code></td>
      <td>red</td>
      <td style="background: hsl(360, 100%, 50%)"></td>
    </tr>
  </tbody>
</table>

### 様々な明度の緑

<table>
  <thead>
    <tr>
      <th scope="col">表記</th>
      <th scope="col">説明</th>
      <th scope="col">例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>hsl(120, 100%, 0%)</code></td>
      <td>black</td>
      <td style="background: hsl(120, 100%, 0%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 100%, 20%)</code></td>
      <td></td>
      <td style="background: hsl(120, 100%, 20%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 100%, 40%)</code></td>
      <td></td>
      <td style="background: hsl(120, 100%, 40%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 100%, 60%)</code></td>
      <td></td>
      <td style="background: hsl(120, 100%, 60%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 100%, 80%)</code></td>
      <td></td>
      <td style="background: hsl(120, 100%, 80%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 100%, 100%)</code></td>
      <td>white</td>
      <td style="background: hsl(120, 100%, 100%)"></td>
    </tr>
  </tbody>
</table>

### 様々な彩度の緑

<table>
  <thead>
    <tr>
      <th scope="col">表記</th>
      <th scope="col">説明</th>
      <th scope="col">例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>hsl(120, 100%, 50%)</code></td>
      <td>green</td>
      <td style="background: hsl(120, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 80%, 50%)</code></td>
      <td></td>
      <td style="background: hsl(120, 80%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 60%, 50%)</code></td>
      <td></td>
      <td style="background: hsl(120, 60%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 40%, 50%)</code></td>
      <td></td>
      <td style="background: hsl(120, 40%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 20%, 50%)</code></td>
      <td></td>
      <td style="background: hsl(120, 20%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 0%, 50%)</code></td>
      <td>gray</td>
      <td style="background: hsl(120, 0%, 50%)"></td>
    </tr>
  </tbody>
</table>

### HSL の様々な透過度

```css-nolint
hsl(240 100% 50% / 0.05)    /*   5% 半透明の青 */
hsl(240 100% 50% / 0.4)     /*  40% 半透明の青 */
hsl(240 100% 50% / 0.7)     /*  70% 半透明の青 */
hsl(240 100% 50% / 1)       /* 完全に不透明の青 */

/* カンマ構文 */
hsl(240, 100%, 50%, 0.05)     /*   5% 半透明の青 */

/* アルファのパーセント表記 */
hsla(240 100% 50% / 5%)       /*   5% 半透明の青 */
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref("opacity")}} プロパティは要素レベルで色の透明度を定義できます。
- {{cssxref("&lt;hue&gt;")}} データ型は色を色相閣で表します。
- このデータ型を使用するよく使われるプロパティ: {{Cssxref("color")}}, {{Cssxref("background-color")}}, {{Cssxref("border-color")}}, {{Cssxref("box-shadow")}}, {{Cssxref("outline-color")}}, {{Cssxref("text-shadow")}}
- [CSS を使った HTML の要素への色の適用](/ja/docs/Web/CSS/CSS_colors/Applying_color)
- [New functions, gradients, and hues in CSS colors (Level 4)](/en-US/blog/css-color-module-level-4/) on MDN blog (May 3, 2023)
