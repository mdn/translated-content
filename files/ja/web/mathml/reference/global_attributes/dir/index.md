---
title: dir
slug: Web/MathML/Reference/Global_attributes/dir
l10n:
  sourceCommit: 4c302cd01003cf42f175d5ba149e536ab1923df6
---

**`dir`** [グローバル属性](/ja/docs/Web/MathML/Reference/Global_attributes)は、MathML 要素の書字方向を示す[列挙型](/ja/docs/Glossary/Enumerated)属性です。

## 構文

```html-nolint
<math dir="ltr">
<math dir="rtl">
```

### 値

- `ltr`
  - : 数式を左から右へ描画する（例：英語やモロッコ語など）。
- `rtl`
  - : 数式を右から左へ描画する機能（例：アラビア語、ヘブライ語、ターナ文字、マグリブ語、マシュリク語など）。

## 解説

書字方向によって、数式が表示される方向が左から右か、右から左かを制御します。

### RTL モードにおける MathML 数式の鏡像化と伸縮

右から左へ表示させる文字言語をレンダリングする場合、MathML 数式内の記号を垂直軸を中心に反転させる必要があることがあり、同時に垂直方向に伸縮させる必要も生じることがあります。

鏡像化を実現するにあたって、「ベース書体」を探すためにさまざまな手法を使用する可能性があります。

