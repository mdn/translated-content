---
title: font-stretch
slug: Web/CSS/Reference/Properties/font-stretch
l10n:
  sourceCommit: 3c91c067a4d36b532a4bce72e5d8a2c5a9279db5
---

> [!NOTE]
> `font-stretch` プロパティは [CSS Fonts specification](https://drafts.csswg.org/css-fonts/#font-stretch-prop) において {{cssxref("font-width")}} に改名されました。互換性を維持するため、この仕様書では `font-stretch` を `font-width` プロパティの古い別名として残しています。

**`font-stretch`** は [CSS](/ja/docs/Web/CSS) のプロパティで、フォントの通常、圧縮、引き伸ばしのフェイスを選択します。

{{InteractiveExample("CSS デモ: font-stretch")}}

```css interactive-example-choice
font-stretch: condensed;
```

```css interactive-example-choice
font-stretch: expanded;
```

```css interactive-example-choice
font-stretch: ultra-expanded;
```

```css interactive-example-choice
font-stretch: 50%;
```

```css interactive-example-choice
font-stretch: 100%;
```

```css interactive-example-choice
font-stretch: 150%;
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
font-stretch: normal;
font-stretch: ultra-condensed;
font-stretch: extra-condensed;
font-stretch: condensed;
font-stretch: semi-condensed;
font-stretch: semi-expanded;
font-stretch: expanded;
font-stretch: extra-expanded;
font-stretch: ultra-expanded;

/* パーセント値 */
font-stretch: 50%;
font-stretch: 100%;
font-stretch: 200%;

/* グローバル値 */
font-stretch: inherit;
font-stretch: initial;
font-stretch: revert;
font-stretch: revert-layer;
font-stretch: unset;
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

`font-stretch` を使うと、そのようなフォントで圧縮したフェイスや引き伸ばしたフェイスを選択することができます。使用しているフォントが圧縮したフェイスや引き伸ばしたフェイスを提供していない場合は、このプロパティは効果がありません。

#### フォントフェイスの選択

`font-stretch` で与えられた値で選択されるフェイスは、フォントがそのフェイスに対応しているかによります。与えられた値に正確に一致するフェイスがフォントに存在しない場合、値が `100%` よりも小さい場合は圧縮したフェイスが割り当てられ、`100%` と等しいか大きい場合はより引き伸ばしたフェイスが割り当てられます。

以下の表は 2 つの異なるフォントにおいて、`font-stretch` に様々なパーセント値を設定した場合の効果を示しています。

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
  font-stretch: 50%;
}
td:nth-child(3) {
  font-stretch: 62.5%;
}
td:nth-child(4) {
  font-stretch: 75%;
}
td:nth-child(5) {
  font-stretch: 87.5%;
}
td:nth-child(6) {
  font-stretch: 100%;
}
td:nth-child(7) {
  font-stretch: 112.5%;
}
td:nth-child(8) {
  font-stretch: 125%;
}
td:nth-child(9) {
  font-stretch: 150%;
}
td:nth-child(10) {
  font-stretch: 200%;
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

- [Inconsolata](https://fonts.google.com/specimen/Inconsolata) は、 50% から 200% まで連続的に幅を変化させることができる可変フォントです。 <!-- Note, dynamically obtained woff2 from Google fonts using query: https://fonts.googleapis.com/css2?family=Inconsolata:wdth@50..200 -->
- [Anek Malayalam](https://fonts.google.com/specimen/Anek+Malayalam) は 75% から 125% の幅に対応している可変の Google フォントです。この範囲を下回る値や上回る値では、最も一致するフォントが選択されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax("font-stretch")}}

## 例

### フォントの引き伸ばしパーセント値の設定

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
  font-stretch: 50%;
}

.normal {
  font-stretch: 100%;
}

.expanded {
  font-stretch: 200%;
}
```

{{EmbedLiveSample("Setting font stretch percentages", "100%", 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@font-face/font-stretch")}} 記述子 ({{cssxref("@font-face")}})
- より新しい {{cssxref("font-width")}} プロパティ、`font-stretch` の後継
- {{cssxref("font-style")}} プロパティ
- {{cssxref("font-weight")}} プロパティ
- SVG の {{SVGAttr("font-stretch")}} 属性
- [基本的なテキストとフォントのスタイル設定](/ja/docs/Learn_web_development/Core/Text_styling/Fundamentals)
- [CSS フォント](/ja/docs/Web/CSS/Guides/Fonts)モジュール
