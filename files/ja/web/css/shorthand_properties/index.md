---
title: 一括指定プロパティ
slug: Web/CSS/Shorthand_properties
---

{{CSSRef}}

**一括指定プロパティ** (shorthand property) は、他の幾つかの CSS プロパティを一度に設定できる CSS プロパティです。一括指定プロパティを用いると、もっと簡単に (そして普通はもっと読みやすく) スタイルシートが書け、時間や労力を節約することができます。

CSS 仕様書では、同じ主題に作用する共通のプロパティの定義をグループ化するために、一括指定プロパティを定義しています。例えば、 {{cssxref("background")}} プロパティは {{cssxref("background-color")}}、 {{cssxref("background-image")}}、 {{cssxref("background-repeat")}}、{{cssxref("background-position")}} の値を定義することができる一括指定プロパティです。同様に、フォントに関連したプロパティは一括指定の {{cssxref("font")}} を使用して定義することができ、ボックスの周囲のマージンは一括指定の {{cssxref("margin")}} を使用して定義することができます。

## 注意するべき場合

一括指定プロパティを使用する際には、いくつかの留意すべきエッジケースがあります。

### プロパティの省略

指定されなかった値は初期値に設定されます。つまり、以前設定した値を**上書き**することになります。例を見てください。

```css
p {
  background-color: red;
  background: url(images/bg.gif) no-repeat left top;
}
```

この場合、背景の色は `red` ではなく、 {{cssxref("background-color")}} の既定値である `transparent` に設定されます。

継承 (inherit) は個別プロパティのみで行うことができます。一括指定では欠けている値が初期値に置き換えられるため、省略することで個別のプロパティを継承させることはできません。 `inherit` キーワードをプロパティに適用することはできますが、全体に対して適用できるのみで、 1 つ 1 つに対するキーワードではありません。つまり、いくつか特定の値のみを継承させたい場合は、個別指定 (longhand) プロパティで `inherit` キーワードを指定するしかありません。

### プロパティの順序

一括指定プロパティは、置き換えるプロパティの指定順序をなるべく強制しないようにしています。ただしこれは、順序が重要ではないとき、プロパティがそれぞれ異なる型の値を使用する場合はうまく機能しますが、いくつかのプロパティが同じ値を持つことができるときは簡単ではありません。このような場合の扱い方は、いくつかに分類されます。

ここで重要なのは 2 つのケースです。

- {{cssxref("border-style")}}, {{cssxref("margin")}}, {{cssxref("padding")}} など、ボックスの辺に関連したプロパティ。
- {{cssxref("border-radius")}} のように、ボックスの角に関連するプロパティ

#### ボックスの辺

ボックスの境界に関するプロパティを扱う一括指定 ({{cssxref("border-style")}}, {{cssxref("margin")}}, {{cssxref("padding")}}) は、それぞれの辺を表すために、一貫して 1 ～ 4 つの値の構文を使用します。

- **値 1 つの構文:** `border-width: 1em` — 1 つの値ですべての辺を表します。 ![Box edges with one-value syntax](border1.png)

- **値 2 つの構文:** `border-width: 1em 2em` — 最初の値は垂直、すなわち上下の辺を、次の値は水平、すなわち左右の辺を表します。 ![Box edges with two-value syntax](border2.png)

- **値 3 つの構文:** `border-width: 1em 2em 3em` — 最初の値は上辺、 2 番目の値は水平、すなわち左右の辺、 3 番目の値は下辺を表します。 ![Box edges with three-value syntax](border3.png)

- **値 4 つの構文:** `border-width: 1em 2em 3em 4em` — 4 つの値がそれぞれ上、右、下、左の辺を表し、これは上を起点に時計回りの順です。 ![Box edges with four-value syntax](border4.png) Top-Right-Bottom-Left の頭文字は、 _trouble_ の子音 TRBL の順と一致します。また、時計の上で針が回転する順番として覚えることもできます。 `1em` は 12 時の位置で始まり、 3 時の位置で `2em`、それから 6 時の位置で `3em`、そして 9 時の位置で `4em` です。

#### ボックスの角

同様に、ボックスの角に関する一括指定プロパティ ({{cssxref("border-radius")}} など) は、それぞれの角を表すために一貫して 1 ～ 4 つの値を使用します。

- **値 1 つの構文:** `border-radius: 1em` — 1 つの値がすべての角を表現します。 ![Box corners with one-value syntax](corner1.png)

- **値 2 つの構文:** `border-radius: 1em 2em` — 最初の値は左上と右下の角、 2 番目の値は右上と左下の角を表します。 ![Box corners with two-value syntax](corner2.png)

- **値 3 つの構文:** `border-radius: 1em 2em 3em` — 最初の値は左上、 2 番目の値は右上と左下、 3 番目の値は右下の角をそれぞれ表します。 ![Box corners with three-value syntax](corner3.png)

- **値 4 つの構文:**
  `border-radius: 1em 2em 3em 4em` — 4 つの値がそれぞれ左上、右上、右下、左下を表し、これは左上を起点にした時計回りの順です。 ![Box corners with four-value syntax](corner4.png)

## background プロパティ

以下のようなプロパティを持つ背景を考えてみましょう。

```css
background-color: #000;
background-image: url(images/bg.gif);
background-repeat: no-repeat;
background-position: left top;
```

この 4 つの宣言は、たった 1 つに短縮することができます。

```css
background: #000 url(images/bg.gif) no-repeat left top;
```

