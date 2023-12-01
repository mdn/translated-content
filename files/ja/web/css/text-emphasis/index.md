---
title: text-emphasis
slug: Web/CSS/text-emphasis
---

{{CSSRef}}

**`text-emphasis`** は [CSS](/ja/docs/Web/CSS) のプロパティで、 (空白や制御文字を除く) テキストに圏点を適用します。これは {{cssxref("text-emphasis-style")}} と {{cssxref("text-emphasis-color")}} の[一括指定](/ja/docs/Web/CSS/Shorthand_properties)です。

{{EmbedInteractiveExample("pages/css/text-emphasis.html")}}

`text-emphasis` プロパティは、 {{cssxref("text-decoration")}} とは大きく異なります。 `text-decoration` プロパティは継承されず、指定される装飾は要素全体にわたって適用されます。しかし、 `text-emphasis` は継承されます。これは、子孫に対して圏点を変更できることを意味します。

圏点の大きさは、ルビと同様にフォントの大きさの約 50% であり、 `text-emphasis` は現在の行間隔が圏点を表示するのに十分でない場合、行の高さに影響を与えることがあります。

> **メモ:** `text-emphasis` は、 {{cssxref("text-emphasis-position")}} の値をリセットしません。これは、圏点のスタイルと色がテキストで異なる場合に、圏点の位置を要求することがほとんど見込まれないためです。珍しくもこれを必要とするような場合は、プロパティ {{cssxref("text-emphasis-position")}} を使用してください。

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- [`text-emphasis-color`](/ja/docs/Web/CSS/text-emphasis-color)
- [`text-emphasis-style`](/ja/docs/Web/CSS/text-emphasis-style)

## 構文

```css
/* 初期値 */
text-emphasis: none; /* 圏点なし */

/* <string> 値 */
text-emphasis: "x";
text-emphasis: "点";
text-emphasis: "\25B2";
text-emphasis: "*" #555;
text-emphasis: "foo"; /* 使用するべきではない。 'f' のみとして計算や表示が行われる */

/* キーワード値 */
text-emphasis: filled;
text-emphasis: open;
text-emphasis: filled sesame;
text-emphasis: open sesame;

/* 色と組み合わせたキーワード値 */
text-emphasis: filled sesame #555;

/* グローバル値 */
text-emphasis: inherit;
text-emphasis: initial;
text-emphasis: revert;
text-emphasis: unset;
```

### 値

- `none`
  - : 圏点なし。
- `filled`
  - : 図形が単色で塗りつぶされます。 `filled` も `open` も指定されていない場合は、これが既定値です。
- `open`
  - : 図形が中抜きになります。
- `dot`
  - : 記号として小さな円を表示します。filled dot は `'•'` (`U+2022`)、open dot は `'◦'` (`U+25E6`) です。
- `circle`
  - : 記号として大きな円を表示します。filled circle は `'●'` (`U+25CF`)、open circle は `'○'` (`U+25CB`) です。これは、他の図形が与えられていない場合、横書きモードで既定の形状です。
- `double-circle`
  - : 記号として二重丸を表示します。filled double-circle は `'◉'` (`U+25C9`)、open double-circle は `'◎'` (`U+25CE`) です。
- `triangle`
  - : 記号として三角形を表示します。filled triangle は `'▲'` (`U+25B2`)、open triangle は `'△'` (`U+25B3`) です。
- `sesame`
  - : 記号としてゴマを表示します。filled sesame は `'﹅'` (`U+FE45`)、open sesame は`'﹆'` (`U+FE46`) です。これは、他の図形が与えられていない場合、縦書きモードで既定の形状です。
- `<string>`
  - : 記号として文字列を表示します。 `<string>` には 1 <em>文字</em>を超える文字列を指定しないでください。ユーザーエージェントは、 1 つより多い書記素クラスターから構成される文字列を短縮したり無視したりする可能性があります。
- `<color>`
  - : 記号の色を定義します。 color を指定しない場合、既定では `currentcolor` です。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## Examples

<h3 id="A_heading_with_emphasis_shape_and_color">強調して色を付けた見出し</h3>

この例は、見出しの各文字に三角形の圏点を付けて描画します。

#### CSS

```css
h2 {
  -webkit-text-emphasis: triangle #d55;
  text-emphasis: triangle #d55;
}
```

#### HTML

```html
<h2>これは重要です！</h2>
```

#### Result

{{EmbedLiveSample("A_heading_with_emphasis_shape_and_color", 500, 90)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 個別指定プロパティ: {{cssxref('text-emphasis-style')}}, {{cssxref('text-emphasis-color')}}
- 圏点の位置の定義を可能にする {{cssxref('text-emphasis-position')}} プロパティ
