---
title: mask-composite
slug: Web/CSS/Reference/Properties/mask-composite
original_slug: Web/CSS/mask-composite
l10n:
  sourceCommit: 188dfae7d6173b0fad6fd4f8656d96f02cd2eb5d
---

**`mask-composite`** は [CSS](/ja/docs/Web/CSS) のプロパティで、現在のマスクレイヤーとその下のマスクレイヤーとの間で使われる合成操作を表します。

## 構文

```css
/* キーワード値 */
mask-composite: add;
mask-composite: subtract;
mask-composite: intersect;
mask-composite: exclude;

/* グローバル値 */
mask-composite: inherit;
mask-composite: initial;
mask-composite: revert;
mask-composite: revert-layer;
mask-composite: unset;
```

### 値

このプロパティは、カンマで区切られた `<compositing-operator>` キーワードの値のリストを受け入れます。各キーワードは、現在のマスクレイヤーとその下のマスクレイヤーに対して使用される合成操作を定義する、 Porter-Duff 合成演算子を表します。

- `add`
  - : 関連付けられたマスク画像は、その下のすべてのマスクレイヤーの上に配置されます（対応する合成操作が適用されます）。これが既定値です。
- `subtract`
  - : 関連付けられたマスク画像が、その下のすべてのマスクレイヤーの外側に配置されます（対応する合成操作が適用されます）。
- `intersect`
  - : 関連付けられたマスク画像のうち、その下のすべての合成マスクレイヤーと重なっている部分が、前回合成されたレイヤーを置き換えます。
- `exclude`
  - : 関連付けられたマスク画像と、その下のマスクレイヤーの重複しない領域が、対応する合成操作が適用されて結合されます。

## 解説

要素に複数のマスクレイヤーが適用されている場合、`mask-composite` プロパティを使用して、複数のマスクが互いにどのように作用するか、あるいは最終的なマスク効果を作成する際にどのように合成されるかを定義することができます。

レイヤーの数は、`mask-image` プロパティの値にカンマで区切られた値の数によって決まります（値が `none` の場合も同様です）。カンマで区切られた値のリスト内の各 `mask-composite` 値は、`mask-image` 値と順番に照合されます。`mask-composite` の値の数が `mask-image` の値の数以上である場合、余分な値は無視されます。`mask-composite` プロパティに、レイヤーの数と一致するカンマ区切りの値が十分存在しない場合、十分な数になるまで値のリストが繰り返されます。

この操作では、現在のマスクレイヤーまたは関連付けられたマスクレイヤー画像であるソースレイヤーが、出力先レイヤーに追加（既定）、差分、交差、または除外されます。出力先レイヤーは、ソースの下にあるマスクレイヤーで、対応する合成演算子が適用されます。これには、カンマで区切られたマスクのリスト内に表示される順に、すべての前回のレイヤーが含まれます。現在のマスクレイヤーの下にあるすべてのマスクレイヤーは、現在のマスクレイヤーに合成操作を適用する前に合成する必要があります。マスクレイヤーの画像は、定義された合成値によって結合される前に、処理のためにアルファマスクに変換されます。

要素または擬似要素に適用された複数のマスクレイヤーは、それらが孤立したグループとしてレンダリングされたかのように動作します。言い換えれば、マスクレイヤーは、要素のコンテンツや要素の背後のコンテンツとではなく、他のマスクレイヤーと合成されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な使い方

この例は、`mask-composite` プロパティの基本的な使い方を示しています。

#### HTML

スタイルを設定する HTML {{htmlelement("div")}} 要素を記述します。

```html
<div></div>
```

#### CSS

`<div>` のサイズと色を指定し、それから 2 つの {{cssxref("mask-image")}} を追加して、 {{cssxref("mask-size")}} プロパティを使用して、それらのサイズを、マスクする要素のサイズと一致させます。最後に、 `mask-composite` プロパティを `subtract` に設定して、 2 つ目のマスク画像を 1 つ目のマスク画像から差し引きます。

```css
div {
  width: 100px;
  height: 100px;
  background-color: red;

  mask-image:
    url(https://mdn.github.io/shared-assets/images/examples/mdn.svg),
    url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
  mask-size: 100% 100%;

  mask-composite: subtract;
}
```

#### 結果

