---
title: vertical-align
slug: Web/CSS/vertical-align
l10n:
  sourceCommit: 583d48191a7a8605d831aff357bef6cc63aef2e3
---

{{CSSRef}}

**`vertical-align`** は [CSS](/ja/docs/Web/CSS) のプロパティで、インラインボックス、インラインブロック、表セルボックスの垂直方向の配置を設定します。

{{EmbedInteractiveExample("pages/css/vertical-align.html")}}

vertical-align は、2 つの場面で使用することができます。

- その中の行ボックスの中で、インラインレベル要素のボックスの垂直方向の配置を決める場合。例えば、[テキストの行の中で画像の垂直位置を決める](#行ボックス内での垂直方向の配置)ために使用することができます。
- [表のセルの内容](#表のセル内での垂直方向の配置)の垂直方向の配置を決める場合。

`vertical-align` はインライン要素、インラインブロック要素、表のセル要素だけに適用されることに注意してください。つまり、[ブロックレベル要素](/ja/docs/Glossary/Block-level_content)の垂直方向の配置には使用できません。

## 構文

```css
/* キーワード値 */
vertical-align: baseline;
vertical-align: sub;
vertical-align: super;
vertical-align: text-top;
vertical-align: text-bottom;
vertical-align: middle;
vertical-align: top;
vertical-align: bottom;

/* <length> 値 */
vertical-align: 10em;
vertical-align: 4px;

/* <percentage> 値 */
vertical-align: 20%;

/* グローバル値 */
vertical-align: inherit;
vertical-align: initial;
vertical-align: revert;
vertical-align: revert-layer;
vertical-align: unset;
```

`vertical-align` プロパティは、以下の値のうち 1 つで指定します。

### インライン要素用の値

#### 親要素との相対値

以下の値は、親要素に対する垂直方向の配置方法を表します。

- `baseline`
  - : 要素のベースラインを親要素のベースラインに揃えます。一部の[置換要素](/ja/docs/Web/CSS/Replaced_element)、例えば {{HTMLElement("textarea")}} などのベースラインは HTML 仕様で未定義です。このため、このキーワードの挙動はブラウザーにより異なるかもしれません。
- `sub`
  - : 要素のベースラインを親要素の subscript-baseline に揃えます。
- `super`
  - : 要素のベースラインを親要素の superscript-baseline に揃えます。
- `text-top`
  - : 要素の上端を親要素のフォントの上端に揃えます。
- `text-bottom`
  - : 要素の下端を親要素のフォントの下端に揃えます。
- `middle`
  - : 要素の中央を親要素のベースラインに x-height の半分を加えた位置に揃えます。
- {{cssxref("&lt;length&gt;")}}
  - : 要素のベースラインを、親要素のベースラインの指定値分上に揃えます。負の値を使えます。
- {{cssxref("&lt;percentage&gt;")}}
  - : 要素のベースラインを、親要素のベースラインから指定されたパーセント値分上に配置します。値は、{{Cssxref("line-height")}} プロパティのパーセント値です。負の値も指定できます。

#### 行との相対値

以下の値は、親要素ではなく、行全体に対する垂直方向の配置方法を表します。

- `top`
  - : 要素と子孫要素の上端を行全体の上端に揃えます。
- `bottom`
  - : 要素と子孫要素の下端を行全体の下端に揃えます。

ベースラインを持たない要素では、代わりにマージン境界の下端が使われます。

### 表のセル用の値

- `baseline` （および `sub`, `super`, `text-top`, `text-bottom`, `<length>`, `<percentage>`）
  - : セルのベースラインを、行内でベースライン揃えにされた他のすべてのセルのベースラインに揃えます。
- `top`
  - : セルの上端のパディング辺を行の上端に揃えます。
- `middle`
  - : セルのパディングボックスが行の中央になるようにします。
- `bottom`
  - : セルの下端のパディング辺を行の下端に揃えます。

負の値を使用することができます。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な例

#### HTML

```html-nolint live-sample___basic_example
<div>
  画像 <img src="frame_image.svg" alt="link" width="32" height="32" /> に既定の配置を設定しています。
</div>
<div>
  画像 <img class="top" src="frame_image.svg" alt="link" width="32" height="32" /> に text-top の配置を設定しています。
</div>
<div>
  画像 <img class="bottom" src="frame_image.svg" alt="link" width="32" height="32" /> に text-bottom の配置を設定しています。
</div>
<div>
  画像 <img class="middle" src="frame_image.svg" alt="link" width="32" height="32" /> に middle の配置を設定しています。
</div>
```

#### CSS

```css live-sample___basic_example
img.top {
  vertical-align: text-top;
}
img.bottom {
  vertical-align: text-bottom;
}
img.middle {
  vertical-align: middle;
}
```

#### 結果

{{EmbedLiveSample("Basic_example")}}

### 行ボックス内での垂直方向の配置

#### HTML

```html-nolint live-sample___vertical_alignment_in_a_line_box
<p>
top:         <img style="vertical-align: top" src="star.png" alt="star"/>
middle:      <img style="vertical-align: middle" src="star.png" alt="star"/>
bottom:      <img style="vertical-align: bottom" src="star.png" alt="star"/>
super:       <img style="vertical-align: super" src="star.png" alt="star"/>
sub:         <img style="vertical-align: sub" src="star.png" alt="star"/>
</p>

<p>
text-top:    <img style="vertical-align: text-top" src="star.png" alt="star"/>
text-bottom: <img style="vertical-align: text-bottom" src="star.png" alt="star"/>
0.2em:       <img style="vertical-align: 0.2em" src="star.png" alt="star"/>
-1em:        <img style="vertical-align: -1em" src="star.png" alt="star"/>
20%:         <img style="vertical-align: 20%" src="star.png" alt="star"/>
-100%:       <img style="vertical-align: -100%" src="star.png" alt="star"/>
</p>
```

```css hidden live-sample___vertical_alignment_in_a_line_box
#* {
  box-sizing: border-box;
}

img {
  margin-right: 0.5em;
}

p {
  height: 3em;
  padding: 0 0.5em;
  font-family: monospace;
  text-decoration: underline overline;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}
```

#### 結果

{{EmbedLiveSample("Vertical_alignment_in_a_line_box", '100%', 160, "", "")}}

### 表のセル内での垂直方向の配置

例えば、6 つのセルがある単一の行のある表があるとします。 この行は、既定値として `vertical-align` を `bottom` に設定します。

- 最初の 4 つのセルはそれぞれ自分自身で `vertical-align` の値を設定し、これらの値は行の値を上書きします。
- 5 番目のセルは `vertical-align` の値を設定しないので、行の値を継承します。

6 番目のセルは、効果を確認するためにセルの高さを十分に確保することを保証するためにのみ使用します。

#### HTML

```html live-sample___vertical_alignment_in_a_table_cell
<table>
  <tr class="bottom">
    <td class="baseline">baseline</td>
    <td class="top">top</td>
    <td class="middle">middle</td>
    <td>bottom</td>
    <td>Row's style</td>
    <td>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      pretium felis eu sem mattis vulputate.
    </td>
  </tr>
</table>
```

#### CSS

```css live-sample___vertical_alignment_in_a_table_cell
table {
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}

table,
th,
td {
  border: 1px solid black;
}

td {
  padding: 0.5em;
  font-family: monospace;
}

.bottom {
  vertical-align: bottom;
}

.baseline {
  vertical-align: baseline;
}

.top {
  vertical-align: top;
}

.middle {
  vertical-align: middle;
}
```

#### 結果

{{EmbedLiveSample("Vertical_alignment_in_a_table_cell", '100%', 230, "", "")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [フレックスボックスの典型的な用途の「アイテムの中央揃え」の節](/ja/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox#アイテムの中央揃え)
- {{Cssxref("line-height")}}, {{Cssxref("text-align")}}, {{Cssxref("margin")}}
- [Understanding `vertical-align`, or "How (Not) To Vertically Center Content"](https://phrogz.net/css/vertical-align/index.html)
- [Vertical-Align: All You Need To Know](https://christopheraue.net/design/vertical-align)
