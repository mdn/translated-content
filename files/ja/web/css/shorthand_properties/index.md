---
title: 一括指定プロパティ
slug: Web/CSS/Shorthand_properties
tags:
  - CSS
  - ガイド
  - レイアウト
  - リファレンス
  - 一括指定プロパティ
  - プロパティ
  - 一括指定
translation_of: Web/CSS/Shorthand_properties
---
{{CSSRef}}

**一括指定プロパティ** (shorthand property) は、他の幾つかの CSS プロパティを一度に設定できる CSS プロパティです。一括指定プロパティを用いると、もっと簡単に (そして普通はもっと読みやすく) スタイルシートが書け、時間や労力を節約することができます。

CSS 仕様書では、同じ主題に作用する共通のプロパティの定義をグループ化するために、一括指定プロパティを定義しています。例えば、 {{cssxref("background")}} プロパティは {{cssxref("background-color")}}、 {{cssxref("background-image")}}、 {{cssxref("background-repeat")}}、{{cssxref("background-position")}} の値を定義することができる一括指定プロパティです。同様に、フォントに関連したプロパティは一括指定の {{cssxref("font")}} を使用して定義することができ、ボックスの周囲のマージンは一括指定の {{cssxref("margin")}} を使用して定義することができます。

## 注意するべき場合

一括指定プロパティはとても便利なものですが、使用するにあたって注意しておかなければならない場合が若干あります。

1. その一括指定が対応する個別プロパティの内、省略したプロパティ全てに初期値が設定されます。それは当たり前に聞こえますが、以前設定した値を**上書き**することになります。つまり、

    ```css
    background-color: red;
    background: url(images/bg.gif) no-repeat left top;
    ```

    とすると背景色を `red` に設定するのではなく、 2 番目のルールが優先されて {{cssxref("background-color")}} の既定値である `transparent` となります。

2.  継承 (inherit) は個別プロパティのみで行うことができます。一括指定では欠けている値が初期値に置き換えられるため、省略することで個別のプロパティを継承させることはできません。 `inherit` キーワードをプロパティに適用することはできますが、全体に対して適用できるのみで、 1 つ 1 つに対するキーワードではありません。つまり、いくつか特定の値のみを継承させたい場合は、個別指定 (longhand) プロパティで `inherit` キーワードを指定するしかありません。
3.  一括指定プロパティは、置き換えるプロパティの指定順序をなるべく強制しないようにしています。ただしこれは、順序が重要ではないとき、プロパティがそれぞれ異なる型の値を使用する場合はうまく機能しますが、いくつかのプロパティが同じ値を持つことができるときは簡単ではありません。このような場合の扱い方は、いくつかに分類されます。

    1.  ボックスの境界に関するプロパティを扱う一括指定 ({{cssxref("border-style")}}, {{cssxref("margin")}}, {{cssxref("padding")}}) は、それぞれの辺を表すために、一貫して 1 ～ 4 つの値の構文を使用します。

        <table>
          <tbody>
            <tr>
              <td><img src="border1.png" /></td>
              <td>
                <em>値 1 つの構文</em>: <code>border-width: 1em</code> — 1 つの値ですべての辺を表します。
              </td>
            </tr>
            <tr>
              <td><img src="border2.png" /></td>
              <td>
                <em>値 2 つの構文</em>: <code>border-width: 1em 2em</code> — 最初の値は垂直、すなわち上下の辺を、次の値は水平、すなわち左右の辺を表します。
              </td>
            </tr>
            <tr>
              <td><img src="border3.png" /></td>
              <td>
                <em>値 3 つの構文</em>: <code>border-width: 1em 2em 3em</code> — 最初の値は上辺、 2 番目の値は水平、すなわち左右の辺、 3 番目の値は下辺を表します。
              </td>
            </tr>
            <tr>
              <td><img src="border4.png" /></td>
              <td>
                <p>
                  <em>値 4 つの構文</em>:
                  <code>border-width: 1em 2em 3em 4em</code> — 4 つの値がそれぞれ上、右、下、左の辺を表し、これは上を起点に時計回りの順です (頭文字が Top-Right-Bottom-Left で、これは <em>trouble</em> の子音 TRBL の順と一致します) (また、時計の上で針が回転する順番として覚えることもできます。 <code>1em</code> は 12 時の位置で始まり、 3 時の位置で <code>2em</code>、それから 6 時の位置で <code>3em</code>、そして 9 時の位置で <code>4em</code> です)。
                </p>
              </td>
            </tr>
          </tbody>
        </table>

    2.  同様に、ボックスの角に関する一括指定プロパティ ({{cssxref("border-radius")}} など) は、それぞれの角を表すために一貫して 1 ～ 4 つの値を使用します。

        <table class="standard-table">
          <tbody>
            <tr>
              <td><img src="corner1.png" /></td>
              <td>
                <em>値 1 つの構文</em>: <code>border-radius: 1em</code> — 1 つの値がすべての角を表現します
              </td>
            </tr>
            <tr>
              <td><img src="corner2.png" /></td>
              <td>
                <em>値 2 つの構文</em>: <code>border-radius: 1em 2em</code> — 最初の値は左上と右下の角、 2 番目の値は右上と左下の角を表します。
              </td>
            </tr>
            <tr>
              <td><img src="corner3.png" /></td>
              <td>
                <em>値 3 つの構文</em>: <code>border-radius: 1em 2em 3em</code> — 最初の値は左上、 2 番目の値は右上と左下、 3 番目の値は右下の角をそれぞれ表します。
              </td>
            </tr>
            <tr>
              <td><img src="corner4.png" /></td>
              <td>
                <p>
                  <em>値 4 つの構文</em>:
                  <code>border-radius: 1em 2em 3em 4em</code> — 4 つの値がそれぞれ左上、右上、右下、左下を表し、これは左上を起点にした時計回りの順です。
                </p>
              </td>
            </tr>
          </tbody>
        </table>

