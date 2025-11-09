---
title: font-weight
slug: Web/CSS/Reference/At-rules/@font-face/font-weight
original_slug: Web/CSS/@font-face/font-weight
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`font-weight`** は CSS の {{cssxref("@font-face")}} 記述子で、作成者は、{{cssxref("@font-face")}} アットルールで指定したフォントに対して、単一のフォントの太さ、またはフォントの太さの範囲を指定することができます。これは、CSS ルールで目的の[フォントの太さ](/ja/docs/Web/CSS/Reference/Properties/font-weight)が設定されたときに、ブラウザーが適切なフォントを選択するために使用されます。

通常、開発者は、単一のフォントファミリーのフォントをさまざまな太さで使うことを望むでしょう。従来の、あるいは「静的」フォントでは、単一のフォントファイルには、特定の太さとスタイルを持つフォントファミリーの文字が含まれています。例えば、 "Helvetica bold italic" などです。 `font-weight` プロパティが特定のウェイトを呼び出すときに、ライト、レギュラー、ボールド、またはエクストラボールドのフォントを表示できるようにするには、同じファミリーに対して複数の {{cssxref("@font-face")}} アットルールを定義します（すべて同じ {{cssxref("@font-face/font-family", "font-family")}} 記述子の値を持つ）を、それぞれの太さまたは太さの範囲ごとに 1 つずつ定義します。

一連のフォントの太さに使用するフォントを宣言するには、`font-weight` 記述子の値として、空白で区切られた 2 つの`font-weight` 値を指定します。CSS ルールで、{{cssxref("font-weight")}} プロパティまたは {{cssxref("font")}} 一括指定プロパティを設定してフォントの太さを設定すると、適切なフォントが使用されます。

例えば、記述子が `font-weight: 400 600;` の場合、プロパティが `font-weight: 450` または `font-weight: 550` であるときは、そのフォントが font-family に使用されます。
フォントが静的フォントであるか、[可変フォント](/ja/docs/Web/CSS/Guides/Fonts/Variable_fonts)であるかにかかわらず、範囲と一致するフォントが使用されます。この場合、フォントが静的フォントである場合、`450` と `550` は同じように現れます。フォントが可変フォントである場合、後者は太字になります。

記述子はすべてのフォントで同じですが、可変フォントに設定する範囲は通常より大きく、場合によっては `1 1000` にして、すべてのフォントの太さプロパティ値に同じフォントを使用することもできます。

## 構文

```css
/* 単一の値 */
font-weight: normal;
font-weight: bold;
font-weight: 400;

/* 範囲の定義 */
font-weight: normal bold;
font-weight: 300 500;
```

### 値

`font-weight` プロパティは、以下に挙げる値のうちの一つを使用して記述します。

- キーワード `auto`
- 単一の `<font-weight-absolute>` 値
- 空白で区切った一組の `<font-weight-absolute>` 値

それぞれの `<font-weight-absolute>` は次のいずれかです。

- `normal`
  - : 通常のフォントの太さです。 `400` と同じです。
- `bold`
  - : 太字のフォントの太さです。 `700` と同じです。
