---
title: font-variation-settings
slug: Web/CSS/Reference/Properties/font-variation-settings
original_slug: Web/CSS/font-variation-settings
l10n:
  sourceCommit: ad6eb6b52b4b3082397e8e011bd59a6d88a8f5f3
---

**`font-variation-settings`** は [CSS](/ja/docs/Web/CSS) のプロパティで、変更したい特性の 4 文字の軸名と特性の値を指定することにより、[可変フォント](/ja/docs/Web/CSS/Guides/Fonts/Variable_fonts)に対する低水準の制御を行うことができます。

{{InteractiveExample("CSS デモ: font-variation-settings")}}

```css interactive-example-choice
font-variation-settings: "wght" 50;
```

```css interactive-example-choice
font-variation-settings: "wght" 850;
```

```css interactive-example-choice
font-variation-settings: "wdth" 25;
```

```css interactive-example-choice
font-variation-settings: "wdth" 75;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    ...it would not be wonderful to meet a Megalosaurus, forty feet long or so,
    waddling like an elephantine lizard up Holborn Hill.
  </p>
</section>
```

```css interactive-example
@font-face {
  src: url("/shared-assets/fonts/variable-fonts/AmstelvarAlpha-VF.ttf");
  font-family: Amstelvar;
  font-style: normal;
}

p {
  font-size: 1.5rem;
  font-family: Amstelvar;
}
```

## 構文

```css
/* 既定の設定を使用 */
font-variation-settings: normal;

/* 可変フォントの軸名の値を設定 */
font-variation-settings: "xhgt" 0.7;

/* グローバル値 */
font-variation-settings: inherit;
font-variation-settings: initial;
font-variation-settings: revert;
font-variation-settings: revert-layer;
font-variation-settings: unset;
```

### 値

このプロパティは 1 つまたは 2 つの形を取ることができます。

- `normal`
  - : テキストは既定の設定を使用してレイアウトされます。
- `<string> <number>`
  - : テキストを描画する際、フォントの特性を有効または無効にするために可変フォントの軸名のリストがテキストレイアウトエンジンへ渡されます。それぞれの設定は常に、一つ以上の4文字の ASCII 文字の {{cssxref("&lt;string&gt;")}} と、続いて設定する軸の値を示す {{cssxref("number")}} の組み合わせから成ります。`<string>` の文字が多すぎたり少なすぎたり、文字が U+20 - U+7E のコードポイントの範囲を超えていたりした場合は、プロパティ全体が無効になります。フォントデザイナーによって定義された利用可能な値の範囲次第では、`<number>` は小数や負の数を取ることもできます。

## 解説

このプロパティは、その特性を有効にしたりアクセスしたりするための他の方法がない場合に、可変フォント特性を設定するために設計された低水準の仕組みです。これらの特性 (例えば {{cssxref("font-weight")}} や {{cssxref("font-style")}}) を設定するための基本プロパティがない場合にのみ使用してください。

`font-variation-settings` を使用して設定されたフォント特性は、常に `font-weight` などの基本フォントプロパティに関する設定を上書きし、言うまでもなくカスケードに現れます。ブラウザーによっては、 {{cssxref("@font-face")}} 宣言が {{cssxref("@font-face/font-weight", "font-weight")}} の範囲を含んでいる場合のみこれが成り立ちます。

### 登録済みの軸とカスタム軸

可変フォントの軸には、**登録済み**の軸と**カスタム**軸があります。

登録済みの軸は、もっとも頻繁に遭遇するもので、仕様書の著者が標準化する価値があると感じるほど一般的なものです。なお、これは作者がフォントにすべてを入れる必要があることを意味するものではありません。

こちらは関連する CSS プロパティに対応する登録済みの軸です。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">軸のタグ</th>
      <th scope="col">CSS プロパティ</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>"wght"</td>
      <td>{{cssxref("font-weight")}}</td>
    </tr>
    <tr>
      <td>"wdth"</td>
      <td>{{cssxref("font-stretch")}}</td>
    </tr>
    <tr>
      <td>"slnt" (slant)</td>
      <td>{{cssxref("font-style")}}: <code>oblique + angle</code></td>
    </tr>
    <tr>
      <td>"ital"</td>
      <td>{{cssxref("font-style")}}: <code>italic</code></td>
    </tr>
    <tr>
      <td>"opsz"</td>
      <td><p>{{cssxref("font-optical-sizing")}}</p></td>
    </tr>
  </tbody>
</table>

カスタム軸はフォントデザイナーがフォントに変化を付けるためのもの全てがあり得ます。例えばアセンダーまたはデセンダーの高さ、セリフの大きさ、その他想像できるすべてのものです。どの軸も 4 文字の固有の軸名を与えれば使用することができます。一部はもっと有名になっており、そのうち登録されるものもあるかもしれません。

> [!NOTE]
> 登録済みの軸のタグは小文字のタグを使用するのに対し、カスタム軸は大文字のタグを使用します。なお、フォントデザイナーはこの慣習に従うことを強制されているわけではなく、従っていないものもあります。ここで重要なことは、軸のタグは大文字と小文字を区別することです。

オペレーティングシステムで可変フォントを使用するためには、最新版であることを確認する必要があります。例えば、 Linux ベースの OS では最新版の Linux Freetype が必要であり、 macOS 10.13 より前では可変フォントに対応していません。オペレーティングシステムが最新版でない場合、ウェブページや Firefox 開発者ツールで可変フォントを使用することができません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