- 文字単位の鏡像化: Unicode の `Bidi_Mirrored` プロパティで定義されている、対応する鏡像化された Unicode コードポイントに文字を置き換えること（例えば、`>` を `<` に、または `]` を `[` に置き換える）。
- 書体単位の鏡像化：文字を、鏡像として表すことができる書体に置き換えること（直接置き換え可能な書体が存在しない場合）。
  この場合、使用するフォントが [「右から左への鏡像形式 (`rtlm`)」フォント特性](https://en.wikipedia.org/wiki/List_of_typographic_features#Features_depending_on_writing_direction) を対応している必要があります。

その後、この基本字形を OpenType MathVariant 表のキーとして使用することで、より大きな字形や字形部品を取得することができます。

なお、効果的な鏡像化や伸縮を行うには、OpenType MathVariant 表と `rtlm` フォント特性の両方を含むフォント（XITS など）が必要です。

### `dir` は CSS の `direction` プロパティよりも推奨

CSS ページが有効であり、かつ要素がこれらのプロパティに対応している場合、この属性は CSS の {{ cssxref("direction") }} プロパティによって上書きされる可能性があります。
数式の向きは、その表示形式ではなくコンテンツと意味的に関連しているため、ウェブ開発者は可能な限り、関連する CSS プロパティの代わりにこの属性を使用することを推奨します。
そうすることで、CSS に対応していないブラウザーや、CSS が無効になっているブラウザーでも、数式が正しく表示されます。

> [!NOTE]
> アラビア語圏では、`dir` 属性は多くの場合 `rtl` に設定されます。
> しかし、右書きで書く言語では、左書きで書く数式が埋め込まれることがよくあります。
> その場合、HTML の `dir` 属性に含まれる `auto` キーワードは認識されず、デフォルトで[ユーザーエージェントスタイルシート](/ja/docs/Web/CSS/Guides/Cascade/Introduction#user-agent_stylesheets)によって、[`math`](/ja/docs/Web/MathML/Reference/Element/math) 要素の direction プロパティがリセットされます。

## 例

### 基本的な使い方

```css hidden
html,
body {
  height: 100%;
}

body {
  display: grid;
  place-items: center;
  font-size: 1.5rem;
}
```

```html
<!-- Moroccan スタイル -->
<math display="block" dir="ltr">
  <msqrt>
    <mi>س</mi>
  </msqrt>
  <mo>=</mo>
  <msup>
    <mn>3</mn>
    <mi>ب</mi>
  </msup>
</math>

<!-- Maghreb/Machrek スタイル -->
<math display="block" dir="rtl">
  <msqrt>
    <mi>س</mi>
  </msqrt>
  <mo>=</mo>
  <msup>
    <mn>٣</mn>
    <mi>ب</mi>
  </msup>
</math>
```

{{ EmbedLiveSample("Basic usage", "", 150) }}

### 鏡像化と伸縮

この例では、より複雑な MathML 数式において、`ltr` および `rtl` 方向の設定による効果、ならびに [`<mo>`](/ja/docs/Web/MathML/Reference/Element/mo) 要素に対する `largeop` および `stretchy` の設定による効果を示しています。

#### MathML

```css hidden
html,
body {
  height: 100%;
}

body {
  display: grid;
  font-size: 1.5rem;
}
```

まず、XITS フォント用のスタイルシートをリンクします。このフォントは、グリフを適切に反転・伸縮させるために必要な `rtlm` フォント特性と MathVariant 表に対応しています。

```html
<link
  rel="stylesheet"
  href="https://fred-wang.github.io/MathFonts/XITS/mathfonts.css" />
```

まず最初の 2 つの式は、それぞれの要素について `largeop` と `stretchy` を false に設定し、`ltr` および `rtl` で表示させます。

```html
<math dir="ltr" display="block">
  <mrow>
    <munderover>
      <mo largeop="false">∑</mo>
      <mrow>
        <mi>n</mi>
        <mo>=</mo>
        <mn>1</mn>
      </mrow>
      <mn>∞</mn>
    </munderover>
    <mfrac>
      <mn>1</mn>
      <msup>
        <mi>n</mi>
        <mn>2</mn>
      </msup>
    </mfrac>
  </mrow>
  <mo>∊</mo>
  <mrow>
    <mo stretchy="false">(</mo>
    <mfrac>
      <mn>3</mn>
      <mn>2</mn>
    </mfrac>
    <mo>,</mo>
    <mfrac>
      <mn>7</mn>
      <mn>4</mn>
    </mfrac>
    <mo stretchy="false">]</mo>
  </mrow>
</math>
```

```html
<math dir="rtl" display="block">
  <mrow>
    <munderover>
      <mo largeop="false">∑</mo>
      <mrow>
        <mi>n</mi>
        <mo>=</mo>
        <mn>1</mn>
      </mrow>
      <mn>∞</mn>
    </munderover>
    <mfrac>
      <mn>1</mn>
      <msup>
        <mi>n</mi>
        <mn>2</mn>
      </msup>
    </mfrac>
  </mrow>
  <mo>∊</mo>
  <mrow>
    <mo stretchy="false">(</mo>
    <mfrac>
      <mn>3</mn>
      <mn>2</mn>
    </mfrac>
    <mo>,</mo>
    <mfrac>
      <mn>7</mn>
      <mn>4</mn>
    </mfrac>
    <mo stretchy="false">]</mo>
  </mrow>
</math>
```

この数式も `rtl` ですが、`∑` 演算子に対して `largeop` を true に設定しているため、演算子が大きく表示されます。
また、中括弧に対して `stretchy` を `true` に設定しているため、対応しているブラウザーでは、中括弧が中に含まれる分数の高さまで伸びて表示されます。

```html
<math dir="rtl" display="block">
  <mrow>
    <munderover>
      <mo largeop="true">∑</mo>
      <mrow>
        <mi>n</mi>
        <mo>=</mo>
        <mn>1</mn>
      </mrow>
      <mn>∞</mn>
    </munderover>
    <mfrac>
      <mn>1</mn>
      <msup>
        <mi>n</mi>
        <mn>2</mn>
      </msup>
    </mfrac>
  </mrow>
  <mo>∊</mo>
  <mrow>
    <mo stretchy="true">(</mo>
    <mfrac>
      <mn>3</mn>
      <mn>2</mn>
    </mfrac>
    <mo>,</mo>
    <mfrac>
      <mn>7</mn>
      <mn>4</mn>
    </mfrac>
    <mo stretchy="true">]</mo>
  </mrow>
</math>
```

#### 結果

RTL の鏡像化と伸縮に対応しているブラウザーでは、3 つの数式の出力は下記のように現れるはずです。
最初の 2 つは、伸縮を行わずに、左から右、および右から左の順で数式が表示されています。
最後の数式では、`rtl` と `stretching` を使用し、和の記号には `largeop` が適用されています。

![グリフの反転と要素の伸縮の両方を対応する Firefox における、3 つの数式のバリエーションの画面ショット](example_with_stretchy_and_largeop.png)

このブラウザーでは、次のように表示されます。

{{ EmbedLiveSample("Mirroring and stretching", "", 250) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- すべての[グローバル属性](/ja/docs/Web/MathML/Reference/Global_attributes)
- {{cssxref("direction")}}
- HTML の [`dir`](/ja/docs/Web/HTML/Reference/Global_attributes/dir) グローバル属性