- `<number>`
  - : 1 以上 1000 以下の {{cssxref("&lt;number&gt;")}} 値です。数値が大きいと、数値が小さい物より太さが太い (又は同じ) ことを表します。よく使用される値は、以下の[一般的な太さの名前との対応](#一般的な太さの名前との対応)にあるように、共通の太さの名前に対応しています。

### 一般的な太さの名前との対応

`100` から `900` の数値は、おおよそ以下の太さの名前に対応します。

| 値  | 太さの名前                |
| --- | ------------------------- |
| 100 | Thin (Hairline)           |
| 200 | Extra Light (Ultra Light) |
| 300 | Light                     |
| 400 | Normal                    |
| 500 | Medium                    |
| 600 | Semi Bold (Demi Bold)     |
| 700 | Bold                      |
| 800 | Extra Bold (Ultra Bold)   |
| 900 | Black (Heavy)             |

### 可変フォント

多くのフォントは、[一般的な太さの名前との対応](#一般的な太さの名前との対応)の中の数値の一つに対応する特定の太さを持っています。しかし、可変フォントと呼ばれる一部のフォントは、もっと高いまたは低い粒度の太さの範囲に対応しており、これにより、デザイナーは選択した太さをより詳細に制御することができます。

TrueType や OpenType の可変フォントでは、 "wght" バリエーションが様々な幅を実装するために使用されます。

## アクセシビリティ

弱視の人は、 `font-weight` の値が `100` (Thin/Hairline) または `200` (Extra Light) の場合、特にフォントの[コントラスト比が低い場合](/ja/docs/Web/CSS/Reference/Properties/color#アクセシビリティ)は、テキストを読むのが難しくなることがあります。

- [MDN "WCAG を理解する ― ガイドライン 1.4 の解説"](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [Understanding Success Criterion 1.4.8 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 通常および太字フォントの選択

この例では、2 つのフォントを含めます。1 つは通常、もう 1 つは太字で、フォントファミリーは ["Fira Sans"](https://fonts.google.com/specimen/Fira+Sans) です。2 つの `@font-face` アットルールを使用しています。フォントの太さに一致するように、 `font-weight` 記述子を設定します。

この後、 CSS のルールでは、 {{cssxref("font-weight")}} プロパティを設定するだけで、 "Fira Sans" ファミリーの通常フォントまたは太字フォントを選択できます。 HTML の {{htmlelement("strong")}} 要素も太字フォントを選択することに注意してください。これは、既定では `<strong>` 要素の CSS の `font-weight` プロパティの値が `bold` になっているためです。

#### HTML

```html
<p class="one">Fira Sans, `normal` weight paragraph</p>
<p class="two">Fira Sans, `bold` weight paragraph</p>
<p><strong>Fira Sans, &lt;strong&gt; element (`bold`)</strong></p>
```

#### CSS

```css
@font-face {
  font-family: "Fira Sans";
  font-weight: normal;
  src: url("https://mdn.github.io/shared-assets/fonts/FiraSans-Regular.woff2");
}

@font-face {
  font-family: "Fira Sans";
  font-weight: bold;
  src: url("https://mdn.github.io/shared-assets/fonts/FiraSans-Bold.woff2");
}

body {
  font-family: "Fira Sans", serif;
  font-size: 2rem;
}

p.one {
  font-weight: normal;
}

p.two {
  font-weight: bold;
}
```

#### 結果

{{embedlivesample("Selecting normal and bold fonts", "", 300)}}

### font-weight の範囲の設定

この例は、同じ `font-family` 値に対応する複数の `@font-face` 宣言を記述することで、作成者が複数のフォントウェイト（およびフォントスタイル）に複数のフォントを含めることができることを示しています。 1 から 1000 までの範囲を使用して `font-weight` 記述子をスタイルシートの残りの部分で設定することにより、`font-weight` （または `font-style`）を宣言し、適切なフォントが使用されることを確認することができます。

#### HTML

```html
<p class="one">このフォントの太さは 100 です。</p>
<p class="three">このフォントの太さは 300 です。</p>
<p class="four">このフォントの太さは 400 です。</p>
<p class="five">このフォントの太さは 500 です。</p>
<p class="seven">このフォントの太さは 700 です。</p>
<p class="nine">このフォントの太さは 900 です。</p>
```

#### CSS

この例では、`FireSans` フォントファミリーから 4 つの異なるフォント用に 4 つの `@font-face` 宣言を記載しています。それぞれの宣言は、異なるフォントウェイト値の範囲に設定されていますが、すべて同じフォント名を使用しています。

最初の宣言では `FiraSans-Regular` を使用しており、関連付けられた `font-weight` の範囲には、使用可能なフォントの太さの値の全範囲が含まれています。

それ以外の 3 つの宣言は、フォントのライト、ボールド、およびエクストラボールドのバージョンを使用しており、それらに関連付けられた `font-weight` の範囲は、次のように範囲のサブセットを定義しています。

- 細字フォントは、 1～300 の範囲に関連付けられています。
- 太字のフォントは、 500-700 の範囲に対応しています。
- 極太字のフォントは、 700-1000 の範囲に関連付けられています。

CSS の [カスケード](/ja/docs/Web/CSS/Guides/Cascade/Introduction) により、後者の 3 つの宣言は、`FiraSans-Regular` 宣言で設定された範囲の一部を確実に上書きします。

```css
@font-face {
  font-family: "Fira Sans";
  font-weight: 1 1000;
  src: url("https://mdn.github.io/shared-assets/fonts/FiraSans-Regular.woff2");
}

@font-face {
  font-family: "Fira Sans";
  font-weight: 1 300;
  src: url("https://mdn.github.io/shared-assets/fonts/FiraSans-Light.woff2");
}

@font-face {
  font-family: "Fira Sans";
  font-weight: 500 700;
  src: url("https://mdn.github.io/shared-assets/fonts/FiraSans-Bold.woff2");
}

@font-face {
  font-family: "Fira Sans";
  font-weight: 700 1000;
  src: url("https://mdn.github.io/shared-assets/fonts/FiraSans-ExtraBold.woff2");
}

body {
  font-family: "Fira Sans", serif;
  font-size: 2rem;
}

p.one {
  font-weight: 100;
}

p.three {
  font-weight: 300;
}

p.four {
  font-weight: 400;
}

p.five {
  font-weight: 500;
}

p.seven {
  font-weight: 700;
}

p.nine {
  font-weight: 900;
}
```

#### 結果

{{embedlivesample("Setting font-weight ranges", "", 500)}}

`seven` の段落では、太字のフォントが使用されています。 `font-weight: 700` は `FiraSans-Bold` と `FiraSans-ExtraBold` の両方の宣言と一致しますが、 FiraSans-ExtraBold は後で宣言されているため、その値については `FiraSans-Bold` を上書きします。

同様に、`100` と `300` はどちらも細字フォントを使用しています。 `FiraSans-Regular` と `FiraSans-Light` はどちらもその範囲に `300` が含まれていますが、 `FiraSans-Light` は後に宣言されているためです。あるいは、 `FiraSans-Light` の後に `FiraSans-Regular` を宣言することも可能ですが、その場合は `font-weight` 記述子の範囲を変更する必要があります。

### 可変フォントの範囲の設定

この例では、可変フォントを使用する際に設定できるウェイトの範囲を制限するために、`font-weight` 記述子を使用しています。

単一の `@font-face` アットルールを使用して、可変フォント ["League Mono"](https://www.theleagueofmoveabletype.com/league-mono) を含めます。使用可能なウェイトの範囲を効果的に制限するために、 `font-weight: 300 700` という値を使用しています。CSS ルールが "League Mono" フォントを使用している場合、この範囲外のウェイトを指定すると、取得されるウェイトは範囲内に制限されます。

#### HTML

最初に `<output>` を `400` に設定した段落を含めます。これは、スタイルが設定されていない段落テキストのフォントの太さの既定値です。この段落は他の 2 つの段落の間に挟まれているため、レンダリングされたフォントの太さの値と宣言されたフォントの太さの値を比較することができます。

{{htmlelement("input/range", "range")}} 型の `<input>` は、 {{htmlelement("label")}} の中に含まれており、 `step` を `50` に設定しています。

```html
<p>LeagueMono, font-weight: 300 （比較用）</p>
<p id="example">LeagueMono, font-weight: <output>400</output> （例）</p>
<p>LeagueMono, font-weight: 700 （比較用）</p>
<label
  >フォントのウェイトを変更:
  <input type="range" min="50" max="1000" step="50" value="400" />
</label>
```

#### CSS

フォントの太さを記述する記述子 `font-weight` の範囲を `300 700` に設定し、可変フォントをその範囲に制限します。

```css
@font-face {
  font-family: LeagueMono;
  src: url("https://mdn.github.io/shared-assets/fonts/LeagueMono-VF.ttf");
  font-weight: 300 700;
}

p {
  font-family: LeagueMono, serif;
  font-size: 1.5rem;
}

p:first-of-type {
  font-weight: 300;
}

p:last-of-type {
  font-weight: 700;
}
```

#### JavaScript

段落の `font-weight` プロパティの値を更新し、その変更を反映してテキストを更新するイベントハンドラーを記載します。

```js
const text = document.querySelector("#example");
const log = document.querySelector("output");
const range = document.querySelector("input");

range.addEventListener("change", () => {
  text.style.fontWeight = range.value;
  log.innerText = range.value;
});
```

#### 結果

{{embedlivesample("Setting a range for a variable font", "", "400")}}

範囲の段落のフォントの太さを変更します。
この例の段落は、その上の `300` の段落よりも細くはならず、その下の `700` の段落よりも太くはなりません。フォントの太さは、`font-weight` 記述子で定義された範囲に制限されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/unicode-range", "unicode-range")}} 記述子
