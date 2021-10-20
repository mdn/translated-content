---
title: テキストの分割と折り返し
slug: Web/CSS/CSS_Text/Wrapping_Text
tags:
  - CSS
  - CSS テキスト
  - Guide
  - overflow
  - overflow-wrap
  - word-break
translation_of: Web/CSS/CSS_Text/Wrapping_Text
---
{{CSSRef}}

このガイドは CSS で管理することができるテキストのはみ出しの様々な方法を説明します。

## テキストのはみ出しとは

CSS では、非常に長い単語などの切れない文字列がある場合、既定ではインライン方向に小さすぎるコンテナからはみ出します。下の例で、この現象を見ることができます。長い単語が、ボックスの境界を越えて伸びています。

{{EmbedGHLiveSample("css-examples/css-text/inline-overflow.html", '100%', 420)}}

CSS はこのようにあふれて表示させますが、これは他の方法をとるとデータロスが発生するためです。CSS のデータロスとは、コンテンツの一部が消えてしまうことを意味します。そのため、{{cssxref("overflow")}}の初期値は `visible` であり、あふれたテキストを見ることができます。一般的には、あふれた部分はが汚くても見えた方が良いものです。`overflow` が `hidden` に設定されている場合のように、物が消えたり、トリミングされたりすると、サイトをプレビューしたときに気づかないかもしれません。汚くてもオーバーフローは、少なくとも簡単に見つけることができ、最悪、訪問者は多少奇妙に見えたとしてもコンテンツを見て読むことができます。

次の例では、 `overflow` が `hidden` に設定されている場合に何が起こるかを見てみましょう。

{{EmbedGHLiveSample("css-examples/css-text/inline-overflow-hidden.html", '100%', 420)}}

## min-content の寸法を探る

コンテンツを溢れずに含むことができるボックスの最小の寸法を探るには、そのボックスの {{cssxref("width")}} または {{cssxref("inline-size")}} プロパティに {{cssxref("min-content")}} を設定してください。

{{EmbedGHLiveSample("css-examples/css-text/min-content.html", '100%', 420)}}

そのため、 `min-content` を使用すると、ボックスがあふれてしまう可能性があります。もし、ボックスがコンテンツに必要な最小の寸法まで成長し、それ以上大きくならないようにすることが可能であれば、このキーワードを使用することで、その寸法を得ることができます。

## 長い単語の分割

ボックスのサイズを固定する必要がある場合や、長い単語がはみ出さないようにしたい場合は、{{cssxref("overflow-wrap")}} プロパティが役立ちます。このプロパティは、単語が長すぎて 1 行に収まらない場合、その単語を分割します。

{{EmbedGHLiveSample("css-examples/css-text/overflow-wrap.html", '100%', 660)}}

> **Note:** `overflow-wrap` プロパティは、標準外のプロパティの `word-wrap` と同じように動作します。 `word-wrap` プロパティは、現在ブラウザーでは標準プロパティの別名として扱われています。

別のプロパティとして、{{cssxref("word-break")}} を試すことができます。このプロパティは、あふれた時点で単語を改行します。単語を改行することで分割せずに表示できる場合でも分割されます。

次の例では、同じ文字列で 2 つのプロパティの違いを比較してみましょう。

{{EmbedGHLiveSample("css-examples/css-text/word-break.html", '100%', 700)}}

これは、文字列に十分なスペースがある場合に、大きなギャップが現れないようにしたい場合に便利です。また、他の要素があって、その直後に改行させたくない場合にも便利です。

以下の例には、チェックボックスとラベルがあります。例えば、ラベルがボックスに対して長すぎる場合には、ラベルを改行したいとします。しかし、チェックボックスの直後では改行してほしくありません。

{{EmbedGHLiveSample("css-examples/css-text/word-break-checkbox.html", '100%', 660)}}

## ハイフンの追加

単語が改行されるときにハイフンを追加するには、CSS の {{cssxref("hyphens")}} プロパティを使用します。`auto` の値を使用すると、ブラウザーは自由に選択したルールに従って、適切なハイフネーション位置で自動的に単語を区切ります。プロセスをある程度制御するには、値を `manual` にして、ハードまたはソフトブレイク文字を文字列に挿入します。ハードブレイク (`‐`) は、その必要がない場合でも、常に改行します。ソフトブレイク (`­`) は、改行が必要な場合にのみ改行します。

{{EmbedGHLiveSample("css-examples/css-text/hyphens.html", '100%', 660)}}

## \<wbr> 要素

長い文字列を区切りたい場所がわかっている場合は、HTMLの {{HTMLElement("wbr")}} 要素を挿入することも可能です。これは、ページ上に長い URL を表示する場合などに便利です。このプロパティを追加することで、文字列を読みやすい場所で改行することができます。

以下の例では、{{HTMLElement("wbr")}} の位置でテキストが改行されています。

{{EmbedGHLiveSample("css-examples/css-text/wbr.html", '100%', 460)}}

## 関連情報
- HTML の {{HTMLElement("wbr")}} 要素
- CSS の {{cssxref("word-break")}} プロパティ
- CSS の {{cssxref("overflow-wrap")}} プロパティ
- CSS の {{cssxref("hyphens")}} プロパティ
- [Overflow and Data Loss in CSS](https://www.smashingmagazine.com/2019/09/overflow-data-loss-css/)
