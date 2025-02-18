---
title: text-transform
slug: Web/CSS/text-transform
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{CSSRef}}

**`text-transform`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素のテキストを大文字表記する方法を指定します。テキストをすべて大文字にしたり、すべて小文字にしたり、各単語の先頭を大文字にしたりすることを指定します。フリガナの読みやすさを向上するのにも役立ちます。

{{EmbedInteractiveExample("pages/css/text-transform.html")}}

`text-transform` プロパティは、以下のように言語固有の大文字小文字の扱いを考慮します。

- トルコ語 (`tr`)、アゼルバイジャン語 (`az`)、クリミア・タタール語 (`crh`)、ヴォルガ・タタール語 (`tt`)、バシキール語 (`ba`) などのチュルク語族にはドットの有無が異なる 2 種類の `i` があり、大文字・小文字のペアも `i`/`İ` と `ı`/`I` の 2 組があります。
- ドイツ語 (`de`) では、`ß` の大文字が `SS` になります。
- オランダ語 (`nl`) では二重音字 `ij` が、単語の最初の文字のみ大文字にする `text-transform: capitalize` を指定しても `IJ` になります。
- ギリシャ語 (`el`) では離接的接続のエータ (`ή`/`Ή`) を除き、単語全体が大文字であるときに母音のアクセント記号がなくなります (`ά`/`Α`)。また、1 文字目にアクセント記号がある二重母音はアクセント記号がなくなり、2 文字目の母音にトレマがつきます (`άι`/`ΑΪ`)。
- ギリシャ語 (`el`) で、小文字のシグマは `σ` と `ς` の 2 種類あります。`ς` は、単語の末尾にあるシグマに限り使用します。大文字のシグマ (`Σ`) に `text-transform: lowercase` を適用すると、ブラウザーは状況に応じて正しい小文字を選択しなければなりません。
- アイルランド語 (`ga`) では、頭文字が大文字化されていても特定の接頭辞文字が小文字のままになります。例えば `text-transform: uppercase` は `ar aon tslí` を、予想される `AR AON TSLÍ` ではなく `AR AON tSLÍ` にします (Firefox に限る)。大文字化によりハイフンが削除される場合もあり、`an t-uisce` は `AN tUISCE` になります (また、`text-transform: lowercase` ではハイフンが適切に再挿入されます)。

言語は HTML の [`lang`](/ja/docs/Web/HTML/Global_attributes/lang) 属性や XML の [`xml:lang`](/ja/docs/Web/SVG/Attribute/xml:lang) 属性で定義します。