## background プロパティ

以下のプロパティによる背景の指定は...

```css
background-color: #000;
background-image: url(images/bg.gif);
background-repeat: no-repeat;
background-position: left top;
```

...1つの宣言で一括指定することができます。

```css
background: #000 url(images/bg.gif) no-repeat left top;
```

(一括指定の形式は、実際は上記の個別指定に加えて、 `background-attachment: scroll` や、 CSS3 ではいくつかの追加プロパティと等価になります。)

CSS3 のプロパティを含む詳しい情報は、 {{cssxref("background")}} をご覧ください。

## font プロパティ

以下の宣言は ...

```css
font-style: italic;
font-weight: bold;
font-size: .8em;
line-height: 1.2;
font-family: Arial, sans-serif;
```

... 以下のように一括指定することができます。

```css
font: italic bold .8em/1.2 Arial, sans-serif;
```

この一括指定宣言は、実際には上記の個別指定宣言に加えて、 `font-variant: normal` と `font-size-adjust: none` (CSS2.0 / CSS3), `font-stretch: normal` (CSS3) と等価になります。

## border プロパティ

境界の幅、色、スタイルについては 1 つの宣言にまとめることができます。例えば、以下の CSS ...

```css
border-width: 1px;
border-style: solid;
border-color: #000;
```

... は、以下のように簡略化できます。

```css
border: 1px solid #000;
```

## margin プロパティと padding プロパティ

`margin` と `padding` の一括指定も同様に動作します。 `margin` プロパティでは、1 つ、2 つ、3 つ、または 4 つの値を使用して短縮値を指定することができます。以下の CSS 宣言は ...

```css
margin-top: 10px;
margin-right: 5px;
margin-bottom: 10px;
margin-left: 5px;
```

... は以下の値 4 つの一括指定を使用した宣言と同じです。なお、値は上から始まって時計回りに、上、右、下、左の順になります (TRBL、 "trouble" の子音)。

```css
margin: 10px 5px 10px 5px;
```

マージンの値 1 つ、 2 つ、 3 つ、 4 つの一括指定宣言は次の通りです。

- 値が **1 つ**指定された場合、**全四辺**に同じマージンが適用される。
- 値が **2 つ**指定された場合、 1 つ目のマージンは**上下**、 2 つ目は**左右**の辺に適用される。
- 値が **3 つ**指定された場合、 1 つ目のマージンは**上**、 2 つ目は**左右**、 3 つ目は**下**の辺に適用される。
- 値が **4 つ**指定された場合、マージンはそれぞれ**上**、**右**、**下**、**左**の順 (時計回り) に適用される。

## 全体一括指定プロパティ

CSS は全体の一括指定プロパティとして {{cssxref("all")}} を提供しており、値を文書中のすべてのプロパティに適用させます。これは、プロパティの継承モデルを以下のいずれかに変更するためのものです。

CSS の継承がどのように動作するかについての詳細については、[カスケードと継承](/ja/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)または [CSS カスケード入門](/ja/docs/Web/CSS/Cascade)をご覧ください。

<h2 id="See_also" name="See_also">関連情報</h2>

- {{css_key_concepts}}
- 一括指定プロパティ: {{cssxref("all")}}, {{cssxref("animation")}}, {{cssxref("background")}}, {{cssxref("border")}}, {{cssxref("border-block-end")}}, {{cssxref("border-block-start")}}, {{cssxref("border-bottom")}}, {{cssxref("border-color")}}, {{cssxref("border-image")}}, {{cssxref("border-inline-end")}}, {{cssxref("border-inline-start")}}, {{cssxref("border-left")}}, {{cssxref("border-radius")}}, {{cssxref("border-right")}}, {{cssxref("border-style")}}, {{cssxref("border-top")}}, {{cssxref("border-width")}}, {{cssxref("column-rule")}}, {{cssxref("columns")}}, {{cssxref("flex")}}, {{cssxref("flex-flow")}}, {{cssxref("font")}}, {{cssxref("gap")}}, {{cssxref("grid")}}, {{cssxref("grid-area")}}, {{cssxref("grid-column")}}, {{cssxref("grid-row")}}, {{cssxref("grid-template")}}, {{cssxref("list-style")}}, {{cssxref("margin")}}, {{cssxref("mask")}}, {{cssxref("offset")}}, {{cssxref("outline")}}, {{cssxref("overflow")}}, {{cssxref("padding")}}, {{cssxref("place-content")}}, {{cssxref("place-items")}}, {{cssxref("place-self")}}, {{cssxref("scroll-margin")}}, {{cssxref("scroll-padding")}}, {{cssxref("text-decoration")}}, {{cssxref("text-emphasis")}}, {{cssxref("transition")}}
