---
title: インライン要素
slug: Web/HTML/Inline_elements
tags:
  - Beginner
  - HTML
  - HTML 要素
  - HTML:Element Reference
  - Reference
  - レイアウト
  - 要素
translation_of: Web/HTML/Inline_elements
---
HTML (**Hypertext Markup Language**) の要素は従来、[「ブロックレベル」要素](/ja/docs/Web/HTML/Block-level_elements)と「インライン」要素に分類されていました。インライン要素は、コンテンツの流れを分断せずに、要素を定義するタグで囲まれた範囲だけを占有するものです。この記事では、 HTML のインライン要素と、 [ブロックレベル要素](/ja/docs/Web/HTML/Block-level_elements)との違いについて説明します。

> **Note:** インライン要素は新しい行から始まらず、必要な幅のみを占有します。

## デモによるインライン要素とブロックレベル要素の比較

これは最も簡単なデモとシンプルな例です。最初に、使用するシンプルな CSS は以下のものです。

```css
.highlight {
  background-color:#ee3;
}
```

### インライン要素

インライン要素を紹介する以下の例を見てください。

```html
<div>The following span is an <span class="highlight">inline element</span>;
its background has been colored to display both the beginning and end of
the inline element's influence.</div>
```

この例では、ブロックレベル要素の {{HTMLElement("div")}} がいくらかのテキストを含んでいます。そのテキストの中に、インライン要素である {{HTMLElement("span")}} 要素があります。 `<span>` 要素はインラインなので、段落は単独で、テキストの流れを分断せずに、以下のように表示されます。

{{EmbedLiveSample("Inline", 600, 80)}}

<div class="hidden"><p>表示上、以下の CSS も使われています (標準モードでは表示されません)。</p><pre class="brush: css">body {
  margin: 0;
  padding: 4px;
  border: 1px solid #333;
}

.highlight {
background-color:#ee3;
}</pre></div>

### ブロックレベル要素

それでは `<span>` を {{HTMLElement("p")}} のようなブロックレベル要素に変更してみましょう。

```html
<div>The following paragraph is a <p class="highlight">block-level element;</p>
its background has been colored to display both the beginning and end of
the block-level element's influence.</div>
```

<div class="hidden"><p>この CSS も使われています (標準モードでは表示されません)。</p><pre class="brush: css">body {
  margin: 0;
  padding: 4px;
  border: 1px solid #333;
}

.highlight {
background-color:#ee3;
}</pre></div>

前回と同じ CSS を使って表示していますが、結果は以下のようになります。

{{EmbedLiveSample("Block-level", 600, 150)}}

違いが分かりましたか。 `<p>` 要素は文字列を `<p>` の前の文字列、 `<p>` の文字列、そして `<p>` の後の文字列と 3 つの部分に分割して、レイアウトを全体的に変更しました。

### 要素レベルの変更

CSS の {{cssxref("display")}} プロパティを使用すると、要素の*視覚表現*を変更することができます。例えば、 `display` の値を `"inline"` から `"block"` に変更することで、インライン要素をインラインボックスではなくブロックボックスで描画するようブラウザーに指示することができます。しかし、これによって要素の*カテゴリ*や*コンテンツモデル*が変更される訳ではありません。例えば、 `span` 要素の `display` を `"block"` に変更しても、その中に `div` 要素を含めることができるようになる訳ではありません。

## 概念上の違い

簡単に言えば、インライン要素とブロックレベル要素の基本概念の違いは以下の通りです。

- コンテンツモデル
  - : 一般に、インライン要素はデータや他のインライン要素のみを含みます。ブロック要素をインライン要素の中に置くことはできません。
- 整形
  - : 既定では、インライン要素は文書の流れの中で強制的に新しい行から始まりません。一方、ブロックレベル要素は一般的に改行が行われます (ただし、これは CSS を使って変更することができます)。

## 「インライン」要素の一覧

以下の要素は既定でインラインです (ただし、ブロック要素とインライン要素は HTML5 では定義されなくなり、代わりに[コンテンツカテゴリ](/ja/docs/Web/Guide/HTML/Content_categories)が使用されます)。

<dl><dt>{{ HTMLElement("a") }}</dt><dt>{{ HTMLElement("abbr") }}</dt><dt>{{ HTMLElement("acronym") }}</dt><dt>{{ HTMLElement("audio") }} (視覚的なコントロールがある場合)</dt><dt>{{ HTMLElement("b") }}</dt><dt>{{ HTMLElement("bdi") }}</dt><dt>{{ HTMLElement("bdo") }}</dt><dt>{{ HTMLElement("big") }}</dt><dt>{{ HTMLElement("br") }}</dt><dt>{{ HTMLElement("button") }}</dt><dt>{{ HTMLElement("canvas") }}</dt><dt>{{ HTMLElement("cite") }}</dt><dt>{{ HTMLElement("code") }}</dt><dt>{{ HTMLElement("data") }}</dt><dt>{{ HTMLElement("datalist") }}</dt><dt>{{ HTMLElement("del") }}</dt><dt>{{ HTMLElement("dfn") }}</dt><dt>{{ HTMLElement("em") }}</dt><dt>{{ HTMLElement("embed") }}</dt><dt>{{ HTMLElement("i") }}</dt><dt>{{ HTMLElement("iframe") }}</dt><dt>{{ HTMLElement("img") }}</dt><dt>{{ HTMLElement("input") }}</dt><dt>{{ HTMLElement("ins") }}</dt><dt>{{ HTMLElement("kbd") }}</dt><dt>{{ HTMLElement("label") }}</dt><dt>{{ HTMLElement("map") }}</dt><dt>{{ HTMLElement("mark") }}</dt><dt>{{ HTMLElement("meter") }}</dt><dt>{{ HTMLElement("noscript") }}</dt><dt>{{ HTMLElement("object") }}</dt><dt>{{ HTMLElement("output") }}</dt><dt>{{ HTMLElement("picture") }}</dt><dt>{{ HTMLElement("progress") }}</dt><dt>{{ HTMLElement("q") }}</dt><dt>{{ HTMLElement("ruby") }}</dt><dt>{{ HTMLElement("s") }}</dt><dt>{{ HTMLElement("samp") }}</dt><dt>{{ HTMLElement("script") }}</dt><dt>{{ HTMLElement("select") }}</dt><dt>{{ HTMLElement("slot") }}</dt><dt>{{ HTMLElement("small") }}</dt><dt>{{ HTMLElement("span") }}</dt><dt>{{ HTMLElement("strong") }}</dt><dt>{{ HTMLElement("sub") }}</dt><dt>{{ HTMLElement("sup") }}</dt><dt>{{ HTMLElement("svg") }}</dt><dt>{{ HTMLElement("template") }}</dt><dt>{{ HTMLElement("textarea") }}</dt><dt>{{ HTMLElement("time") }}</dt><dt>{{ HTMLElement("u") }}</dt><dt>{{ HTMLElement("tt") }}</dt><dt>{{ HTMLElement("var") }}</dt><dt>{{ HTMLElement("video") }}</dt><dt>{{ HTMLElement("wbr") }}</dt></dl>

## 関連情報

- [ブロックレベル要素](/ja/HTML/Block-level_elements)
- [HTML 要素リファレンス](/ja/docs/Web/HTML/Element)
- {{cssxref("display")}}
- [コンテンツカテゴリ](/ja/docs/Web/Guide/HTML/Content_categories)
- [通常フローでのブロック及びインラインレイアウト](/ja/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow)

{{QuickLinksWithSubpages("/ja/docs/Web/HTML/")}}
