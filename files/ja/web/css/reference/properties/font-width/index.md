---
title: CSS `font-width` プロパティ
short-title: font-width
slug: Web/CSS/Reference/Properties/font-width
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{SeeCompatTable}}

> [!NOTE]
> `font-width` プロパティは、古い別名である {{cssxref("font-stretch")}} の新しい置き換えです。`font-width` は仕様書の推奨される名前ですが、`font-stretch` のほうが今のところより広くブラウザーが対応しています。詳しくは[フォールバックの例](#font-stretch_による代替の提供)と[ブラウザーの互換性](#ブラウザーの互換性)の表を参照してください。

**`font-width`** は [CSS](/ja/docs/Web/CSS) のプロパティで、フォントから通常、圧縮、引き伸ばしのフェイスを選択します。

{{InteractiveExample("CSS Demo: font-width")}}

```css interactive-example-choice
font-width: condensed;
```

```css interactive-example-choice
font-width: expanded;
```

```css interactive-example-choice
font-width: ultra-expanded;
```

```css interactive-example-choice
font-width: 50%;
```

```css interactive-example-choice
font-width: 100%;
```

```css interactive-example-choice
font-width: 150%;
```

```html interactive-example
<section class="default-example" id="default-example">
  <p class="transition-all" id="example-element">
    London. Michaelmas term lately over, and the Lord Chancellor sitting in
    Lincoln's Inn Hall. Implacable November weather. As much mud in the streets
    as if the waters had but newly retired from the face of the earth, and it
    would not be wonderful to meet a Megalosaurus, forty feet long or so,
    waddling like an elephantine lizard up Holborn Hill.
  </p>
</section>
```

```css interactive-example
@font-face {
  src: url("/shared-assets/fonts/LeagueMono-VF.ttf") format("truetype");
  font-family: "League";
  font-style: normal;
  font-weight: normal;
}

section {
  font-size: 1.2em;
  font-family: "League", sans-serif;
}
```

## 構文

```css
/* キーワード値 */
font-width: normal;
font-width: ultra-condensed;
font-width: extra-condensed;
font-width: condensed;
font-width: semi-condensed;
font-width: semi-expanded;
font-width: expanded;
font-width: extra-expanded;
font-width: ultra-expanded;

/* パーセント値 */
font-width: 50%;
font-width: 100%;
font-width: 200%;

/* グローバル値 */
font-width: inherit;
font-width: initial;
font-width: revert;
font-width: revert-layer;
font-width: unset;
```

このプロパティは、単一のキーワードまたは単一の {{cssxref("&lt;percentage&gt;")}} 値として指定することができます。

### 値

- `normal`
  - : 通常体のフォントフェイスを指定します。
- `semi-condensed`, `condensed`, `extra-condensed`, `ultra-condensed`
  - : 通常より幅を圧縮した (condensed) フォントフェイスを指定します。最も幅の狭いフェイスは `ultra-condensed` です。
- `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`
  - : 通常より幅を引き伸ばした (expanded) フォントフェイスを指定します。最も幅の広いフェイスは `ultra-expanded` です。
- `<percentage>`
  - : {{cssxref("&lt;percentage&gt;")}} 値で、50% 以上 200% 以下です。このプロパティでは負の数は許可されていません。

### キーワードと数値の対応

キーワード値と数値によるパーセント値の対応は、次の表のとおりです。

| キーワード        | パーセント値 |
| ----------------- | ------------ |
| `ultra-condensed` | 50%          |
| `extra-condensed` | 62.5%        |
| `condensed`       | 75%          |
| `semi-condensed`  | 87.5%        |
| `normal`          | 100%         |
| `semi-expanded`   | 112.5%       |
| `expanded`        | 125%         |
| `extra-expanded`  | 150%         |
| `ultra-expanded`  | 200%         |

## 解説

フォントファミリーによっては、通常より狭い文字（圧縮したフェイス）、通常より広い文字（引き伸ばしたフェイス）などの追加のフェイスを提供しています。

`font-width` を使うと、そのようなフォントで圧縮したフェイスや引き伸ばしたフェイスを選択することができます。使用しているフォントが圧縮したフェイスや引き伸ばしたフェイスを提供していない場合は、このプロパティは効果がありません。

#### フォントフェイスの選択

`font-width` で与えられた値で選択されるフェイスは、フォントがそのフェイスに対応しているかによります。与えられた値に正確に一致するフェイスがフォントに存在しない場合、値が 100% よりも小さい場合は圧縮したフェイスが割り当てられ、100% 以上の場合はより引き伸ばしたフェイスが割り当てられます。

以下の表は 2 つの異なるフォントにおいて、`font-width` に様々なパーセント値を設定した場合の効果を示しています。

```css hidden
@font-face {
  font-family: "Inconsolata";
  src: url("https://fonts.gstatic.com/s/inconsolata/v31/QlddNThLqRwH-OJ1UHjlKENVzlm-WkL3GZQmAwPyya15.woff2")
    format("woff2");
}

@font-face {
  font-family: "Anek Malayalam";
  src: url("https://fonts.gstatic.com/s/anekmalayalam/v4/6qLUKZActRTs_mZAJUZWWkhke0nYa-f6__Azq3-gP1W7db9_.woff2")
    format("woff2");
}

body {
  font-family: system-ui;
}

table {
  border-collapse: collapse;
  width: 100%;
}

tbody th {
  text-align: right;
}

th,
td {
  padding: 0.25rem;
  font-weight: normal;
  text-align: center;
}

td {
  border: solid;
  border-width: 1px;
  font-size: 5rem;
}

.inconsolata {
  font-family: "Inconsolata", sans-serif;
}

.anek-malayalam {
  font-family: "Anek Malayalam", sans-serif;
}

td:nth-child(2) {
  font-width: 50%;
}
td:nth-child(3) {
  font-width: 62.5%;
}
td:nth-child(4) {
  font-width: 75%;
}
td:nth-child(5) {
  font-width: 87.5%;
}
td:nth-child(6) {
  font-width: 100%;
}
td:nth-child(7) {
  font-width: 112.5%;
}
td:nth-child(8) {
  font-width: 125%;
}
td:nth-child(9) {
  font-width: 150%;
}
td:nth-child(10) {
  font-width: 200%;
}
```

```html hidden
<table>
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">50%</th>
      <th scope="col">62.5%</th>
      <th scope="col">75%</th>
      <th scope="col">87.5%</th>
      <th scope="col">100%</th>
      <th scope="col">112.5%</th>
      <th scope="col">125%</th>
      <th scope="col">150%</th>
      <th scope="col">200%</th>
    </tr>
  </thead>
  <tbody>
    <tr class="inconsolata">
      <th scope="row">Inconsolata</th>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
    </tr>
    <tr class="anek-malayalam">
      <th scope="row">Anek Malayalam</th>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
    </tr>
  </tbody>
</table>
```

{{EmbedLiveSample('Font face selection', "100%", "250px")}}

ブラウザーが `font-width` プロパティに対応していない場合に備え、上の表がどのように表示されるかを以下のスクリーンショットに示します。

![小文字の "e" を異なる幅（50%、62.5%、75%、87.5%、100%、112.5%、125%、150%、200%）で表示させた 2 行の比較表。上段は Inconsolata、下段は Anek Malayalam とラベル付けされています。どちらもサンセリフフォントですが、Inconsolata の文字は Anek Malayalam に比べてわずかに幅広くなっています。](font-face-selection.png)

- [Inconsolata](https://fonts.google.com/specimen/Inconsolata) は、 50% から 200% まで連続的に幅を変化させることができる可変フォントです。 <!-- Note, dynamically obtained woff2 from Google fonts using query: https://fonts.googleapis.com/css2?family=Inconsolata:wdth@50..200 -->
- [Anek Malayalam](https://fonts.google.com/specimen/Anek+Malayalam) は 75% から 125% の幅に対応している可変の Google フォントです。この範囲を下回る値や上回る値では、最も一致するフォントが選択されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax("font-width")}}

## 例

### フォントの幅のパーセント値の設定

```html
<p class="condensed">an elephantine lizard</p>
<p class="normal">an elephantine lizard</p>
<p class="expanded">an elephantine lizard</p>
```

```css
@font-face {
  src: url("/shared-assets/fonts/LeagueMono-VF.ttf") format("truetype");
  font-family: "LeagueMonoVariable";
  font-style: normal;
}

p {
  font:
    1.5rem "LeagueMonoVariable",
    sans-serif;
}

.condensed {
  font-width: 50%;
}

.normal {
  font-width: 100%;
}

.expanded {
  font-width: 200%;
}
```

{{EmbedLiveSample("Setting font width percentages", "100%", 200)}}

### font-stretch による代替の提供

`font-width` はまだブラウザーの対応が広くないため、代替手段として古い {{cssxref("font-stretch")}} プロパティを追加することをお勧めします。対応しているブラウザーが新しいプロパティを使用するように、`font-stretch` を `font-width` の前に記載してください。

```css
p {
  font-stretch: condensed; /* font-width に対応していないブラウザー向け */
  font-width: condensed;
}
```

> [!NOTE]
> この代替パターンについては、PostCSS 用の [postcss-preset-env](https://preset-env.cssdb.org/) プラグインを使用することで自動化できます。このプラグインには、[postcss-font-width-property](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-font-width-property) 変換機能が含まれており、`font-width` プロパティを自動的に `font-stretch` に変換します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@font-face/font-width")}} 記述子 ({{cssxref("@font-face")}})
- 古い {{cssxref("font-stretch")}} の別名プロパティ（よりブラウザーの対応が広い）
- {{cssxref("font-style")}} プロパティ
- {{cssxref("font-weight")}} プロパティ
- SVG {{SVGAttr("font-width")}} 属性
- SVG {{SVGAttr("font-stretch")}} 属性
- [基本的なテキストとフォントのスタイル設定](/ja/docs/Learn_web_development/Core/Text_styling/Fundamentals)
- [CSS フォント](/ja/docs/Web/CSS/Guides/Fonts)モジュール