他にも多数の可変フォントの例が、[可変フォントガイド](/ja/docs/Web/CSS/Guides/Fonts/Variable_fonts)にあります。

### フォントの太さの変数の制御 (wght)

以下のコードブロック内の "Play" をクリックすると、 MDN Playground で例を編集できます。 CSS を編集して、様々なフォントの太さの値を試してみてください。太さの範囲から外れた値を指定した場合に何が起こるのかを確認してください。

```html hidden live-sample___variable-fonts-weight-example
<div>
  <p class="p1">Weight</p>
  <span>(font-weight: 625)</span>
</div>
<div>
  <p class="p2">Weight</p>
  <span>(font-variation-settings: "wght" 625)</span>
</div>
<div class="adjustable">
  <p class="p3">Weight</p>
  (font-variation-settings: "wght" <span id="angle-text">625</span>)<br />
  <label for="text-axis">太さを調整: </label>
  <input
    type="range"
    id="text-axis"
    name="text-axis"
    min="300"
    max="900"
    value="625" />
</div>
```

```css hidden live-sample___variable-fonts-weight-example
@font-face {
  font-family: "Amstelvar VF";
  src: url("https://mdn.github.io/shared-assets/fonts/variable-fonts/AmstelvarAlpha-VF.woff2")
    format("woff2-variations");
  font-weight: 300 900;
  font-stretch: 35% 100%;
  font-style: normal;
  font-display: swap;
}

p {
  font:
    1.2em "Amstelvar VF",
    Georgia,
    serif;
  font-size: 4rem;
  margin: 1rem;
  display: inline-block;
}

.adjustable {
  border: 1px dashed;
  --text-axis: 625;
}
```

```css live-sample___variable-fonts-weight-example
/* weight range is 300 to 900 */
.p1 {
  font-weight: 625;
}

/* weight range is 300 to 900 */
.p2 {
  font-variation-settings: "wght" 625;
}

/* Adjust with slider & custom property */
.p3 {
  font-variation-settings: "wght" var(--text-axis);
}
```

```js hidden live-sample___variable-fonts-weight-example
const angle = document.querySelector("#text-axis");
const text = document.querySelector("#angle-text");
const adjustable = document.querySelector(".adjustable");

angle.addEventListener("input", (e) => {
  const angle = e.target.value;
  text.innerText = angle;
  adjustable.style.setProperty("--text-axis", angle);
});
```

{{EmbedLiveSample("variable-fonts-weight-example", "", "450px")}}

### フォントの傾きの変数の制御 (slnt)

以下のコードブロック内の "Play" をクリックすると、 MDN Playground で例を編集できます。 CSS を編集して、様々なフォントの太さの値を試してみてください。

```html hidden live-sample___variable-fonts-slant-example
<div>
  <p class="p1">Slant</p>
  <span>(font-style: oblique 14deg)</span>
</div>
<div>
  <p class="p2">Slant</p>
  <span>(font-variation-settings: 'slnt' 12)</span>
</div>
<div class="adjustable">
  <p class="p3">Slant</p>
  (font-variation-settings: 'slnt' <span id="angle-text">5</span>)<br />
  <label for="text-axis">傾きを調整: </label>
  <input
    type="range"
    id="text-axis"
    name="text-axis"
    min="0"
    max="12"
    value="5" />
</div>
```

```css hidden live-sample___variable-fonts-slant-example
@font-face {
  font-family: "Roboto VF";
  src: url("https://mdn.github.io/shared-assets/fonts/variable-fonts/Roboto-VF.woff2")
    format("woff2-variations");
  font-weight: 100 900;
  font-stretch: 75% 100%;
  font-style: oblique 0deg 12deg;
  font-display: swap;
}

p {
  font:
    1.2em "Roboto VF",
    Helvetica,
    sans-serif;
  font-size: 4rem;
  margin: 1rem;
  display: inline-block;
}

.adjustable {
  border: 1px dashed;
  --text-axis: 5;
}
```

```css live-sample___variable-fonts-slant-example
/* 傾きの範囲は 0deg ～ 12deg */
.p1 {
  font-style: oblique 14deg;
}

/* 傾きの範囲は 0 ～ 12 */
.p2 {
  font-variation-settings: "slnt" 12;
}

/* スライダーとカスタムプロパティで調整 */
.p3 {
  font-variation-settings: "slnt" var(--text-axis);
}
```

```js hidden live-sample___variable-fonts-slant-example
const angle = document.querySelector("#text-axis");
const text = document.querySelector("#angle-text");
const adjustable = document.querySelector(".adjustable");

angle.addEventListener("input", (e) => {
  const angle = e.target.value;
  text.innerText = angle;
  adjustable.style.setProperty("--text-axis", angle);
});
```

{{EmbedLiveSample("variable-fonts-slant-example", "", "450px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [可変フォントガイド](/ja/docs/Web/CSS/Guides/Fonts/Variable_fonts)
- [OpenType font variations overview](https://learn.microsoft.com/en-us/typography/opentype/spec/otvaroverview) (microsoft.com)
- [OpenType design-variation axis tag registry](https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg) (microsoft.com)
- [OpenType variable fonts](https://www.axis-praxis.org/) (axis-praxis.org)
- [Variable fonts](https://v-fonts.com/) (v-fonts.com)
