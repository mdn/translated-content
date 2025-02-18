---
title: テキストの分割と折り返し
slug: Web/CSS/CSS_text/Wrapping_breaking_text
l10n:
  sourceCommit: 587c39b8fe43e66c79c2055b4791a60483049e82
---

{{CSSRef}}

このガイドは CSS で管理することができるテキストのオーバーフローの様々な方法を説明します。

## テキストのオーバーフローとは

CSS では、非常に長い単語などの切れない文字列がある場合、既定ではインライン方向に小さすぎるコンテナーからはみ出します。下の例で、この現象を見ることができます。長い単語が、ボックスの境界を越えて伸びています。

```html live-sample___inline-overflow
<div class="box">
  Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch
</div>
```

```css live-sample___inline-overflow
.box {
  border: 4px solid #f76707;
  border-radius: 5px;
  padding: 10px;
  inline-size: 150px;
}
```

{{EmbedLiveSample("inline-overflow")}}

CSS はこのようにあふれて表示させますが、これは他の方法をとるとデータロスが発生するためです。CSS のデータロスとは、コンテンツの一部が消えてしまうことです。そのため、 {{cssxref("overflow")}} の初期値は `visible` であり、あふれたテキストを見ることができます。一般的には、あふれた部分は汚くても見えた方が良いものです。 `overflow` が `hidden` に設定されている場合のように、物が消えたり、トリミングされたりすると、サイトをプレビューしたときに気づかないかもしれません。汚くてもオーバーフローは、少なくとも簡単に見つけることができ、最悪、訪問者は多少奇妙に見えたとしてもコンテンツを見て読むことができます。

次の例では、 `overflow` が `hidden` に設定されている場合に何が起こるかを見てみましょう。

```html live-sample___inline-overflow-hidden
<div class="box">
  Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch
</div>
```

```css live-sample___inline-overflow-hidden
.box {
  border: 4px solid #f76707;
  border-radius: 5px;
  padding: 10px;
  inline-size: 150px;
  overflow: hidden;
}
```

{{EmbedLiveSample("inline-overflow-hidden")}}

## min-content の寸法を探る

コンテンツを溢れずに含むことができるボックスの最小の寸法を探るには、そのボックスの {{cssxref("width")}} または {{cssxref("inline-size")}} プロパティに {{cssxref("min-content")}} を設定してください。

```html live-sample___min-content
<div class="box">
  Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch
</div>
```

```css live-sample___min-content
.box {
  border: 4px solid #f76707;
  border-radius: 5px;
  padding: 10px;
  inline-size: min-content;
}
```

{{EmbedLiveSample("min-content")}}

そのため、 `min-content` を使用すると、ボックスがあふれてしまう可能性があります。もし、ボックスがコンテンツに必要な最小の寸法まで成長し、それ以上大きくならないようにすることが可能であれば、このキーワードを使用することで、その寸法を得ることができます。

## 長い単語の分割

ボックスのサイズを固定する必要がある場合や、長い単語がはみ出さないようにしたい場合は、{{cssxref("overflow-wrap")}} プロパティが役立ちます。このプロパティは、単語が長すぎて 1 行に収まらない場合、その単語を分割します。

```html live-sample___overflow-wrap
<div class="box">
  Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch
</div>
```

```css live-sample___overflow-wrap
.box {
  border: 4px solid #f76707;
  border-radius: 5px;
  padding: 10px;
  inline-size: 150px;
  overflow-wrap: break-word;
}
```

{{EmbedLiveSample("overflow-wrap")}}

> **メモ:** `overflow-wrap` プロパティは、標準外のプロパティの `word-wrap` と同じように動作します。 `word-wrap` プロパティは、現在ブラウザーでは標準プロパティの別名として扱われています。

別のプロパティとして、{{cssxref("word-break")}} を試すことができます。このプロパティは、あふれた時点で単語を改行します。単語を改行することで分割せずに表示できる場合でも分割されます。

次の例では、同じ文字列で 2 つのプロパティの違いを比較してみましょう。

```html live-sample___word-break
<div class="box box1">A Very LongWordThatHasNoBreakingPossibilities</div>

<div class="box box2">A Very LongWordThatHasNoBreakingPossibilities</div>
```

```css live-sample___word-break
.box {
  border: 4px solid #f76707;
  border-radius: 5px;
  padding: 10px;
  inline-size: 30ch;
  margin-block-end: 1em;
}
.box1 {
  word-break: break-all;
}

.box2 {
  overflow-wrap: break-word;
}
```