{{EmbedLiveSample("basic usage", "", "150px")}}

### 値の比較

この例では、 `mask-composite` プロパティの 4 つの `<compositing-operator>` キーワードの値を示し、 [`alpha` および `luminance`](/ja/docs/Web/SVG/Reference/Attribute/mask-type#mask) マスクモードの効果を比較しています。

#### HTML

8 つの画像が含まれている {{htmlelement("table")}} が指定されています。簡潔にするため、 `<table>` は非表示にしています。

```html hidden
<table>
  <tbody>
    <tr>
      <th colspan="4">mask-type: alpha</th>
    </tr>
    <tr>
      <th>mask-composite: add</th>
      <th>mask-composite: subtract</th>
      <th>mask-composite: intersect</th>
      <th>mask-composite: exclude</th>
    </tr>
    <tr class="alphaMaskType">
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
    </tr>

    <tr>
      <th colspan="4">
        <code>mask-type: luminance</code>
      </th>
    </tr>
    <tr>
      <th>mask-composite: add</th>
      <th>mask-composite: subtract</th>
      <th>mask-composite: intersect</th>
      <th>mask-composite: exclude</th>
    </tr>
    <tr class="luminanceMaskType">
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
    </tr>
  </tbody>
</table>
```

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
```

そして、4 つのマスク（アルファのハートと円、および輝度のハートと円）を持つ SVG です。ハートのマスクは、単色を使用して定義されています。円のマスクは、半透明の白と黒の {{SVGAttr("stroke")}} および {{SVGAttr("fill")}} 色を使用して作成されています。

```html
<svg height="0" width="0">
  <mask id="heartAlpha" class="alpha">
    <path
      d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
      fill="green"
      stroke="white"
      stroke-width="20" />
  </mask>
  <mask id="circleAlpha" class="alpha">
    <circle
      cx="130"
      cy="130"
      r="50"
      fill="rgb(0 0 0 / 0.5)"
      stroke="rgb(255 255 255 / 0.5)"
      stroke-width="20" />
  </mask>
  <mask id="heartLuminance" class="luminance">
    <path
      d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
      fill="green"
      stroke="white"
      stroke-width="20" />
  </mask>
  <mask id="circleLuminance" class="luminance">
    <circle
      cx="130"
      cy="130"
      r="50"
      fill="rgb(0 0 0 / 0.5)"
      stroke="rgb(255 255 255 / 0.5)"
      stroke-width="20" />
  </mask>
</svg>
```

#### CSS

最初に、 `<mask>` 要素のスタイルを設定し、各マスクの {{cssxref("mask-type")}} プロパティ値に `alpha` または `luminance` のいずれかを指定します。

```css
mask.luminance {
  mask-type: luminance;
}

mask.alpha {
  mask-type: alpha;
}
```

次に、カンマ区切りの {{cssxref("mask-image")}} プロパティ値として、ハートと円のマスクを適用します。これらは、各 {{htmlelement("img")}} 要素に適用され、行内のすべての画像に同じマスクが取得されます。

```css
/* マスク画像を適用 */
tr.alphaMaskType img {
  mask-image: url(#heartAlpha), url(#circleAlpha);
}

tr.luminanceMaskType img {
  mask-image: url(#heartLuminance), url(#circleLuminance);
}
```

最後に、`mask-composite` プロパティを使用してマスクを合成し、表の列ごとに 4 つの異なる列挙型の `mask-composite` 値を適用します。

```css
/* テスト中のプロパティ */
td:nth-of-type(1) img {
  mask-composite: add;
}
td:nth-of-type(2) img {
  mask-composite: subtract;
}
td:nth-of-type(3) img {
  mask-composite: intersect;
}
td:nth-of-type(4) img {
  mask-composite: exclude;
}
```

簡潔にするため、表のスタイルは非表示にしています。

```css hidden
mask {
  height: 50%;
}

table,
td,
th {
  border: 1px solid;
}
th {
  font-family: monospace;
}
th {
  color: green;
}
body > img {
  display: none;
}
```

#### 結果

{{EmbedLiveSample("value comparison", "", "600")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("mask")}} 一括指定
- {{cssxref("mask-type")}}
- {{cssxref("mask-mode")}}
- [CSS マスク](/ja/docs/Web/CSS/Guides/Masking)モジュール