(一括指定の形式は、実際は上記の個別指定に加えて、 `background-attachment: scroll` や、 CSS3 ではいくつかの追加プロパティと等価になります。)

CSS3 のプロパティを含む詳しい情報は、 {{cssxref("background")}} をご覧ください。

## font プロパティ

以下のような宣言を考えてみましょう。

```css
font-style: italic;
font-weight: bold;
font-size: 0.8em;
line-height: 1.2;
font-family: Arial, sans-serif;
```

この 5 つの発言は、以下のように短くまとめることができます。

```css
font:
  italic bold 0.8em/1.2 Arial,
  sans-serif;
```

この一括指定宣言は、実際には上記の個別指定宣言に加えて、 `font-variant: normal` と `font-size-adjust: none` (CSS2.0 / CSS3), `font-stretch: normal` (CSS3) と等価になります。

## border プロパティ

境界の幅、色、スタイルについては 1 つの宣言にまとめることができます。例えば、以下の CSS を考えてみてください。

```css
border-width: 1px;
border-style: solid;
border-color: #000;
```

これは、以下のように簡略化できます。

```css
border: 1px solid #000;
```

## margin プロパティと padding プロパティ

`margin` と `padding` の一括指定も同様に動作します。 `margin` プロパティでは、1 つ、2 つ、3 つ、または 4 つの値を使用して短縮値を指定することができます。以下の CSS 宣言はを考えてみてください。

```css
margin-top: 10px;
margin-right: 5px;
margin-bottom: 10px;
margin-left: 5px;
```

これらは以下の値 4 つの一括指定を使用した宣言と同じです。なお、値は上から始まって時計回りに、上、右、下、左の順になります (TRBL、 "trouble" の子音)。

```css
margin: 10px 5px 10px 5px;
```

マージンの値 1 つ、 2 つ、 3 つ、 4 つの一括指定宣言は次の通りです。

- 値が **1 つ**指定された場合、**全 4 辺**に同じマージンが適用される。
- 値が **2 つ**指定された場合、 1 つ目のマージンは**上下**、 2 つ目は**左右**の辺に適用される。
- 値が **3 つ**指定された場合、 1 つ目のマージンは**上**、 2 つ目は**左右**、 3 つ目は**下**の辺に適用される。
- 値が **4 つ**指定された場合、マージンはそれぞれ**上**、**右**、**下**、**左**の順 (時計回り) に適用される。

## 全体一括指定プロパティ

CSS は全体の一括指定プロパティとして {{cssxref("all")}} を提供しており、値を文書中のすべてのプロパティに適用させます。これは、プロパティの継承モデルを変更するためのものです。

CSS の継承がどのように動作するかについての詳細については、[カスケードと継承](/ja/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)または [CSS カスケード入門](/ja/docs/Web/CSS/Cascade)をご覧ください。

## 関連情報

- CSS の主要概念:
  - [CSS の構文](/ja/docs/Web/CSS/Syntax)
  - [アットルール](/ja/docs/Web/CSS/At-rule)
  - [コメント](/ja/docs/Web/CSS/Comments)
  - [詳細度](/ja/docs/Web/CSS/Specificity)
  - [継承](/ja/docs/Web/CSS/inheritance)
  - [ボックスモデル](/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  - [レイアウトモード](/ja/docs/Web/CSS/Layout_mode)
  - [視覚整形モデル](/ja/docs/Web/CSS/Visual_formatting_model)
  - [マージンの相殺](/ja/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
  - 値
    - [初期値](/ja/docs/Web/CSS/initial_value)
    - [計算値](/ja/docs/Web/CSS/computed_value)
    - [使用値](/ja/docs/Web/CSS/used_value)
    - [実効値](/ja/docs/Web/CSS/actual_value)
  - [値の定義構文](/ja/docs/Web/CSS/Value_definition_syntax)
  - [置換要素](/ja/docs/Web/CSS/Replaced_element)
- 一括指定プロパティ: {{cssxref("all")}}, {{cssxref("animation")}}, {{cssxref("background")}}, {{cssxref("border")}}, {{cssxref("border-block-end")}}, {{cssxref("border-block-start")}}, {{cssxref("border-bottom")}}, {{cssxref("border-color")}}, {{cssxref("border-image")}}, {{cssxref("border-inline-end")}}, {{cssxref("border-inline-start")}}, {{cssxref("border-left")}}, {{cssxref("border-radius")}}, {{cssxref("border-right")}}, {{cssxref("border-style")}}, {{cssxref("border-top")}}, {{cssxref("border-width")}}, {{cssxref("column-rule")}}, {{cssxref("columns")}}, {{cssxref("flex")}}, {{cssxref("flex-flow")}}, {{cssxref("font")}}, {{cssxref("gap")}}, {{cssxref("grid")}}, {{cssxref("grid-area")}}, {{cssxref("grid-column")}}, {{cssxref("grid-row")}}, {{cssxref("grid-template")}}, {{cssxref("list-style")}}, {{cssxref("margin")}}, {{cssxref("mask")}}, {{cssxref("offset")}}, {{cssxref("outline")}}, {{cssxref("overflow")}}, {{cssxref("padding")}}, {{cssxref("place-content")}}, {{cssxref("place-items")}}, {{cssxref("place-self")}}, {{cssxref("scroll-margin")}}, {{cssxref("scroll-padding")}}, {{cssxref("text-decoration")}}, {{cssxref("text-emphasis")}}, {{cssxref("transition")}}