> [!NOTE]
> これらの特定のケースはブラウザーにより異なりますので、[ブラウザーの互換性](#ブラウザーの互換性)を確認してください。

## 構文

```css
/* キーワード値 */
text-transform: none;
text-transform: capitalize;
text-transform: uppercase;
text-transform: lowercase;
text-transform: full-width;
text-transform: full-size-kana;
text-transform: math-auto;

/* グローバル値 */
text-transform: inherit;
text-transform: initial;
text-transform: revert;
text-transform: revert-layer;
text-transform: unset;
```

- `capitalize`

  - : それぞれの単語の最初の*文字*を強制的に大文字に変換させるキーワードです。ほかの文字は変更しません。すなわち、要素のテキストで記載した元の表記を維持します。文字とは、文字または数字の一般カテゴリーの一部である任意の Unicode 文字です。単語の先頭にある句読点や記号は無視されます。

    > **メモ:** `capitalize` が言語固有の先頭文字を大文字にする慣習 (英語で冠詞を除外するなど) に従うと期待するべきではありません。

    > **メモ:** `capitalize` キーワードは CSS 1 および CSS 2.1 で定義されていたものでした。この結果、最初の文字を計算する方法は、ブラウザーによって異なっていました（Firefox は `-` および `_` を文字として捉えていましたが、他はそうではありませんでした。 Webkit 及び Gecko は `ⓐ` のような文字から作られた記号を、誤って文字として認識していました）。正しいふるまいを詳細に定義したので、 CSS Text Level 3 ではこれを一掃しました。ブラウザーの互換性表の `capitalize` の行は、それぞれのエンジンがこの詳細に定義された振る舞いに対応し始めたバージョンを記載しています。

- `uppercase`
  - : すべての文字を大文字に変換させるキーワードです。
- `lowercase`
  - : すべての文字を小文字に変換させるキーワードです。
- `none`
  - : すべての文字を変換させないキーワードです。
- `full-width`
  - : 一般的な東アジアの文字（中国語や日本語など）において、強制的に文字 — 主に記号やラテン文字 — を正方形の枠内に（全角で）表記して、揃えて表示するキーワードです。
- `full-size-kana`
  - : このキーワードは一般に {{htmlelement("ruby")}} によるフリガナで使用され、すべての小文字の仮名文字を同等の大文字の仮名文字に変換することで、ルビで使われるフォントの大きさによる読みやすさの問題を解消します。
- `math-auto`
  - : 数学のイタリック体でテキストを適切に自動的にレンダリングするために使用されます。 これは、ラテン文字やギリシャ文字、他にもいくつか数学関連の記号を、[イタリック体の数学記号](https://www.unicode.org/charts/PDF/U1D400.pdf)に変換しますが、適用されるのは、1 文字を含むテキストノードの場合のみです。 例えば、"x" は "𝑥" (U+1D465) になりますが、"exp" は "exp" のままです。
    主に、MathML の {{mathmlelement("mi")}} 要素の動作を指定するために使用されます。通常は、正しいスタイル設定が自動的に適用される MathML マークアップを使用しましょう。

## アクセシビリティ

テキストの長い区間に `text-transform` の値を `uppercase` で設定すると、失読症のような認知障碍を持つ人にとって読むのが難しくなることがあります。

- [MDN "WCAG を理解する ― ガイドライン 1.4 の解説"](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [W3C Understanding WCAG 2.1](https://www.w3.org/TR/WCAG21/#visual-presentation)

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### "none" の使用例

```html
<p>
  Initial String
  <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit…</strong>
</p>
<p>
  text-transform: none
  <strong
    ><span
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit…</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: none;
}
strong {
  float: right;
}
```

文字を変換しない例です。

{{ EmbedLiveSample('Example using "none"', '100%', '100px') }}

### "capitalize" の使用例（一般的）

```html
<p>
  Initial String
  <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit…</strong>
</p>
<p>
  text-transform: capitalize
  <strong
    ><span
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit…</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: capitalize;
}
strong {
  float: right;
}
```

頭文字を大文字にする例です。

{{ EmbedLiveSample('Example using "capitalize" (general)', '100%', '100px') }}

### "capitalize" の使用例（区切り文字）

```html
<p>
  Initial String
  <strong
    >(this) "is" [a] –short– -test- «for» *the* _css_ ¿capitalize?
    ?¡transform!</strong
  >
</p>
<p>
  text-transform: capitalize
  <strong
    ><span
      >(this) "is" [a] –short– -test- «for» *the* _css_ ¿capitalize?
      ?¡transform!</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: capitalize;
}
strong {
  float: right;
}
```

単語の前の区切り記号が無視される様子を示す例です。このキーワードは、文字または数字の一般カテゴリーに含まれる Unicode 文字である、最初の文字が対象です。

{{ EmbedLiveSample('Example using "capitalize" (punctuation)', '100%', '100px') }}

### "capitalize" の使用例（記号）

```html
<p>
  Initial String
  <strong>ⓐⓑⓒ (ⓓⓔⓕ) —ⓖⓗⓘ— ⓙkl</strong>
</p>
<p>
  text-transform: capitalize
  <strong><span>ⓐⓑⓒ (ⓓⓔⓕ) —ⓖⓗⓘ— ⓙkl</span></strong>
</p>
```

```css
span {
  text-transform: capitalize;
}
strong {
  float: right;
}
```

頭文字の記号が無視されるかを示す例です。このキーワードは、文字または数字の一般カテゴリーに含まれる Unicode 文字である、最初の文字が対象です。

{{ EmbedLiveSample('Example using "capitalize" (symbols)', '100%', '100px') }}

### "capitalize" の使用例 (オランダ語の二重音字 ij)

```html
<p>
  Initial String
  <strong lang="nl">The Dutch word: "ijsland" starts with a digraph.</strong>
</p>
<p>
  text-transform: capitalize
  <strong
    ><span lang="nl"
      >The Dutch word: "ijsland" starts with a digraph.</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: capitalize;
}
strong {
  float: right;
}
```

オランダ語の二重音字 _ij_ を 1 文字として扱わなければならないことを示す例です。

{{ EmbedLiveSample('Example using "capitalize" (Dutch ij digraph)', '100%', '100px') }}

### "uppercase" の使用例（一般的）

```html
<p>
  Initial String
  <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit…</strong>
</p>
<p>
  text-transform: uppercase
  <strong
    ><span
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit…</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: uppercase;
}
strong {
  float: right;
}
```

テキストを大文字に変換する例です。

{{ EmbedLiveSample('Example using "uppercase" (general)', '100%', '100px') }}

### "uppercase" の使用例（ギリシャ語の母音字）

```html
<p>
  Initial String
  <strong>Θα πάμε στο "Θεϊκό φαΐ" ή στη "Νεράιδα"</strong>
</p>
<p>
  text-transform: uppercase
  <strong
    ><span lang="el">Θα πάμε στο "Θεϊκό φαΐ" ή στη "Νεράιδα"</span></strong
  >
</p>
```

```css
span {
  text-transform: uppercase;
}
strong {
  float: right;
}
```

離接的接続の _eta_ を除くギリシャ語の母音字はアクセント記号を持たないこと、および二重母音の最初の文字のアクセント記号が 2 文字目の母音字のトレマになることを示す例です。

{{ EmbedLiveSample('Example using "uppercase" (Greek vowels)', '100%', '100px') }}

### "lowercase" の使用例（一般的）

```html
<p>
  Initial String
  <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit…</strong>
</p>
<p>
  text-transform: lowercase
  <strong
    ><span
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit…</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: lowercase;
}
strong {
  float: right;
}
```

テキストを小文字に変換する例です。

{{ EmbedLiveSample('Example using "lowercase" (general)', '100%', '100px') }}

### "lowercase" の使用例（ギリシャ文字 Σ）

```html
<p>
  Initial String
  <strong>Σ IS A greek LETTER that appears SEVERAL TIMES IN ΟΔΥΣΣΕΥΣ.</strong>
</p>
<p>
  text-transform: lowercase
  <strong
    ><span
      >Σ IS A greek LETTER that appears SEVERAL TIMES IN ΟΔΥΣΣΕΥΣ.</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: lowercase;
}
strong {
  float: right;
}
```

ギリシャ文字のシグマ (`Σ`) が、状況に応じて一般的な小文字のシグマ (`σ`) または単語の末尾での表記 (`ς`) に変換される例です。

{{ EmbedLiveSample('Example using "lowercase" (Greek Σ)', '100%', '100px') }}

### "lowercase" の使用例（リヒテンシュタイン語）

```html
<p>
  Initial String
  <strong>Ĩ is a Lithuanian LETTER as is J́</strong>
</p>
<p>
  text-transform: lowercase
  <strong><span lang="lt">Ĩ is a Lithuanian LETTER as is J́</span></strong>
</p>
```

```css
span {
  text-transform: lowercase;
}
strong {
  float: right;
}
```

これはリヒテンシュタインの文字 `Ĩ` および `J́` が小文字に変換されるとドットを保持する様子を示します。

{{ EmbedLiveSample('Example using "lowercase" (Lithuanian)', '100%', '100px') }}

### "full-width"（一般）

```html
<p>
  Initial String
  <strong
    >0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&()*+,-./:;<=>?@{|}~</strong
  >
</p>
<p>
  text-transform: full-width
  <strong
    ><span
      >0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&()*+,-./:;<=>?@{|}~</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: full-width;
}
strong {
  width: 100%;
  float: right;
}
```

一部の文字は半角と全角の 2 種類の表現があり、それらは別々の Unicode コードポイントを持ちます。全角文字は、アジア圏の表意文字と自然な形で混在させるために使用します。

{{ EmbedLiveSample('Example using "full-width" (general)', '100%', '175px') }}

### "full-width"（日本語の半角カタカナ）

```html
<p>
  Initial String
  <strong>ｳｪﾌﾞﾌﾟﾛｸﾞﾗﾐﾝｸﾞの勉強</strong>
</p>
<p>
  text-transform: full-width
  <strong><span>ｳｪﾌﾞﾌﾟﾛｸﾞﾗﾐﾝｸﾞの勉強</span></strong>
</p>
```

```css
span {
  text-transform: full-width;
}
strong {
  width: 100%;
  float: right;
}
```

日本語の半角カタカナは、8 ビットの文字コードでカタカナを表現するために使われていました。通常の（全角の）カタカナ文字とは異なり、濁点の付いた文字は、文字本体と濁点の 2 つのコードポイントで表現されます。 `full-width` は、これらの文字を全角に変換する際に、1 つのコードポイントにまとめます。

{{ EmbedLiveSample('Example using "full-width" (Japanese half-width katakana)', '100%', '175px') }}

### "full-size-kana" の使用例

```html
<p>ァィゥェ ォヵㇰヶ ㇱㇲッㇳ ㇴㇵㇶㇷ ㇸㇹㇺャ ュョㇻㇼ ㇽㇾㇿヮ</p>
<p>ァィゥェ ォヵㇰヶ ㇱㇲッㇳ ㇴㇵㇶㇷ ㇸㇹㇺャ ュョㇻㇼ ㇽㇾㇿヮ</p>
```

```css
p:nth-of-type(2) {
  text-transform: full-size-kana;
}
```

{{ EmbedLiveSample('Example using "full-size-kana"', '100%', '175px') }}

### "math-auto" の使用例

例えば、純粋な HTML マークアップを使用して数式を作成します。

```html
<div>
  (<span class="math-id">sin</span>&#8198;<span class="math-id">x</span>)<sup
    >2</sup
  >
  + (<span class="math-id">cos</span>&#8198;<span class="math-id">x</span>)<sup
    >2</sup
  >
  = 1
</div>
```

すべての `.math-id` 要素に `text-transform: math-auto` を指定しています。しかし、`x` の文字だけがイタリック体になり、`sin` や `cos` は変化しないことに注目してください。

```css
.math-id {
  text-transform: math-auto;
}
```

{{ EmbedLiveSample('Example using "math-auto"', '', '100px') }}

ただし、数式には [MathML](/ja/docs/Web/MathML) を使用することをお勧めします。これは、数式コンテンツをより堅牢でアクセシビリティの高い方法で表します。以下は、同じ数式を MathML を使用して記述したものです。

```xml
<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <semantics>
    <mrow>
      <mo stretchy="false">(</mo>
      <mo lspace="0em" rspace="0em">sin</mo>
      <mspace width="0.16666666666666666em"></mspace>
      <mi>x</mi>
      <msup>
        <mo stretchy="false">)</mo>
        <mn>2</mn>
      </msup>
      <mo>+</mo>
      <mo stretchy="false">(</mo>
      <mo lspace="0em" rspace="0em">cos</mo>
      <mspace width="0.16666666666666666em"></mspace>
      <mi>x</mi>
      <msup>
        <mo stretchy="false">)</mo>
        <mn>2</mn>
      </msup>
      <mo>=</mo>
      <mn>1</mn>
    </mrow>
    <annotation encoding="TeX">(\sin\,x)^2+(\cos\,x)^2=1</annotation>
  </semantics>
</math>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("font-variant")}}