{{EmbedLiveSample("word-break", "", "210px")}}

これは、文字列に十分なスペースがある場合に、大きなギャップが現れないようにしたい場合に便利です。また、他の要素があって、その直後に改行させたくない場合にも便利です。

以下の例には、チェックボックスとラベルがあります。例えば、ラベルがボックスに対して長すぎる場合には、ラベルを改行したいとします。しかし、チェックボックスの直後では改行してほしくありません。

```html live-sample___word-break-checkbox
<div class="field">
  <input id="one" type="checkbox" /><label for="one">
    LongWordThatHasNoBreakingPossibilities
  </label>
</div>

<div class="field field-br">
  <input id="two" type="checkbox" /><label for="two">
    LongWordThatHasNoBreakingPossibilities
  </label>
</div>
```

```css live-sample___word-break-checkbox
.field {
  inline-size: 150px;
  border: 1px solid #ccc;
  margin-block-end: 1em;
  padding: 10px;
}

.field-br {
  word-break: break-all;
}
```

{{EmbedLiveSample("word-break-checkbox", "", "210px")}}

## ハイフンの追加

単語が分割される際にハイフンを挿入するには、 CSS の {{cssxref("hyphens")}} プロパティを使用します。 `auto` の値を使用すると、ブラウザーは自由に選択したルールに従って、適切なハイフネーション位置で自動的に単語を区切ります。このプロセスをある程度制御するには、 `manual` の値を使用し、文字列にハード (U+2010) またはソフト (U+00AD) のブレイク文字を挿入します。ハード分割文字は `‐` または `&#x2010;` を使用して追加でき、ソフト分割文字は `&shy;`、`&#173;`、`&#xad;` のHTML 文字コードのいずれかを使用して追加できます。 ハードブレイクは、必要がなくても常に改行します。 ソフトブレイクは、改行が必要な場合にのみ改行します。

```html live-sample___hyphens
<div class="box">
  Llanfair&shy;pwllgwyngyll&shy;gogerychwyrndrobwllllantysiliogogogoch
</div>
```

```css live-sample___hyphens
.box {
  inline-size: 150px;
  overflow-wrap: break-word;
  hyphens: manual;
  border: 4px solid #f76707;
  border-radius: 5px;
  padding: 10px;
}
```

{{EmbedLiveSample("hyphens")}}

また、 {{cssxref("hyphenate-character")}} プロパティを使用して、その言語の行末の既定のハイフネーション文字（ハイフネーション改行の前）の代わりに、任意の文字列を使用することもできます。 `auto` の値にすると、現在のコンテンツ言語の組版の慣例に従って、単語の途中の改行をマークする正しい値を選択します。

CSS では、さらにハイフネーションの制御が可能です。 {{cssxref("hyphenate-limit-chars")}} プロパティを使用すると、ハイフネーションを許可する単語の最小の長さや、ハイフンの前後の最小文字数も設定できます。

## `<wbr>` 要素

長い文字列を区切りたい場所がわかっている場合は、HTMLの {{HTMLElement("wbr")}} 要素を挿入することも可能です。これは、ページ上に長い URL を表示する場合などに便利です。このプロパティを追加することで、文字列を読みやすい場所で改行することができます。

以下の例では、 {{HTMLElement("wbr")}} の位置でテキストが改行されています。

```html live-sample___wbr
<div class="box">
  Llanfair<wbr />pwllgwyngyll<wbr />gogerychwyrndrobwllllantysiliogogogoch
</div>
```

```css live-sample___wbr
.box {
  border: 4px solid #f76707;
  border-radius: 5px;
  padding: 10px;
  inline-size: 150px;
}
```

{{EmbedLiveSample("wbr")}}

## 関連情報

- HTML の {{HTMLElement("wbr")}} 要素
- CSS の {{cssxref("word-break")}} プロパティ
- CSS の {{cssxref("overflow-wrap")}} プロパティ
- CSS の {{cssxref("white-space")}} プロパティ
- CSS の {{cssxref("text-wrap")}} プロパティ
- CSS の {{cssxref("hyphens")}} プロパティ
- CSS の {{cssxref("hyphenate-character")}} プロパティ
- CSS の {{cssxref("hyphenate-limit-chars")}} プロパティ
- [Overflow and Data Loss in CSS](https://www.smashingmagazine.com/2019/09/overflow-data-loss-css/)
