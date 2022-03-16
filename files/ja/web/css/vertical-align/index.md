---
title: vertical-align
slug: Web/CSS/vertical-align
tags:
  - CSS
  - CSS プロパティ
  - リファレンス
translation_of: Web/CSS/vertical-align
---
{{CSSRef}}

**`vertical-align`** は [CSS](/ja/docs/Web/CSS) のプロパティで、インラインボックス、インラインブロック、表セルボックスの垂直方向の配置を設定します。

{{EmbedInteractiveExample("pages/css/vertical-align.html")}}

vertical-align は、2 つの場面で使用することができます。

- 包含する行ボックスの中で、インライン要素のボックスの垂直方向の配置を決める場合。例えば、[テキストの行の中で画像の垂直位置を決める](#vertical_alignment_in_a_line_box)ために使用することができます。
- [表のセルの内容](#vertical_alignment_in_a_table_cell)の垂直方向の配置を決める場合。

`vertical-align` はインライン要素、インラインブロック要素、表のセル要素だけに適用されることに注意してください。つまり、[ブロックレベル要素](/ja/docs/Web/HTML/Block-level_elements)の垂直方向の配置には使用できません。

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
vertical-align: unset;
```

`vertical-align` プロパティは、以下の値のうち一つで指定します。

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
  - : 要素の中央を親要素の `baseline + x-height の半分` に揃えます。
- {{cssxref("&lt;length&gt;")}}
  - : 要素のベースラインを、親要素のベースラインの指定値分上に揃えます。負の値を使えます。
- {{cssxref("&lt;percentage&gt;")}}
  - : &lt;length&gt; 値と似ていますが、{{Cssxref("line-height")}} プロパティに対するパーセント値で指定します。負の値を使えます。

#### 行との相対値

以下の値は、親要素ではなく、行全体に対する垂直方向の配置方法を表します。

- `top`
  - : 要素と子孫要素の上端を行全体の上端に揃えます。
- `bottom`
  - : 要素と子孫要素の下端を行全体の下端に揃えます。

ベースラインを持たない要素では、代わりにマージン境界の下端が使われます。

### 表のセル用の値

- `baseline` (および `sub`, `super`, `text-top`, `text-bottom`, `<length>`, `<percentage>`)
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

<h3 id="Basic_example">基本的な例</h3>

#### HTML

```html
<div>An <img src="frame_image.svg" alt="link" width="32" height="32" /> image with a default alignment.</div>
<div>An <img class="top" src="frame_image.svg" alt="link" width="32" height="32" /> image with a text-top alignment.</div>
<div>An <img class="bottom" src="frame_image.svg" alt="link" width="32" height="32" /> image with a text-bottom alignment.</div>
<div>An <img class="middle" src="frame_image.svg" alt="link" width="32" height="32" /> image with a middle alignment.</div>
```

#### CSS

```css
img.top { vertical-align: text-top; }
img.bottom { vertical-align: text-bottom; }
img.middle { vertical-align: middle; }
```

#### 結果

{{EmbedLiveSample("Basic_example")}}

<h3 id="Vertical_alignment_in_a_line_box">行ボックス内での垂直方向の配置</h3>

#### HTML

```html
<p>
top:         <img style="vertical-align: top" src="star.png"/>
middle:      <img style="vertical-align: middle" src="star.png"/>
bottom:      <img style="vertical-align: bottom" src="star.png"/>
super:       <img style="vertical-align: super" src="star.png"/>
sub:         <img style="vertical-align: sub" src="star.png"/>
</p>

<p>
text-top:    <img style="vertical-align: text-top" src="star.png"/>
text-bottom: <img style="vertical-align: text-bottom" src="star.png"/>
0.2em:       <img style="vertical-align: 0.2em" src="star.png"/>
-1em:        <img style="vertical-align: -1em" src="star.png"/>
20%:         <img style="vertical-align: 20%" src="star.png"/>
-100%:       <img style="vertical-align: -100%" src="star.png"/>
</p>
```

```css hidden
#* {
  box-sizing: border-box;
}

img {
  margin-right: 0.5em;
}

p {
  height: 3em;
  padding: 0 .5em;
  font-family: monospace;
  text-decoration: underline overline;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}
```

#### 結果

{{EmbedLiveSample("Vertical_alignment_in_a_line_box", 1200, 160)}}

<h3 id="Vertical_alignment_in_a_table_cell">表のセル内での垂直方向の配置</h3>

#### HTML

```html
<table>
  <tr>
    <td style="vertical-align: baseline">baseline</td>
    <td style="vertical-align: top">top</td>
    <td style="vertical-align: middle">middle</td>
    <td style="vertical-align: bottom">bottom</td>
    <td>
      <p>There is a theory which states that if ever anyone discovers exactly
      what the Universe is for and why it is here, it will instantly disappear and
      be replaced by something even more bizarre and inexplicable.</p>
      <p>There is another theory which states that this has already happened.</p>
    </td>
  </tr>
</table>
```

#### CSS

```css
table {
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}

table, th, td {
  border: 1px solid black;
}

td {
  padding: 0.5em;
  font-family: monospace;
}
```

#### 結果

{{EmbedLiveSample("Vertical_alignment_in_a_table_cell", 1200, 230)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [フレックスボックスの典型的な使用例の「アイテムの中央揃え」の節](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox#center_item)
- {{Cssxref("line-height")}}, {{Cssxref("text-align")}}, {{Cssxref("margin")}}
- [Understanding `vertical-align`, or "How (Not) To Vertically Center Content"](http://phrogz.net/css/vertical-align/index.html)
- [Vertical-Align: All You Need To Know](https://christopheraue.net/design/vertical-align)
